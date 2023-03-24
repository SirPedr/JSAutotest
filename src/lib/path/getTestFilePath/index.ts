import path from "path";
import * as vscode from "vscode";
import minimatch from "minimatch";
import { getCurrentWorkspaceFolder } from "../../getCurrentWorkspaceFolder";

export const getTestFilePath = async (filePath: string, pattern: string) => {
  const isTestFile = minimatch(
    filePath,
    `**/${pattern.replace("[name]", "*")}`
  );

  if (isTestFile) {
    return filePath;
  }

  const fileName = path.basename(filePath);
  const activeWorkspaceFolder =
    getCurrentWorkspaceFolder(
      filePath,
      vscode.workspace.workspaceFolders || []
    ) || "";

  const pathInsideWorkspace = activeWorkspaceFolder
    ? path.dirname(filePath).split(`${activeWorkspaceFolder.name}/`)[1]
    : path.dirname(filePath);

  const [nameWithoutExtension] = fileName.split(".");
  const pathToSearch = new vscode.RelativePattern(
    activeWorkspaceFolder,
    `${pathInsideWorkspace}/**/${pattern.replace(
      "[name]",
      nameWithoutExtension
    )}`
  );

  const [testFile] = await vscode.workspace.findFiles(pathToSearch, null, 1);

  if (!testFile) {
    vscode.window.showErrorMessage(`Couldn't find test file for ${fileName}.`);

    return;
  }

  return testFile.path;
};
