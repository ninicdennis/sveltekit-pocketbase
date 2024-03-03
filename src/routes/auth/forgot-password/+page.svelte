<script lang="ts">
	import { superForm } from 'sveltekit-superforms';

	export let data;

	// Client API:
	const { form, errors, constraints, enhance } = superForm(data.form);
</script>

<div class="flex flex-col md:min-w-[38rem] lg:min-w-[40rem]">
	<h2 class="h2 my-2 font-semibold">Password Reset</h2>
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

		<div class="flex justify-between">
			<button class="variant-filled-primary btn mt-4" type="submit">
				Send reset link
			</button>
		</div>
	</form>
</div>
