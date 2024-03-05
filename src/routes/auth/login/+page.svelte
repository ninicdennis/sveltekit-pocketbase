<script lang="ts">
	import { superForm } from 'sveltekit-superforms';

	export let data;
	export let form;

	// Client API:
	const { form: _form, errors, constraints, enhance } = superForm(data.form);
</script>

<div class="flex flex-col md:min-w-[38rem] lg:min-w-[40rem]">
	<h2 class="h2 my-2 font-semibold">Login</h2>
	{#if form?.notVerified}
		<p class="font-semibold text-error-600">Account is not email verified!</p>
	{/if}
	<form method="POST" use:enhance>
		<label class="label">
			<span>Email</span>
			<input
				class="input p-2"
				type="text"
				name="email"
				aria-invalid={$errors.email ? 'true' : undefined}
				placeholder="Email"
				bind:value={$_form.email}
				{...$constraints.email} />
			{#if $errors.email}<p class="font-semibold text-error-600">
					{$errors.email}
				</p>{/if}
		</label>
		<label class="label mt-4">
			<span>Password</span>
			<input
				class="input p-2"
				type="password"
				name="password"
				aria-invalid={$errors.password ? 'true' : undefined}
				placeholder="Password"
				bind:value={$_form.password}
				{...$constraints.password} />
			{#if $errors.password}<p class="font-semibold text-error-600">
					{$errors.password}
				</p>{/if}
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
