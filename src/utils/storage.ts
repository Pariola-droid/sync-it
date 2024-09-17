import { StateStorage } from "zustand/middleware";

const storage = localStorage;

const webStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.setItem(name, value);
  },
  getItem: name => {
    const value = storage.getItem(name);
    return value ?? null;
  },
  removeItem: name => {
    return storage.removeItem(name);
  },
};

export { webStorage };
