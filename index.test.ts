import {tmpdir} from 'os';
import test from 'ava';
import read from '.';

const expected = {
	extends: '@guntur/tsconfig',
	compilerOptions: {
		declaration: true,
		outDir: 'dist',
		lib: [
			'es2016'
		]
	}
};

test('async', async t => {
	await t.throwsAsync(read({cwd: tmpdir()}));
	t.deepEqual(await read(), expected);
});

test('sync', t => {
	t.throws(() => read.sync({cwd: tmpdir()}));
	t.deepEqual(read.sync(), expected);
});
