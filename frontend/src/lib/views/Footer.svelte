<script lang="ts">
	import Icon from '$lib/ui/Icon.svelte'
	import ThemeToggle from '$lib/ui/ThemeToggle.svelte'
	import { setupI18n, isLocaleLoaded, locale } from '$lib/i18n'
	import LocaleSelector from '$lib/ui/LocaleSelector.svelte'
	import { _ } from '$lib/i18n'
	import LocalesSelector from '$lib/ui/LocalesSelector.svelte';
	const currentYear = new Date().getFullYear()
</script>

<footer>
	<div class="container">
		<div class="footer-top">
			<nav class="footer-nav">
				<a class="footer-nav__link" href={`https://a1call.me/${$locale}/cloud-pbx/`}>{$_('app.footerMenu.item1')}</a>
				<a class="footer-nav__link" href={`https://a1call.me/${$locale}/sip-trunk/`}>{$_('app.footerMenu.item2')}</a>
				<a class="footer-nav__link" href={`https://privnote.a1call.me/`}>{$_('app.footerMenu.item3')}</a>
				<a class="footer-nav__link" href={`https://a1call.me/${$locale}/about-us/`}>{$_('app.footerMenu.item4')}</a>
				<a class="footer-nav__link" href={`https://a1call.me/${$locale}/career/`}>{$_('app.footerMenu.item5')}</a>
				<a class="footer-nav__link" href={`https://blog.a1call.me/`} target="_blank">{$_('app.footerMenu.item6')}</a>
				<a class="footer-nav__link" href={`https://a1call.me/${$locale}/privacy-policy/`}>{$_('app.footerMenu.item7')}</a>
			</nav>
		</div>
		<div class="footer-middle">
			<div class="contact">
				<h3>Skype:</h3>
				<div>
					<a href="skype:live:.cid.9be3c3a3b4a59a65?chat">a1call.me</a>
				</div>
			</div>
			<div class="contact">
				<h3>{$_('app.phones')}:</h3>
				<div>
					<a href="tel:+380442997060">+380 (44) 299 70 60</a>
					<a href="tel:+380930021133">+380 (93) 002 11 33</a>
				</div>
			</div>
			<div class="contact">
				<h3>Email:</h3>
				<div>
					<a href="mailto:info@a1call.me">info@a1call.me</a>
				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="lang">
        {#if $isLocaleLoaded}
          <LocalesSelector
              class="footer-locales"
              value={$locale}
              on:locale-changed={e => setupI18n({ withLocale: e.detail }) }
          />
        {/if}
      </div>
			<div class="copy">
				<a href="https://a1call.me/">&copy; A1 Telecom, {currentYear}</a>
			</div>
		</div>
	</div>
</footer>

<style>
	a {
		border: none;
	}

	footer {
		padding-top: 50px;
		padding-bottom: 55px;
		color: #fff;
		background-color: #000;
		grid-row-start: 3;
		grid-row-end: 4;
	}

	.container {
		max-width: 1170px;
    width: 95%;
    margin-right: auto;
    margin-left: auto;
	}

	.footer-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.footer-top {
		padding: 0 54px;
		margin-bottom: 26px;
	}

	.footer-middle {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin-bottom: 38px;
	}

	.footer-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 50px;
		padding-right: 30px;
		padding-bottom: 24px;
	}

	.footer-nav__link {
		padding: 12px 16px;
		text-align: center;
	}

	.contact {
		display: flex;
		flex-flow: column nowrap;
		align-items: flex-end;
		padding-right: 50px;
	}

	.contact:nth-of-type(2) {
		padding-right: 140px;
	}

	.contact:last-of-type {
		padding-right: 0;
		align-items: flex-start;
	}

	.contact h3 {
		margin: 0;
		font-size: 20px;
		font-weight: 400;
	}

	.contact > div {
		height: 48px;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
	}

	.contact a:not(:last-of-type) {
		margin-bottom: 5px;
	}

	.copy a {
		font-size: 20px;
	}

	@media (max-width: 960px) {
		.footer-top {padding: 0;}
		.footer-bottom {padding-left: 0; padding-right: 0;}
	}
	@media (max-width: 768px) {
		.footer-nav {
			flex-flow: row wrap;
		}

		.contact:nth-of-type(2) {
			padding-right: 30%;
		}
	}
	@media (max-width: 600px) {
		.footer-middle {
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			gap: 15px;
		}

		.contact {
			text-align: center;
			align-items: center;
			padding: 0;
		}

		.contact:nth-of-type(2) {
			padding: 0;
			align-items: center;
		}

		.contact:last-of-type {
			align-items: center;
		}
	}
</style>
