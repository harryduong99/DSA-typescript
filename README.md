## Write

Note that a file without any top-level import or export declarations is treated as a script whose contents are available in the global scope. And from ECMAScript 2015, any file containing a top-level `import` or `export` is considered a module.

=> Add `export` to each file to avoid issues like variable declaration conflict between files.
(We can also resolve this by adding `tsconfig.json` and set `"moduleDetection": "force"`)



## Execute

To run each problem, use `ts-node`. For example: `ts-node linkedLists/reverseList`
