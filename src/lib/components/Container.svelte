<script lang="ts">
	export let classStyle: string = '';
</script>

<div class={`container self-center p-4 ${classStyle}`}>
	<slot />
</div>
