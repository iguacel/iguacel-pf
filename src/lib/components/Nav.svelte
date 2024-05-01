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


    <h3>{$isDark ? "dark" : "light"}</h3>
    <h3>{$isEn ? "en" : "es"}</h3>

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
</style>
