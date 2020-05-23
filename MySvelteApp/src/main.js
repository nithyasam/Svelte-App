import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		src: 'https://nithyasam.github.io/'
	}
});

export default app;