export default (options)=>{

    let pkg = {
        name: options.npm_namespace + "/" + (options.npm_library_name || ''),
        version: "0.0.1",
        description: options.npm_library_description || '',
        "main": "lib/index.js",
        "module": "lib/index.esm.js",
        "browser": "lib/index.bundle.js",
        publishConfig: {
            "access": "public"
        },
        license: "MIT",
        files: [],
        keywords: [],
        scripts: {
            "build": "rimraf lib && rollup -c rollup.config.lib.js",
            "start": "es-dev-server"
        },
        peerDependenciesMeta: {},
        dependencies: {},
        devDependencies: {
            "@atomico/rollup-plugin-sizes": "^1.0.3",
            "@babel/core": "^7.5.5",
            "@babel/plugin-proposal-class-properties": "^7.5.5",
            "@babel/plugin-syntax-dynamic-import": "^7.2.0",
            "@babel/plugin-syntax-import-meta": "^7.2.0",
            "@babel/plugin-transform-react-jsx": "^7.3.0",
            "@babel/plugin-transform-template-literals": "^7.4.4",
            "@open-wc/building-utils": "^2.7.0",
            "babel-plugin-bundled-import-meta": "^0.3.1",
            "babel-plugin-transform-inline-environment-variables": "^0.4.3",
            "es-dev-server": "^1.5.0",
            "rimraf": "^2.6.3",
            "rollup": "^1.15.4",
            "rollup-plugin-babel": "^4.3.3",
            "rollup-plugin-index-html": "^1.5.0",
            "rollup-plugin-node-resolve": "^5.2.0",
            "rollup-plugin-terser": "^5.1.1"
        },

    };

    return JSON.stringify(pkg, null, '\t');
};