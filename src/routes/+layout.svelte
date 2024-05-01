<script>
    import ToggleLang from "$lib/components/ToggleLang.svelte";
	import ToggleTheme from "$lib/components/ToggleTheme.svelte";
</script>

<ToggleTheme />
<ToggleLang/>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		width: 100%;
		max-width: var(--max-width);
		overflow: hidden;
		padding: var(--padding);
		margin: 0 auto;
	}
</style>
