<script lang="ts">
	import ArticleParagraph from '$lib/components/article/article-paragraph.svelte';
	import ArticleRoot from '$lib/components/article/article-root.svelte';
	import ArticleSection from '$lib/components/article/article-section.svelte';
	import PopupPhoto from '$lib/components/popupPhoto.svelte';
	import ArticleCols from '$lib/components/article/article-cols.svelte';

	import blob from '$lib/resources/blob/OneStoneBLOB-v6.png?enhanced';
</script>

<ArticleRoot title="The BLOB">
	<ArticleSection>
		<ArticleParagraph>
			The BLOB is our method for measuring growth and setting goals throughout the year.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			BLOB stands for Bold Learning Objectives—a set of identifiers that measure different aspects
			of a person's development over time.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<PopupPhoto title="The BLOB" src={blob} alt="The BLOB" />
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			The BLOB is divided into four quadrants: Mindset, Knowledge, Creativity, and Skills. These
			quadrants come together in the center to form Voice. I interpret this as you have to use your
			voice to express the growth you've achieved through the BLOB.
		</ArticleParagraph>
	</ArticleSection>
</ArticleRoot>
