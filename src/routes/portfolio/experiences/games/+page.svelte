<script lang="ts">
	import ArticleParagraph from '$lib/components/article/article-paragraph.svelte';
	import ArticleRoot from '$lib/components/article/article-root.svelte';
	import ArticleSection from '$lib/components/article/article-section.svelte';
	import PopupPhoto from '$lib/components/popupPhoto.svelte';
	import ArticleCols from '$lib/components/article/article-cols.svelte';
	import Link from '$lib/components/link.svelte';

	import cardsBox from '$lib/resources/games/cardsBox.jpeg?enhanced';
</script>

<ArticleRoot title="Games">
	<ArticleSection>
		<ArticleParagraph>
			I missed a pretty good amount of the games experience with Josie. I faced a lot of struggles
			because of my lack of being there, but overall I had a good time.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			My main goal in this experience was to practice my Research skills. I also wanted to practice
			Synthesis, but I think my ability to turn an idea into a thing isn't something that needs as
			much development as good, proper research skills.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			I learned a lot about how the psychology behind games works, things like how <Link href="#"
				>the psychology behind gambling</Link
			> works and a lot more. The math behind games was also very interesting to me, but I was reaching
			for more of a social science credit over a math credit. I struggled a lot with actually focusing
			on the social science and not on the math behind things.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			I also didn't put as much effort as I wish I had into the game I created. I only had about 2
			days to work on making the game because of migraines, but I still didn't end up doing as much
			as I hoped to do.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleCols>
			{#snippet left()}
				<ArticleParagraph>
					My game was a variant of Cards Against Humanity that I called Cards Against Society. The
					premise was to make a very politically focused but not leaning to either side game. The
					people playing the game could choose how they wanted to play, whether it be trying to make
					the best policies for society, the worst, or just being funny.
				</ArticleParagraph>
			{/snippet}
			{#snippet right()}
				<ArticleParagraph
					><PopupPhoto src={cardsBox} title="CAD render of card box" alt="CAD" /></ArticleParagraph
				>
			{/snippet}
		</ArticleCols>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			Overall, I had a good time in games, but I wish I had been able to put more effort into it and
			taken more ownership over my work. I feel I grew in my Research skills and that my Synthesis
			skills were also improved a little, as it was a much different task to synthesize my game than
			other projects I have done before.
		</ArticleParagraph>
	</ArticleSection>
</ArticleRoot>
