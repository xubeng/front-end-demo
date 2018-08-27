import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
// import { uglify } from 'rollup-plugin-uglify';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
// const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/rollup.js',
	output: {
		file: 'public/bundle.js',
		format: 'umd', // immediately-invoked function expression — suitable for <script> tags
		// sourcemap: true
	},
	plugins: [
		resolve(), // tells Rollup how to find date-fns in node_modules
		// commonjs(), // converts date-fns to ES modules
		// production && uglify() // minify, but only in production
		babel({
      		exclude: 'node_modules/**' // only transpile our source code
    	})
	]
};