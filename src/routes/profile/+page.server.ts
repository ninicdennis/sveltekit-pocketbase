import { errorMessage } from '$lib/utils.js';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import { withFiles } from 'sveltekit-superforms';
import getAvatarUrl from '$lib/components/getAvatar.js';

const MAX_FILE_SIZE = 5000000;

const avatarSchema = z.object({
	avatar: z
		.instanceof(File, { message: 'Please upload a file.' })
		.refine((f) => f.size < MAX_FILE_SIZE, 'Max 5mb upload size.')
});

export const load = async ({ locals }) => {
	const form = await superValidate(zod(avatarSchema));
	if (locals.user) {
		const avatar = getAvatarUrl(locals.pb, locals.user);
		return { form, avatar };
	}

	return { form, avatar: null };
};

export const actions = {
	updateAvatar: async ({ locals, request }) => {
		const form = await superValidate(request, zod(avatarSchema));
		if (!form.valid) {
			return fail(400, withFiles({ form }));
		}

		if (locals.user) {
			try {
				await locals.pb.collection('users').update(locals?.user?.id, form.data);
			} catch (err) {
				const { data } = errorMessage(err);

				console.error(data);
				return fail(500, withFiles({ form }));
			}
		}

		return { success: true, ...withFiles({ form }) };
	}
};
