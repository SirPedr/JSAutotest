import * as vscode from "vscode";
import { DEFAULT_CONFIGS } from "../../config/extension";
import { createTestRunnerCommand } from "../../lib/createTestRunnerCommand";
import { getTestFilePath } from "../../lib/path/getTestFilePath";
import { findTerminalWithName } from "../../lib/terminal/findTerminalWithName";
import type { ContextMenuCommand } from "../../types";

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

const runTestsCommand: ContextMenuCommand = {
  name: commandName,
  handler,
  requiresUri: true
};

export default runTestsCommand;
