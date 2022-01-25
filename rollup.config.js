import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize'
import pkg from './package.json';

export default [
	{
		input: 'src/main.ts',
		external: ['ms'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' },
			{
				name: 'howLongUntilLunch',
				file: pkg.browser,
				format: 'umd'
			}
		],
		plugins: [
			typescript(), // typescript支持
			resolve(), // 解析node_modules中的依赖
			commonjs(), // 将commonjs规范的库转换为es module
			filesize() // 打包之后展示文件体积
		]
	}
];
