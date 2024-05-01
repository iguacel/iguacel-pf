<script lang="ts">
    import { base } from "$app/paths";
    import { isDark } from "$lib/stores/theme";
    import { isEn } from "$lib/stores/lang";
</script>

<nav>
    <ul class="links">
        <li>
            <a href={`${base}/`}>Home</a>
        </li>
        <li>
            <a href={`${base}/about`}>About</a>
        </li>
    </ul>

    <div class="dev mono">
        <p class="pm">{$isDark ? "dark" : "light"}</p>
        <p class="pm">{$isEn ? "en" : "es"}</p>
    </div>
</nav>

<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        text-align: left;
        font-size: 24px;
    }

    a {
        font-weight: 600;
    }

    .dev {
        margin-top: var(--padding);
    }
</style>
