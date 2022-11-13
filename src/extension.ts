import * as vscode from "vscode";

export const activate = (context: vscode.ExtensionContext) => {
  const disposable = vscode.commands.registerCommand("autotest.run", () => {
    vscode.window.showInformationMessage("Acho que funciona");
  });

  context.subscriptions.push(disposable);
};
