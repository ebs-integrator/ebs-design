import path from 'path';
import copy from 'rollup-plugin-copy-glob';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';
import alias from 'rollup-plugin-alias';
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
    scss(),
    url(),
    svgr(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    alias({
      resolve: ['.ts'],
      types: path.resolve(__dirname, './src/types.ts'),
    }),
    copy(
      [
        { files: 'src/**/*.scss', dest: 'dist' },
        { files: 'src/resources/**/*.*', dest: 'dist/resources' },
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
