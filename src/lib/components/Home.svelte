<script>
    import { isEn } from "$lib/stores/lang";
    import { base } from "$app/paths";
</script>

<main>
    {#if $isEn}
        <p>
            I'm Jose A. Iguacel. This is my graphic portfolio, featuring work for <a
                href={`${base}/elpais`}>El País</a
            >, <a href={`${base}/diariodecadiz`}>Diario de Cádiz</a>, and other
            <a href={`${base}/projects`}>fun stuff</a>.
        </p>

        <p class="second">
            <a href={`${base}/about`}>Here you can contact me.</a>
        </p>
    {:else}
        <p>
            Soy Jose. Este es mi portfolio de infografía, con trabajos para <a
                href={`${base}/elpais`}>El País</a
            >, <a href={`${base}/diariodecadiz`}>Diario de Cádiz</a> y
            <a href={`${base}/projects`}>otros</a>.
        </p>

        <p class="second">
            <a href={`${base}/about`}>Aquí puedes contactar conmigo</a>
        </p>
    {/if}
</main>

<style>
    main {
        font-weight: 400;
        font-size: 1.5em;
        max-width: 460px;
        margin-top: var(--margin);
    }

    a {
        text-decoration: underline;
        font-weight: 400;
    }

    .second {
        margin-top: 22px;
    }
</style>
