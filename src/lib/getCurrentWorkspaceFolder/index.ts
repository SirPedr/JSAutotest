import { WorkspaceFolder } from "vscode";

export const getCurrentWorkspaceFolder = (
  path: string,
  workspacesFolders: readonly WorkspaceFolder[]
) => {
  if (!workspacesFolders.length) {
    return null;
  }

  const folderIndexes = workspacesFolders.map(folder => {
    return {
      folder,
      index: path.indexOf(folder.name)
    };
  });

  const [firstWorkspaceFolderInPath] = folderIndexes.sort(
    (a, b) => a.index - b.index
  );

  return firstWorkspaceFolderInPath.folder;
};
