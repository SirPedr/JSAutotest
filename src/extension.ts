import * as vscode from "vscode";
import commands from "./commands";

export const activate = (context: vscode.ExtensionContext) => {
  const disposables = commands.map(command =>
    vscode.commands.registerCommand(command.name, command.handler)
  );

  context.subscriptions.push(...disposables);
};
