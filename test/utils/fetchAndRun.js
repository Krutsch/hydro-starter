import { html, render, setGlobalSchedule } from "hydro-js";
setGlobalSchedule(false);

/**
 * @param {string} file
 */
export default async function fetchAndRun(file) {
  try {
    const e = await fetch(file);
    const t = await e.text();
    render(html`${t}`);
  } catch (e_1) {
    return console.error(e_1);
  }
}
