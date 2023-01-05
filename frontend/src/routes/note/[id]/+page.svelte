<script lang="ts">
	import type { NotePublic } from '$lib/api'
	import { get, info } from '$lib/api'
	import { decrypt, getKeyFromString } from '$lib/crypto'
	import Button from '$lib/ui/Button.svelte'
	import ShowNote from '$lib/ui/ShowNote.svelte'
	import { onMount } from 'svelte'

	export let id: string
	export let data;

	let password: string
	let note: NotePublic | null = null
	let exists = false

	let loading = true
	let error = false

	onMount(async () => {
		try {
			loading = true
			error = null
			password = window.location.hash.slice(1)
			await info(data.id)
			exists = true
		} catch {
			exists = false
		} finally {
			loading = false
		}
	})

	async function show() {
		try {
			error = false
			loading = true
			const dataContent = note || (await get(data.id)) // Don't get the content twice on wrong password.
			const key = await getKeyFromString(password)
			dataContent.contents = await decrypt(dataContent.contents, key)
			note = dataContent
		} catch {
			error = true
		} finally {
			loading = false
		}
	}
</script>

{#if !loading}
	{#if !exists}
		<p class="error-text" data-testid="note-not-found">
			note was not found or was already deleted.
		</p>
	{:else if note && !error}
		<ShowNote {note} />
	{:else}
		<form on:submit|preventDefault={show}>
			<fieldset>
				<p>click below to show and delete the note if the counter has reached it's limit</p>
				<Button type="submit" data-testid="button-show">show note</Button>
				{#if error}
					<br />
					<p class="error-text">
						wrong password. could not decipher. probably a broken link. note was destroyed.
						<br />
					</p>
				{/if}
			</fieldset>
		</form>
	{/if}
{/if}
{#if loading}
	<p>loading...</p>
{/if}
