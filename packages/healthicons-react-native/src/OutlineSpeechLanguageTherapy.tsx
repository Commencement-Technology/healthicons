import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineSpeechLanguageTherapy = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M10.524 8.018c-.781.01-2.021.02-4.024.02v-2c1.997 0 3.228-.01 4-.02A149.011 149.011 0 0 0 11.764 6c6.832 0 12.47 5.243 12.47 11.83v1.096l2.283 3.234c1.312 1.857-.174 4.166-2.283 4.167v.666c0 1.066-.898 1.833-1.882 1.833h-.681l1.036.7c.835.158 1.527.863 1.527 1.799v1.499c0 1.597-.9 2.967-2.192 3.712-.877.505-1.793.555-2.53.463-.716-.089-1.373-.325-1.861-.522l-2.24-.906v4.596c0 1.066-.897 1.833-1.882 1.833h-2.03v-2h1.912v-5.913a1 1 0 0 1 1.375-.927l3.615 1.463c.436.176.902.335 1.359.392.458.057.898.01 1.283-.212.733-.423 1.191-1.164 1.191-1.979v-1.34a1 1 0 0 1-.442-.163l-2.715-1.833a1 1 0 0 1-.44-.83c0-.385.091-.792.364-1.137a1.73 1.73 0 0 1 .92-.587c.286-.08.581-.1.822-.107.166-.005.354-.003.524-.002h.967v-1.498a1 1 0 0 1 1-1h.998c.336 0 .57-.17.686-.373a.572.572 0 0 0-.034-.64l-2.467-3.494a1 1 0 0 1-.183-.577V17.83c0-5.375-4.633-9.829-10.47-9.829l-.302.004c-.193.004-.48.009-.938.014Z"
        clipRule="evenodd"
      />
      <Path fill="#333" d="M21 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M28.495 32.084A2.408 2.408 0 0 0 29.684 30c0-.893-.48-1.67-1.189-2.084l1.01-1.727a4.408 4.408 0 0 1 2.179 3.81 4.407 4.407 0 0 1-2.18 3.811l-1.009-1.727Zm3.287 2.579c1.213-.877 2.113-2.596 2.113-4.663s-.9-3.786-2.113-4.663l1.172-1.62c1.808 1.307 2.94 3.672 2.94 6.283 0 2.61-1.132 4.976-2.94 6.284l-1.172-1.62Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M38.105 30c0-3.181-1.264-5.848-2.99-7.216l1.243-1.567c2.302 1.825 3.747 5.128 3.747 8.783 0 3.655-1.445 6.958-3.747 8.783l-1.243-1.567c1.726-1.368 2.99-4.035 2.99-7.216Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineSpeechLanguageTherapy);
export default ForwardRef;
