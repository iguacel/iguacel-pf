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

    const links = [
        { name: "X", href: "https://twitter.com/infoiguacel" },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/jose-a-%C3%A1lvarez-90001a10/",
        },
        { name: "Github", href: "https://github.com/iguacel" },
        { name: "Gitlab", href: "https://gitlab.com/iguacel" },
    ];
</script>

<Header>{$isEn ? texts.en.greeting : texts.es.greeting}</Header>
