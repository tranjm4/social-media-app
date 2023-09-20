<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	const navbarLinks: string[] = ['about', 'login'];
	const phrases: string[] = ['create ideas.', 'create community.', 'create us.'];
	let i = -1;

	// @ts-ignore
	$: y = Math.min(y, height) / height;
	let height: number;
	let circle1: HTMLCanvasElement;
	let circle2: HTMLCanvasElement;

    // Declarations to update circle top position based on scroll position
	$: circle1Top = Math.max(80 - y * height * 0.005, 0);
	$: circle2Top = Math.max(70 - y * height * 0.01, 20);

	if (circle1!) {
		circle1.style.top = `${y}%`;
	}

	if (circle2!) {
		circle2.style.top = `${circle2Top}%`;
	}

	let isLoaded: boolean = false;

	onMount(() => {
		setTimeout(() => (isLoaded = true), 500);
		const interval: NodeJS.Timeout = setInterval(() => {
			i += 1;
			i %= phrases.length;
		}, 2500);

		height = window.innerHeight;
		y = 0;

		return () => {
			clearInterval(interval);
		};
	});
</script>

<svelte:window
	bind:scrollY={y}
	on:scroll={() => {
		circle1.style.top = `${circle1Top}%`;
		circle2.style.top = `${circle2Top}%`;
	}}
/>
<div class="navbar">
	<ul>
		{#each navbarLinks as navbarLink}
			<li><a class="nav-link" href={`/${navbarLink}`}>{navbarLink}</a></li>
		{/each}
	</ul>
</div>
<main>
	{#if isLoaded}
		<div id="home-screen-container" in:fade={{ duration: 500 }}>
			<div class="title-container">
				<h1>tweetbook</h1>
				<div class="phrase-container">
					{#key i}
						<h2 in:fly={{ y: '50px', duration: 500 }} out:fly={{ y: '-50px', duration: 500 }}>
							{phrases[i] || ''}
						</h2>
					{/key}
				</div>
			</div>

			<a id="login-button" href="/login">let's begin.</a>
		</div>
    {:else}
        <div id="home-screen-container" style="opacity: 0" />
	{/if}


	<canvas bind:this={circle1} id="circle1" style="scale: {Math.min(y * 0.1 + 1, 3.5)}" />
	<canvas bind:this={circle2} id="circle2" style="scale: {Math.min(y * 0.15 + 1, 3.5)}" />

	<div class="description">
		<h1>our mission is to engage the world.</h1>
        <p>
            we connect people together and
            facilitate meaningful ideas - 
            all to create a more colorful world
        </p>
	</div>
</main>

<style>
	.navbar {
		position: fixed;
		height: 20%;
		width: 100vw;
		z-index: 2;
	}
	.navbar > ul {
		display: flex;
	}
	li {
		list-style: none;
		margin: 0 0.75rem 0 0.75rem;
	}

	li:first-child {
		margin-left: 0;
	}
	li:last-child {
		margin-right: 0;
	}

	.nav-link {
		color: black;
		text-decoration: none;
		font-weight: 200;
		font-size: 20px;
		padding: 10px;
		border-radius: 0.5rem;
		transition: 300ms;
	}

	.nav-link:hover {
		background-color: var(--primary-color);
		transition: 300ms;
	}

	main {
		position: relative;
		min-height: 1000px;
		height: 200vh;
		width: 100vw;
		overflow: hidden;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	main h1:hover,
	h2:hover {
		cursor: default;
	}

	#home-screen-container {
		min-height: 400px;
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	h1,
	h2,
	a,
	li {
		transition-duration: 500ms;
	}

	h1 {
		font-weight: 200;
		margin: 0;
	}

	.phrase-container {
		position: relative;
		overflow: hidden;
	}
	.phrase-container > h2 {
		position: absolute;
        font-size: 15px;
	}

	#login-button {
		background-color: var(--primary-color);
		border-radius: 2rem 0 2rem 0;
		text-decoration-line: none;
		color: black;
		transition-duration: 500ms;
	}

	#login-button:hover {
		background-color: var(--secondary-color);
		border-radius: 0.75rem;
		transition-duration: 500ms;
	}

	canvas {
		border-radius: 100%;
		position: fixed;
		width: 100vw;
		aspect-ratio: 1/1;
	}

	#circle1 {
		background-color: var(--primary-color);
		top: 80%;
		left: -20%;
        opacity: 50%;
	}

	#circle2 {
		background-color: var(--secondary-color);
		top: 70%;
		left: 30%;
        opacity: 70%;
	}

	.description {
		position: relative;
		padding-top: calc(max(10vh, 100px));
		width: 80vw;
	}

    .description > p {
        font-size: 17px;
        font-weight: 200;
    }

	/* Extra small device media query */
	@media only screen and (max-width: 600px) {
		.nav-link {
			font-size: 20px;
		}

		.phrase-container {
			height: 50px;
		}
		#login-button {
			padding: 20px;
			margin: 10% 0 10% 0;
		}

	}

	/* Small device portrait */
	@media only screen and (min-width: 600px) {
		main h1 {
			font-size: 3rem;
		}

		main h2 {
			font-size: 2rem;
		}

		.phrase-container {
			height: 75px;
		}

        .phrase-container > h2 {
            font-size: 20px;
        }

		#login-button {
			padding: 25px;
			margin: 10% 0 10% 0;
			font-size: 1.25rem;
		}
	}

	/* Medium devices */
	@media only screen and (min-width: 768px) {
		main h1 {
			font-size: 3.5rem;
		}

		main h2 {
			font-size: 2.5rem;
		}
		.phrase-container {
			height: 100px;
		}

        .phrase-container > h2 {
            font-size: 30px;
        }

        .description > p {
            font-size: 20px;
        }
	}

	/* Large device media query */
	@media only screen and (min-width: 992px) {
		main h1 {
			font-size: 4rem;
		}

		main h2 {
			font-size: 3rem;
		}

		.phrase-container {
			height: 100px;
		}

        .phrase-container > h2 {
            font-size: 35px;
        }

		#login-button {
			font-size: 1.5rem;
		}

		.nav-link {
			font-size: 25px;
			margin: 0 20px 0 20px;
		}
        
	}

	/* Extra large devices */
	@media only screen and (min-width: 1200px) {
		main h1 {
			font-size: 5rem;
		}
		main h2 {
			font-size: 3rem;
		}

        .phrase-container > h2 {
            font-size: 40px;
        }

		.phrase-container {
			height: 100px;
		}
		#login-button {
			margin: 50px 0 50px 0;
			padding: 30px;
			font-size: 1.5rem;
		}
		.navbar {
			padding: 3vh 25vw 0 25vw;
		}
		.description {
			width: 50vw;
		}

        .description > p {
            font-size: 24px;
        }
	}
</style>
