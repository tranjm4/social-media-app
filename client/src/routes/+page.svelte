<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';

	const phrases: string[] = ['ideas.', 'community.', 'us.'];
	let i = -1;
    
    let y: number;
    let height: number;
	onMount(() => {
		const interval: NodeJS.Timeout = setInterval(() => {
			i += 1;
			i %= phrases.length;
		}, 2500);
        height = window.innerHeight;

        function updateWindowHeight() {
            height = window.innerHeight;
        }
        
        window.addEventListener("resize", updateWindowHeight);

		return () => {
			clearInterval(interval);
            window.removeEventListener("resize", updateWindowHeight);
		};
	});

</script>

<svelte:window bind:scrollY={y} />

<main>
	<div id="home-screen-container">
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

		<a href="/login">let's begin.</a>
	</div>

	<canvas id="circle1" style="scale: {y * 2 / height + 1}" />
	<canvas id="circle2" style="scale: {y * 1.7 / height + 1}" />

    <div class="description">
        <h1>Hello</h1>
    </div>
</main>

<style>
	main {
		position: relative;
		height: 200vh;
		width: 100vw;
        overflow: hidden;
	}

    #home-screen-container {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;;

    }

	h1 {
		font-weight: 200;
		margin: 0;
	}

	.title-container > h1 {
	}

	.phrase-container {
		position: relative;
		height: 50px;
		overflow: hidden;
	}
	.phrase-container > h2 {
		position: absolute;
	}

	a {
		background-color: var(--primary-color);
		border-radius: 0.75rem 0 0.75rem 0;
		text-decoration-line: none;
		color: black;
		transition-duration: 500ms;
	}
    
	a:hover {
        background-color: var(--secondary-color);
		border-radius: 0 0.75rem 0 0.75rem;
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
	}
    
	#circle2 {
        background-color: var(--secondary-color);
		top: 70%;
		left: 30%;
	}
    
    .description {
        position: relative;
    }
    
	/* Extra small device media query */
	@media only screen and (max-width: 600px) {
        .phrase-container {
            height: 50px;
		}
		a {
            padding: 20px;
            margin: 10% 0 10% 0;
		}

        .description {
            padding: 10vh 5vw 10vh 5vw
        }
	}

	/* Small device portrait */
	@media only screen and (min-width: 600px) {
	}

	/* Medium devices */
	@media only screen and (min-width: 768px) {
	}

	/* Large device media query */
	@media only screen and (min-width: 992px) {
	}

	/* Extra large devices */
	@media only screen and (min-width: 1200px) {
        main h1 {
            font-size: 5rem;
        }
        main h2 {
            font-size: 3rem;
        }

        .phrase-container {
            height: 100px;
        }
        a {
            margin: 50px 0 50px 0;
            padding: 30px;
            font-size: 1.5rem;
        }
	}
</style>
