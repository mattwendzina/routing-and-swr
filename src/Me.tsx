import { useLoaderData } from "react-router-dom";
import type { MeLoader } from "./loaders/meLoader";

function Me() {
  const loaderData = useLoaderData() as MeLoader;

  return <div>{loaderData.message ? loaderData.message : "loading"}</div>;
}

export default Me;
