const { generateApi } = require("../../../src");
const { resolve } = require("path");
const validateGeneratedModule = require("../../helpers/validateGeneratedModule");
const createSchemasInfos = require("../../helpers/createSchemaInfos");

const schemas = createSchemasInfos({ absolutePathToSchemas: resolve(__dirname, "./") });

schemas.forEach(({ absolutePath, apiFileName }) => {
  generateApi({
    silent: true,
    name: apiFileName,
    input: absolutePath,
    output: resolve(__dirname, "./"),
    toJS: true,
    httpClientType: "axios",
  }).catch((e) => {
    console.error("--js --axios option test failed.");
    throw e;
  });
});
