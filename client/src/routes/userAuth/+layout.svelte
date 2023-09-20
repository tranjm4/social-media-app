<main>
    <a href="/">
        <div id="left-arrow" />
        <p>
            back to home
        </p>
    </a>
</main>

<slot />


<style>
    main {
        position: fixed;
        height: calc(max(10vh, 50px));
        width: 100vw;
        padding-left: 15%;
        font-size: 20px;
        font-weight: 200;

        display: flex;
        align-items: center;
    }

    #left-arrow {
        display: inline-block;
        aspect-ratio: 1/1;
        height: 0.75em;
        border: solid;
        border-right: none;
        border-bottom: none;
        rotate: -45deg;

        transition-duration: 300ms;
    }

    a {
        font-size: 1.25em;
        padding-left: 0.25em;
        border-radius: 0.25em;
        text-decoration-line: none;
        transition-duration: 300ms;
    }

    a > p {
        display: inline;
        padding: 0.5em;
        border-radius: 0.25em;
        transition-duration: 300ms;
    }

    a:hover > p {
        background-color: var(--primary-color);
    }

    a:hover > #left-arrow {
        transform: translate(-5px, -5px);
    }
</style>