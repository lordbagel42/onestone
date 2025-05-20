<script lang="ts">
	interface Props {
		heading?: string;
		hr?: boolean;
		children?: any;
	}

	const { heading, hr, children }: Props = $props();
</script>

{#if hr}
	<hr class="my-4" />
{/if}

{#if heading}
	<h2 class="mb-4 text-2xl font-bold">{heading}</h2>
{/if}
<section class="my-4">{@render children()}</section>
