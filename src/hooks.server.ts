import { serializedNonPOJOs } from '$lib/utils';
import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/public';

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(env.PUBLIC_POCKETBASE_HOST || '');
	event.locals.pb.authStore.loadFromCookie(
		event.request.headers.get('cookie') || ''
	);

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializedNonPOJOs(event.locals.pb.authStore.model);
	} else {
		event.locals.user = undefined;
	}

	const response = await resolve(event);

	response.headers.set(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({ secure: false })
	);

	return response;
};
