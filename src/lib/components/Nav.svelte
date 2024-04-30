<script lang="ts">
    import ToggleTheme from "./ToggleTheme.svelte";

    import { THEMES } from "$lib/config";

    function set_theme(theme: string) {
        if (!Object.values(THEMES).includes(theme)) return;
        localStorage.setItem("theme", theme);
        document.body.setAttribute("data-theme", theme);
    }

    function toggle_theme(): void {
        let current_theme = document.body.getAttribute("data-theme");
        const theme =
            current_theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        set_theme(theme);
    }
</script>

<nav>
    <ul class="links">
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/about">About</a>
        </li>
    </ul>

    <ul class="buttons">
        <li>
            <button aria-label="toggle theme" on:click={toggle_theme}>
                <ToggleTheme />
            </button>
        </li>
    </ul>
</nav>

<style>
    nav {
        max-width: var(--max-width);
        margin: 0 auto;
        padding: var(--padding);
        display: grid;
        grid-template-columns: 1fr 2em;
        grid-template-rows: auto;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    }

    ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin: 0;
        padding: 0;
    }

    ul.links {
        justify-content: flex-start;
    }

    ul.buttons {
        justify-content: flex-end;
    }

    button {
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
