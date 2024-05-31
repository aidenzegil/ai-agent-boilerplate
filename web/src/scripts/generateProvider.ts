const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "What is the name of the provider you would like to generate? ",
  (providerName: string) => {
    console.log("Starting generation...");
    const fs = require("fs");
    const input = providerName[0].toLowerCase() + providerName.slice(1);
    const inputAsType = providerName[0].toUpperCase() + providerName.slice(1);
    const pathToProviderDirectory = `src/providers/${input}Provider`;
    fs.mkdirSync(pathToProviderDirectory);
    console.log("Generating types...");
    fs.writeFileSync(
      `${pathToProviderDirectory}/types.ts`,
      `
import { ${inputAsType}DTO } from "@/network/types/outputDtos"
import { Dispatch, SetStateAction } from "react";

export type ${inputAsType}ProviderState = {
  ${input}Data: ${inputAsType}DTO | undefined
};

export type ${inputAsType}ProviderSet = {
  set${inputAsType}Data: Dispatch<
    SetStateAction<${inputAsType}DTO | undefined>
  >;
}

export type ${inputAsType}ProviderLoading = {
  loading: boolean;
  ${input}DataLoading: boolean;
};

export type ${inputAsType}ProviderSetLoading = {
  set${inputAsType}DataLoading: Dispatch<SetStateAction<boolean>>;
}

export type ${inputAsType}ProviderStateController = {
  // Data state
  state: ${inputAsType}ProviderState;
  set: ${inputAsType}ProviderSet;
  // Loading state
  loading: ${inputAsType}ProviderLoading;
  setLoading: ${inputAsType}ProviderSetLoading;
};

export type ${inputAsType}ProviderFunctions = {
  get${inputAsType}Data: () => Promise<void>;
}
  `
    );
    console.log("Generating network...");
    fs.writeFileSync(
      `${pathToProviderDirectory}/network.ts`,
      `
import { ${input}Controller } from "@/lib/server/controllers/${input}/controller";
import { params } from "@/lib/server/controllers/${input}/params";

/** 
* ${input}Controller: the composed object I mentioned above, it takes
* arguments in case you need to pass in an auth token or something 
* similar.
*
* params: a composed object containing the type of each params for every
* defined network call.
*/

export const network = {
  get${inputAsType}Data: ({}: params.Get${inputAsType}Data) => {
    return ${input}Controller().get${inputAsType}Data();
  },
}

/**
* If route required auth
*/

export const network = {
  get${inputAsType}Data: ({
    authToken
}: params.Get${inputAsType}Data & { authToken: string}) => {
    return ${input}Controller({ authToken }).get${inputAsType}Data();
  },
}

/**
* If route required a parameter, say, "id"
*/

export const network = {
  get${inputAsType}Data: ({
    id
}: params.Get${inputAsType}Data) => {
    return ${input}Controller().get${inputAsType}Data({id});
  },
}
`
    );
    console.log("Generating state...");
    fs.writeFileSync(
      `${pathToProviderDirectory}/state.ts`,
      `
import { useState } from "react";
import { ${inputAsType}DTO } from "@/network/types/outputDtos";
import { ${inputAsType}ProviderStateController } from "./types";

export const use${inputAsType}ProviderStateController =
  (): ${inputAsType}ProviderStateController => {
    // Loading Primitives
    const [${input}DataLoading, set${inputAsType}DataLoading] = useState(false);

    // a loading constant derived from providers loading states, 
    // generally useful info
    const loading = ${input}DataLoading // || ...otherLoadingState
    
    // Data (you will likely want to use a persistent version of
    // useState for the actual data)
    const [${input}Data, set${inputAsType}Data] = useState<${inputAsType}DTO | undefined>()

    // return a stateController
    return {
      state: {
        ${input}Data
    },
      set: {
        set${inputAsType}Data
    },
      loading: {
        loading,
        ${input}DataLoading
    },
      setLoading: {
        set${inputAsType}DataLoading
    }
  }
}
`
    );
    console.log("Generating functions...");
    fs.writeFileSync(
      `${pathToProviderDirectory}/functions.ts`,
      `
import { useEffect } from "react";
import { network } from "./network";
import { ${inputAsType}ProviderFunctions, ${inputAsType}ProviderStateController } from "./types";

export const use${inputAsType}ProviderFunctions = (
  stateController: ${inputAsType}ProviderStateController
): ${inputAsType}ProviderFunctions => {

  useEffect(() => {
    initializeProviderData()
  }, [])

  const initializeProviderData = async () => {
    await get${inputAsType}Data()
    // ...other functions to run on initialization
  }

  const get${inputAsType}Data = async() => {
    stateController.setLoading.set${inputAsType}DataLoading(true)
    try {
      const new${inputAsType}Data = await network.get${inputAsType}Data({})
      stateController.set.set${inputAsType}Data(new${inputAsType}Data)
    } catch(e) {
      // ...do error handling
    }
    stateController.setLoading.set${inputAsType}DataLoading(false)
  }

  return {
    get${inputAsType}Data
  }
}
  `
    );
    console.log("Generating provider...");
    fs.writeFileSync(
      `${pathToProviderDirectory}/provider.tsx`,
      `
import React, { useContext, useMemo } from "react";
import { use${inputAsType}ProviderStateController } from "./state";
import { use${inputAsType}ProviderFunctions } from "./functions";
import {
  ${inputAsType}ProviderFunctions,
  ${inputAsType}ProviderLoading,
  ${inputAsType}ProviderState,
  ${inputAsType}ProviderStateController,
} from "./types";
import { createRegisteredContext } from "react-singleton-context";

/**
* Defining what our context has access to, we want our context to be
* able to give us the state, the loading state, and the functions,
* but we do not want to be able to mess with state willy nilly.
* So, we remove set and setLoading from the controller and 
* append the functions so we don't have to repeat typing.
* I would have put this in the types file but I wanted this to be 
* straightforward.
*/
type ${inputAsType}ProviderContext = Omit<
  ${inputAsType}ProviderStateController,
  "set" | "setLoading"
> & {
  functions: ${inputAsType}ProviderFunctions;
};

const defaultProvider: ${inputAsType}ProviderContext = {
  state: {
    ${input}Data: undefined,
  },
  loading: {
    loading: false,
    ${input}DataLoading: false,
  },
  functions: {
    get${inputAsType}Data: async () => {},
  },
};

const ${inputAsType}RegisteredContext = createRegisteredContext<${inputAsType}ProviderContext>(
  "${input}-provider-context",
  defaultProvider
);

// export the provider
export const ${inputAsType}Provider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const stateController = use${inputAsType}ProviderStateController();
  const functions = use${inputAsType}ProviderFunctions(stateController);

  // Define providers value (context)
  const value = useProviderInterface(
    stateController.state,
    functions,
    stateController.loading
  );

  // Wrap the children with the context provider
  return <${inputAsType}RegisteredContext.Provider value={value}>{children}</${inputAsType}RegisteredContext.Provider>;
};

// composes and updates provider's values
const useProviderInterface = (
  state: ${inputAsType}ProviderState,
  functions: ${inputAsType}ProviderFunctions,
  loading: ${inputAsType}ProviderLoading
): ${inputAsType}ProviderContext => {
  // update providers values on state and loading changes
  return useMemo(
    () => ({
      state,
      functions,
      loading,
    }),
    [state, loading.loading]
  );
};

export const use${inputAsType}Context = () => useContext(${inputAsType}RegisteredContext);
`,
      {
        flag: "w",
      }
    );

    console.log("Generation complete");
    rl.close();
  }
);
