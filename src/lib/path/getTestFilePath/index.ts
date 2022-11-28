import path from "path";
import * as vscode from "vscode";
import minimatch from "minimatch";

export const getTestFilePath = async (filePath: string, pattern: string) => {
  const fileName = path.basename(filePath);
  const isTestFile = minimatch(filePath, pattern);

  if (isTestFile) {
    return filePath;
  }

  const [nameWithoutExtension] = fileName.split(".");
  const [testFile] = await vscode.workspace.findFiles(
    `**/${pattern.replace("[name]", nameWithoutExtension)}`,
    null,
    1
  );

  if (!testFile) {
    vscode.window.showErrorMessage(`Couldn't find test file for ${fileName}.`);

    return;
  }

  return testFile.path;
};
