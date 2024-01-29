import { writable } from "svelte/store";

import { ToastKey } from "$common/enums/toastKey";

export const activeToast = writable<ToastKey>(ToastKey.NONE);
