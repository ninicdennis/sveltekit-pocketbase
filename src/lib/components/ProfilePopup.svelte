<script lang="ts">
	export let user: App.User;

	const { username } = user;
</script>

<div class="card w-72 p-4 shadow-xl" data-popup="popupAvatar">
	<p class="mb-2 font-bold">Hello, {username}</p>

	<hr />
	<nav class="list-nav">
		<ul>
			<li><a href="/profile">Profile</a></li>
			<li><a href="/">Dashboard</a></li>
			<li class=" flex items-center justify-center">
				<form action="/auth/logout" method="POST">
					<button class="variant-filled-primary btn">Logout</button>
				</form>
			</li>
		</ul>
	</nav>
	<div class="bg-surface-100-800-token arrow" />
</div>
