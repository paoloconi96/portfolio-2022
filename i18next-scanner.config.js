const fs = require('fs');
const chalk = require('chalk');

module.exports = {
    input: [
        'app/**/*.{js,jsx,ts,tsx}',
        // Use ! to filter out files or directories
        '!app/**/*.spec.{js,jsx,ts,tsx}',
        '!app/i18n/**',
        '!**/node_modules/**',
    ],
    output: './',
    options: {
        debug: false,
        func: {
            list: ['i18next.t', 'i18n.t'],
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        trans: {
            component: 'Trans',
            i18nKey: 'i18nKey',
            defaultsKey: 'defaults',
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            fallbackKey: function(ns, value) {
                return value;
            },
            acorn: {
                ecmaVersion: 2020,
                sourceType: 'module', // defaults to 'module'
                // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
            }
        },
        lngs: ['en','it'],
        ns: ['homepage'],
        defaultLng: 'en',
        defaultNs: 'resource',
        defaultValue: '__STRING_NOT_TRANSLATED__',
        resource: {
            loadPath: 'i18n/{{lng}}/{{ns}}.json',
            savePath: 'i18n/{{lng}}/{{ns}}.json',
            jsonIndent: 4,
            lineEnding: '\n'
        },
        nsSeparator: false, // namespace separator
        keySeparator: false, // key separator
        interpolation: {
            prefix: '{{',
            suffix: '}}'
        }
    },
    transform: function customTransform(file, enc, done) {
        "use strict";
        const parser = this.parser;
        const content = fs.readFileSync(file.path, enc);
        let count = 0;

        parser.parseFuncFromString(content, { list: ['i18next._', 'i18next.__'] }, (key, options) => {
            parser.set(key, Object.assign({}, options, {
                nsSeparator: false,
                keySeparator: false
            }));
            ++count;
        });

        if (count > 0) {
            console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
        }

        done();
    }
};