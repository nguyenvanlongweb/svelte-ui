import { writable, get } from "svelte/store";

const screenWidth = writable<number>(0);
const darkStore = writable<boolean>(false);
const searchValueStore = writable<string>("");

export { writable, get };
export { screenWidth, darkStore, searchValueStore };
