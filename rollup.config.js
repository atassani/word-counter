//import resolve from 'rollup-plugin-node-resolve';
//import babel from 'rollup-plugin-babel';


export default {
  //entry: 'src/index.js',
  external: [ 'd3' ],
  globals: {
    d3: 'd3'
  }
  // format: 'iifs',
  // plugins: [
  //   resolve(),
  //   babel({
  //     exclude: 'node_modules/**' // only transpile our source code
  //   })
  // ],
  // dest: 'build2/bundle.js' // equivalent to --output
};
