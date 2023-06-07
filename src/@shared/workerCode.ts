import { worker } from "../@types";
import * as Comlink from "comlink";

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
