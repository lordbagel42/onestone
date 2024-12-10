<script lang="ts">
	let { left, right } = $props();
</script>

<div class="flex flex-col items-start space-y-4 md:flex-row md:space-x-6 md:space-y-0">
	{#if left}
		<div class="md:w-1/2">
			{@render left()}
		</div>
	{/if}
	{#if right}
		<div class="md:w-1/2">
			{@render right()}
		</div>
	{/if}
</div>
