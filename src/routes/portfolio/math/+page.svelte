<script lang="ts">
	import ArticleParagraph from '$lib/components/article/article-paragraph.svelte';
	import ArticleRoot from '$lib/components/article/article-root.svelte';
	import ArticleSection from '$lib/components/article/article-section.svelte';
	import ArticleCols from '$lib/components/article/article-cols.svelte';

	import quadraticForms from '$lib/resources/math/quadraticForms.png?enhanced';

	import PopupPhoto from '$lib/components/popupPhoto.svelte';
	import Link from '$lib/components/link.svelte';
</script>

<ArticleRoot title="Math">
	<ArticleSection>
		<ArticleParagraph>
			Picking a workshop this year was a little scary for me. At the time I was still very new to
			the way the school worked and what a workshop even was. I didn't like a lot of the options
			available to me and I valued mathematics as one of the more important things that I wanted to
			continue learning.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			Unfortunately for me, the only workshop available that had a chance of being challenging or
			teaching new content was Josie's Quadratics & Polynomials experience. Last year, I was
			enrolled in the Integrated 3 course at Treasure Valley Math and Science Center, where I
			learned a lot about quadratics and polynomials.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			Because of my familiarity with the subject, I struggled to have any motivation to actually
			work on the assignments given. I noticed a lot of times there were cases where we were
			covering info that I knew but not by name, or Josie was covering in a way unfamiliar to me. I
			really like just seeing the numbers and the equations as they go, but Josie did a lot of
			teaching with diagrams. Trying to wrap my head around how to use area models again after years
			of not using them was hard.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			This was also the first experience that really told me about the concept of a portfolio and I
			spent a while trying to figure out the best way to do things. I struggled on that for a while
			and still don't know the best. I ended up making a google slides project to show my learning.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			This is an excerpt from my slideshow. Most of the slideshow was just notes about paper
			worksheets I did and this was the best visual I had, rather than just notes about
			communicating with COACH.
			<PopupPhoto src={quadraticForms} alt="Quadratic Forms" title="Quadratic Forms" />
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			I tried to practice my Applied Mathematics here, but there was no new content shown, only
			content I already knew shown in a different way, often slower. I think it was a good
			introduction to the idea of a SCHOOL portfolio, though.
		</ArticleParagraph>
	</ArticleSection>
</ArticleRoot>
