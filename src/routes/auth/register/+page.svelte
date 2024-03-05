<script lang="ts">
	import { superForm } from 'sveltekit-superforms';

	export let data;
	// Client API:
	const { form: _form, errors, constraints, enhance } = superForm(data.form);
</script>

<div class="flex flex-col md:min-w-[38rem] lg:min-w-[40rem]">
	<h2 class="h2 my-2 font-semibold">Register</h2>
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
			<span>Username</span>
			<input
				class="input mb-2 p-2"
				type="text"
				name="username"
				aria-invalid={$errors.username ? 'true' : undefined}
				placeholder="Username"
				bind:value={$_form.username}
				{...$constraints.username} />
			{#if $errors.username}<p class="font-semibold text-error-600">
					{$errors.username}
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
		<label class="label mt-4">
			<span>Password again</span>
			<input
				class="input p-2"
				type="password"
				name="passwordConfirm"
				aria-invalid={$errors.passwordConfirm ? 'true' : undefined}
				placeholder="Password"
				bind:value={$_form.passwordConfirm}
				{...$constraints.passwordConfirm} />
			{#if $errors.passwordConfirm}<p class="font-semibold text-error-600">
					Passwords do not match!
				</p>{/if}
		</label>
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
