import * as vscode from "vscode";

type Command = {
  name: string;
};

export type ContextMenuCommand = Command & {
  requiresUri: true;
  handler: (
    uri: vscode.Uri,
    context: vscode.ExtensionContext
  ) => void | Promise<void>;
};

export type WorkspaceCommand = Command & {
  requiresUri: false;
  handler: (
    uri: vscode.Uri | undefined,
    context: vscode.ExtensionContext
  ) => void | Promise<void>;
};
