<script>
    import { _ } from '$lib/i18n'
    import { slide } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
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

<div class="locales-mob">
    <input type="hidden" name="locale" value={value}>
    <button class="locale-selector__button" on:click={handleOpen}>
        <span class="material-icons">language</span>
        {$_('app.language')}:
        <span class={visible ? 'rotate arrow material-icons' : 'material-icons arrow'}>
            expand_more
            </span>
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

.locales-mob {
    position: relative;
    z-index: 2;
}

.locale-selector__button {
    border: none;
    width: 60px;
    margin-left: 0px;
    padding: 14px 17px;
    color: #fff;
    background: transparent;
    font-size: 16px;
    line-height: 1;
    text-align: center;
    font-weight: 400;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    text-transform: uppercase;
}

.locale-selector__button span {
    margin-right: 15px;
}

.locale-selector__button .arrow {
    transition: transform 0.25s;
    margin-left: auto;
    margin-right: 0;
}

.locale-selector__button .rotate {
    transform: rotate(180deg);
    transition: transform 0.25s;
}

.locale-selector__button:hover {
    background-color: #008337;
}

ul {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: transparent;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    max-height: 200px;
    border: none;
}

ul li {
    margin: 0;
    padding: 14px 17px 14px 56px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.1;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    transition: background 0.25s;
}

ul li:hover {
    background: #008337;
    color: #333;
    transition: background 0.25s;
}
</style>
