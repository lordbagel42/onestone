<script lang="ts">
	import ArticleParagraph from '$lib/components/article/article-paragraph.svelte';
	import ArticleRoot from '$lib/components/article/article-root.svelte';
	import ArticleSection from '$lib/components/article/article-section.svelte';
	import ArticleCols from '$lib/components/article/article-cols.svelte';
	import ArticleSmall from '$lib/components/article/article-small.svelte';

	import peeps from '$lib/resources/xlab/peeps.jpg?enhanced';
	import SignStand from '$lib/resources/xlab/SignStand.png?enhanced';
	import PopupPhoto from '$lib/components/popupPhoto.svelte';

	let hr = true;
</script>

<ArticleRoot title="XLab">
	<ArticleSection heading="An Overview">
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
		<ArticleParagraph>
			When the year began, we were not sure what aspects of biking we could improve. We are bikers
			ourselves and know that biking in Boise can at least feel unsafe at times, however all of our
			research does not agree. Now that the year has progressed more however, we have identified one
			key aspect we can improve: <b>biker awareness</b>.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleCols>
			{#snippet left()}
				<ArticleParagraph>
					Our most powerful part of the year was Peeps on the Street. We knew that we didn't have
					much data available to support us, but we felt passionate about our cause. This ended up
					making us use a very short amount of our time at Peeps to present ourselves and our
					question, but spent most of it like an empathy interview. Our focus was gain info.
				</ArticleParagraph>
			{/snippet}

			{#snippet right()}
				<PopupPhoto
					title="Presenting at Peeps on the Street"
					src={peeps}
					alt="Presenting at Peeps on the Street"
				/>
			{/snippet}
		</ArticleCols>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			Peeps went amazingly for us. We had almost 2 full pages of insights and new opinions that the
			Peeps told us, with a general consensus that confirmed our viewpoint: biking in Boise is
			scary.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection {hr} heading="Day to Day">
		<ArticleParagraph>
			XLab went really well this year for my team. We work excellently together and have achieved a
			lot. I have felt a lot of growth because of XLab. Our group was given a lot of freedom this
			year compared to other teams because of how well we could work together, the main one being
			that we almost always were allowed to work outside of the building. The team went to about a
			dozen coffee shops, restaurants, and parks to go work. One of my favorite memories from the
			time is going out to a coffee shop and working together to develop one of our first sign
			prototypes.
		</ArticleParagraph>
	</ArticleSection>
	<ArticleSection>
		<ArticleParagraph>
			Going out to coffee shops was both a positive and a negative to our team. It mostly was
			positive and beneficial, with it encouraging us to get our work done quickly, efficiently, and
			well. However, there were absolutely days that we didn’t get much done and instead spent more
			time bonding as a group and just enjoying ourselves.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection {hr} heading="Nina Pienaar">
		<ArticleParagraph>
			A few months into the year, we met with the Bicycle Safety Advocate at the Boise Bike Project,
			Nina Pienaar. She was a great person to meet with and was very helpful in our process. She was
			able to help us understand the biking community in Boise and what we could do to help. She
			introduced us to an idea called "the three E's", which are a planning system for a community
			to implement improvements. The first E is engineering, which is the physical improvements to
			the problem. The second E is education, which is the information and knowledge that the
			community needs to know about the problem. The third E is enforcement, which is the laws and
			rules that the community needs to follow. Nina works with the local government to improve the
			engineering and enforcement aspects, while the Boise Bike Project has some programs to help
			improve the education--however, it still needs more improvement. This was our key insight of
			the year, that biker education is the most ignored problem.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			Our ideas for prototypes were based on this, with our central ideas being to host an event
			about bike education, go to local schools and inform young students, create signage, and
			lastly to create pamphlets for bike shops and schools. We ended up narrowing our ideas down to
			just signage and a pamphlet, but iterated on those two a lot. After a lot of development and
			talking with professionals, we realized that creating official, permanent signage is a lot
			more complicated than we thought and requires a ton more work, time, and money. During the
			spring Peeps on the Street presentation, we were given the idea of "Art Bombs".
		</ArticleParagraph>
	</ArticleSection>
	<ArticleSection>
		<ArticleCols>
			{#snippet left()}
				<ArticleParagraph>
					Art Bombs are a way to create temporary signage that is not permanent and can be moved
					easily. This was a great idea for us, as we were not allowed to install permanent signs
					and enjoy how easily things can be moved. I designed a simple sign to be constructed out
					of wood and placed along the greenbelt, shown to the right. This is the back side of the
					sign. We are not sure we'll keep the translucent piece on the back to show our
					information, and may not mark it as ours at all.
				</ArticleParagraph>
			{/snippet}

			{#snippet right()}
				<PopupPhoto title="Art Bombs" src={SignStand} alt="Art Bombs" />
			{/snippet}
		</ArticleCols>
		<ArticleParagraph>
			Another key insight we gathered is the idea that if you improve something in one area, that
			improvement can spread to the rest of the city. We were given the example of learning
			something in school; you don't just apply it in school, you can apply it everything in your
			life.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection {hr} heading="Design Lab Showcase">
		<ArticleSmall>(the spring one specifically)</ArticleSmall>
		<ArticleParagraph>
			My team had a really easy time at the showcase, honestly. We wrote the script in about a day
			and didn't need to do much editing to it, it was pretty much ready to go. We could've done
			better for sure, but we work together so well that we could cue each other in intuitively and
			without much effort. I am very proud of how my team did and our audience seemed to enjoy the
			presentation. We had one individual tell us that we were speaking too fast, but this caused a
			dozen or so others to come and talk to us and complimentz our presenting skills.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection {hr} heading="An Ending">
		<ArticleParagraph>
			XLab was a great experience for me this year. I learned a lot about the human centered design
			process and how to work with a team. I also learned a lot about biking and the biking
			community in Boise. I am very proud of what we accomplished this year and am excited to see
			what we can do next year.
		</ArticleParagraph>
		<ArticleParagraph>
			I am also very proud of the work that my team did this year. We worked really well together
			and were able to accomplish a lot. I am excited to see what I can do next year and how I can
			improve my usage of the design thinking system.
		</ArticleParagraph>
	</ArticleSection>
</ArticleRoot>
