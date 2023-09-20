<script>
	import { SplitPane } from '@rich_harris/svelte-split-pane';

	const dividerColor = 'black';
	const dividerThickness = '20px';

	import CodeMirror from '../CodeMirror/CodeMirror.svelte';
	import { javascript } from '@codemirror/lang-javascript';
	import { oneDark } from '@codemirror/theme-one-dark';


	let value = '';
	import Output from '../Output/Output.svelte';
</script>

<div class="container">
	<div class="viewport">
		<SplitPane type="horizontal" min="25%" max="50%" pos="50%" --color="black">
			<section slot="a">
				<CodeMirror
					bind:value
					lang={javascript()}
					theme={oneDark}
					styles={{
						'&': {
							maxWidth: '100%',
							height: '100vh'
						}
					}}
				/>
			</section>
			<section slot="b">
				<Output />
			</section>
		</SplitPane>
	</div>
</div>

<style>
	:root {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		margin: 0;
	}

	.demo {
		display: flex;
		flex-direction: column;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	header {
		padding: 1rem;
	}

	h1 {
		margin: 0;
	}

	main {
		flex: 1;
		border-top: 1px solid black;
	}

	.container {
		position: relative;
		width: 100%;
		height: 100%;
		background: var(--sk-back-1);
	}

	.container :global(section) {
		position: relative;
		padding: 42px 0 0 0;
		height: 100%;
		box-sizing: border-box;
	}

	.container :global(section) > :global(*):first-child {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 42px;
		box-sizing: border-box;
	}

	.container :global(section) > :global(*):last-child {
		width: 100%;
		height: 100%;
	}

	.viewport {
		height: 100%;
	}

	.toggleable .viewport {
		width: 200%;
		height: calc(100% - 42px);
		transition: transform 0.3s;
	}

	.toggleable .viewport.output {
		transform: translate(-50%);
	}

	/* on mobile, override the <SplitPane> controls */
	@media (max-width: 799px) {
		:global([data-pane='main']) {
			--pos: 50% !important;
		}

		:global([data-pane='editor']) {
			--pos: 5.4rem !important;
		}

		:global([data-pane]) :global(.divider) {
			cursor: default;
		}
	}
</style>

