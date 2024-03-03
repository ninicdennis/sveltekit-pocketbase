<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={drawerClose}>Homepage</a></li>
		<li><a href="/example" on:click={drawerClose}>Another Page</a></li>
		<li><a href="/auth/login" on:click={drawerClose}>Login</a></li>
		<li><a href="/auth/register" on:click={drawerClose}>Register</a></li>
	</ul>
</nav>
