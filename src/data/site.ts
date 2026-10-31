/**
 * 站点文案与栏目。作品卡片在 `src/data/work.json`。
 * 两段定位和关于正文是定稿，改之前先跟张春海确认。
 */

const envEmail = import.meta.env.PUBLIC_CONTACT_EMAIL;
const trimmedEmail = typeof envEmail === 'string' ? envEmail.trim() : '';

/** 公开联系邮箱；可用 PUBLIC_CONTACT_EMAIL 覆盖。 */
export const contactEmail = trimmedEmail || 'zhanchunhai@gmail.com';

/** 站点 / 项目对外名称（页眉、标题、包名展示用）。 */
export const siteName = 'chunhai';

export const owner = {
	nameZh: '张春海',
	nameEn: 'Jack',
	githubUser: 'worldgu',
	githubUrl: 'https://github.com/worldgu',
	xHandle: '@Macfengh',
	xUrl: 'https://x.com/Macfengh',
} as const;

export const taglineZh =
	'独立建造者与创作者——把系统、工具、文章与摄影做成可访问作品；并用 AI（Agent / 工具链 / 知识库 / AI 产品）把效率与实验做成可演示形态；保留给后来的产品、写作与开源。';

export const taglineEn =
	'Jack (张春海) — builder and maker who ships systems, tools, writing, and photography you can open; uses AI (agents, toolchains, knowledge bases, AI-shaped products) to make efficiency and experiments demonstrable; room for products and open source over time.';

export const aboutZh =
	'我是张春海（Jack）。日常用 Notion 整理学习与复盘，业余把想法做成能点开的链接——包括前端工具与小实验，也包括文章、摄影，以及用 Agent、工具链与知识形态做出的 AI 实验与产品形态。我更在意「能交付、能说清楚、能一路迭代」，而不是把某一个演示仓当成唯一身份。之后也会继续加产品、写作、视觉与 AI 形态；官网会跟着更新，而不是冻结在某一年的代码列表上。';

export const nowLine = 'Now · 正在把已有作品收成可打开的入口。';

export const categoryLabels = [
	'产品 / 工具',
	'实验',
	'可玩交互',
	'系统 / 效率',
	'文章 / 写作',
	'摄影',
	'AI',
	'其他 / 待建',
] as const;

export const statuses = ['思考中', '开发中', '已上线', '归档'] as const;

export const categories = [
	{ id: 'product', label: categoryLabels[0], en: 'Tools' },
	{ id: 'experiment', label: categoryLabels[1], en: 'Experiments' },
	{ id: 'play', label: categoryLabels[2], en: 'Play' },
	{ id: 'systems', label: categoryLabels[3], en: 'Systems' },
	{ id: 'writing', label: categoryLabels[4], en: 'Writing' },
	{ id: 'photo', label: categoryLabels[5], en: 'Photography' },
	{ id: 'ai', label: categoryLabels[6], en: 'AI' },
	{ id: 'other', label: categoryLabels[7], en: 'Later' },
] as const;

export const skillGroups = [
	{
		id: 'frontend',
		label: '前端基础',
		en: 'Frontend',
		tags: ['语义化 HTML', 'CSS 布局', 'TypeScript', '静态页面'],
	},
	{
		id: 'deploy',
		label: '部署',
		en: 'Deploy',
		tags: ['静态构建', 'Vercel', '可公开的链接'],
	},
	{
		id: 'ai-dev',
		label: 'AI 辅助开发',
		en: 'Agent / toolchain',
		tags: ['Agent', '工具链', '知识库', '可演示实验'],
	},
] as const;

export const nav = [
	{ href: '/#work', label: '作品' },
	{ href: '/#about', label: '关于' },
	{ href: '/#contact', label: '联系' },
] as const;
