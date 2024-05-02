import getAvatarUrl from '$lib/components/getAvatar.js';

export const load = ({ locals, url }) => {
	const { pathname } = url;
	if (locals.user) {
		const avatar = getAvatarUrl(locals.pb, locals.user);

		return { user: locals.user, pathname, avatar };
	}

	return { user: undefined, pathname, avatar: undefined };
};
