import { writable } from "svelte/store";

// eslint-disable-next-line @typescript-eslint/ban-types
export type GlobalStoreType = {};

export const globalStore = writable<GlobalStoreType>({});
