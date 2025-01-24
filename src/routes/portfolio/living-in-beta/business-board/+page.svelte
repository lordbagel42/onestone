<script lang="ts">
	import boardimg from '$lib/resources/living-in-beta/business-board/board.png?enhanced';

	import ArticleParagraph from '$lib/components/article/article-paragraph.svelte';
	import ArticleRoot from '$lib/components/article/article-root.svelte';
	import ArticleSection from '$lib/components/article/article-section.svelte';
	import ArticleCols from '$lib/components/article/article-cols.svelte';
	import Link from '$lib/components/link.svelte';
	import PopupPhoto from '$lib/components/popupPhoto.svelte';
</script>

<ArticleRoot title="Business Board">
	<ArticleSection>
		<PopupPhoto title="Business Board" alt="My Business Board" src={boardimg} />
	</ArticleSection>
	<ArticleSection>
		<ArticleParagraph>Me business board</ArticleParagraph>
		<ArticleParagraph>its a board</ArticleParagraph>
	</ArticleSection>
</ArticleRoot>
