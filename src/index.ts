import { render, html } from "hydro-js";
import "progressive-picture"; // Once per App
import withPreview from "./withPreview.js";

import "./index.css";
import img from "./splash.webp";
import { Link } from "./Link";

render(
  html`<main class="m-auto center text-center">
    <picture>
      <img
        class="object-contain rounded-none sm:rounded-3xl mb-6"
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
