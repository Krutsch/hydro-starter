import { render, html, setShouldSetReactivity } from "hydro-js";

export type fetchHTMLParams = {
  url: string;
  shouldRender: boolean;
  locator?: ReturnType<typeof document.querySelector> | string;
  errorHandler?: Function;
};

export default function fetchHTML({
  url,
  shouldRender,
  locator,
  errorHandler,
}: fetchHTMLParams) {
  setShouldSetReactivity(false);
  return fetch(url)
    .then((res) => res.text())
    .then((t) => (shouldRender ? render(html`${t}`, locator!) : t))
    .catch((e) => errorHandler?.(e) || console.error(e))
    .finally(() => setShouldSetReactivity(true));
}
