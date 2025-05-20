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
	SquareArrowUp,
	TestTubeDiagonal,
	CircuitBoard,
	Clover,
	Figma,
	SprayCan,
	ShellIcon,
	BookDashed,
	BookA,
	Book
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

export const navBar: NavItem[] = [
	{
		title: 'About Me',
		url: '/portfolio/about',
		selected: false,
		icon: House
	},
	{
		title: 'The BLOB',
		url: '/portfolio/blob',
		selected: false,
		icon: SquareArrowUp
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
		icon: LoaderPinwheel,
		items: [
			{
				title: 'An Overview',
				url: '/portfolio/xlab/overview',
				selected: false,
				icon: Clover
			}
			// i don't *really* need to have this separate.
			// probably better honestly, but i don't care.
			// easier to just have it as part of it
			// and only write a paragraph lmao.
			// {
			// 	title: 'Design Showcase',
			// 	url: '/portfolio/xlab/design-showcase',
			// 	selected: false,
			// 	icon: Figma
			// }
		]
	},
	{
		title: 'Community Reads',
		url: '/portfolio/community-reads',
		selected: false,
		icon: BookDashed,
		items: [
			{
				title: 'Rebel Talent',
				url: '/portfolio/community-reads/rebel-talent',
				selected: false,
				icon: BookA
			},
			{
				title: 'Healing Grounds',
				url: '/portfolio/community-reads/healing-grounds',
				selected: false,
				icon: Book
			}
		]
	},
	{
		title: 'Project Good',
		url: '/portfolio/project-good',
		selected: false,
		icon: Laugh,
		items: [
			{
				title: 'Spring',
				url: '/portfolio/project-good/spring',
				selected: false,
				icon: SprayCan
			},
			{
				title: 'Recent Shenanigans',
				url: '/portfolio/project-good/recent',
				selected: false,
				icon: ShellIcon
			}
		]
	},
	{
		title: 'Math',
		url: '/portfolio/math',
		selected: false,
		icon: Calculator,
		items: [
			{
				title: 'Polynomials',
				url: '/portfolio/math/polynomials',
				selected: false,
				icon: Calculator
			},
			{
				title: 'Statistics',
				url: '/portfolio/math/statistics',
				selected: false,
				icon: SquareArrowUp
			}
		]
	},
	{
		title: 'Living in Beta',
		url: '/portfolio/living-in-beta',
		selected: false,
		icon: HousePlus,
		items: [
			{
				title: 'Business Board',
				url: '/portfolio/living-in-beta/business-board',
				selected: false,
				icon: CircuitBoard
			}
		]
	},
	// {
	// 	title: 'Flex Lab',
	// 	url: '/portfolio/flex-lab',
	// 	selected: false,
	// 	icon: TestTubeDiagonal
	// },
	{
		title: 'My Shenanigans',
		url: '/portfolio/shenanigans',
		selected: false,
		icon: Laugh,
		items: [
			{
				title: 'Shenanigan 1',
				url: '/portfolio/shenanigans/shenanigan-1',
				selected: false,
				icon: Laugh
			},
			{
				title: 'Shenanigan 2',
				url: '/portfolio/shenanigans/shenanigan-2',
				selected: false,
				icon: Laugh
			}
		]
	},
	{
		title: 'Robotics',
		url: '/portfolio/robotics',
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
};
