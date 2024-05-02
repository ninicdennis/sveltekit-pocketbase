<script lang="ts">
	import Icon from '@iconify/svelte';
	import {
		Avatar,
		FileDropzone,
		type ToastSettings
	} from '@skeletonlabs/skeleton';
	import { superForm, type SuperValidated } from 'sveltekit-superforms';
	import { getToastStore } from '@skeletonlabs/skeleton';

	export let avatar: string;
	export let form: SuperValidated<{ avatar: File }>;

	const onSubmit = () => {
		editAvatar = false;
		toastStore.trigger(avatarSuccessToast);
	};

	const {
		form: _form,
		errors,
		constraints,
		enhance
	} = superForm(form, { onSubmit });
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
			<h2 class="h3 pl-4 pr-4 text-center font-semibold">Preview</h2>
			<Avatar
				src={image}
				initials="AB"
				width="w-32"
				rounded="false"
				class="mb-4 mt-4" />

			<FileDropzone
				name="avatar"
				on:input={onInput}
				on:change={onChange}
				accept="image/*"
				class="max-w-lg">
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
			<div class="flex w-full justify-between">
				<button type="submit" class="variant-filled-primary btn">Save</button>
				<button
					class="variant-filled-tertiary btn"
					on:click={() => (editAvatar = false)}>
					Cancel
				</button>
			</div>{:else}
			<Avatar src={image} initials="AB" width="w-32" rounded="false" />

			<button
				class="variant-filled-primary btn mt-4"
				on:click={() => (editAvatar = true)}>
				Change Avatar
			</button>
		{/if}
	</div>
</form>
