<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		children: Snippet;
	}
	let { href, children }: Props = $props();
</script>

<a class="hyperlink" {href}>{@render children()}</a>
