<script lang="ts">
	import {
		AppShell,
		AppBar,
		initializeStores,
		Drawer,
		getDrawerStore,
		Avatar,
		storePopup,
		popup,
		type PopupSettings,
		ProgressRadial,
		Modal,
		type ModalComponent
	} from '@skeletonlabs/skeleton';
	import '../app.pcss';
	import {
		computePosition,
		autoUpdate,
		offset,
		shift,
		flip,
		arrow
	} from '@floating-ui/dom';

	import Navigation from '$lib/components/Navigation.svelte';
	import ProfilePopup from '$lib/components/ProfilePopup.svelte';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import AvatarUpdate from '$lib/components/profile/AvatarUpdate.svelte';

	const modalRegistry: Record<string, ModalComponent> = {
		AvatarUpdateModal: { ref: AvatarUpdate }
	};

	export let data: { pathname: string; user: App.User | undefined };

	$: isLoggedIn = data.user !== undefined;

	const duration = 300;
	const delay = duration + 100;
	const y = 10;

	const transitionIn = { easing: cubicOut, y, duration, delay };
	const transitionOut = { easing: cubicIn, y: -y, duration };
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	initializeStores();
	const drawerStore = getDrawerStore();

	const drawerOpen = () => drawerStore.open({ width: 'w-3/5' });

	const popupAvatar: PopupSettings = {
		event: 'click',
		target: 'popupAvatar',
		placement: 'bottom'
	};

	let isLoading = false;

	beforeNavigate(() => (isLoading = true));
	afterNavigate(() => (isLoading = false));
</script>

<svelte:head>
	<title>SvelteKit Template</title>
</svelte:head>

<Drawer class="bg-surface-500">
	<div class="flex items-center justify-between bg-secondary-500">
		<h2 class="p-4 font-bold text-white">Navigation</h2>
	</div>
	<hr />
	<Navigation user={data.user} />
</Drawer>

<Modal components={modalRegistry} />

<AppShell slotSidebarLeft="dark:bg-surface-800 bg-surface-100 w-0 lg:w-64">
	<svelte:fragment slot="header">
		<AppBar background="bg-primary-500" padding="p-2">
			<svelte.fragment slot="lead" class="flex justify-between">
				<button class="btn btn-sm lg:hidden" on:click={drawerOpen}>
					<span>
						<Icon icon="mingcute:menu-fill" height={28} />
					</span>
				</button>
				<h1 class="h3 self-center pl-2 font-semibold text-white">
					SvelteKit Template
				</h1>
			</svelte.fragment>
			<svelte:fragment slot="trail">
				{#if isLoggedIn && data.user}
					<div use:popup={popupAvatar}>
						<Avatar
							width="w-12"
							border="border-2 hover:!border-primary-500"
							cursor="cursor-pointer" />
					</div>
					<ProfilePopup user={data.user} />
				{:else}
					<a href="/auth/login">
						<button class="variant-filled-primary btn">Login</button>
					</a>
					<a href="/auth/register">
						<button class="variant-filled-tertiary btn">Register</button>
					</a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation user={data.user} />
	</svelte:fragment>
	{#key data.pathname}
		<div in:fly={transitionIn} out:fly={transitionOut} class="h-full">
			{#if isLoading}
				<div class="flex h-full w-full items-center justify-center">
					<ProgressRadial />
				</div>
			{:else}
				<slot />
			{/if}
		</div>
	{/key}
</AppShell>
