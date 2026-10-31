// @ts-check
import { defineConfig } from 'astro/config';

// GitHub project Pages for the public repo worldgu/worldgu-site.
// `site` is the user Pages origin; `base` is the repository name.
// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
	site: 'https://worldgu.github.io',
	base: '/worldgu-site',
	output: 'static',
});
