import { defineConfig } from 'vite';
import replace from '@rollup/plugin-replace';

export default defineConfig({
	plugins: [
		replace(),
	],
});
