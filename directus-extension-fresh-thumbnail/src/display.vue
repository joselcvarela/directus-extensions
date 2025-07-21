<script setup lang="ts">
import { computed, ref } from 'vue';

type File = {
	id: string;
	type: string;
	title: string;
	uploaded_on: string;
};

const props = withDefaults(
	defineProps<{
		value: File | null;
	}>(),
	{
		value: null,
	},
);

const imgError = ref(false);

const imageThumbnail = computed(() => {
	if (!props.value) return null;

	if (props.value.type?.includes('image') === false) return null;

	const assetUrl = new URL(`/assets/${props.value.id}`, window.location.origin);

	if (!props.value.type?.includes('svg')) assetUrl.searchParams.append('key', 'system-small-cover')

	assetUrl.searchParams.append('uploaded_on', props.value.uploaded_on)

	return assetUrl.href
});
</script>

<template>
	<v-image v-if="imageThumbnail && !imgError" :src="imageThumbnail"
		:class="{ 'is-svg': value && value.type?.includes('svg') }" :alt="value?.title" @error="imgError = true" />
</template>

<style scoped>
img {
	height: 100%;
	object-fit: cover;
	border-radius: var(--theme--border-radius);
	aspect-ratio: 1;
}

.preview {
	--v-icon-color: var(--theme--foreground-subdued);

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	overflow: hidden;
	background-color: var(--theme--background-normal);
	border-radius: var(--theme--border-radius);
	aspect-ratio: 1;
}

.preview.has-file {
	background-color: var(--theme--primary-background);
}

.extension {
	color: var(--theme--primary);
	font-weight: 600;
	font-size: 11px;
	text-transform: uppercase;
}
</style>
