import { writable } from 'svelte/store';

const persist_storage = (key, initValue) => {
    const storeValueStr = localStorage.getItem(key);
    const store = writable(storeValueStr != null ? JSON.parse(storeValueStr) : initValue);
    store.subscribe((val) => {
        localStorage.setItem(key, JSON.stringify(val));
    });
    return store;
}

export const page = persist_storage("page", 0);
export const keyword = persist_storage("keyword", "");
export const access_token = persist_storage("access_token", "");
export const username = persist_storage("username", "");
export const is_login = persist_storage("is_login", false);