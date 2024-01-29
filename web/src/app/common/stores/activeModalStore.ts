import { writable } from "svelte/store";

import { ModalKey } from "$common/enums/componentModals";

export const activeModal = writable<ModalKey>(ModalKey.NONE);
