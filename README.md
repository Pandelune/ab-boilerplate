# Artblocks Project Boilerplate

This JavaScript project template is meant to be used a boilerplate for an [ArtBlocks](https://www.artblocks.io/) artistic project, **when using p5js**.
It focuses on code organisation and ArtBlocks specific packaging.

It is originally developed by Pandelune, the author of "Orthogones" and "Murano Fantasy" on Artblocks.

*Note: This tool is not affiliated with Art Blocks*

Also make sure to read [Artblocks official doc](https://github.com/ArtBlocks/artblocks-docs).


## Usage

### First steps

Fork the project in your workspace.

In `package.json`, you should fill in the following properties. It is just a good practice and has no incidence on AB.
- name
- description
- repository url
- author
- license

You may update `projectNum` in `constants.js`: it is the ID of your project on AB. It is only used to generate random numbers, so if you don't have it yet, do not worry.

Run `yarn run dev` when developing, and open `html/test.html` file, **using `http://localhost:8080/html/test.html`**.
In this mode, each time you change a js file in `src`, webpack will automatically rebuild the project, and the page will automatically update.


### How to write code

Once `yarn run dev` works, you can change the code in `src` folder.
Separate properly how you generate your art (`my-art-generator.js`, which you may rename), and how you draw it using p5js (`my-art-drawer.js`).
Ideally separate your code into multiple files. As an example see `my-art-generator.js`, which uses `color-generator.js`.


### How to add a dependency

Add dependencies in `package.json`. They will be packed in the produced js files.

Do not add p5js, as p5js is included in AB by default.


### Html files

You have several html testing files in `html` folder:
- `test.html` uses `test.js`. **This is the main page that you should use when developing**.
- `stats.html` uses `stats-tester.js`. You should use this page when developing and testing the stats.
- `mint.html` uses `mint.js`. You should use it to test that the minting script works well.
- `mint_rebuilt.html` uses `mint_rebuilt.js`. You should use it to test that the split works well - you must have exactly the same result as with `mint.html`.


### Statistics

Stats on AB are an important feature, but not always easy to package.

Use `html/stats.html` to generate stats on a specific hash.

After running `yarn run pack`, you have a `dist/statsWrapped.js` file. You can:
- run it:
  - temporarily uncomment the `console.log` in `packaging/statsTemplate.js`
  - pack, and run `node dist/statsWrapped.js` in the command line
- put it in AB artist interface: just copy paste everything from `dist/statsWrapped.js`

If your stat script requires some p5 functions (which is often the case for myself), use `p5mock.js` and complete it when required.


### Packaging for AB

`build` will run webpack to package js files for production: they are minified, and all dependencies are included in the target file.
When making changes to the project, check the content and the size of the files in `dist/` folder.

`pack` will run AB specific packaging: packing the stats in AB template, putting the dependencies license in target js file, and splitting the js files if required.

`build_pack` is a shortcut for `build` + `pack`.

Files to upload in AB artist interface are:
- `render_*.js` files for the rendering
- `dist/statsWrapped.js` file content for the stats


### Misc

`yarn run clean` will simply make a cleanup of the derived files to produce.



## Features

### Packing

Webpack is used for development and also to produce the final, minified js file. Webpack will ensure:
- that the external libraries are included in the output js file
- that the output js file is minified, which will save some gas

### Statistics packing

AB requires some specific packing for stats. The boilerplate will ease:
- the development and testing of the stats function
- the proper packing of it

### License in main js

When using webpack and packing for production, a separate license file is produced besides code. License feature will reintegrate this license text back into the main js file. In practice, in `mint.js`, you may put:
```
/**
 * @license
 * YOUR PROJECT source code:
 * - Copyright (c) 2021 YOURSELF
 * - SPDX-License-Identifier: UNLICENSED
 * SOME EXTERNAL LIBRARY
 * - Copyright (c) ...
 * - SPDX-License-Identifier: ...
*/
```

### Splitting

When your output file becomes too large, it becomes impossible to deploy it (too much gas required). AB allows to upload a script split into different parts.
The splitting function will split your code quite properly (i.e. not in the middle of something), and put a number on each file `render_*.js`.
If your project is small enough, you will only have `render_0.js` - which is perfectly ok.


## Good coding practices

Once AB specificity is that everything must scale properly ("Dimensionless"). My practical advice is the following:
- define a standard size for your peace of art (e.g. 100 pixels), and center it around 0,0 point
- translate (using p5js `translate`) and scale (using p5js `scale`) to match real window size
Also see [offical AB doc](https://github.com/ArtBlocks/artblocks-docs#dimensionless).

Generate your art in 2 distinct steps:
- generate all the properties of your piece of art; this should use random numbers, but not draw anything; store extensively all properties in an object
- draw your art based on these properties (this step must not use random numbers)
You will also be able to calculate the stats based on the data from generation.

While there will be some code which is the same between `mint.js` and `test.js`, I recommend to keep them separate, so that `mint.js` remains as minimalist as possible.

Split your code into multiple different files. Webpack will care about packing.
