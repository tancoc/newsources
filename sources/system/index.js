import { css } from '@emotion/react'
import { themes } from '../themes'

export const breakpoints = [36, 48, 62, 75, 87.5]

export const normalize = css`
	${themes}

	:root {
		color-scheme: var(--color-scheme);
		accent-color: var(--blue-500);
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		-webkit-text-size-adjust: 100%;
		-moz-tab-size: 4;
		tab-size: 4;
		font-size: 62.5%;
		line-height: 1.5;
	}

	body {
		margin: 0;
		background-color: var(--body-background);
		font-family: 'Inter', sans-serif;
		font-size: 1.6rem;
		letter-spacing: 0.04rem;
		color: var(--body-text-color);
	}

	h1 {
		font-size: 3.2rem;
	}

	h2 {
		font-size: 2.8rem;
	}

	h3 {
		font-size: 2.4rem;
	}

	h4 {
		font-size: 2rem;
	}

	h5 {
		font-size: 1.6rem;
	}

	h6 {
		font-size: 1.2rem;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		font-weight: 600;
	}

	p {
		margin: 0;
	}

	hr {
		height: 0;
		color: inherit;
	}

	abbr[title] {
		text-decoration: underline dotted;
	}

	b,
	strong {
		font-weight: bolder;
	}

	code,
	kbd,
	samp,
	pre {
		font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
		font-size: 1.6rem;
	}

	small {
		font-size: 80%;
	}

	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	table {
		text-indent: 0;
		border-color: inherit;
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		outline: 0;
		margin: 0;
		padding: 0;
		border: none;
		font-family: inherit;
		font-size: 100%;
		line-height: inherit;
		letter-spacing: inherit;
	}

	button,
	select {
		text-transform: none;
	}

	button,
	[type='button'],
	[type='reset'],
	[type='submit'] {
		-webkit-appearance: button;
	}

	::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}

	:-moz-focusring {
		outline: 1px dotted ButtonText;
	}

	:-moz-ui-invalid {
		box-shadow: none;
	}

	legend {
		padding: 0;
	}

	progress {
		vertical-align: baseline;
	}

	::-webkit-inner-spin-button,
	::-webkit-outer-spin-button {
		height: auto;
	}

	[type='search'] {
		-webkit-appearance: textfield;
		outline-offset: -2px;
	}

	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	::-webkit-file-upload-button {
		-webkit-appearance: button;
		font: inherit;
	}

	summary {
		display: list-item;
	}
`
