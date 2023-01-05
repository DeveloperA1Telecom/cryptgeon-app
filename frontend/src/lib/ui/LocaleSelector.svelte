<script>
    import { createEventDispatcher } from 'svelte';
    export let value = 'ru';
    const dispatch = createEventDispatcher();
    function handleLocaleChange(event) {
        event.preventDefault();
        dispatch('locale-changed', event.target.value);
    }
</script>

<style>
    .ls{
    color: inherit;
    background: none;
    background-color: #008337;
    border: none;
    outline: none;
    text-align: center;
    }
    .locale-selector {
        display: flex;
        justify-content: center;
    }
    .select {
        margin: 0 0.8rem 0.2rem;
    }
    .locale-selector select{
        background: none;
        border: none;
        outline: none;
        font-size: 16px;
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color: inherit;
    }
    .locale-selector select::-ms-expand {
        display: none;
    }
    nav.svelte-s9hyqb {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-left: auto;
}
.svelte-s9hyqb{
    margin-left: 1em;
}
</style>
<nav class="svelte-s9hyqb">
<a href="https://a1call.me" target="_blank" rel="noopener" class="svelte-s9hyqb">A1 Telecom</a>
<a href="https://blog.a1call.me" target="_blank" rel="noopener" class="svelte-s9hyqb">Blog</a>
</nav>
<div class="locale-selector">
    <div class="select">
        <select value={value} on:change={handleLocaleChange}>
            <option class="ls" value="ru">Русский</option>
            <option class="ls" value="urk">Український</option>
            <option class="ls" value="en">English</option>
            <option class="ls" value="de">Deutsch</option>
        </select>
    </div>
</div>
