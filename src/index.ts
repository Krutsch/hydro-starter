import { render, html } from "hydro-js";
import { Link } from "./Link";
import "./index.css";
import img from "./splash.webp";

render(
  html`<main class="center">
    <img
      loading="lazy"
      src=${img}
      height="350"
      width="623"
      alt="Splash of Water"
    />
    <p class="text-white">Edit src/index.js and save to reload.</p>
    ${Link()}
  </main>`,
  ".center"
);

// HMR
import.meta.hot?.accept();
