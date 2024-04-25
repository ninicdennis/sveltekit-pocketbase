<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { superForm } from 'sveltekit-superforms';

	export let data;
	// Client API:
	const { form: _form, errors, constraints, enhance } = superForm(data.form);
</script>

<div class="flex flex-col md:min-w-[38rem] lg:min-w-[40rem]">
	<h2 class="h2 my-2 font-semibold">Register</h2>
	<form method="POST" use:enhance>
		<Input
			label="Email"
			type="email"
			id="email"
			placeholder="Email"
			required
			errors={$errors.email}
			bind:value={$_form.email}
			{...$constraints.email} />

		<Input
			label="Username"
			type="text"
			id="username"
			placeholder="Username"
			required
			errors={$errors.username}
			bind:value={$_form.username}
			{...$constraints.username} />

		<Input
			label="Password"
			type="password"
			id="password"
			placeholder="Password"
			required
			errors={$errors.password}
			bind:value={$_form.password}
			{...$constraints.password} />

		<Input
			label="Password again"
			type="password"
			id="passwordConfirm"
			placeholder="Password again"
			required
			errors={$errors.passwordConfirm}
			bind:value={$_form.passwordConfirm}
			{...$constraints.passwordConfirm} />
		<div class="flex justify-between">
			<button class="variant-filled-primary btn mt-4" type="submit">
				Register
			</button>
			<a href="/auth/login">
				<button class="variant-filled-secondary btn mt-4">Login</button>
			</a>
		</div>
	</form>
</div>
