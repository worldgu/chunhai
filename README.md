# 张春海 / Jack

个人站点的第一阶段骨架：单页、静态、作品用数据文件驱动。视觉先把结构和留白立住，后面补写作、摄影和 AI 作品时不用重起项目。

页面锚点：`#work`、`#about`、`#contact`。作品按八个方向全部展开，精选只放 ZERO-R、Duck、文章占位。

公开托管走 GitHub Pages，不走 Vercel，也不需要 Origin↔Vercel。

## 本地运行

需要 Node.js `>=22.23.4`（与当前 Astro 7 的 engines 一致）。

```sh
npm install
npm run dev
```

配置了 GitHub 项目站的 `base`（`/worldgu-site`），本地打开：

`http://localhost:4321/worldgu-site/`

```sh
npm run build
npm run preview
```

`npm run build` 把静态文件写到 `dist/`。页面没有客户端框架，构建结果是 HTML 和 CSS。`npm run preview` 同样带 `/worldgu-site/` 前缀。

## 改作品

作品卡片在 [`src/data/work.json`](src/data/work.json)。这是 Astro content collection 的数据源，schema 在 [`src/content.config.ts`](src/content.config.ts)。

每条字段：

| 字段 | 说明 |
| --- | --- |
| `id` | 稳定 id，页面锚点是 `#work-<id>` |
| `title` | 标题 |
| `category` | 必须是八个方向之一，和 `src/data/site.ts` 里的 `categoryLabels` 一致 |
| `status` | `思考中` / `开发中` / `已上线` / `归档` |
| `summary` | 一句话，最多 80 个字符 |
| `role` | 你在这件事里的角色 |
| `tags` | 最多 5 个 |
| `featured` | `true` 的前 3 条（按 `order`）出现在精选条 |
| `order` | 排序 |
| `cover` / `coverAlt` | 封面，约 16:10。占位图在 `public/covers/`，路径写成站根路径（如 `/covers/zero-r.svg`），渲染时会加上 `base` |
| `links` | `live` / `github` / `article` / `gallery`。没有公开链接就写 `[]` |
| `note` | 可选的一句说明 |

空着的方向不要删栏目。首页会给没有卡片的方向显示「即将补充」。

名字、定位、关于、联系、技能和八个方向的文案在 [`src/data/site.ts`](src/data/site.ts)。关于和中英定位是定稿，不要随手改写。

以后写文章，可以在 `src/content.config.ts` 再加一个 Markdown collection（例如 `src/content/writing/`），不要把私有 Notion 链接放进仓库。摄影换封面时，用自己的图替换 `public/covers/` 里的占位 SVG，或把 `cover` 指到新文件。

改完推到 GitHub 仓库的 `main` 后，Actions 会重新构建并发布。Origin 上的这份草稿不会自动更新 GitHub。

## 联系邮箱

默认是占位地址 `hello@example.com`，不是真实邮箱。上线前在构建环境设置：

```sh
PUBLIC_CONTACT_EMAIL=you@your-domain.com
```

见 [`.env.example`](.env.example)。本地可以复制成 `.env`（已被 gitignore）。GitHub Actions 里要生效的话，把同名变量加到仓库的 Actions secrets 或 variables，并在 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 的构建步骤上传进去。不要提交密钥、私有邮箱密码或 Notion 私密链接。这个站点不调用需要 API key 的服务。

## 发布到 GitHub Pages

按 [Astro 官方 GitHub Pages 指南](https://docs.astro.build/en/guides/deploy/github/) 配的项目站，不是用户站根路径。

| 项 | 值 |
| --- | --- |
| GitHub 账号 | [worldgu](https://github.com/worldgu) |
| 目标仓库 | `worldgu/worldgu-site`（公开）。名字被占用时再用 `worldgu/site`，并同步改 `astro.config.mjs` 的 `base` |
| `site` | `https://worldgu.github.io` |
| `base` | `/worldgu-site` |
| 配置中的 Pages 地址 | `https://worldgu.github.io/worldgu-site/` |
| 构建 | `npm run build` → `dist/` |
| 工作流 | [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)，`push` 到 `main` 或手动 `workflow_dispatch` |

`https://worldgu.github.io/worldgu-site/` 是仓库创建且 Actions 部署成功之后的地址。在那之前它不是已验证的线上站点。

工作流使用官方 [`withastro/action@v6`](https://github.com/withastro/action) 安装依赖、构建并上传 `dist/`，再用 `actions/deploy-pages` 发布。Node 固定为 `22.23.4`。

仓库要公开（免费账号的 Pages 要求公开仓库）。在 GitHub 仓库 Settings → Pages → Build and deployment，Source 选 **GitHub Actions**。只推代码而没改这个来源时，工作流即使成功也不会变成站点。

首页只链接了已经公开、并且属于这五个作品位的仓库：`worldgu/ZERO-R`、`worldgu/Duck`、`worldgu/Game`。Camera、MW 和学习用仓库不要放上首页。`worldgu/worldgu.github.io` 是另一个仓库，不要拿来覆盖这次的项目站。

### Origin 和 GitHub

Origin 仍然保存这份云端草稿，推送到 Origin 的 `main` 不会发布 Pages。GitHub `worldgu/worldgu-site` 才是部署远端：它的 `main` 触发 Actions。在你决定把 GitHub 当成唯一源头之前，两边可以各留一份；改公开站点时，以推到 GitHub `main` 为准。
