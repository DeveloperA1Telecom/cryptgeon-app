<script lang="ts">
	import { _ } from '$lib/i18n'
	import { create, Note, PayloadToLargeError } from '$lib/api'
	import { encrypt, getKeyFromString, getRandomBytes, Hex } from '$lib/crypto'
	import Button from '$lib/ui/Button.svelte'
	import FileUpload from '$lib/ui/FileUpload.svelte'
	import MaxSize from '$lib/ui/MaxSize.svelte'
	import Switch from '$lib/ui/Switch.svelte'
	import TextArea from '$lib/ui/TextArea.svelte'
	import TextInput from '$lib/ui/TextInput.svelte'
	import PrivacyPolicy from '$lib/ui/PrivacyPolicy.svelte'
	import { blur, fly } from 'svelte/transition'

	let note: Note = {
		contents: '',
		meta: { type: 'text' },
		views: 1,
		expiration: 60,
	}
	let result: { password: string; id: string } | null = null
	let advanced = false
	let program = false
	let privacy_policy = false
	let file = false
	let type = false
	let message = ''
	let loading = false
	let error: string | null = null
	let result_element
	$: if (!advanced) {
		note.views = 1
		type = false
	}

	$: {
		let fraction: string
		fraction = type ? `${note.expiration} ${$_('app.minute')}` : `${note.views} ${$_('app.view')}`
		message = `${$_('app.text1')} ` + fraction
	}

	$: note.meta.type = file ? 'file' : 'text'

	$: if (!file) {
		note.contents = ''
	}

	async function submit() {
		try {
			error = null
			loading = true
			const password = Hex.encode(getRandomBytes(32))
			const key = await getKeyFromString(password)
			const data: Note = {
				contents: await encrypt(note.contents, key),
				meta: note.meta,
			}
			// @ts-ignore
			if (type) data.expiration = parseInt(note.expiration)
			// @ts-ignore
			else data.views = parseInt(note.views)

			const response = await create(data)
			result = {
				password: password,
				id: response.id,
			}

			document.body.scrollIntoView({
				behavior: 'smooth',
			})
		} catch (e) {
			if (e instanceof PayloadToLargeError) {
				error = 'could not create not. note is to big'
			} else {
				error = 'could not create note. please try again.'
			}
		} finally {
			loading = false
		}
	}

	function reset() {
		window.location.reload()
	}
</script>

<!-- <div id="before-textarea" /> -->
{#if result}
	<div transition:fly={{ y: 200, duration: 2000 }}>
		<TextInput
			type="text"
			readonly
			label={$_('app.share')}
			value="{window.location.origin}/note/{result.id}#{result.password}"
			copy
			data-testid="note-share-link"
			bind:this={result_element}
		/>
	</div>
	<p>
		<b lang="en">{$_('app.text2')}</b>
		<br />
		{$_('app.text3')}
		<br />
		{$_('app.text4')}
	</p>
	<Button on:click={reset}>{$_('app.new')}</Button>
{:else}
	<p class="info">
		{$_('app.subtitle')}
	</p>
	<form on:submit|preventDefault={submit}>
		<fieldset disabled={loading}>
			{#if file}
				<FileUpload on:file={(f) => (note.contents = f.detail)} />
			{:else}
				<TextArea bind:value={note.contents} placeholder="..." data-testid="input-note" />
			{/if}

			<div class="bottom">
				<Switch class="file" label={$_('app.file')} bind:value={file} />
				<Switch class="advanced" label={$_('app.option')} bind:value={advanced} />
				<Switch class="advanced program" label={$_('app.program')} bind:value={program} />
				<Switch
					class="privacy_policy"
					label={$_('app.privacy_policy')}
					bind:value={privacy_policy}
				/>
				<div class="grow" />
				<div class="tr">
					<Button type="submit" data-testid="button-create">{$_('app.link')}</Button>
				</div>
			</div>

			{#if error}
				<div class="error-text">{error}</div>
			{/if}

			<p class="textb">
				{#if loading}
					loading...
				{:else}
					{message}
				{/if}
			</p>
			{#if advanced}
				<div transition:blur={{ duration: 250 }}>
					<br />
					<div class="fields">
						<TextInput
							type="number"
							label={$_('app.btn1')}
							bind:value={note.views}
							disabled={type}
							max={100}
						/>
						<div class="middle-switch">
							<Switch bind:value={type} color={false} />
						</div>
						<TextInput
							type="number"
							label={$_('app.btn2')}
							bind:value={note.expiration}
							disabled={!type}
							max={1440}
						/>
					</div>
				</div>
			{/if}
			{#if program}
				<p class="font14">
					{$_('app.worktitle')}<br />
					{$_('app.worktext')}
				</p>
				<p class="font14">
					{$_('app.text5')}<br />
					{$_('app.text6')}
				</p>
			{/if}
			{#if privacy_policy}
				<div class="popup_wrapper" transition:blur={{ duration: 250 }}>
					<div class="popup_overlay" on:click={() => (privacy_policy = false)} />
					<div class="popup_content">
						<PrivacyPolicy />
					</div>
				</div>
			{/if}
		</fieldset>
	</form>
{/if}

<style>
	.bottom {
		display: flex;
		align-items: flex-start;
		margin-top: 0.5rem;
	}

	.bottom :global(.file) {
		margin-right: 0.5rem;
	}

	.grow {
		flex: 1;
	}

	.middle-switch {
		margin: 0 1rem;
	}

	.error-text {
		margin-top: 0.5rem;
	}

	.fields {
		display: flex;
		align-items: flex-end;
	}

	.info {
		font-size: 18px;
		line-height: 21px;
	}
	.font14 {
		font-size: 14px;
	}
	.textb {
		margin-top: 0;
		font-size: 14px;
	}
</style>
