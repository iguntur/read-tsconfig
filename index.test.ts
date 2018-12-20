import fs from 'fs';
import path from 'path';
import {tmpdir} from 'os';
import test from 'ava';
import * as json5 from 'json5';
import read from '.';

const expected = json5.parse(
	fs.readFileSync(path.resolve('.', 'tsconfig.json'), 'utf8')
);

test('async', async t => {
	await t.throwsAsync(read({cwd: tmpdir()}));
	t.deepEqual(await read(), expected);
});

test('sync', t => {
	t.throws(() => read.sync({cwd: tmpdir()}));
	t.deepEqual(read.sync(), expected);
});
