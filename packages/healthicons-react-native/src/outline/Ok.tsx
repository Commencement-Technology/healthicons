import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOk = (passedProps: SvgProps) => {
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
      <Path d="M21.286 21.915c.107.398.146.835.016 1.193a.5.5 0 0 1-.728.257 7.178 7.178 0 0 1-.766-.557l-.194-.158c-.18-.148-.355-.29-.535-.425-.502-.375-.9-.573-1.245-.556-.362.018-.8.271-1.362.715-.159.125-.329.267-.505.415-.388.324-.808.675-1.207.931a.5.5 0 0 1-.766-.352c-.05-.365.026-.821.169-1.267.146-.458.38-.956.695-1.416.62-.907 1.626-1.762 2.973-1.706 1.3.055 2.264.817 2.844 1.647.292.416.498.863.61 1.279ZM26.63 21.915c-.108.398-.147.835-.017 1.193a.5.5 0 0 0 .729.257c.262-.158.521-.36.765-.557l.194-.158.002-.001c.18-.147.354-.29.534-.424.501-.375.9-.573 1.244-.556.363.018.8.271 1.363.715.158.125.328.267.505.415.387.324.807.675 1.207.931a.5.5 0 0 0 .765-.352c.05-.365-.026-.821-.168-1.267a5.562 5.562 0 0 0-.695-1.416c-.62-.907-1.627-1.762-2.974-1.706-1.3.055-2.263.817-2.844 1.647a4.172 4.172 0 0 0-.61 1.279Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.368 31.494a2.91 2.91 0 0 0 .472-.878c.105-.308.189-.703.15-1.107-.04-.416-.23-.956-.779-1.277-.508-.297-1.096-.268-1.616-.138l-.014.004c-2.396.636-3.569.899-4.704.894-1.138-.005-2.285-.28-4.639-.893-.454-.128-.995-.159-1.476.13-.497.3-.682.788-.738 1.155-.055.364-.008.727.067 1.02.076.296.201.602.371.855a3.364 3.364 0 0 0 .372.439C19.157 33.146 21.496 34 24.014 34c2.622 0 5.067-.93 6.354-2.506Zm-6.5-.502c1.406.006 2.797-.319 5.035-.91l-.03.06a.573.573 0 0 1-.054.087c-.786.963-2.56 1.771-4.806 1.771-2.142 0-3.868-.738-4.703-1.651-.03-.034-.06-.066-.084-.09l-.002-.003a6.618 6.618 0 0 1-.046-.048l-.014-.016a.576.576 0 0 1-.042-.048l-.006-.01c2.066.536 3.395.852 4.752.858Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Zm-2 0c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Z"
      />
    </Svg>
  );
};
export default SvgOk;
