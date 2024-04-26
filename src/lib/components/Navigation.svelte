<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}

	export let user: App.User | undefined;

	$: isLoggedIn = user !== undefined;

	$: classesActive = (href: string) =>
		href === $page.url.pathname ? '!variant-filled-primary' : '';

	type AppRoute = {
		href: string;
		title: string;
		noUser: boolean;
		authRequired: boolean;
		onClick: () => void;
	};

	const APP_ROUTES: AppRoute[] = [
		{
			href: '/',
			title: 'Home',
			authRequired: false,
			noUser: false,
			onClick: drawerClose
		},
		{
			href: '/auth/login',
			title: 'Login',
			authRequired: false,
			noUser: true,
			onClick: drawerClose
		},
		{
			href: '/auth/register',
			title: 'Register',
			authRequired: false,
			noUser: true,
			onClick: drawerClose
		},
		{
			href: '/example',
			title: 'Another Page',
			authRequired: true,
			noUser: false,
			onClick: drawerClose
		}
	];
</script>

<nav class="list-nav p-4" data-testId="navigation">
	<ul>
		{#each APP_ROUTES as { href, title, authRequired, noUser, onClick }}
			{#if (authRequired && isLoggedIn) || (noUser && !isLoggedIn) || (!authRequired && !noUser)}
				<ul>
					<a {href} class={classesActive(href)} on:click={onClick}>{title}</a>
				</ul>
			{/if}
		{/each}
	</ul>
</nav>
