import type { Response } from "express";

import type { DataStash } from "$controllers/types/request.dto";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function stash(req: any, _res: Response, next: () => void): void {
  /** Set the stash with default values */
  const defaultValues: DataStash = {
    auth: null,
    user: null,
  };
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  req.stash = defaultValues;
  next();
}
