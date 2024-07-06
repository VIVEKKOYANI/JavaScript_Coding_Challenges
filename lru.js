// Lru(Least Recently Used) Cache

class LRU {
  constructor(max = 5) {
    this.max = max;
    this.catch = new Map();
  }

  get(key) {
    const item = this.catch.get(key);

    if (item) {
      this.catch.delete(key);
      this.catch.set(key, item);
    }
    return item;
  }

  set(key, value) {
    if (this.catch.has(key)) {
      this.catch.delete(key);
    } else if (this.catch.size === this.max) {
      this.catch.delete(this.first());
    }

    this.catch.set(key, value);
  }

  first() {
    return this.catch.keys().next().value;
  }
}

const lruCache = new LRU(3);

lruCache.set("name", "vivek");
lruCache.set("age", "25");
lruCache.set("city", "dhoraji");
// lruCache.set("www", "ss");

console.log("lll", lruCache.catch);