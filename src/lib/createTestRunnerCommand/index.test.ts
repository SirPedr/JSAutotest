import { createTestRunnerCommand } from ".";

describe("lib: createTestRunnerCommand", () => {
  it.each([
    ["yarn", "yarn"],
    ["npm", "npm run"]
  ])(
    "must return correct command with specified filePath and scriptName when package manager is %s",
    (packageManager, expectedCommandRunner) => {
      expect(
        createTestRunnerCommand({
          filePath: "path/to/file",
          packageManager,
          scriptName: "test"
        })
      ).toEqual(`${expectedCommandRunner} test path/to/file`);
    }
  );
});
