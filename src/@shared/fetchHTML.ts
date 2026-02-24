import { render, html, setShouldSetReactivity } from "hydro-js";

export type fetchHTMLParams = {
  url: string;
  shouldRender?: boolean;
  locator?: Element | string;
  errorHandler?: (e: unknown) => void;
};

export default async function fetchHTML({
  url,
  shouldRender,
  locator,
  errorHandler = console.error,
}: fetchHTMLParams) {
  if (shouldRender) {
    setShouldSetReactivity(false);
  }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    const t = await res.text();
    return shouldRender ? render(html`${t}`, locator) : t;
  } catch (e) {
    errorHandler(e);
  } finally {
    setShouldSetReactivity(true);
  }
}
