import { Terminal, window } from "vscode";

export const findAutotestTerminal = (terminals: readonly Terminal[]) => {
  const existingTerminal = terminals.find(
    terminal => terminal.name === "Autotest"
  );

  if (existingTerminal) {
    return existingTerminal;
  }

  const terminal = window.createTerminal("Autotest");

  return terminal;
};
