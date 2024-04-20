<script lang="ts">
	import Icon from '@iconify/svelte';
	import Modal from './Modal.svelte';
	import { Avatar, FileDropzone } from '@skeletonlabs/skeleton';

	let files: FileList;
	let image: string = '';

	const onChange = (e: Event) => {
		if (e.target) {
		}
	};
</script>

<Modal>
	<div class="flex flex-col items-center justify-center gap-4">
		<h2 class="h2 font-semibold">Avatar Update Preview</h2>
		<Avatar src={image} initials="AB" width="w-64" rounded="false" />

		<FileDropzone name="files" bind:files on:change={onChange} accept="image/*">
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
			<button class="variant-filled-tertiary btn">Cancel</button>
		</div>
	</div>
</Modal>
