import pkg from "../../../package.json";
const version = pkg.version;

const AppVersion = () => {
  console.log(`App Version : ${version}`);

  return null;
};

export default AppVersion;
