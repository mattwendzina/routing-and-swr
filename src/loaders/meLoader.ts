import { LoaderFunction } from "react-router-dom";

export type MeLoader = {
  message: string;
};

export const loader: LoaderFunction = async (): Promise<MeLoader> => {
  const data = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("this is some data");
    }, 2000);
  });
  return { message: data };
};
