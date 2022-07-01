## SETUP
### prepare
* Node.js v14+
* pnpm@7

::: tip

With pnpm, you may need to install vue and @vuepress/client as peer-dependencies, i.e. 

`pnpm add -D vue @vuepress/client@next`

:::

### 1 init project
```bash
git init # maybe already done
npm init
```
### 2 install vuepress@next
```bash
pnpm add -D vuepress@next
```
### 3 add scripts to package.json
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
### 4 add some dir to .gitignore
```bash
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```
### 5 create first document
```bash
mkdir docs
echo '# BFE-LEARNING' >> docs/README.md
```

### 6 run
```bash
pnpm docs:dev
```