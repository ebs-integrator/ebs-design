import copy from 'rollup-plugin-copy-glob';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import bundleScss from 'rollup-plugin-bundle-scss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    bundleScss({
      output: './styles/index.scss',
    }),
    url(),
    svgr(),
    resolve(),
    typescript({
      typescript: require('typescript'),
      objectHashIgnoreUnknownHack: true,
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    copy(
      [
        { files: 'src/atoms/**/*.scss', dest: 'dist/atoms' },
        { files: 'src/organisms/**/*.scss', dest: 'dist/organisms' },
        { files: 'src/features/**/*.scss', dest: 'dist/features' },
      ],
      { verbose: true, watch: true },
    ),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react-is/index.js': ['isValidElementType', 'isMemo', 'isFragment'],
      },
      'node_modules/react-dom/index.js': ['render'],
    }),
  ],
};
