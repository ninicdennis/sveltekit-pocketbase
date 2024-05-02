<script lang="ts">
	import Icon from '@iconify/svelte';
	import Modal from '../Modal.svelte';
	import { Avatar, FileDropzone } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';

	//const modalStore = getModalStore();
	let files: FileList;
	let image: string = '';

	const onChange = (e: Event) => {
		const target = e.target as HTMLInputElement;
		const files = target?.files;
		if (files && files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			image = src;
		}
	};
</script>

<Modal>
	<div class="flex flex-col items-center justify-center gap-4">
		<h2 class="h3 pl-4 pr-4 text-center font-semibold">
			Avatar Update Preview
		</h2>
		<Avatar
			src={image}
			initials="AB"
			width="w-64"
			rounded="false"
			class="mb-4" />

		<FileDropzone
			name="files"
			bind:files
			on:change={onChange}
			accept="image/*"
			class="max-w-lg">
			<svelte:fragment slot="lead">
				<div class="flex items-center justify-center">
					<Icon icon="mdi:file-outline" />
				</div>
			</svelte:fragment>
			<svelte:fragment slot="message">Drop your new image here</svelte:fragment>
			<svelte:fragment slot="meta">(png, jpg)</svelte:fragment>
		</FileDropzone>
		<div class="flex w-full justify-between">
			<button class="variant-filled-primary btn">Save</button>
			<!--<button
				class="variant-filled-tertiary btn"
				on:click={() => modalStore.close()}>
				Cancel
			</button>-->
		</div>
	</div>
</Modal>
