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
		<ArticleParagraph>
			My goal with my career is to do a job somewhere in tech. I really like watching lights blink
			on things and have the knowledge I made that happen. I have spent most of my life working with
			computers and technology.
		</ArticleParagraph>
	</ArticleSection>
	<ArticleSection>
		<ArticleParagraph>
			The jobs I made this business board off of are the following:

			<ul class="ml-4 list-inside list-disc">
				<li>Audio Engineer</li>
				<li>Lighting Designer</li>
				<li>System Administrator</li>
				<li>Machinist</li>
				<li>Programmer</li>
				<li>Software Engineer</li>
				<li>Site Reliability Engineer</li>
				<li>Database Administrator</li>
				<li>Production</li>
			</ul>
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			All of these share a common theme of working with technology and either alone or in very small
			groups, with high stakes. Most of the administrator and engineer jobs are able to be done
			remotely from home, something I really like the idea of. Production and machining however, I
			would have to go in person for, but still work in relatively small, tight-knit teams. Most of
			these jobs are things I either have done in the past or know something about and find very
			interesting.
		</ArticleParagraph>
	</ArticleSection>
</ArticleRoot>
