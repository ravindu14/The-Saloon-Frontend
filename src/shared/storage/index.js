// @flow
export class LocalStorage {
  key: String;
  value: String;

  constructor(key = "", value = "") {
    this.key = key;
    this.value = value;
  }

  set() {
    localStorage.setItem(this.key, JSON.stringify(this.value));
  }

  get() {
    const data = JSON.parse(localStorage.getItem(this.key));

    return data;
  }

  remove() {
    localStorage.removeItem(this.key);
  }

  empty() {
    localStorage.clear();
  }

  removeAndSetNew(removeKey, newKey, value) {
    localStorage.removeItem(removeKey);

    localStorage.setItem(newKey, JSON.stringify(value));
  }

  removeMultiple(keys = []) {
    keys.length > 0 &&
      keys.map((key) => {
        return localStorage.removeItem(key);
      });
  }
}
