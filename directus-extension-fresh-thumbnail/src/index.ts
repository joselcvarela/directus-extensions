import { defineDisplay } from '@directus/extensions';
import DisplayFile from './display.vue';

export default defineDisplay({
	id: 'fresh-thumbnail',
	name: 'Fresh Thumbnail',
	description: 'Fresh Thumbnail',
	icon: 'insert_drive_file',
	component: DisplayFile,
	types: ['uuid'],
	options: [],
	fields: ['id', 'type', 'title', 'uploaded_on'],
});
