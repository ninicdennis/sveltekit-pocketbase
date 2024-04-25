<script lang="ts">
	import type { InputConstraint } from 'sveltekit-superforms';

	export let label: string = '';
	export let id: string;
	export let value = '';
	export let placeholder = '';
	export let disabled = false;
	export let required = false;
	export let errors: string[] | undefined = undefined;
	export let constraints: InputConstraint | undefined = undefined;
</script>

<!-- Note: type attribute on input elements must be hard coded: https://stackoverflow.com/questions/66191533/how-can-i-have-an-input-type-attribute-that-varies-on-instantiations-of-a-sve/66191989#66191989 -->

<label class="label mt-4 flex flex-col">
	<span class="font-bold">{label}</span>
	<input
		{id}
		bind:value
		{disabled}
		{required}
		name={id}
		{placeholder}
		aria-invalid={errors ? 'true' : undefined}
		{...constraints}
		{...$$restProps}
		class="input mb-2 p-2" />
	{#if errors}<p class="font-semibold text-error-600">
			{errors}
		</p>{/if}
</label>
