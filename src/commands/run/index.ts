import path from "path";
import minimatch from "minimatch";
import * as vscode from "vscode";
import { findTerminalWithName } from "../../lib/terminal/findTerminalWithName";
import { createTestRunnerCommand } from "./util/createTestRunnerCommand";

const commandName = "autotest.run";

const DEFAULT_PACKAGE_MANAGER = "npm";
const DEFAULT_SCRIPT_NAME = "test";
const DEFAULT_TEST_FILE_PATTERN = "[name].test.{js,jsx,ts,tsx}";

const handler = async (uri: vscode.Uri) => {
  const extensionConfig = vscode.workspace.getConfiguration("autotest");
  const testFilePattern = extensionConfig.get(
    "testFilePattern",
    DEFAULT_TEST_FILE_PATTERN
  );

  const fileName = path.basename(uri.path);
  const isTestFile = minimatch(
    fileName,
    testFilePattern.replace("[name]", "*")
  );

  let testFilePath = uri.path;

  if (!isTestFile) {
    const [nameWithoutExtension] = fileName.split(".");
    const [testFile] = await vscode.workspace.findFiles(
      `**/${testFilePattern.replace("[name]", nameWithoutExtension)}`,
      null,
      1
    );

    if (!testFile) {
      vscode.window.showErrorMessage(
        `Couldn't find test file for ${fileName}.`
      );

      return;
    }

    testFilePath = testFile.path;
  }

  const terminal = findTerminalWithName(vscode.window.terminals, "Autotest");

  terminal.show();

  terminal.sendText(
    createTestRunnerCommand({
      filePath: testFilePath,
      packageManager: extensionConfig.get(
        "packageManager",
        DEFAULT_PACKAGE_MANAGER
      ),
      scriptName: extensionConfig.get(
        "testRunnerScriptName",
        DEFAULT_SCRIPT_NAME
      )
    })
  );
};

export default { name: commandName, handler };
