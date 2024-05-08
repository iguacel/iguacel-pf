<script>
    import { balancer } from '$lib/actions/balancer';
    import { isEn } from "$lib/stores/lang";
    import Promo from "./Promo.svelte";
    export let data;
    export let base;

    $: pro = $isEn ? data.en : data.es;
    const id = data.id;

    let titleElement;
</script>

<div class="project">
    <a href={pro.href} target="_blank" rel="noopener noreferrer">
        <Promo {id} {base}/>
        <h4 class="section pm">{pro.section}</h4>
        <p bind:this={titleElement} class="title" use:balancer={{ ratio: 1, enabled: true }}>
            {pro.title}
        </p>
    </a>
</div>

<style>
    h4 {
        font-weight: 820;
        padding-top: calc(var(--padding) / 2);
    }
    .project {
        padding-bottom: 32px;
    }

    .title {
        font-weight: 500;
        font-size: 90%;
    }

    a {
        cursor: pointer;
    }
</style>
