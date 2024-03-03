import { superValidate } from 'sveltekit-superforms';
import { joi } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import Joi from 'joi';

// Define outside the load function so the adapter can be cached
const schema = Joi.object({
	email: Joi.string().email().required()
});

export const load = async () => {
	const form = await superValidate(joi(schema));

	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, joi(schema));

		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated form.data

		// Yep, return { form } here too
		return { form };
	}
};
