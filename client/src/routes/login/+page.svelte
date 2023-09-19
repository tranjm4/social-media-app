<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let isLoaded = false;

	let username: string;
	let password: string;

	onMount(() => {
		let pageLoad = setTimeout(() => {
			isLoaded = true;
		}, 500);

		return () => {
			clearTimeout(pageLoad);
		};
	});
</script>

<main>
	{#if isLoaded}
		<div class="login-container" in:fade={{ duration: 300 }}>
			<h1>Login</h1>

			<form>
				<div class="form-entry">
					<label for="username" class="form-label">username</label>
					<input bind:value={username} type="text" name="username" class="form-text" />
				</div>

                <div class="form-entry">
                    <label for="password" class="form-label">password</label>
                    <input bind:value={password} type="password" name="password" class="form-text" />
                </div>

                <input id="submit" type="submit" on:click={() => {console.log(username, password)}} value="Submit"/>
			</form>
		</div>
	{:else}
		<div class="login-container" style="opacity: 0" />
	{/if}
</main>

<style>
	main {
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		font-weight: 200;

		background-color: white;
	}

	main h1 {
		font-weight: 200;
	}

	h1 {
		text-align: center;
	}

	.login-container {
		padding: 0 25px 25px 25px;
		aspect-ratio: 4/5;
		width: 30%;
        min-width: 300px;
        max-width: 400px;
		box-shadow: var(--shadow);
		border-radius: 1.5em;

        display: flex;
        flex-direction: column;
	}

	.form-label {
		font-size: 1em;
	}

    .form-entry {
        display: flex;
        flex-direction: column;
        width: 100%;

        margin: 10px 0 10px 0;
    }

    form {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form:first-child {
        margin-top: 0;
    }

    form:last-child {
        margin-bottom: 0;
    }

    .form-entry > input {
        padding: 10px 5px 10px 5px;
        border-radius: 0.5em;
        border-style: solid;

        font-weight: 200;
        font-size: 0.75em;
    }

    #submit {
        margin: auto 0 10% 0;
        width: fit-content;
        border: none;
        padding: 0.75em 1em 0.75em 1em;
        border-radius: 0.75em 0 0.75em 0;
        background-color: var(--primary-color);
        font-size: 1em;
        font-weight: 200;

        transition-duration: 500ms;
    }

    #submit:hover {
        cursor: pointer;
        background-color: var(--secondary-color);
        border-radius: 0.5em;
        box-shadow: var(--shadow);

        transition-duration: 500ms;
    }
</style>
