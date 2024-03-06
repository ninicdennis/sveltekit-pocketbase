import { setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { errorMessage } from '$lib/utils.js';

const zodSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8)
});

export const load = async () => {
	const form = await superValidate(zod(zodSchema));

	return { form };
};

export const actions = {
	default: async ({ locals, request }) => {
		const form = await superValidate(request, zod(zodSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await locals.pb
				.collection('users')
				.authWithPassword(form.data.email, form.data.password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return {
					form,
					notVerified: true
				};
			}
		} catch (err) {
			const { message } = errorMessage(err);

			if (message === 'Failed to authenticate.') {
				return setError(form, 'email', 'Invalid email or password!');
			}
			return fail(500, {
				form,
				error: 'Internal Server Error. Please try again'
			});
		}

		redirect(303, '/');
	}
};
