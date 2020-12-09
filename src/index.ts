import { render, html } from "hydro-js";
import "./LazyImage"; // Once per App

import "./index.css";
import img from "./splash.webp";
import withPreview from "./withPreview.js";
import { Link } from "./Link";

render(
  html`<main class="center">
    <picture>
      <img
        loading="lazy"
        src=${withPreview(img)}
        data-src=${img}
        height="350"
        width="623"
        alt=""
        data-alt="Splash of Water"
      />
    </picture>
    <p class="text-white">Edit src/index.js and save to reload.</p>
    ${Link()}
  </main>`,
  ".center"
);

// HMR
import.meta.hot?.accept();
