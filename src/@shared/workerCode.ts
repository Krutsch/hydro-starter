import { worker } from "../@types";

// If module worker are supported in Firefox and Safari
// import * as Comlink from "comlink";

// Meanwhile
declare let Comlink: {
  expose: (worker: unknown) => void;
};

importScripts("https://unpkg.com/comlink/dist/umd/comlink.min.js");

const worker = {
  fib(n: number) {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
      table[i + 1] += table[i];
      table[i + 2] += table[i];
    }
    return table[n];
  },
} as worker;

Comlink.expose(worker);
