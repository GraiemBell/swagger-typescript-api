# swagger-typescript-api  
Generate api via swagger scheme.  
Supports OA 3.0, 2.0, JSON, yaml  

Any questions you can ask [here](https://github.com/acacode/swagger-typescript-api/issues)

## 📄 Usage  

```sh
Usage: sta [options]
Usage: swagger-typescript-api [options]

Options:
  -v, --version          output the current version
  -p, --path <path>      path to swagger scheme
  -o, --output <output>  output path of typescript api file (default: ".")
  -n, --name <name>      name of output typescript api file (default: "api.ts")
  -h, --help             output usage information
```

Also you can use `npx`:  
```
 npx swagger-typescript-api -p ./swagger.json -o ./src -n myApi.ts
```

You can use this package from nodejs:
```js
const { generateApi } = require('swagger-typescript-api');

generateApi({
  name,
  url: 'http://api.com/swagger.json',
  input: resolve(process.cwd(), './foo/swagger.json')
})
  .then(sourceFile => {
    fs.writeFile(path, sourceFile)
  })
  .catch(e => {
    console.error(e)
  })

```

## 🚀 Examples  

`sta -p ./swagger.json`  

Input swagger scheme - [file](https://github.com/acacode/swagger-typescript-api/blob/master/swagger.json)  
Output typescript api - [file](https://github.com/acacode/swagger-typescript-api/blob/master/api.ts)  


## 📝 License  
Licensed under the [MIT License](https://github.com/acacode/swagger-typescript-api/blob/master/LICENSE).
