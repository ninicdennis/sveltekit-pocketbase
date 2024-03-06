import type { ClientResponseError } from 'pocketbase';

export const serializedNonPOJOs = (obj: object) => structuredClone(obj);

type ErrorObject = {
	message: string;
	data: { email?: object; username?: object };
};

export const errorMessage = (error: unknown): ErrorObject => {
	const {
		message,
		data: { data }
	} = error as ClientResponseError;
	console.error(message);
	return { message, data };
};
