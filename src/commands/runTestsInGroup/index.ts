import * as vscode from "vscode";
import { DEFAULT_CONFIGS } from "../../config/extension";
import { createTestRunnerCommand } from "../../lib/createTestRunnerCommand";
import { findTerminalWithName } from "../../lib/terminal/findTerminalWithName";
import { WorkspaceCommand } from "../../types";

const name = "autotest.runInGroup";

const handler = (
  _: vscode.Uri | undefined,
  context: vscode.ExtensionContext
) => {
  const extensionConfig = vscode.workspace.getConfiguration("autotest");
  const testGroup = context.workspaceState.get<string[]>("autotest_group", []);

  if (!testGroup.length) {
    vscode.window.showErrorMessage("There are no files in the test group");
    return;
  }

  const terminal = findTerminalWithName(vscode.window.terminals, "Autotest");

  terminal.show();

  terminal.sendText(
    createTestRunnerCommand({
      filePath: testGroup.join(" "),
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

const runTestsInGroupCommand: WorkspaceCommand = {
  name,
  handler,
  requiresUri: false
};

export default runTestsInGroupCommand;
