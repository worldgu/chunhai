/**
 * Prefix a site-root path with Astro's `base`.
 * Project Pages serves the site at `/worldgu-site/`, not `/`.
 * Absolute URLs (https:, mailto:) are left unchanged.
 */
export function withBase(path: string): string {
	if (/^[a-z][a-z0-9+.-]*:/i.test(path)) return path;
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const suffix = path.startsWith('/') ? path : `/${path}`;
	return `${base}${suffix}`;
}
