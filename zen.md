## GUIDE

[https://v2.vuepress.vuejs.org/guide/](https://v2.vuepress.vuejs.org/guide/)

---
### prepare
* Node.js v14+
* pnpm@7

> With pnpm, you may need to install vue and @vuepress/client as peer-dependencies
> 
> i.e. `pnpm add -D vue @vuepress/client@next`

1. init project
```bash
git init # maybe already done
npm init
```
2. install vuepress@next
```bash
pnpm add -D vuepress@next
```
3. add scripts to package.json
```json
{
  "scripts": {
    "dev": "vuepress dev docs --port=5388",
    "docs:build": "vuepress build docs"
  }
}
```
4. add some dir to .gitignore
```bash
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```
5. create first document
```bash
mkdir docs
echo '# BFE-LEARNING' >> docs/README.md
```
6. run
```bash
pnpm docs:dev
```

---
## configuration
### config file
```
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
```
Vuepress中必要的配置文件是
`.vuepress/config.js`
也可以是ts

可以使用更多规约如下
* `cwd` 下的 vuepress.config.js (ts/cjs)
* `sourceDir` 下的 .vuepress/config.js (ts/cjs)

也可以使用cli 来指定配置文件
```bash
vuepress dev docs --config my.config.js
```

config.js的参考配置
```ts
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',
})
```

The default public directory is `.vuepress/public`, which can be changed in config.


### Base Helper
if your site is deployed to a non-root URL,i.e. the `base` is not '/', you will need to prepend the `base` to the absolute URLs of your public files.

i.e. if you plan to deploy your site to `https://foo.github.io/steven7sheng/bfe`, then `base` should be set to '/bfe', and you have to reference you public files in Markdown like this
```md
![VuePress Logo](/bfe/images/hero.png)
```
to help with that,VuePress provides a built-in helper `$withBase` that generates the correct path:
```md
<img :src="$withBase('/images/hero.png')" alt="VuePress Logo">
```

---
## Deloyment
add following scripts in `package.json`
```json
  "scripts": {
    "docs:build": "vuepress build docs"
  }
```
### Github Pages
1. set the correct `base` config

    if you are deploying to `https://<USERNAME>.github.io/<REPO>`,
for example your repository is at `https://github.com/<USERNAME>/<REPO>`, set `base` to `/<REPO>/`.

2. chose CI tools = `Github Actions`
   
   create `.github/workflows/deploy.yml` to set up the workflow

```yml
name: docs
on:
  # trigger deployment on every push to main branch
  push:
    branches: [main]
  # trigger deployment manually
  workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
        with:
          # fetch all commits to get last updated time or other git log info
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          # choose node.js version to use
          node-version: '14'

      # cache node_modules
      - name: Cache dependencies
        uses: actions/cache@v2
        id: yarn-cache
        with:
          path: |
            **/node_modules
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      # install dependencies if the cache did not hit
      - name: Install dependencies
        if: steps.yarn-cache.outputs.cache-hit != 'true'
        run: yarn --frozen-lockfile

      # run build script
      - name: Build VuePress site
        run: yarn docs:build

      # please check out the docs of the workflow for more details
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          # deploy to gh-pages branch
          target_branch: gh-pages
          # deploy the default output dir of VuePress
          build_dir: docs/.vuepress/dist
        env:
          # @see https://docs.github.com/en/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Github中 个人开发设置，增加Personal Access Token
权限只需要 勾选actions   这里的 GITHUB_TOKEN 与title无关
在仓库设置中 增加仓库的 key 
在设置中设置 pages 分支采用gh-pages, /root