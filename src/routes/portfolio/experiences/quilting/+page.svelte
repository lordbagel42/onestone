<script lang="ts">
	import quiltDesign from '$lib/resources/quilt/quiltDesign.png';
	import quiltSpreadsheet from '$lib/resources/quilt/quiltSpreadsheet.png';
</script>

<div class="mx-auto max-w-4xl rounded-lg p-8">
	<h1 class="mb-6 text-3xl font-bold">My Quilting Experience</h1>

	<section class="mb-8">
		<p class="text-lg leading-relaxed">
			My quilting experience was incredibly fun. I joined for an art credit and enjoyed the process.
			Initially, I was drawn to learning about quilting's history, but my primary interest was
			simply getting hands-on. Most of the other experiences—starting a business, creating in the
			Foundry, or developing a video game—were areas I was already proficient in. Quilting, however,
			was something I didn't practice often, unlike everything else.
		</p>
	</section>

	<section class="mb-8">
		<img
			src={quiltSpreadsheet}
			alt="Spreadsheet example"
			class="h-auto w-full rounded-lg shadow-lg"
		/>
		<p class="mt-4 text-lg leading-relaxed">
			I spent a lot of time developing a spreadsheet to track my material usage, requirements, and
			quilt status. To gather initial data, I used <a
				class="hyperlink"
				href="https://patternjam.com/">Patternjam</a
			>. I also used Google Sheets to track progress and material usage/status while quilting. I
			could already make a decent quilt so I use this as an opportunity to practice using Google
			Sheets.
		</p>
	</section>

	<section class="mb-8">
		<h2 class="mb-4 text-2xl font-semibold">Quilt Design</h2>
		<img src={quiltDesign} alt="Quilt design" class="h-auto w-full rounded-lg shadow-lg" />
		<p class="mt-4 text-lg leading-relaxed">
			The design of my quilt held a lot of meaning. During its creation, I had friends going through
			difficult times, and this quilt became a tribute to them.
		</p>
		<p class="mt-2 text-sm italic">also, I can't do design very well.</p>
	</section>
</div>
