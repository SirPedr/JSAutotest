import * as vscode from "vscode";
import { DEFAULT_CONFIGS } from "../../config/extension";
import { getTestFilePath } from "../../lib/path/getTestFilePath";
import { findTerminalWithName } from "../../lib/terminal/findTerminalWithName";
import { createTestRunnerCommand } from "./util/createTestRunnerCommand";

const commandName = "autotest.run";

const handler = async (uri: vscode.Uri) => {
  const extensionConfig = vscode.workspace.getConfiguration("autotest");
  const testFilePattern = extensionConfig.get(
    "testFilePattern",
    DEFAULT_CONFIGS.testFilePattern
  );

  const testFilePath = await getTestFilePath(uri.path, testFilePattern);

  if (!testFilePath) {
    return;
  }

  const terminal = findTerminalWithName(vscode.window.terminals, "Autotest");

  terminal.show();

  terminal.sendText(
    createTestRunnerCommand({
      filePath: testFilePath,
      packageManager: extensionConfig.get(
        "packageManager",
        DEFAULT_CONFIGS.packageManager
      ),
      scriptName: extensionConfig.get(
        "testRunnerScriptName",
        DEFAULT_CONFIGS.scriptName
      )
    })
  );
};

export default { name: commandName, handler };
