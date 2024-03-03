export const load = ({ locals, url }) => {
	const { pathname } = url;
	if (locals.user) {
		return { user: locals.user, pathname };
	}

	return { user: undefined, pathname };
};
