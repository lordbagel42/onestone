<script lang="ts">
	import quiltDesign from '$lib/resources/quilt/quiltDesign.png';
	import quiltSpreadsheet from '$lib/resources/quilt/quiltSpreadsheet.png';

	import PopupPhoto from '$lib/components/popupPhoto.svelte';
</script>

<div class="mx-auto max-w-4xl rounded-lg p-8">
	<h1 class="mb-6 text-3xl font-bold">Quilted Narratives</h1>

	<section class="mb-8">
		<p class="text-lg leading-relaxed">
			My quilting experience was incredibly fun. I joined for an art credit and enjoyed the process.
			Initially, I was drawn to learning about quilting's history, but my primary interest was
			simply getting hands-on. Most of the other experiences—starting a business, creating an
			instrument in the Foundry, or developing a video game—were areas I was already proficient in.
			Quilting, however, was something I didn't practice often, unlike everything else.
		</p>
	</section>

	<section class="mb-8">
		<PopupPhoto title="Quilt Spreadsheet" src={quiltSpreadsheet} alt="Quilt spreadsheet" />

		<p class="mt-4 text-lg leading-relaxed">
			I spent a lot of time developing a <a
				class="hyperlink"
				href="https://docs.google.com/spreadsheets/d/1azQjdcOIJ6puB7tlv8clFVlMcvkn8ak4cHtl3jlBPD8/edit?usp=sharing"
				>spreadsheet</a
			>
			to track my material usage, requirements, and quilt status. To gather initial data, I used
			<a class="hyperlink" href="https://patternjam.com/">Patternjam</a>. I also used Google Sheets
			to track progress and material usage/status while quilting. I could already make a decent
			quilt so I use this as an opportunity to practice using Google Sheets.
		</p>
	</section>

	<section class="mb-8">
		<h2 class="mb-4 text-2xl font-semibold">Quilt Design</h2>
		<PopupPhoto title="Quilt Design" src={quiltDesign} alt="Quilt design" />
		<p class="mt-4 text-lg leading-relaxed">
			The design of my quilt held a lot of meaning. During its creation, I had friends going through
			difficult times and this quilt became a tribute of sorts to them.
		</p>
		<p class="mt-2 text-sm italic">
			also, I can't do design very well and thought this would be fun to make.
		</p>
	</section>

	<section class="mb-8">
		<p class="text-lg leading-relaxed">
			I faced some challenges in sourcing fabrics with the specific colors I needed. I sought advice
			from my grandma and Emily, who suggested things like making an 8-foot-long quilt might not be
			the best idea.
		</p>
	</section>

	<section class="mb-8">
		<p class="text-lg leading-relaxed">
			Overall, I enjoyed the experience. I learned a lot about quilting and design, and I got to
			learn about a new art form. I also got to practice using Google Sheets, which was a plus.
		</p>
	</section>
</div>
