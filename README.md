# Beta 2.7.0 bug repro

Steps:

1. `npm install`
2. `npm run dev`

The resulting error looks like this:
```
Error: Build failed with 1 error:
node_modules/vite/dist/node/chunks/dep-6cab8e8a.js:3977:44: error: [plugin: vite:dep-scan] Maximum call stack size exceeded
    at failureErrorWithLog (/Users/davidjackson/Downloads/vite-fgi2rv/node_modules/esbuild/lib/main.js:1493:15)
    at /Users/davidjackson/Downloads/vite-fgi2rv/node_modules/esbuild/lib/main.js:1151:28
    at runOnEndCallbacks (/Users/davidjackson/Downloads/vite-fgi2rv/node_modules/esbuild/lib/main.js:941:63)
    at buildResponseToResult (/Users/davidjackson/Downloads/vite-fgi2rv/node_modules/esbuild/lib/main.js:1149:7)
    at /Users/davidjackson/Downloads/vite-fgi2rv/node_modules/esbuild/lib/main.js:1258:14
    at /Users/davidjackson/Downloads/vite-fgi2rv/node_modules/esbuild/lib/main.js:629:9
    at handleIncomingPacket (/Users/davidjackson/Downloads/vite-fgi2rv/node_modules/esbuild/lib/main.js:726:9)
    at Socket.readFromStdout (/Users/davidjackson/Downloads/vite-fgi2rv/node_modules/esbuild/lib/main.js:596:7)
    at Socket.emit (node:events:369:20)
    at addChunk (node:internal/streams/readable:313:12)
```
