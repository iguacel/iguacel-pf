<script>
</script>

<div class='app'>
	<main>
		<slot />
	</main>
</div>

<style>
	main {
		width: 100%;
		max-width: 72rem;
		overflow: hidden;
		padding: 2rem 0.5rem;
		margin: 0 auto;
		
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}
</style>
