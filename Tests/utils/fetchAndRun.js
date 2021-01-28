import { html, render, setGlobalSchedule } from "hydro-js";
import { runTests } from "@web/test-runner-mocha";
setGlobalSchedule(false);

/**
 * @param {string} file
 * @param {() => unknown} fn
 */
export default function fetchAndRun(file, fn) {
  fetch(file)
    .then((e) => e.text())
    .then((t) => {
      render(html`${t}`);
      runTests(fn);
    });
}
