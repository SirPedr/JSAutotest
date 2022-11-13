import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("autotest.run", () => {
    console.log("Opa");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
