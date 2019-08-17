<h1 align="center">Welcome to tempter 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.3-blue.svg?cacheSeconds=2592000" />
</p>

> Your own sub-generator. In minutes. Bundled with your project.

## Features
- [Simple to use](#Usage)
- Supports both folder and single-file templates
- Lowercase, uppercase and even capitalized [placeholders](#Placeholders) 
- [Placeholders](#Placeholders) work even in filenames

## Usage

#### 1. Add `tempter` to your dev dependencies 
```sh
yarn add -D tempter
# OR
npm install -dev tempter
```

> Q: Why not CLI?\
> A: You can bundle it with your boilerplate this way!

#### 2. Create your generator file (e.g. `generator.js`)
```js
// generator.js contents
require('tempter')('your/template/directory')
```

#### 3. Add [your templates](#How-to-create-a-template) to this directory

#### 4. Done! You can now use your generator!
```sh
node generator.js
```

> Tip: You may also add it to your npm scripts!

## Docs

### How to create a template

#### 1. Create a folder (e.g. `React Component`) for your template in your template directory (e.g. `templates`)

#### 2. Create a config file `template.json` for your template
[Documentation](#Template-configuration)

#### 3. Add files
Just add template files in the same directory as `template.json`.

[Placeholder documentation](#Placeholders)

### Template configuration

```json
{
  "dir": "src/components",
  "type": "subfolder"
}
```

| Option | Description                                                                                             | Required |
| ------ | ------------------------------------------------------------------------------------------------------- | -------- |
| `dir`  | Says where our template should be coppied to                                                            | true     |
| `type` | Determines if the template should be placed in a subfolder ("subfolder"), or just spread in `dir` ("spread") | true     |

### Placeholders
Placeholders may be used in both filenames and the actual templates, they will be replaced by the generator.

| Placeholder | Replaced by                  | Example |
| ----------- | ---------------------------- | ------- |
| lowNAME     | Name from input, lowercased  | name    |
| uppNAME     | Name from input, uppercased  | NAME    |
| capNAME     | Name from input, capitalized | Name    |

## Author

👤 **DEVICARUS**

* Twitter: [@RevionReaper](https://twitter.com/RevionReaper)
* Github: [@DEVICARUS](https://github.com/DEVICARUS)