import { render, html } from "hydro-js";
import { Link } from "./Link";
import "./style.scss";
const img = new URL("./splash.webp", import.meta.url);

// HMR
render(
  html`<main class="center">
    <img
      loading="lazy"
      src=${img.href}
      height="350"
      width="623"
      alt="Splash of Water"
    />
    <p>Edit src/index.js and save to reload.</p>
    ${Link()}
  </main>`,
  ".center"
);

import.meta.hot?.accept();
