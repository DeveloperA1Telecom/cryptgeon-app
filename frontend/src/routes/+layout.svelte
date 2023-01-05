<script lang="ts">
	import { isLoading } from 'svelte-i18n'
	import { setupI18n, isLocaleLoaded, locale, dir } from '$lib/i18n'
	import { init } from '$lib/stores/status'
	import Footer from '$lib/views/Footer.svelte'
	import Header from '$lib/views/Header.svelte'
	import { onMount } from 'svelte'
	import '../app.css'
import MainHeader from '$lib/ui/MainHeader.svelte';

	$: if (!$isLocaleLoaded) {
		setupI18n({ withLocale: 'ru', detectByIp : true });
	}

	onMount(() => {
		init()
	})
</script>

<svelte:head>
	<title>privnote</title>
</svelte:head>
{#if !$isLocaleLoaded}
	Please wait...
{:else}
	<MainHeader/>
	<main>
		<Header />
		<slot />
	</main>

	<Footer />
{/if}
<style>
	main {
		padding: 1rem;
		padding-bottom: 4rem;
		width: 100%;
		max-width: 860px;
		margin: 0 auto;
	}
</style>
