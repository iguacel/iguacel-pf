<script>
    import Header from "$lib/components/Header.svelte";
    import Grid from "$lib/components/Grid.svelte"
    import { isEn } from "$lib/stores/lang";
    import { projectsList } from "$lib/data/elpais";

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

<Grid projectsList={projectsList} title="El País" leadin="2021 - 2024" base="elpais"/>
