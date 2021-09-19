const prefix = 'app';

function getKey(key: string): string {
  return `${prefix}_${key}`;
}

export const storage = {
  getItem<T>(key: string): T | null {
    const stored = localStorage.getItem(getKey(key));

    if (stored === null) {
      return stored;
    }

    return JSON.parse(stored);
  },
  setItem(key: string, value: any): void {
    localStorage.setItem(getKey(key), JSON.stringify(value));
  },
};
