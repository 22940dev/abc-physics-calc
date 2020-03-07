import yaml from "js-yaml";
import fs from "fs";

const mainDir = `./src/generated-tokens`;
const astrodynamicsDir = `${mainDir}/astrodynamics`;

const ADtokensFilePath = `${astrodynamicsDir}/variables.json`;
const ADformulaTokensFilePath = `${astrodynamicsDir}/formulas.json`;

const getTokens = async fileName => {
  try {
    return await yaml.safeLoad(
      fs.readFileSync(`./tokens/${fileName}.yml`, "utf8")
    );
  } catch (e) {
    console.log(e);
  }
};

const buildTokensJSON = async filename => {
  const tokens = await getTokens(filename);

  if (tokens) {
    return JSON.parse(JSON.stringify(tokens));
  }
};

buildTokensJSON("tokens").then(values => {
  fs.writeFileSync(ADtokensFilePath, JSON.stringify(values));
});

buildTokensJSON("astrodynamics").then(values => {
  fs.writeFileSync(ADformulaTokensFilePath, JSON.stringify(values));
});
