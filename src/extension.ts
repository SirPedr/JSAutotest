import * as vscode from "vscode";
import commands from "./commands";

export const activate = (context: vscode.ExtensionContext) => {
  const disposables = commands.map(command =>
    vscode.commands.registerCommand(
      command.name,
      (uri: vscode.Uri | undefined) => {
        if (!command.requiresUri) {
          command.handler(uri, context);
          return;
        }

        if (!uri) {
          vscode.window.showErrorMessage(
            "This command needs to be activated through the context menu of a file"
          );
          return;
        }

        command.handler(uri, context);
      }
    )
  );

  context.subscriptions.push(...disposables);
};
