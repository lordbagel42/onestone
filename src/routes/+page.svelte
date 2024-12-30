<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Button from '$lib/components/ui/button/button.svelte';
	import ModeToggle from '$lib/components/mode-toggle.svelte';

	let showButton = true; // show button by default instead of with a delay. might change in the future.
	let currentQuote = '';
	const quotes = [
		{ text: 'The journey of a thousand miles begins with one step.', author: 'Lao Tzu' },
		{ text: 'Creativity is intelligence having fun.', author: 'Albert Einstein' },
		{ text: 'Stay hungry, stay foolish.', author: 'Steve Jobs' },
		{ text: 'Do what you can, with what you have, where you are.', author: 'Theodore Roosevelt' },
		{ text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
		{ text: 'The best way to predict the future is to create it.', author: 'Abraham Lincoln' },
		{
			text: "No ship has sailed too far if you're a really fast swimmer.",
			author: 'Sylvie LASTNAME'
		},
		{
			text: 'The only limit to our realization of tomorrow is our doubts of today.',
			author: 'Franklin D. Roosevelt'
		},
		{ text: 'Maintain a healthy fear of what can go wrong', author: 'Detrich R.' },
		{
			text: 'Not all who wander are lost, but this robot is awfully close',
			author: 'Sylvie LASTNAME'
		}
	];

	function updateQuote() {
		const randomIndex = Math.floor(Math.random() * quotes.length);
		currentQuote = `"${quotes[randomIndex].text}" - ${quotes[randomIndex].author}`;
	}

	onMount(() => {
		updateQuote();
		// setTimeout(() => (showButton = true), 250); // removed for now.
	});
</script>

<div class="no-scroll">
	<div class="flex h-screen flex-col items-center justify-center">
		<div class="relative text-center">
			<p class="text-6xl">Hi.</p>
			<h1 class="mt-4 text-4xl font-bold">
				I'm <span class="font-extrabold">Sylvie.</span>
			</h1>
		</div>
		<p class="mt-4 text-center text-lg italic">{currentQuote}</p>
	</div>

	<div class="fixed bottom-4 left-0 right-0 flex items-center justify-center">
		{#if showButton}
			<div transition:fade>
				<Button href="/portfolio/about">the portfolio</Button>
			</div>
		{/if}
	</div>

	<div class="fixed left-0 top-0">
		<ModeToggle />
	</div>
</div>
