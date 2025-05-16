import peerDepsExternal from '@rollup/plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.cjs.js', format: 'cjs', sourcemap: true },
    { file: 'dist/index.esm.js', format: 'esm', sourcemap: true },
  ],
  plugins: [
    peerDepsExternal(),
    postcss(),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
});
