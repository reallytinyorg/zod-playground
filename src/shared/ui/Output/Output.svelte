<script lang="ts">
	type Result = 'result' | 'form';
	let view = 'result';
</script>

<div class="view-toggle">
	<button class:active={view === 'result'} on:click={() => (view = 'result')}>Result</button>
	<button class:active={view === 'form'} on:click={() => (view = 'form')}>Form</button>
</div>

<style>
	.view-toggle {
		height: 4.2rem;
		border-bottom: 1px solid var(--sk-text-4);
		white-space: nowrap;
		box-sizing: border-box;
	}

	button {
		/* width: 50%;
		height: 100%; */
		background: var(--sk-back-1, white);
		text-align: left;
		position: relative;
		font: 400 12px/1.5 var(--sk-font);
		border: none;
		border-bottom: 3px solid transparent;
		padding: 12px 12px 8px 12px;
		color: var(--sk-text-2, #999);
		border-radius: 0;
	}

	button.active {
		border-bottom: 3px solid var(--sk-theme-1, --prime);
		color: var(--sk-text-1, #333);
	}

	div[slot] {
		height: 100%;
	}

	.tab-content {
		position: absolute;
		width: 100%;
		height: calc(100% - 42px) !important;
		visibility: hidden;
		pointer-events: none;
	}

	.tab-content.visible {
		visibility: visible;
		pointer-events: all;
	}
	iframe {
		width: 100%;
		height: 100%;
		border: none;
		display: block;
	}
</style>
