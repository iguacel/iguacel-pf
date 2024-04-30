<script>
	import Nav from "$lib/components/Nav.svelte";
</script>

<Nav />

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	main {
		width: 100%;
		max-width: var(--max-width);
		overflow: hidden;
		padding: var(--padding);
		margin: 0 auto;
	}
</style>
