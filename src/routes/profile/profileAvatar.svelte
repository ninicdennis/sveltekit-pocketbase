<script lang="ts">
	import Icon from '@iconify/svelte';
	import {
		Avatar,
		FileDropzone,
		type ToastSettings
	} from '@skeletonlabs/skeleton';
	import { superForm, type SuperValidated } from 'sveltekit-superforms';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ActionResult } from '@sveltejs/kit';

	export let avatar: string;
	export let form: SuperValidated<{ avatar: File }>;

	const onResult = ({ result }: { result: ActionResult }) => {
		if (result.type === 'success') {
			editAvatar = false;
			toastStore.trigger(avatarSuccessToast);
		}
	};

	const {
		form: _form,
		errors,
		constraints,
		enhance
	} = superForm(form, { onResult });
	const toastStore = getToastStore();

	$: image = avatar;
	$: editAvatar = false;

	const avatarSuccessToast: ToastSettings = {
		message: 'Updated Avatar Successfully!',
		background: 'variant-filled-primary'
	};

	const onChange = (e: Event) => {
		const target = e.target as HTMLInputElement;
		const files = target?.files;
		if (files && files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			image = src;

			return src;
		}
		editAvatar = true;
	};

	const onInput = (e: CustomEvent<any>) =>
		// @ts-expect-error this is true typing is weird
		($_form.image = e.currentTarget?.files?.item(0) as File);
</script>

<form
	method="POST"
	action="?/updateAvatar"
	enctype="multipart/form-data"
	use:enhance>
	<h2 class="h2 font-bold">Profile Settings</h2>

	<div class="card mt-4 flex flex-col items-center p-4">
		<div class="card-header mb-4 text-center">
			<h3 class="h3 font-semibold">Avatar</h3>
		</div>
		{#if editAvatar}
			<Avatar src={image} initials="AB" width="w-32" rounded="false" />
			{#if $errors.avatar}
				<p class="mb-2 mt-2 font-semibold text-error-600">{$errors.avatar}</p>
			{:else}
				<div class="mb-4 mt-4" />
			{/if}
			<FileDropzone
				name="avatar"
				on:input={onInput}
				on:change={onChange}
				accept="image/*"
				class="max-w-96">
				<svelte:fragment slot="lead">
					<div class="flex items-center justify-center">
						<Icon icon="mdi:file-outline" />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="message">
					Drop your new image here
				</svelte:fragment>
				<svelte:fragment slot="meta">(png, jpg)</svelte:fragment>
			</FileDropzone>

			<div class="mt-4 flex gap-36 lg:gap-52">
				<button type="submit" class="variant-filled-primary btn">Save</button>
				<button
					class="variant-filled-tertiary btn"
					on:click={() => (editAvatar = false)}>
					Cancel
				</button>
			</div>
		{:else}
			<Avatar src={image} initials="AB" width="w-32" rounded="false" />

			<button
				class="variant-filled-primary btn mt-4"
				on:click={() => (editAvatar = true)}>
				Change Avatar
			</button>
		{/if}
	</div>
</form>
