<script lang="ts">
	import { superForm } from 'sveltekit-superforms';

	export let data;

	// Client API:
	const { form, errors, constraints, enhance } = superForm(data.form);
</script>

<div class="flex flex-col md:min-w-[38rem] lg:min-w-[40rem]">
	<h2 class="h2 my-2 font-semibold">Login</h2>
	<form method="POST" use:enhance>
		<label class="label">
			<span>Email</span>
			<input
				class="input p-2"
				type="text"
				name="email"
				aria-invalid={$errors.email ? 'true' : undefined}
				placeholder="Email"
				bind:value={$form.email}
				{...$constraints.email} />
			{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
		</label>
		<label class="label mt-4">
			<span>Password</span>
			<input
				class="input p-2"
				type="password"
				name="password"
				aria-invalid={$errors.password ? 'true' : undefined}
				placeholder="Password"
				bind:value={$form.password}
				{...$constraints.password} />
			{#if $errors.password}<span class="invalid">{$errors.password}</span>{/if}
		</label>

		<a href="/auth/forgot-password" class="my-2">Forgot Password?</a>

		<div class="flex justify-between">
			<button class="variant-filled-primary btn mt-4" type="submit">
				Login
			</button>
			<a href="/auth/register">
				<button class="variant-filled-secondary btn mt-4">Register</button>
			</a>
		</div>
	</form>
</div>
