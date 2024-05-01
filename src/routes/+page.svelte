<script>
    import Header from "$lib/components/Header.svelte";
    import { lang } from "$lib/stores/lang";

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

<Header>{$lang === 'en' ? texts.en.greeting : texts.es.greeting}</Header>
