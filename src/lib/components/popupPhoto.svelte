<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Image } from '@unpic/svelte';

	let { title, src, alt }: { title: string; src: string; alt: string } = $props();
	let isOpen = $state(false);

	const openPopup = () => {
		console.log('openPopup');
		isOpen = true;
	};

	const closePopup = () => {
		isOpen = false;
	};
</script>

<div
	class="h-full w-full cursor-pointer rounded-lg shadow-lg"
	role="button"
	tabindex="0"
	onclick={openPopup}
	onkeydown={(e) => e.key === 'Enter' && openPopup()}
>
	<Image class="h-full w-full rounded-lg shadow-lg" {src} {alt} />
</div>

{#if isOpen}
	<div
		transition:fade={{ duration: 75 }}
		class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
		role="button"
		tabindex="0"
		onclick={closePopup}
		onkeydown={(e) => e.key === 'Enter' && closePopup()}
	>
		<div class="relative max-h-full max-w-full">
			<Image class="max-h-full max-w-full rounded-lg object-contain shadow-lg" {src} {alt} />
			<h2
				class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-2xl font-semibold text-white"
			>
				{title}
			</h2>
		</div>
	</div>
{/if}
