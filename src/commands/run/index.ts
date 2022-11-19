import * as vscode from "vscode";
import { findAutotestTerminal } from "../../lib/terminal/findAutotestTerminal";
import { createTestRunnerCommand } from "./util/createTestRunnerCommand";

const commandName = "autotest.run";
const DEFAULT_PACKAGE_MANAGER = "npm";
const DEFAULT_SCRIPT_NAME = "test";

const handler = (uri: vscode.Uri) => {
  const terminal = findAutotestTerminal(vscode.window.terminals);
  const extensionConfig = vscode.workspace.getConfiguration("autotest");

  terminal.show();
  terminal.sendText(
    createTestRunnerCommand({
      filePath: uri.path,
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
