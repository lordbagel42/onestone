<script lang="ts">
	import ArticleRoot from '$lib/components/article/article-root.svelte';
	import ArticleSection from '$lib/components/article/article-section.svelte';
	import ArticleParagraph from '$lib/components/article/article-paragraph.svelte';
	import PopupPhoto from '$lib/components/popupPhoto.svelte';
	import ArticleCols from '$lib/components/article/article-cols.svelte';
	import Link from '$lib/components/link.svelte';

	const hr: true = true;
</script>

<ArticleRoot title="Rebel Talent">
	<!-- <ArticleSection>
		<PopupPhoto title="Rebel Talent Cover" src={placeholderImg} alt="Rebel Talent cover image" />
	</ArticleSection> -->

	<ArticleSection>
		<ArticleParagraph>
			This article was written during my community read and is the primary artifact that came from
			it. I feel it shows the community read and my learning from it best.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection {hr}>
		<ArticleParagraph>
			<em>Rebel Talent</em> is an idea created by Francesca Gino, written about in her book by the
			same name. Five values make up the concept of <em>Rebel Talent</em>. The first is novelty, or
			seeking out challenges and new experiences, skills, or anything else. Rebels use this to
			continue their learning, fueled by curiosity: the impulse we all had as children to constantly
			ask, “Why?” A big part of novelty is perspective. Perspective is a rebel’s ability to
			constantly broaden their view of the world and see it as others do. The fourth value is
			diversity, or the tendency to challenge predetermined social roles and reach out to those who
			may appear different. Lastly is authenticity, something rebels embrace in all that they do.
			Authenticity lets them remain open and vulnerable to connect with others and learn from them.
			If you recognize yourself in any of these values, you’re a rebel.
		</ArticleParagraph>
		<br />
		<ArticleParagraph>
			One Stone's Lab School follows the values making up <em>Rebel Talent</em> as the principles
			behind it. The book, <em>Rebel Talent</em>, encourages breaking the status quo, a principal
			One Stone and its high school have built their foundations upon.
		</ArticleParagraph>
		<br />
		<ArticleParagraph>
			This book should be read by people interested in One Stone because of its closeness to the way
			One Stone works and the people who come here. According to Issy Martinez, a fellow One Stone
			student and writer of the feature article <em>Excellent Gathering</em>, “One Stone does
			everything opposite of how society puts public schools together and is choosing to do what
			they think is best.” One Stone is a student-driven school, where the students have the freedom
			to pursue what they feel is best for their learning and health. A great result of this is the
			welcoming of people using whatever pronouns or name they feel fit best; One Stone students
			understand the importance of acceptance and belonging, striving to create a space that feels
			genuinely inclusive and supportive for everyone. Traditional public schools don’t deal well
			with people being themselves, with some local Boise school districts even prohibiting the use
			of pronouns or a different name. At One Stone, we can do better.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection heading="The BLOB is Rebellious">
		<ArticleParagraph>
			One Stone doesn’t have grades, but we still need a way to assess students. The result is the
			Bold Learning Objectives, aka the BLOB. The BLOB is what truly differentiates One Stone from
			the standard schooling system. I feel it is our most rebellious idea: the students themselves
			matter more than their grades.
		</ArticleParagraph>
		<br />
		<ArticleParagraph>IMAGE 1</ArticleParagraph>
		<br />
		<ArticleParagraph>
			The BLOB has four quadrants. These are Mindset, Knowledge, Creativity, and Skills. Mindset is
			the intentional approach we take toward personal growth. Your mindset is your outlook on the
			world around you, growing it to focus on something other than yourself is key to success. Next
			is Knowledge, the way we understand the world. Your knowledge is what you use to do things in
			the world and is key to completing your ideas. The third is Creativity, the way we approach
			challenges. Without creativity, you can’t create. The last is Skills, developing tools for
			life. The rest of the BLOB helps teach you how to deal with life and create, but skills are
			real tools you can use in life. These all collect to make your Voice, the thing you use to
			express yourself in the world. The five values of Rebel Talent are very similar to all of
			this. Rebel Talent can be summarized as the idea of rejecting societal standards, instead
			expanding your perspective on the world and taking challenges as they come, even looking for
			them. The BLOB tries to make the same result in a student; it allows students to be rebels,
			and to become themselves. The BLOB is more actionable than Rebel Talent, but both are designed
			around individuality. Some of the <em>Rebel Talent</em> values even show up as objectives in the
			BLOB. The BLOB doesn’t specify it, but it does take drive and work to achieve anything on the BLOB,
			reflected by rebels wanting novelty, or new challenges and experiences. Perspective is something
			One Stone and the BLOB use often, because without your perspective on something you can’t be creative.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection heading="One Stone is a School for Rebels">
		<ArticleParagraph>
			One Stone is created by and run by rebels. Any student who goes to school at One Stone can
			tell you that it's different from the standard in every way imaginable. A big portion of the
			students who go to One Stone are rebels themselves, too. According to Francesca Gino, societal
			standards can make people feel unhappier than revolting against those standards and being
			themselves. I asked my fellow article writers about this and was told by Felix Swarthout that,
			“In most of my old schools, I didn't fit in, or I got bullied. Mostly because of how I
			dressed, acted, or my interests. It felt like no matter how much I changed myself to fit in,
			it always felt wrong. So, I just stopped trying to fit in and decided to act and dress how I
			wanted. It made me much happier, it improved my mental health because I was expressing myself
			in healthier ways, and I found some of the best friends I could ever ask for. I decided to
			move schools to get a fresh start at a school where I knew I wouldn't get bullied for being
			myself.” Felix made a conscious decision to be himself and it made him happier. To help assist
			him in being himself he left his school and came to Lab51. Here, it doesn’t take a conscious
			effort to be accepted or avoid being bullied. Felix can be himself and focus on learning,
			rather than being who he is.
		</ArticleParagraph>

		<ArticleParagraph>IMAGE 2</ArticleParagraph>
	</ArticleSection>

	<ArticleSection heading="A Personalized Approach to Learning">
		<ArticleParagraph>
			One Stone is a school that makes people interested in what it does and why. Many people find
			it fascinating that a school can function without grades. One Stone is student-driven, meaning
			that students are met where they are and have the opportunity to individualize their learning
			based on their unique needs and backgrounds. Many people in standard schooling, including
			myself, ran into the problem of everything being too easy. It was easy to complete the
			assignments and learn the things, so much so that it became boring and too easy to be
			meaningful to do. Ashtyn Burgess believes one of the first times he was rebellious was when he
			was a student in junior high. Ashtyn believes his most obvious point of rebellion, and one of
			many, was when he started to skip class. He had pursued his education with a burning passion
			and everything came easily to him, causing him to get bored of the work after so many years. A
			constant lack of challenge made it monotonous and difficult to go to school for him, so he
			stopped. It was against the rules, but he had already finished the classwork and was trying to
			simply keep his mental health stable. Eventually, he had to have a meeting with his principal
			and had detention reduced from eighteen hours to one while appealing for credit in all
			classes. Ashtyn very blatantly was breaking rules about attendance because the environment was
			actively harmful to him and was causing his learning to stagnate. The one-size-fits-all model
			wasn’t fitting Ashtyn and instead was destroying him, though he still excelled at the
			coursework because of its simplicity. Max Ziegler was also facing similar issues with his
			public schooling. Max had a lack of interest in school as early as third grade, making it so
			he had to stay in through recesses or breaks to instead work on missing classwork or homework
			that he just didn’t want to do. Max eventually decided to come to One Stone to try and get a
			more personalized approach to his learning, something that could challenge him and lead him to
			excel, not stagnate. Max is greatly enjoying his learning at One Stone.
		</ArticleParagraph>
	</ArticleSection>

	<ArticleSection heading="Finding belonging in rebellion">
		<ArticleParagraph>
			Francesca Gino’s idea of <em>Rebel Talent</em> is something I feel we can all recognize in ourselves
			or the people we look up to. However, I feel something is missing that hasn’t been said that One
			Stone hits squarely in the center: you need to feel belonging to be capable of rebelling. The idea
			of rebel talent is a very individualistic thing, as is One Stone’s BLOB learning model. It’s good
			that the BLOB is personalized, as it measures individual performance. A big part of why I went
			to One Stone is because of bullying that I didn’t even realize I was facing and feeling a lack
			of belonging in my schools. When I came to One Stone and was given chances to self-reflect I realized
			how much I had been viewed as an outsider previously, along with the importance of feeling belonging
			now that I could. I came to One Stone to let me have a place to fundamentally look at who I am
			and who I want to be. I’m not unique either; many people come to One Stone looking for a better
			community to fit in. Felix Swarthout already said he came here to have a more positive place to
			exist, as did Max Ziegler. In 7th grade, Dakota Reed decided that she would start exploring self-expressing
			by being herself more in school and at home. It started with finding her own style of dressing
			and being comfortable with how she presents herself. Later in sophomore year, Dakota started to
			find who she truly is and began to dress more femininely or modestly (dressing with religion) against
			the wishes of her family, trying to instead be comfortable with herself and putting the view of
			others second. Issy Martinez felt the same way about One Stone; she switched to it because her
			previous high school was unkind to her and she had a lack of control over the school, with no time
			for her own interests. Public high school for Issy was not accepting of anyone being different
			in any way, with constant judgment everywhere. Issy feels that she can be themselves at One Stone
			and notices it improving their learning significantly. Anybody can rebel at any time, but places
			like One Stone that give them support, community, and a sense of connection, help them be rebellious
			and their true selves.
		</ArticleParagraph>

		<ArticleParagraph>
			I would recommend <em>Rebel Talent</em> to anyone who feels different. Everyone has Rebel
			Talent, and One Stone is built to nurture that. It’s easy for me to see my own experiences—and
			those of my community—reflected in the book. I also recommend reading the other articles in
			<em>Relevant Reads</em>, which offer unique perspectives on One Stone.
		</ArticleParagraph>
	</ArticleSection>
</ArticleRoot>
