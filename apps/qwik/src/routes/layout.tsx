import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Slot, component$ } from "@builder.io/qwik"
import type { RequestHandler } from "@builder.io/qwik-city"

export const onGet: RequestHandler = async ({ cacheControl }) => {
	// Control caching for this request for best performance and to reduce hosting costs:
	// https://qwik.builder.io/docs/caching/
	cacheControl({
		// Always serve a cached response by default, up to a week stale
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		// Max once every 5 seconds, revalidate on the server to get a fresh version of this page
		maxAge: 5,
	})
}

export default component$(() => {
	return (
		<div class="relative flex min-h-screen flex-col">
			<SiteHeader />
			<div class="flex-1">
				<Slot />
			</div>
			<SiteFooter />
		</div>
	)
})
