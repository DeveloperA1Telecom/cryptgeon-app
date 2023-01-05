<script>
	import { _ } from '$lib/i18n'
	import { setupI18n, isLocaleLoaded, locale } from '$lib/i18n'
	import { fly } from 'svelte/transition'
	import LocalesSelector from './LocalesSelector.svelte'
	import LocalesSelectorMob from './LocalesSelectorMob.svelte'
	let visibleMenu = false
</script>

<header class="main-header">
	<div class="main-header__top">
		<div class="container">
			<div class="contacts contacts--phones">
				<img src="/icons/phone-icon.png" alt="phone" />
				<a href="tel:+380442997060">+380 (44) 299 70 60</a>
				<a href="tel:+380930021133">+380 (93) 002 11 33</a>
			</div>
			<div class="contacts contacts--skype">
				<img src="/icons/skype1.png" alt="skype" />
				<a href="skype:live:.cid.9be3c3a3b4a59a65?chat">a1call.me</a>
			</div>
			<div class="contacts contacts--email">
				<img src="/icons/email-icon.png" alt="email" />
				<a href="mailto:info@a1call.me">info@a1call.me</a>
			</div>
			<button href="https://www.razomukraine.com.ua/" class="callback"
				><b>{$_('app.callbackBtn')}</b></button
			>
			<div class="socials">
				<a href="https://www.linkedin.com/company/a-1-telecom">
					<img src="/icons/in.png" alt="linkedin" />
				</a>
				<a href="https://t.me/a1callme"><img src="/icons/twitter.png" alt="telegram" /></a><a
					href="https://www.instagram.com/a1call.me/"
					><img src="/icons/instagram.png" alt="instagram" /></a
				><a href="https://www.facebook.com/A1Tele"
					><img src="/icons/facebook.png" alt="facebook" /></a
				>
			</div>
		</div>
	</div>
	<div class="main-header__bottom">
		<div class="container">
			<a href="/" class="logo">
				<img src="/icons/logo1.png" alt="" />
			</a>
			<nav class="nav">
				<ul>
					<li><a href={`https://a1call.me/${$locale}`}>{$_('app.menu.item1')}</a></li>
					<li><a href={`https://a1call.me/${$locale}/cloud-pbx/`}>{$_('app.menu.item2')}</a></li>
					<li><a href={`https://a1call.me/${$locale}/sip-trunk/`}>{$_('app.menu.item3')}</a></li>
					<li>
						<a href={`https://a1call.me/${$locale}/call-tracking/`}>{$_('app.menu.item4')}</a>
					</li>
					<li><a href={`https://a1call.me/${$locale}/about-us/`}>{$_('app.menu.item5')}</a></li>
					<li><a href={`https://a1call.me/${$locale}/career/`}>{$_('app.menu.item6')}</a></li>
					<li><a href={`https://blog.a1call.me/`} target="_blank">{$_('app.menu.item7')}</a></li>
					<li>
						<a href={`https://a1call.me/${$locale}/chto-govoryat-o-nas-klientyi/`}
							>{$_('app.menu.item8')}</a
						>
					</li>
				</ul>
			</nav>
			<div class="mobile-menu">
				<input
					type="checkbox"
					id="checkbox"
					class="mobile-menu__checkbox"
					checked={visibleMenu}
					on:change={() => (visibleMenu = !visibleMenu)}
				/>
				<label for="checkbox" class="mobile-menu__btn"><div class="mobile-menu__icon" /></label>
			</div>
			<div class="lang">
				{#if $isLocaleLoaded}
					<LocalesSelector
						class="main-header__locales"
						value={$locale}
						on:locale-changed={(e) => setupI18n({ withLocale: e.detail })}
					/>
				{/if}
			</div>
		</div>
	</div>
	{#if visibleMenu}
		<nav class="nav-mob" in:fly={{ x: -280, duration: 400 }} out:fly={{ x: -280, duration: 400 }}>
			<button on:click={() => (visibleMenu = false)}>A1 Telecom <span>+</span></button>
			<ul>
				<li>
					<span class="material-icons">home</span>
					<a href={`https://a1call.me/${$locale}`}>{$_('app.menu.item1')}</a>
				</li>
				<li>
					<span class="material-icons">cloud_sync</span>
					<a href={`https://a1call.me/${$locale}/cloud-pbx/`}>{$_('app.menu.item2')}</a>
				</li>
				<li>
					<span class="material-icons">dialer_sip</span>
					<a href={`https://a1call.me/${$locale}/sip-trunk/`}>{$_('app.menu.item3')}</a>
				</li>
				<li>
					<span class="material-icons">phone_in_talk</span>
					<a href={`https://a1call.me/${$locale}/call-tracking/`}>{$_('app.menu.item4')}</a>
				</li>
				<li>
					<span class="material-icons">account_circle</span>
					<a href={`https://a1call.me/${$locale}/about-us/`}>{$_('app.menu.item5')}</a>
				</li>
				<li>
					<span class="material-icons">query_stats</span>
					<a href={`https://a1call.me/${$locale}/career/`}>{$_('app.menu.item6')}</a>
				</li>
				<li>
					<span class="material-icons">auto_stories</span>
					<a href={`https://blog.a1call.me/`} target="_blank">{$_('app.menu.item7')}</a>
				</li>
				<li>
					<span class="material-icons">feedback</span>
					<a href={`https://a1call.me/${$locale}/chto-govoryat-o-nas-klientyi/`}
						>{$_('app.menu.item8')}</a
					>
				</li>
				<li>
					<span class="material-icons">sync_lock</span>
					<a href={`/`}>Privnote</a>
				</li>
			</ul>
			{#if $isLocaleLoaded}
				<LocalesSelectorMob
					value={$locale}
					on:locale-changed={(e) => setupI18n({ withLocale: e.detail })}
				/>
			{/if}
		</nav>
	{/if}
</header>

<style>
	a {
		border: none;
	}

	.main-header__top {
		padding: 10px;
		background-color: #000;
		color: #fff;
	}

	.container {
		display: flex;
		align-items: center;
		margin: 0 auto;
		min-width: 320px;
		max-width: 1170px;
	}

	.main-header__top .container {
		padding-left: 60px;
		padding-right: 54px;
		justify-content: space-between;
	}

	.main-header__bottom {
		background-color: #fff;
		color: #000;
	}

	.main-header__bottom .container {
		position: relative;
		padding-left: 33px;
	}

	.nav {
		min-width: 800px;
	}

	.nav ul {
		display: flex;
		justify-content: center;
		list-style: none;
		margin: 0;
		padding-left: 0;
	}

	.nav ul li {
		margin-right: 20px;
	}

	.nav ul li {
		font-size: 14px;
		line-height: 30px;
		font-weight: 600;
		text-transform: uppercase;
	}
	.nav ul li a {
		transition: color 0.25s;
	}
	.nav ul li a:hover {
		color: rgba(0, 131, 55, 1);
		transition: color 0.25s;
	}

	.contacts {
		display: flex;
		align-items: center;
		font-size: 14px;
		line-height: 16px;
	}

	.contacts img {
		margin-right: 17px;
	}

	.contacts--phones a:first-of-type {
		margin-right: 5px;
	}

	.contacts--email img {
		margin-right: 8px;
	}

	.callback {
		margin-left: 20px;
		color: #008337;
		cursor: pointer;
		transition: all 0.3s ease;
		position: relative;
		display: inline-block;
		box-shadow: inset 2px 2px 2px 0 rgb(255 255 255 / 50%), 7px 7px 20px 0 rgb(0 0 0 / 10%),
			4px 4px 5px 0 rgb(0 0 0 / 10%);
		outline: none;
		border-radius: 10px;
		width: auto;
		font-family: Arial, Helvetica, sans-serif;
		min-width: 250px;
		line-height: normal;
		font-size: 16px;
		height: 40px;
		padding: 0;
		border: none;
		background: #ffffff;
	}

	.callback::before,
	.callback::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		height: 2px !important;
		width: 0;
		background: #008337;
		box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003, 4px 4px 5px 0px #0002;
		transition: 0.4s ease all;
	}
	.callback::after {
		right: inherit;
		top: inherit;
		left: 0;
		bottom: 0;
	}

	.callback:hover {
		color: #008337;
		background: #fdfdfd;
		box-shadow: none;
	}

	.callback:hover::after,
	.callback:hover::before {
		width: 100%;
		transition: 0.8s ease all;
	}

	.socials {
		display: flex;
		align-items: center;
	}

	.socials a {
		margin-left: 24px;
	}

	.logo {
		margin: 10px 0;
		width: 140px;
		height: 55px;
	}

	.logo img {
		height: 100%;
		width: auto;
		object-fit: cover;
	}

	.lang {
		margin-left: 40px;
	}

	.mobile-menu {
		display: none;
	}

	.mobile-menu__btn {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 35px;
		height: 30px;
		cursor: pointer;
		transition: 0.4s;
	}

	.mobile-menu__icon {
		display: block;
		position: relative;
		background: #008337;
		width: 90%;
		height: 4px;
		transition: 0.4s;
	}

	.mobile-menu__icon::after,
	.mobile-menu__icon::before {
		content: '';
		display: block;
		position: absolute;
		background: #008337;
		width: 100%;
		height: 4px;
		transition: 0.4s;
	}

	.mobile-menu__icon::after {
		top: 8px;
	}
	.mobile-menu__icon::before {
		top: -8px;
	}

	.mobile-menu__checkbox {
		display: none;
	}

	.mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon {
		background: transparent;
	}

	.mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon::before,
	.mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon::after {
		top: 0;
	}

	.mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon::before {
		transform: rotate(45deg);
	}

	.mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon::after {
		transform: rotate(-45deg);
	}

	@media (max-width: 960px) {
		.main-header__top {
			display: none;
		}

		.lang {
			margin-left: 0;
		}

		.logo {
			width: 80px;
		}

		.main-header__bottom .container {
			padding-left: 15px;
		}

		.nav {
			min-width: 750px;
		}
	}

	.nav-mob {
		display: none;
	}

	@media (max-width: 768px) {
		.nav {
			display: none;
		}

		.lang {
			display: none;
		}

		.nav-mob {
			display: block;
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			max-width: 280px;
			height: 100%;
			z-index: 3;
			box-shadow: 1px 0 2px rgb(0 0 0 / 20%);
			background: #212121;
		}

		.mobile-menu {
			position: absolute;
			right: 10px;
			top: 50%;
			display: block;
			transform: translateY(-50%);
		}

		.nav-mob button {
			position: relative;
			width: 100%;
			border: none;
			background-color: #008337;
			text-align: left;
			padding: 14px 17px;
			font-weight: 600;
			cursor: pointer;
		}

		.nav-mob button span {
			position: absolute;
			right: 14px;
			top: 50%;
			font-weight: 400;
			font-size: 26px;
			transform: translateY(-50%) rotate(45deg);
		}

		.nav-mob ul {
			padding: 0;
			margin: 0;
			list-style: none;
		}

		.nav-mob ul li {
			display: flex;
			align-items: center;
			padding: 14px 17px;
			text-transform: uppercase;
			color: #fff;
		}

		.nav-mob li span {
			margin-right: 15px;
		}
	}
</style>
