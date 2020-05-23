<script>
	import MainPage from '../src/MainPage.svelte';
	export let name;
	export let src;
</script>

<main>
	<h1>Hello Svelte {name}!</h1>
	<MainPage src={src}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>