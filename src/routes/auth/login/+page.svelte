<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { superForm } from 'sveltekit-superforms';

	export let data;
	export let form;

	// Client API:
	const { form: _form, errors, constraints, enhance } = superForm(data.form);
</script>

<div class="flex w-full flex-col md:min-w-[40rem] lg:min-w-[40rem]">
	<h2 class="h2 my-2 font-semibold">Login</h2>
	{#if form?.notVerified}
		<p class="font-semibold text-error-600">Account is not email verified!</p>
	{/if}
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
			label="Password"
			type="password"
			id="password"
			placeholder="Password"
			required
			errors={$errors.password}
			bind:value={$_form.password}
			{...$constraints.password} />

		<a href="/auth/forgot-password" class="my-2">Forgot Password?</a>

		<div class="flex justify-between">
			<button class="variant-ghost-primary btn mt-4" type="submit">
				Login
			</button>
			<a href="/auth/register">
				<button class="variant-ghost-tertiary btn mt-4">Register</button>
			</a>
		</div>
	</form>
</div>
