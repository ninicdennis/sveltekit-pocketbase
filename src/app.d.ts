import PocketBase, { type RecordModel } from 'pocketbase';
declare global {
	namespace App {
		interface User extends RecordModel {
			avatar: string;
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
