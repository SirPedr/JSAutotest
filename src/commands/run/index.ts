import * as vscode from "vscode";

const commandName = "autotest.run";

const handler = (uri: vscode.Uri) => {
  const terminal = vscode.window.createTerminal("Autotest");

  terminal.show();
  terminal.sendText(`yarn test ${uri.path}`);
};

export default { name: commandName, handler };
