import * as vscode from "vscode";
import { DEFAULT_CONFIGS } from "../../config/extension";
import { getTestFilePath } from "../../lib/path/getTestFilePath";

const name = "autotest.addToGroup";

const handler = async (uri: vscode.Uri, context: vscode.ExtensionContext) => {
  const extensionConfig = vscode.workspace.getConfiguration("autotest");
  const testFilePattern = extensionConfig.get(
    "testFilePattern",
    DEFAULT_CONFIGS.testFilePattern
  );

  const testFilePath = await getTestFilePath(uri.path, testFilePattern);

  if (!testFilePath) {
    return;
  }

  const currentGroup = context.workspaceState.get<string[]>(
    "autotest_group",
    []
  );
  const fileAlreadyInGroup = currentGroup.some(path => path === testFilePath);

  if (fileAlreadyInGroup) {
    vscode.window.showWarningMessage(
      `File ${testFilePath} is already on the test group`
    );
    return;
  }

  context.workspaceState.update("autotest_group", [
    ...currentGroup,
    testFilePath
  ]);

  vscode.window.showInformationMessage(`Added ${testFilePath} to test group`);
};

export default { name, handler };
