importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");

const obj = {
  fib(n: number) {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
      table[i + 1] += table[i];
      table[i + 2] += table[i];
    }
    return table[n];
  },
};

//@ts-ignore
Comlink.expose(obj);
