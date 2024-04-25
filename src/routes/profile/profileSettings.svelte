<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import {
		Avatar,
		LightSwitch,
		type ModalSettings
	} from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';

	export let username: string;
	export let name: string;
	export let email: string;

	const modalStore = getModalStore();

	const modal: ModalSettings = {
		type: 'component',
		component: 'AvatarUpdateModal'
	};
</script>

<h2 class="h2 font-bold">Profile Settings</h2>

<div class="card mt-4 flex flex-col items-center p-4">
	<div class="card-header mb-4 text-center">
		<h3 class="h3 font-semibold">Avatar</h3>
	</div>
	<Avatar src="invalid-image.jpg" initials="AB" width="w-32" rounded="false" />

	<button
		class="variant-filled-primary btn mt-4"
		on:click={() => modalStore.trigger(modal)}>
		Change Avatar
	</button>
</div>

<div class="card mb-4 mt-4 p-4">
	<div class="card-header">
		<h3 class="h3 text-center font-semibold">General</h3>
	</div>
	<div class="mt-4 flex flex-col items-center justify-center">
		<div class="pt-2s flex min-w-80 items-center justify-between pb-2">
			<p class="font-bold">Theme</p>
			<LightSwitch class="self-center" rounded="rounded-full" />
		</div>
		<div class="min-w-80 max-w-xl">
			<Input disabled label="Name" id="name" value={name} placeholder="Name" />
		</div>
		<div class="min-w-80 max-w-xl">
			<Input
				disabled
				label="Username"
				id="username"
				value={username}
				placeholder="Username" />
		</div>
		<div class="min-w-80 max-w-xl">
			<Input
				disabled
				label="E-mail"
				id="email"
				value={email}
				placeholder="E-mail" />
		</div>
	</div>
</div>
