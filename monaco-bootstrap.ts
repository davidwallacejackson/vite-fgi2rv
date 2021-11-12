/**
 * Loads and configure the Monaco editor.
 *
 * Figured this out with a lot of experimentation -- leaving some notes here
 * for the next person who has to work on it:
 *
 * getWorker is called when Monaco needs a web worker for a language service.
 * The default implementation tries to load some external files and create
 * the workers itself. That's why we needed a plugin in Webpack: to make sure
 * those external files got generated and served.
 *
 * Vite can create workers natively, using the ?worker syntax. So we can
 * override getWorker with our own implemenation and supply the workers --
 * no need for a plugin. The approach comes from: https://twitter.com/youyuxi/status/1355316139144970240
 *
 * The workers account for about half of the size of Monaco in the bundle,
 * and optional features for about a quarter. So while it's possible to strip optional
 * features out (by manually importing things that get imported in editor.main.js,
 * then importing editor.api.js instead of the entire editor.main) it just doesn't help
 * that much. I still haven't figured out how the Webpack build got Monaco down to
 * (seemingly) ~150K. I'm suspicious I may not have measured it right.
 */

// import 'monaco-yaml/lib/esm/monaco.contribution';
// import 'monaco-editor/esm/vs/language/json/monaco.contribution';

// import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.main';

// import type monaco from 'monaco-editor';

// import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker.js?worker&inline';
// import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker.js?worker&inline';
import yamlWorker from 'monaco-yaml/lib/esm/yaml.worker.js?worker&inline';

console.log(yamlWorker);
