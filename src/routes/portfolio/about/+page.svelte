<script lang="ts">
	import '../../../app.css';
</script>

<div class="vh-display flex flex-col md:flex-row">
	<!-- Left Section -->
	<div class="flex h-2/5 w-full items-center justify-center md:h-auto md:w-1/2">
		<div class="relative flex items-center justify-center">
			<h1 class="animate-gradient absolute text-center text-5xl font-bold md:text-7xl lg:text-9xl">
				Sylvie Rupe
			</h1>
		</div>
	</div>

	<!-- Right Section -->
	<div
		class="flex h-2/5 w-full flex-col items-center justify-center gap-6 p-6 md:h-auto md:w-1/2 md:items-start md:gap-8 md:p-12"
	>
		<!-- Interests -->
		<div class="text-center text-gray-700 dark:text-gray-300 md:text-left">
			<h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 md:text-2xl lg:text-3xl">
				Robotics
			</h2>
			<p class="text-base md:text-lg lg:text-xl">
				I work with the One Stone robotics team weekly, teaching engineering and programming to
				them.
			</p>
		</div>

		<div class="text-center text-gray-700 dark:text-gray-300 md:text-left">
			<h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 md:text-2xl lg:text-3xl">
				Programming
			</h2>
			<p class="text-base md:text-lg lg:text-xl">
				I'm a programmer both professionally and personally. I take every experience in life with a
				programmer's mindset.
			</p>
		</div>

		<div class="text-center text-gray-700 dark:text-gray-300 md:text-left">
			<h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 md:text-2xl lg:text-3xl">
				Creativity
			</h2>
			<p class="text-base md:text-lg lg:text-xl">
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
