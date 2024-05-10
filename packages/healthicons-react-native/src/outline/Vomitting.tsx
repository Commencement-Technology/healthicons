import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVomitting = (passedProps: SvgProps) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      {...props}
    >
      <Path d="M16.555 20.168a1 1 0 0 0-1.293 1.507c.342.374.799.727 1.14.991l.237.185c.079.063.145.119.2.167-.047.043-.105.09-.172.144-.08.064-.18.14-.291.225-.33.252-.763.581-1.088.91a1 1 0 0 0 1.267 1.535l3-2a1 1 0 0 0 0-1.664l-3-2ZM32.759 20.349a1 1 0 0 0-1.314-.181l-3 2a1 1 0 0 0 0 1.664l3 2a1 1 0 0 0 1.267-1.534c-.325-.33-.757-.659-1.088-.91a16.16 16.16 0 0 1-.291-.226 5.143 5.143 0 0 1-.173-.144c.056-.048.122-.104.201-.167l.236-.184c.342-.265.8-.618 1.141-.992a1 1 0 0 0 .02-1.326Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.66 37.713A17.96 17.96 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24a17.96 17.96 0 0 0 6.34 13.713 3.931 3.931 0 0 0-.509.32c-.377.285-.831.768-.831 1.467 0 .521.258.927.53 1.205.27.273.615.49.971.665.717.353 1.69.643 2.81.877 2.256.47 5.328.753 8.689.753 3.361 0 6.433-.283 8.69-.753 1.12-.234 2.092-.524 2.809-.877.356-.175.702-.392.97-.665.273-.278.531-.684.531-1.205 0-.699-.454-1.182-.831-1.467a3.931 3.931 0 0 0-.508-.32Zm-2.224-.79C37.416 34.013 40 29.308 40 24c0-8.837-7.163-16-16-16S8 15.163 8 24c0 5.291 2.568 9.982 6.526 12.895l-.03.045c.738-.186 1.582-.348 2.504-.482v-1.293c-.526-.652-.865-1.385-.967-2.165l-.002-.015A3.829 3.829 0 0 1 16 32.5c0-1.511.887-2.88 2.322-3.874l.021-.015C19.791 27.616 21.791 27 24 27c2.21 0 4.21.616 5.657 1.61.694.478 1.261 1.043 1.663 1.668l.051.081a4.058 4.058 0 0 1 .62 2.411v.006a3.87 3.87 0 0 1-.024.224l-.002.017c-.105.774-.443 1.5-.965 2.148v1.293c.893.13 1.713.286 2.436.465Zm-3.446-4.61c-.067-.633-.482-1.377-1.466-2.054C27.45 29.521 25.857 29 24 29c-1.857 0-3.45.52-4.524 1.259-.984.677-1.399 1.421-1.466 2.055.452-.304 1.016-.522 1.597-.684 1.242-.345 2.839-.505 4.393-.505 1.554 0 3.151.16 4.393.505.58.162 1.145.38 1.597.684Zm-11.014 1.788.005-.008a.032.032 0 0 1-.005.008Zm.12-.108a.783.783 0 0 0-.096.08v4.148l-.88.106c-1.76.212-3.178.511-4.132.848a4.918 4.918 0 0 0-.748.325 3.2 3.2 0 0 0 .145.076c.498.245 1.282.494 2.334.713 2.086.434 5.014.711 8.281.711 3.267 0 6.195-.276 8.281-.711 1.052-.22 1.837-.468 2.334-.713a3.2 3.2 0 0 0 .145-.076 4.918 4.918 0 0 0-.748-.325c-.954-.337-2.372-.636-4.132-.848l-.88-.106v-4.148a.774.774 0 0 0-.097-.08c-.192-.137-.535-.294-1.046-.436a9.389 9.389 0 0 0-.857-.191V38a1 1 0 1 1-2 0v-4.85a20.314 20.314 0 0 0-2 0V38a1 1 0 1 1-2 0v-4.634a9.389 9.389 0 0 0-.857.191c-.511.142-.854.299-1.046.436Zm-6.154 5.72.006-.008-.006.008Zm.006-.008a.084.084 0 0 1-.005.007l.005-.007Zm-.005.007a.006.006 0 0 1-.001.002l.001-.002Zm22.109-.007.003.006a.014.014 0 0 0 .003.003l-.002-.003-.004-.006Zm-6.033-5.612.005.008a.042.042 0 0 1-.005-.008Z"
      />
    </Svg>
  );
};
export default SvgVomitting;
