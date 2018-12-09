import * as fs from 'fs';
import * as path from 'path';
import * as json5 from 'json5';

export interface ReadOptions {
	cwd?: string;
}

function readTsconfig(options?: ReadOptions) {
	const opts = Object.assign({}, {cwd: process.cwd()}, options);

	return new Promise((resolve, reject) => {
		fs.readFile(path.resolve(opts.cwd, 'tsconfig.json'), 'utf8', (error, data) => {
			if (error) {
				reject(error);
			} else {
				resolve(json5.parse(data));
			}
		});
	});
}

readTsconfig.sync = function(options?: ReadOptions) {
	const opts = Object.assign({}, {cwd: process.cwd()}, options);

	try {
		return json5.parse(fs.readFileSync(path.resolve(opts.cwd, 'tsconfig.json'), 'utf8'));
	} catch (error) {
		throw error;
	}
};

export default readTsconfig;

module.exports = readTsconfig;
module.exports.default = readTsconfig;
