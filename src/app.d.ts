import PocketBase from 'pocketbase';
declare global {
	namespace App {
		interface User {
			avatar: string;
			collectionId: string;
			collectionName: string;
			created: Date;
			email: string;
			emailVisibility: boolean;
			id: string;
			name: string;
			updated: Date;
			username: string;
			verified: boolean;
		}
		// interface Error {}
		interface Locals {
			pb: PocketBase;
			user: User | undefined | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
