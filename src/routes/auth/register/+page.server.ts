import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';

const zodSchema = z
	.object({
		email: z.string().email(),
		username: z.string().min(5),
		password: z.string().min(8),
		passwordConfirm: z.string()
	})
	.refine(({ password, passwordConfirm }) => password === passwordConfirm, {
		message: 'Passwords do not match',
		path: ['passwordConfirm']
	});
export const load = async () => {
	const form = await superValidate(zod(zodSchema));

	return { form };
};

export const actions = {
	default: async ({ locals, request }) => {
		const form = await superValidate(request, zod(zodSchema));

		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		try {
			await locals.pb.collection('users').create({ ...form.data });
			await locals.pb.collection('users').requestVerification(form.data.email);
		} catch (e) {
			console.error(e);
			return fail(500, { form });
		}

		redirect(303, '/');
	}
};
