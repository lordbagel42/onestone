<script lang="ts">
	import {
		House,
		Beaker,
		Shapes,
		Dices,
		Laugh,
		Calculator,
		CircleHelp,
		HousePlus,
		LoaderPinwheel,
		TestTubeDiagonal
	} from 'lucide-svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
	import { slide } from 'svelte/transition';

	const navMain = [
		{
			title: 'About Me',
			url: 'about',
			icon: House
		},
		{
			title: 'Experiences',
			url: '#',
			icon: Beaker,
			items: [
				{
					title: 'Quilting',
					url: 'quilting',
					icon: Shapes
				},
				{
					title: 'Tabletop Games',
					url: 'games',
					icon: Dices
				}
			]
		},
		{
			title: 'XLAB',
			url: 'xlab',
			icon: LoaderPinwheel
		},
		{
			title: 'Project Good',
			url: 'project-good',
			icon: Laugh
		},
		{
			title: 'Math',
			url: 'math',
			icon: Calculator
		},
		{
			title: 'Living in Beta',
			url: 'living-in-beta',
			icon: HousePlus
		},
		{
			title: 'Flex Lab',
			url: 'flex-lab',
			icon: TestTubeDiagonal
		},
		{
			title: 'Miscellaneous Info',
			url: 'misc',
			icon: CircleHelp
		}
	];
</script>

<Sidebar.Root variant="inset" collapsible="icon">
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Portfolio</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each navMain as item (item.title)}
						{#if item.items}
							<Collapsible.Root open class="group/collapsible">
								<Sidebar.MenuItem>
									<Collapsible.Trigger>
										{#snippet child({ props })}
											<Sidebar.MenuButton {...props}>
												<item.icon />
												<span>{item.title}</span>
											</Sidebar.MenuButton>
										{/snippet}
									</Collapsible.Trigger>
									<Collapsible.Content>
										<Sidebar.MenuSub>
											<div transition:slide>
												<!-- what ^  -->
												{#each item.items as subItem (subItem.title)}
													<Sidebar.MenuSubItem>
														<Sidebar.MenuSubButton>
															{#snippet child({ props })}
																<a href={subItem.url} {...props}>
																	<subItem.icon />
																	<span>{subItem.title}</span>
																</a>
															{/snippet}
														</Sidebar.MenuSubButton>
													</Sidebar.MenuSubItem>
												{/each}
											</div>
										</Sidebar.MenuSub>
									</Collapsible.Content>
								</Sidebar.MenuItem>
							</Collapsible.Root>
						{:else}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a href={item.url} {...props}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						{/if}
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
