<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string | undefined;
		children: Snippet;
	}

	let { className, children }: Props = $props();

	const defaultClasses = 'mb-2 text-sm text-gray-500 ';
	const classes = defaultClasses + className;
</script>

<p class={classes}>
	{@render children()}
</p>
