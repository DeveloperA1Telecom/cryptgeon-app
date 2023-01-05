<script>
    import { _ } from '$lib/i18n'
    import { slide } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    let className;
	export { className as class };
    export let value = 'ru';
    const dispatch = createEventDispatcher();
    let visible = false;
    const options = [
        {
            value: 'ru',
            label: 'RUS'
        },
        {
            value: 'ua',
            label: 'UKR'
        },
        {
            value: 'en',
            label: 'ENG'
        },
        {
            value: 'de',
            label: 'DEU'
        },
    ]
    let currentLocale = options.filter(item => item.value === value).shift()

    function handleClick(event) {
        currentLocale = options.filter(item => item.label === event.target.textContent).shift()
        visible = !visible
        dispatch('locale-changed', currentLocale.value);
    }
    const handleOpen = () => {
        visible = !visible
    }
</script>

<div class={className}>
    <input type="hidden" name="locale" value={value}>
    <button class="locale-selector__button" on:click={handleOpen}>
        <!-- <span class="material-icons">language</span> -->
        {currentLocale.label}
    </button>
    {#if visible}
        <ul in:slide="{{ duration: 400 }}" out:slide="{{ duration: 400 }}">
            {#each options as loc }
                {#if loc !== currentLocale}
                    <li on:click={handleClick}>{loc.label}</li>
                {/if}
            {/each}
        </ul>
    {/if}
</div>

<style>

.main-header__locales {
    margin-bottom: 10px;
    position: relative;
    z-index: 2;
}

.locale-selector__button {
    border: none;
    width: 60px;
    box-shadow: 1px 1px 5px 1px #7e7878;
    border-radius: 10px;
    margin-left: 0px;
    padding: 0px;
    color: #000000;
    background: #ffffff;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
}

ul {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    background-color: #fff;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    max-height: 200px;
    border: 1px solid #dadada;
    border-top: none;
}

ul li {
    margin: 0;
    padding: 4px 4px 4px 3px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.1;
    cursor: pointer;
    text-decoration: none;
    color: #333;
    text-align: center;
    transition: background 0.25s;
}

ul li:hover {
    background: #008337;
    color: #fff;
    transition: background 0.25s;
}

.footer-locales {
    position: relative;
    z-index: 2;
}

.footer-locales .locale-selector__button {
    background-color: #008337;
    color: #fff;
    box-shadow: none;
}

</style>
