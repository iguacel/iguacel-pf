<script>
    export let id;
    const version = 1;
    const format = "png";
    export let base;
</script>

<img src="/projects/{base}/{id}.{format}?v={version}" alt="">

<style>
  img {
  width: 100%;
  aspect-ratio: 16 / 9;
  }
</style>