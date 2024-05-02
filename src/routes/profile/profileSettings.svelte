<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	export let username: string;
	export let name: string;
	export let email: string;
</script>

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
