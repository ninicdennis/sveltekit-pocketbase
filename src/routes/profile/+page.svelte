<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import ProfileSettings from './profileSettings.svelte';
	import ProfileSecurity from './profileSecurity.svelte';
</script>

<div class="flex w-full justify-center">
	<Container classStyle="flex flex-col w-full">
		<ProfileSettings />
		<ProfileSecurity />
	</Container>
</div>
