const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "What is the name of the component you would like to generate? ",
  (componentName: string) => {
    const fs = require("fs");
    const dirName = componentName[0].toLowerCase() + componentName.slice(1);
    const capCompName = componentName[0].toUpperCase() + componentName.slice(1);
    const pathToComponent = `src/app/components/common/${dirName}`;
    fs.mkdirSync(`${pathToComponent}`);
    console.log("Starting generation...");
    console.log("Generating types...");
    fs.writeFileSync(
      `${pathToComponent}/types.ts`,
      `
export type Fields = {};

export type DataInputs = {};

export type DataOutputs = {};
    `
    );

    console.log("Generating component...");
    fs.writeFileSync(
      `${pathToComponent}/component.tsx`,
      `
import { Fields } from "./types";

const Component = ({}: Fields) => {
  return <div>component</div>;
};
export default Component;

    `
    );

    console.log("Generating data...");
    fs.writeFileSync(
      `${pathToComponent}/data.ts`,
      `
import { DataInputs, DataOutputs } from "./types";

export const useData = ({}: DataInputs): DataOutputs => {
  return {};
};
      `
    );

    console.log("Generating index...");
    fs.writeFileSync(
      `${pathToComponent}/index.tsx`,
      `
import Component from "./component";
import { useData } from "./data";

const ${capCompName} = () => {
  const {} = useData({});
  
  return <Component />;
};
      
export default ${capCompName};
    `
    );

    console.log("Generation complete!");

    rl.close();
  }
);
