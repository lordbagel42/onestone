<script lang="ts">
	import ModeToggle from '../../lib/components/mode-toggle.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import PortfolioSidebar from '$lib/components/portfolio-sidebar.svelte';
	import '../../app.css';

	let { children } = $props();
</script>

<Sidebar.Provider>
	<PortfolioSidebar />
	<main class="w-screen">
		<div class="topbar">
			<Sidebar.Trigger />
			<ModeToggle />
		</div>
		{@render children?.()}
	</main>
</Sidebar.Provider>
