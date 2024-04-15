import { cdnUrl } from "../data/env-constant";

export const imageLoader = ({ src, width, quality }: imageLoaderType) => {
  if (src.indexOf("https:") > -1) {
    return `${src}?w=${width}&q=${quality || 75}`;
  } else {
    return (
      cdnUrl +
      (src.indexOf("/") < 0 ? "/" : "") +
      `${src}?w=${width}&q=${quality || 75}`
    );
  }
};
