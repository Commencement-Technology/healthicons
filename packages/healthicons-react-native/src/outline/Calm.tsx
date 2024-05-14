import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCalm = (passedProps: SvgProps) => {
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.368 33.494a2.91 2.91 0 0 0 .472-.878c.105-.308.189-.703.15-1.107-.04-.416-.23-.956-.779-1.277-.508-.297-1.096-.268-1.616-.138l-.014.004c-2.396.636-3.569.899-4.704.894-1.138-.005-2.285-.28-4.639-.893-.454-.128-.995-.159-1.476.13-.497.3-.682.788-.738 1.155-.055.364-.008.727.067 1.02.076.296.201.602.371.855a3.364 3.364 0 0 0 .372.439C19.157 35.146 21.496 36 24.014 36c2.622 0 5.067-.93 6.354-2.506Zm-6.5-.502c1.406.006 2.797-.319 5.035-.91l-.03.06a.573.573 0 0 1-.054.087c-.786.963-2.56 1.771-4.806 1.771-2.142 0-3.868-.738-4.703-1.651a6.094 6.094 0 0 0-.084-.09l-.002-.002a5.575 5.575 0 0 1-.102-.113l-.002-.004-.004-.006c2.066.536 3.395.852 4.752.858Z"
      />
      <Path d="M13.743 24.35c-.12.738.381 1.445 1.064 1.883.714.457 1.731.707 2.93.53a3.794 3.794 0 0 0 2.653-1.665c.505-.764.712-1.693.48-2.382a.5.5 0 0 0-.818-.203c-1.795 1.704-3.823 2.123-5.642 1.448a.5.5 0 0 0-.667.39ZM33.819 24.35c.119.738-.382 1.445-1.065 1.883-.714.457-1.731.707-2.93.53a3.795 3.795 0 0 1-2.653-1.665c-.505-.764-.712-1.693-.48-2.382a.5.5 0 0 1 .818-.203c1.796 1.704 3.824 2.123 5.642 1.448a.5.5 0 0 1 .667.39Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Zm-2 0c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Z"
      />
    </Svg>
  );
};
export default SvgCalm;
