import * as vscode from "vscode";

export const activate = (context: vscode.ExtensionContext) => {
  const disposable = vscode.commands.registerCommand(
    "autotest.run",
    (uri: vscode.Uri) => {
      const filePath = uri.path;
      const terminal = vscode.window.createTerminal("Autotest");

      terminal.sendText(`yarn test ${filePath}`);
    }
  );

  context.subscriptions.push(disposable);
};
