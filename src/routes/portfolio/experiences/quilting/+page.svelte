<script lang="ts">
	import quiltDesign from '$lib/resources/quilt/quiltDesign.png?enhanced';
	import quiltSpreadsheet from '$lib/resources/quilt/quiltSpreadsheet.png?enhanced';

	import ArticleParagraph from '$lib/components/article/article-paragraph.svelte';
	import ArticleRoot from '$lib/components/article/article-root.svelte';
	import ArticleSection from '$lib/components/article/article-section.svelte';
	import ArticleCols from '$lib/components/article/article-cols.svelte';

	import PopupPhoto from '$lib/components/popupPhoto.svelte';
	import Link from '$lib/components/link.svelte';
</script>

<ArticleRoot title="Quilted Narratives">
	<ArticleSection>
		<ArticleParagraph>
			My quilting experience was incredibly fun. I joined for an art credit and enjoyed the process.
			Initially, I was drawn to learning about quilting's history, but my primary interest was
			simply getting hands-on. Most of the other experiences—starting a business, creating an
			instrument in the Foundry, or developing a video game—were areas I was already proficient in.
			Quilting, however, was something I didn't practice often, unlike everything else.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<PopupPhoto title="Quilt Spreadsheet" src={quiltSpreadsheet} alt="Quilt spreadsheet" />

		<ArticleParagraph>
			I spent a lot of time developing a
			<Link
				href="https://docs.google.com/spreadsheets/d/1azQjdcOIJ6puB7tlv8clFVlMcvkn8ak4cHtl3jlBPD8/edit?usp=sharing"
				>spreadsheet</Link
			>
			to track my material usage, requirements, and quilt status. To gather initial data, I used
			<Link href="https://patternjam.com/">Patternjam</Link>. I also used Google Sheets to track
			progress and material usage/status while quilting. I could already make a decent quilt so I
			use this as an opportunity to practice using Google Sheets.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<h2 class="mb-4 text-2xl font-semibold">Quilt Design</h2>
		<PopupPhoto title="Quilt Design" src={quiltDesign} alt="Quilt design" />

		<ArticleParagraph>
			The design of my quilt held a lot of meaning. During its creation, I had friends going through
			difficult times and this quilt became a tribute of sorts to them.
		</ArticleParagraph>

		<p class="mt-2 text-sm italic">
			also, I can't do design very well and thought this would be fun to make.
		</p>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			I faced some challenges in sourcing fabrics with the specific colors I needed. I sought advice
			from my grandma and Emily, who suggested things like making an 8-foot-long quilt might not be
			the best idea.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			Overall, I enjoyed the experience. I learned a lot about quilting and design, and I got to
			learn about a semi-new art form. I also got to practice using Google Sheets, which was a plus.
			My goal in this experience was to practice Ownership and Management, something I often
			struggle with. I think I did... fine with that. I could have absolutely done a lot better, but
			I didn't always have materials necessary and mentally wasn't able to focus for a lot of this
			experience because of many factors.
		</ArticleParagraph>
	</ArticleSection>
</ArticleRoot>
