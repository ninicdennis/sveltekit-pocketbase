<script lang="ts">
	import { Avatar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<h2 class="h2 font-bold">Profile Settings</h2>

<div class="card flex flex-col items-center p-4">
	<div class="card-header mb-4 text-center">
		<h3 class="h3 font-semibold">Avatar</h3>
	</div>
	<Avatar src="invalid-image.jpg" initials="AB" width="w-32" rounded="false" />

	<button class="variant-filled-primary btn mt-4">Change Avatar</button>
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
			<label class="label mt-2 flex flex-col">
				<span class="font-bold">Username</span>
				<input
					class="input mb-2 p-2"
					type="text"
					name="username"
					placeholder="Username" />
			</label>
		</div>
		<div class="min-w-80 max-w-xl">
			<label class="label mt-2 flex flex-col">
				<span class="font-bold">E-mail</span>
				<input
					class="input mb-2 p-2"
					type="text"
					name="email"
					placeholder="E-mail" />
			</label>
		</div>
	</div>
</div>
