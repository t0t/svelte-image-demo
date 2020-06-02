<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<style lang="scss">
	@import "../styles/main.scss";
	button {
		background: none;
		padding: $h0 $h1;
		border: none;
		border-bottom: 2px solid $site_background;
		border-radius: 0;
		color: $grey;
		margin-bottom: 0;
		height: $h3;
	}
	
	.selected {
		color: $primary;
	}
</style>

<button class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
	<slot></slot>
</button>