import { superValidate } from 'sveltekit-superforms';
import { joi } from 'sveltekit-superforms/adapters';
import { fail, redirect } from '@sveltejs/kit';
import Joi from 'joi';

// Define outside the load function so the adapter can be cached
const schema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(8).required()
});

export const load = async () => {
	const form = await superValidate(joi(schema));

	return { form };
};

export const actions = {
	default: async ({ locals, request }) => {
		const form = await superValidate(request, joi(schema));

		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		try {
			await locals.pb
				.collection('users')
				.authWithPassword(form.data.email, form.data.password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				console.log('not verified');
				return {
					form,
					notVerified: true
				};
			}
		} catch (e) {
			console.error(e);
			return fail(500, { form });
		}

		redirect(303, '/');
	}
};
