import { html } from "hydro-js";

export function Link(): ReturnType<typeof html> {
  return html`<a class="learn" href="https://github.com/Krutsch/hydro-js"
    >Learn hydro-js</a
  >`;
}
