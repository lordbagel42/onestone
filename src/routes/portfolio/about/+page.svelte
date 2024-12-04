<script lang="ts">
	import '../../../app.css';
</script>

<div class="flex h-screen">
	<!-- Left Section -->
	<div class="flex w-1/2 items-center justify-center">
		<div class="relative flex items-center justify-center">
			<h1 class="animate-gradient absolute text-center text-9xl font-bold">Sylvie Rupe</h1>
		</div>
	</div>

	<!-- Right Section -->
	<div class="flex w-1/2 flex-col justify-center gap-8 p-12">
		<!-- Interests -->
		<div class="text-gray-700 dark:text-gray-300">
			<h2 class="text-3xl font-semibold text-gray-800 dark:text-gray-200">Robotics</h2>
			<p class="text-xl">
				I work with the One Stone robotics team weekly, teaching engineering and programming to
				them.
			</p>
		</div>

		<div class="text-gray-700 dark:text-gray-300">
			<h2 class="text-3xl font-semibold text-gray-800 dark:text-gray-200">Programming</h2>
			<p class="text-xl">
				I'm a programmer both professionally and personally. I take every experience in life with a
				programmer's mindset.
			</p>
		</div>

		<div class="text-gray-700 dark:text-gray-300">
			<h2 class="text-3xl font-semibold text-gray-800 dark:text-gray-200">Creativity</h2>
			<p class="text-xl">
				I always try and use creativity in everything I do. If I can't make a new spin on something,
				I don't see a point in my contributing to it.
			</p>
		</div>
	</div>
</div>

<style>
	/* Gradient animation */
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.animate-gradient {
		background: linear-gradient(45deg, #ff6ec7, #6a82fb, #fc5c7d, #ffb347);
		background-size: 400% 400%;
		color: transparent;
		-webkit-background-clip: text;
		animation: gradient 8s linear infinite;
	}
</style>
