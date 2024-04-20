<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}

	export let user: any | undefined;

	$: isLoggedIn = user !== undefined;
</script>

<nav class="list-nav p-4" data-testId="navigation">
	<ul>
		<ul><a href="/" on:click={drawerClose}>Home</a></ul>

		{#if !isLoggedIn}
			<li><a href="/auth/login" on:click={drawerClose}>Login</a></li>
			<li><a href="/auth/register" on:click={drawerClose}>Register</a></li>
		{:else}
			<li><a href="/example" on:click={drawerClose}>Another Page</a></li>
		{/if}
	</ul>
</nav>
