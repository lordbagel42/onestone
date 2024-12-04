import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Icon } from 'lucide-svelte';

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

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

interface NavItem {
	title: string;
	url: string;
	selected: boolean;
	icon: typeof Icon;
	items?: NavItem[];
}
balls
export const navBar: NavItem[] = [
	{
		title: 'About Me',
		url: '/portfolio/about',
		selected: false,
		icon: House
	},
	{
		title: 'Experiences',
		url: '/portfolio/experiences',
		selected: false,
		icon: Beaker,
		items: [
			{
				title: 'Quilting',
				url: '/portfolio/experiences/quilting',
				selected: false,
				icon: Shapes
			},
			{
				title: 'Tabletop Games',
				url: '/portfolio/experiences/games',
				selected: false,
				icon: Dices
			}
		]
	},
	{
		title: 'XLAB',
		url: '/portfolio/xlab',
		selected: false,
		icon: LoaderPinwheel
	},
	{
		title: 'Project Good',
		url: '/portfolio/project-good',
		selected: false,
		icon: Laugh
	},
	{
		title: 'Math',
		url: '/portfolio/math',
		selected: false,
		icon: Calculator
	},
	{
		title: 'Living in Beta',
		url: '/portfolio/living-in-beta',
		selected: false,
		icon: HousePlus
	},
	{
		title: 'Flex Lab',
		url: '/portfolio/flex-lab',
		selected: false,
		icon: TestTubeDiagonal
	},
	{
		title: 'Miscellaneous Info',
		url: '/portfolio/misc',
		selected: false,
		icon: CircleHelp
	}
];

export const currentPage = (item: NavItem): boolean => {
	for (const navItem of navBar) {
		navItem.selected = false;
		if (navItem.items) {
			for (const subItem of navItem.items) {
				subItem.selected = false;
			}
		}
	}
	item.selected = true;
	console.log(item);
	console.log(navBar);
	return true;
}