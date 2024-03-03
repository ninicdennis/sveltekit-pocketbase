import { superValidate } from 'sveltekit-superforms';
import { joi } from 'sveltekit-superforms/adapters';
import { fail, redirect } from '@sveltejs/kit';
import Joi from 'joi';

// Define outside the load function so the adapter can be cached
const schema = Joi.object({
	email: Joi.string().email().required(),
	username: Joi.string().min(5).required(),
	password: Joi.string().min(8).required(),
	passwordConfirm: Joi.string().valid(Joi.ref('password')).required()
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
			await locals.pb.collection('users').create({ ...form.data });
			// await locals.pb.collection('users').requestVerification(form.data.email);
		} catch (e) {
			console.error(e);
			return fail(500, { form });
		}

		redirect(303, '/');
		// Yep, return { form } here too
		return { form };
	}
};
