import runTestsCommand from "./run";
import addToGroupCommand from "./addToGroup";
import removeFromGroupCommand from "./removeFromGroup";
import runTestsInGroupCommand from "./runTestsInGroup";
import { ContextMenuCommand, WorkspaceCommand } from "../types";

const commands: Array<ContextMenuCommand | WorkspaceCommand> = [
  runTestsCommand,
  addToGroupCommand,
  removeFromGroupCommand,
  runTestsInGroupCommand
];

export default commands;
