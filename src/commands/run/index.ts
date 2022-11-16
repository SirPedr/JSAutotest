import * as vscode from "vscode";
import { findAutotestTerminal } from "../../lib/terminal/findAutotestTerminal";

const commandName = "autotest.run";

const handler = (uri: vscode.Uri) => {
  const terminal = findAutotestTerminal(vscode.window.terminals);

  terminal.show();
  terminal.sendText(`yarn test ${uri.path}`);
};

export default { name: commandName, handler };
