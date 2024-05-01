<script>
    import Header from "$lib/components/Header.svelte";
    import { isEn } from "$lib/stores/lang";

    const texts = {
        en: {
            greeting: "Hello",
            farewell: "Goodbye",
        },
        es: {
            greeting: "Hola",
            farewell: "Adiós",
        },
    };
</script>

<Header>{$isEn ? texts.en.greeting : texts.es.greeting}</Header>
