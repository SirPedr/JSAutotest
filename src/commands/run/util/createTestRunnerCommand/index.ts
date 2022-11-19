type TestRunnerCommandOptions = {
  filePath: string;
  packageManager: string;
  scriptName: string;
};

const scriptRunnerForPackageManager: { [index: string]: string } = {
  yarn: "yarn",
  npm: "npm run"
};

export const createTestRunnerCommand = ({
  filePath,
  packageManager,
  scriptName
}: TestRunnerCommandOptions) => {
  const scriptRunner = scriptRunnerForPackageManager[packageManager];

  return `${scriptRunner} ${scriptName} ${filePath}`;
};
