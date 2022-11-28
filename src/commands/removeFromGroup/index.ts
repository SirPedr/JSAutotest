import * as vscode from "vscode";
import { DEFAULT_CONFIGS } from "../../config/extension";
import { getTestFilePath } from "../../lib/path/getTestFilePath";
const name = "autotest.removeFromGroup";

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

  const currentTestGroup = context.workspaceState.get<string[]>(
    "autotest_group",
    []
  );
  const testGroupWithoutSelectedFile = currentTestGroup.filter(
    filePath => filePath !== testFilePath
  );

  if (testGroupWithoutSelectedFile.length === currentTestGroup.length) {
    vscode.window.showErrorMessage("Selected file is not on the test group.");
    return;
  }

  context.workspaceState.update("autotest_group", testGroupWithoutSelectedFile);

  vscode.window.showInformationMessage(
    `Removed ${testFilePath} from test group succesfully`
  );
};

export default { name, handler };
