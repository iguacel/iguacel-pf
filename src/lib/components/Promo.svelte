<script>
    import { base } from "$app/paths";
    export let id;
    const version = 1;
    const format = "png";
    export let name;
</script>

<img src="{base}/projects/{name}/{id}.{format}?v={version}" alt="">

<style>
  img {
  width: 100%;
  aspect-ratio: 16 / 9;
  }
</style>