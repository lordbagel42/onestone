<script lang="ts">
	import ArticleParagraph from '$lib/components/article/article-paragraph.svelte';
	import ArticleRoot from '$lib/components/article/article-root.svelte';
	import ArticleSection from '$lib/components/article/article-section.svelte';
	import ArticleCols from '$lib/components/article/article-cols.svelte';
</script>

<ArticleRoot title="XLab">
	<ArticleSection>
		<ArticleParagraph>
			This year in XLab, we partnered with the Idaho Transportation department to try and improve
			traffic safety.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			My team, made up of Arielle, Avary, Jackson, and myself, created a group within this to focus
			on biking.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			I think that we work together as a team quite well, however all of us struggle to stay focused
			on an assignment for long periods of time. We also tend to get distracted from doing the work
			and instead focus on small aspects that don't entirely matter. I do feel we are growing in
			this, however.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			My team isn't entirely sure what aspects of biking we can improve the safety of. We are bikers
			ourselves and know that biking in Boise can at least feel quite unsafe at times, however all
			of our research does not agree.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleCols>
			{#snippet left()}
				<ArticleParagraph>
					I think our most powerful part so far was Peeps on the Street. We knew that we didn't have
					much data available to support us, but we felt passionate about our cause. This ended up
					making us use a very short amount of our time at Peeps to present ourselves and our
					question, but spent most of it like an empathy interview. Our focus was gain info.
				</ArticleParagraph>
			{/snippet}

			{#snippet right()}
				<img
					src="https://source.unsplash.com/random/800x600?biking"
					alt="Team presenting at Peeps on the Street"
					class="rounded-lg shadow-md"
				/>
			{/snippet}
		</ArticleCols>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			We think it went well. We had almost 2 full pages of insights and new opinions that the Peeps
			told us, with a general consensus that confirmed our viewpoint: biking in Boise is scary.
		</ArticleParagraph>
	</ArticleSection>
</ArticleRoot>
