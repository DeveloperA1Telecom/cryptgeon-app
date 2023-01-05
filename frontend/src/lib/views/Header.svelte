<script>
	import { _ } from '$lib/i18n'
</script>
<header>
	<h1>{$_('app.title')}</h1>
</header>

<style>
	header {
		text-align: center;
		margin-top: 4rem;
		margin-bottom: 2rem;
	}

	@media screen and (max-width: 30rem) {
		header {
			margin-top: 1rem;
			margin-bottom: 1rem;
		}
	}
</style>
