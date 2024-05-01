<script lang="ts">
    import { base } from "$app/paths";
    import { isDark } from "$lib/stores/theme";
    import { isEn } from "$lib/stores/lang";
    import { isDev } from "$lib/stores/dev";

</script>

<nav>
    <ul class="links">
        <li>
            <a href={`${base}/`}>{$isEn ? "Home" : "Inicio"}</a>
        </li>
        <li>
            <a href={`${base}/projects`}>{$isEn ? "Projects" : "Proyectos"}</a>
        </li>
        <li>
            <a href={`${base}/about`}>{$isEn ? "About" : "Info"}</a>
        </li>
    </ul>

    {#if $isDev}
    <div class="dev mono op">
        <p class="pm">{$isDark ? "dark" : "light"}</p>
        <p class="pm">{$isEn ? "en" : "es"}</p>
    </div>
    {/if}
   
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
