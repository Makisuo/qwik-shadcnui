import { component$ } from "@builder.io/qwik"
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city"
import { RouterHead } from "./components/router-head/router-head"

import { ThemeProvider } from "qwik-themes"

import "./global.css"

import "cal-sans"

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Don't remove the `<head>` and `<body>` elements.
	 */

	return (
		<QwikCityProvider>
			<head>
				<meta charSet="utf-8" />
				<link rel="manifest" href="/manifest.json" />
				<RouterHead />
			</head>
			<body lang="en" class="min-h-screen bg-background font-sans antialiased">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<RouterOutlet />
					<ServiceWorkerRegister />
				</ThemeProvider>
			</body>
		</QwikCityProvider>
	)
})
