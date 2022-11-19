import { Terminal, window } from "vscode";

export const findTerminalWithName = (
  terminals: readonly Terminal[],
  name: string
) => {
  const existingTerminal = terminals.find(terminal => terminal.name === name);

  if (existingTerminal) {
    return existingTerminal;
  }

  const terminal = window.createTerminal("Autotest");

  return terminal;
};
