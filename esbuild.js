import { build } from "esbuild";

build({
  entryPoints: ["./src/main.jsx"],
  bundle: true,
  outfile: "build/script.js",
  jsxFactory: "myJSX.createElement"
})
  .then(() => {
    console.log("Build success!");
  })
  .catch((err) => {
    console.err("Build Error: ", err);
  });