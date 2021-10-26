import { html, render, setGlobalSchedule } from "hydro-js";
setGlobalSchedule(false);

/**
 * @param {string} file
 */
export default function fetchAndRun(file) {
  return fetch(file)
    .then((e) => e.text())
    .then((t) => {
      render(html`${t}`);
    })
    .catch((e) => console.error(e));
}
