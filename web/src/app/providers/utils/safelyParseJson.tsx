const safelyParseJSON = <T,>(json: string) => {
  // This function cannot be optimised, it's best to
  // keep it small!

  // did you know vscode case changes to file names don't count as a change to git?

  try {
    const parsed = JSON.parse(json) as T;
    return parsed; // Could be undefined!
  } catch (e) {
    return undefined;
    // Oh well, but whatever...
  }
};

export default safelyParseJSON;
