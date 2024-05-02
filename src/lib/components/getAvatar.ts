import type Pocketbase from 'pocketbase';
import type { AdminModel, RecordModel } from 'pocketbase';

export function isAdmin(
	model: RecordModel | AdminModel | null
): model is AdminModel {
	return !!model && !(model as RecordModel)?.collectionId;
}

export default function getAvatarUrl(
	pocketbase: Pocketbase,
	model: App.User | null
) {
	if (!model) return undefined;
	if (typeof model.avatar !== 'string' || !model.avatar) return undefined;

	return pocketbase.getFileUrl(model, model.avatar);
}
