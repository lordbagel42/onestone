<script lang="ts">
	import ArticleParagraph from '$lib/components/article/article-paragraph.svelte';
	import ArticleRoot from '$lib/components/article/article-root.svelte';
	import ArticleSection from '$lib/components/article/article-section.svelte';
	import PopupPhoto from '$lib/components/popupPhoto.svelte';
	import ArticleCols from '$lib/components/article/article-cols.svelte';

	import * as Carousel from '$lib/components/ui/carousel/index';

	import tires from '$lib/resources/project-good/tires.png?enhanced';

	import fenceTrampoline from '$lib/resources/project-good/fenceTrampoline.png?enhanced';
	import fenceSwing from '$lib/resources/project-good/fenceSwing.png?enhanced';
	import fenceGate from '$lib/resources/project-good/fenceGate.png?enhanced';
</script>

<ArticleRoot title="Foundry Project Good">
	<ArticleSection>
		<ArticleParagraph>
			I actually didn't start Project Good as part of COACH's Foundry group. I started with COACH's
			cooking group, but ended up having to cancel that because of scheduling conflicts
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			I did really want to be part of the cooking group; I've always liked cooking and thought it a
			good excuse to learn more about it. However, because I just couldn't schedule times to be in
			the cooking Project Good, Sam's was my next best choice.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			We've been having a lot of difficulty with actually finding a project to do. Essentially, the
			Foundry project good team's goal is to use SCHOOL's foundry to try and bring about change or
			create something that betters someone else's life. Previously, they built a swingset safe for
			an autistic child, a tiny house, etc.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			We were recently given the proposal to extend the height of a fence. The owners of the
			property have an autistic child who likes to play outside but doesn't understand the danger of
			leaving the backyard, but don't have the resources to build the fence themselves. They reached
			out to us through PEER to try and work something out.
		</ArticleParagraph>
		<Carousel.Root>
			<Carousel.Content>
				<Carousel.Item>
					<img
						class="max-h-full max-w-full rounded-lg object-contain shadow-lg"
						src="https://placehold.co/800x800/EEE/31343C"
						alt="Long part of the fence"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						class="max-h-full max-w-full rounded-lg object-contain shadow-lg"
						src="https://placehold.co/800x800/EEE/31343C"
						alt="The gate"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						class="max-h-full max-w-full rounded-lg object-contain shadow-lg"
						src="https://placehold.co/800x800/EEE/31343C"
						alt="Tall part of fence"
					/>
				</Carousel.Item>
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			We've also been given the proposal to rebuild a playground for a daycare, as the previous one
			had to be taken down because of injuries. Collectively, we've landed on the idea of bulding a
			sort of tire playground. We contacted a local mechanic shop and found they had 6 road grader
			tires available for us to take. Our plan is to bury these a bit in the ground and have
			somewhere for the children to play.
		</ArticleParagraph>
		<img src="https://placehold.co/800x800/EEE/31343C" alt="Tires" />
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			We're still in the planning stages of both projects, but I'm excited to see where they go.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			I've grown a lot in empathy and leadership in my time with this Project Good team. I have put
			a lot of effort into taking a step back and trying to give others the opportunity to lead,
			rather than just take it myself. However, if nobody steps up there have been multiple times
			where I take the leadership role myself.
		</ArticleParagraph>
	</ArticleSection>
</ArticleRoot>
