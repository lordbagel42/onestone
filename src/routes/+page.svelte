<script lang="ts">
	import { onMount } from 'svelte';
	import TypeIt from 'typeit';
	import { fade } from 'svelte/transition';
	import Button from '$lib/components/ui/button/button.svelte';
	import '../app.css';

	let isMobile = false;
	let showButton = false;

	onMount(() => {
		console.log('mounted');

		setTimeout(() => {
			showButton = true;
		}, 2000);

		const phrases = [
			{ text: 'hates', deleteAfter: 150, typeAfter: 200 },
			{ text: 'loves technology', deleteAfter: 650, typeAfter: 650 },
			{ text: 'hangs out in VR', deleteAfter: 650, typeAfter: 650 },
			{ text: 'creates content', deleteAfter: 650, typeAfter: 650 },
			{ text: 'loves friends', deleteAfter: 650, typeAfter: 650 },
			{ text: 'sucks at programming', deleteAfter: 650, typeAfter: 650 },
			{ text: 'is gay af :3', deleteAfter: 70, typeAfter: 200 },
			{ text: 'is lazy (in a good way)', deleteAfter: 650, typeAfter: 650 }
		];

		const typeItInstance = new TypeIt('#typewriter', {
			lifeLike: false,
			speed: 80,
			deleteSpeed: 40,
			loop: true,
			loopDelay: 650
		});

		phrases.forEach(({ text, deleteAfter, typeAfter }) => {
			typeItInstance.type(text).pause(deleteAfter).delete(text.length).pause(typeAfter);
		});

		typeItInstance.go();
	});
</script>

<div class="flex h-screen items-center justify-center">
	<div class="text-center">
		<p class="text-6xl">Hi.</p>
		<h1 class="mt-2 text-xl">
			I'm <b>Sylvie.</b> I'm just another person that <span id="typewriter"></span>
		</h1>
	</div>
</div>

{#if showButton}
	<div class="fixed bottom-4 right-4 rounded-md p-2 text-white" transition:fade>
		<Button href="/portfolio">the actual portfolio itself</Button>
	</div>
{/if}
