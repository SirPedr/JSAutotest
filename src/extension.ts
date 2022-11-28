import * as vscode from "vscode";
import commands from "./commands";

export const activate = (context: vscode.ExtensionContext) => {
  const disposables = commands.map(command =>
    vscode.commands.registerCommand(command.name, (uri: vscode.Uri) =>
      command.handler(uri, context)
    )
  );

  context.subscriptions.push(...disposables);
};
