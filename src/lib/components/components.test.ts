import { describe, it } from 'vitest';
import { render } from '@testing-library/svelte';
import Container from './Container.svelte';

describe('Container', () => {
	it('Renders the container', () => {
		render(Container);
	});
});
