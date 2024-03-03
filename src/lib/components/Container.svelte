<script lang="ts">
	export let classStyle: string = '';
	let item = 0;
</script>

<div class={`container self-center p-4 ${classStyle}`}>
	<slot />
</div>
