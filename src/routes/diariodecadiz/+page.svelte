<script>
    import Header from "$lib/components/Header.svelte";
    import Grid from "$lib/components/Grid.svelte"
    import { isEn } from "$lib/stores/lang";
    import { projectsList } from "$lib/data/dc";

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

<Grid projectsList={projectsList} title="Diario de Cádiz" leadin="2007 - 2021" name="dc"/>
