<script lang="ts">
	import ArticleParagraph from '$lib/components/article/article-paragraph.svelte';
	import ArticleRoot from '$lib/components/article/article-root.svelte';
	import ArticleSection from '$lib/components/article/article-section.svelte';
	import ArticleCols from '$lib/components/article/article-cols.svelte';
	import ArticleSmall from '$lib/components/article/article-small.svelte';
	import PopupPhoto from '$lib/components/popupPhoto.svelte';

	import tires from '$lib/resources/project-good/tubeTires.png?enhanced';
	import endResult from '$lib/resources/project-good/end-result.png?enhanced';
	import tryingNotToDie from '$lib/resources/project-good/me-trying-not-to-fall.png?enhanced';
	import digging from '$lib/resources/project-good/digging.png?enhanced';

	// i think typing this is funny lol
	const hr: true = true;
</script>

<ArticleRoot title="Project Good: The Recent Things">
	<ArticleSection>
		<ArticleSmall>(but only by like 3 weeks its not that long ago lol)</ArticleSmall>
		<ArticleParagraph>
			Recently, we've been working a lot harder to really get a project implemented and completed.
			We found a school willing to donate a bunch of tires and 2 large plastic tubes to us, which we
			accepted handily.
		</ArticleParagraph>
		<PopupPhoto title="Tires" src={tires} alt="Tires" />
		<ArticleParagraph>
			Major thanks goes to Eastons father, Todd Elliott, for helping us get the tires and tubes from
			the school. He was a huge help in getting us the tires and tubes, and we couldn't have done it
			without him. I mean literally, we don't have a trailer or the knowledge on securing things to
			have done it ourselves.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection>
		<ArticleParagraph>
			A week or so after we got the tires, we were able to get almost all of the group and went to
			the daycare to go and install the tires and tubes. Sam was able to rent a mini excavator
			luckily, so we were able to get all of the dirt excavated pretty quickly. Sam refused to use
			the excavator to put the dirt back in the holes unfortunately, but we had a decent amount of
			hands to hold shovels and do work. It took us about 3 hours to get everything full installed
			and the dirt almost entirely put back.
		</ArticleParagraph>
		<br />
		<PopupPhoto title="Digging" src={digging} alt="Digging" />
		<ArticleSmall>my back still hurts. that is in fact, not the right posture.</ArticleSmall>
		<br />
		<PopupPhoto title="Me trying not to die" src={tryingNotToDie} alt="Me trying not to die" />
		<ArticleSmall>i was trying not to die don't judge my posture</ArticleSmall>
		<br />
		<PopupPhoto title="End Result" src={endResult} alt="End Result" />
		<ArticleSmall>just ignore the wild easton in his natural habitat</ArticleSmall>
	</ArticleSection>
</ArticleRoot>
