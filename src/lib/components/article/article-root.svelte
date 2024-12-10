<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children: Snippet;
	}

	const { title, children }: Props = $props();
</script>

<div class="mx-auto max-w-4xl rounded-lg p-8">
	<h1 class="mb-6 text-3xl font-bold">{title}</h1>
	<article class="space-y-6">{@render children()}</article>
</div>
