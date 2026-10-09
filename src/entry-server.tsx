import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";

export { PROFILE } from "./data/profile";
export { ROUTES, resolveRoute } from "./routes";

export const render = (pathname: string) =>
  renderToString(
    <StrictMode>
      <App pathname={pathname} />
    </StrictMode>,
  );
