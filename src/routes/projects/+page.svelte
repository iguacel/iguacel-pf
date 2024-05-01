<script>
    import Header from "$lib/components/Header.svelte";
    import Grid from "$lib/components/Grid.svelte"
    import { isEn } from "$lib/stores/lang";

    const texts = {
        en: {
            title: "Projects",
        },
        es: {
            title: "Proyectos",
        },
    };
</script>

<Header>{$isEn ? texts.en.title : texts.es.title}</Header>

<Grid/>
