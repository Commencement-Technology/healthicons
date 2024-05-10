import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChaplaincy = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm12.058 27.5 1.563 1.007a1 1 0 0 0 1.542-.84v-3.908a1 1 0 0 0-.383-.787l-6.687-5.244a1 1 0 0 0-1.418.188l-2.076 2.782a1 1 0 0 0 .204 1.4l7.255 5.402Zm10.485 1.007 1.564-1.007 7.254-5.402a1 1 0 0 0 .204-1.4l-2.076-2.782a1 1 0 0 0-1.418-.188l-6.687 5.244a1 1 0 0 0-.383.787v3.907a1 1 0 0 0 1.542.841Zm3.886-14.232c-.089.641-.176 1.277-.157 1.996l.23.729-5.055 4-.729-.858A18.427 18.427 0 0 1 25.5 27c-.5-1-.5-2-.5-2v-5.934c0-1.066 1.152-.724 1.746-.218.594.506.657.947.657.947l.586 3.094s-.005-2.794-.144-3.823c-.052-.39-.365-.933-.726-1.562a35.15 35.15 0 0 1-.373-.659c-.166-.304-.313-.562-.448-.798-.308-.543-.55-.967-.798-1.547-1.36-3.173.423-2.82 1.22-2.356.798.464 4.68 4.497 5.188 5.267.398.602.47 1.412.553 2.325.023.253.047.514.078.78.125 1.062.007 1.915-.11 2.759ZM15.892 25.27c.02-.719-.068-1.355-.157-1.996-.117-.845-.234-1.697-.11-2.758.032-.267.055-.528.078-.78.082-.914.155-1.724.553-2.326.508-.77 4.39-4.803 5.188-5.267.797-.464 2.58-.817 1.22 2.356-.249.58-.49 1.004-.798 1.547-.135.236-.282.494-.448.798a35.15 35.15 0 0 1-.372.66c-.362.628-.674 1.17-.727 1.561-.139 1.029-.144 3.823-.144 3.823l.586-3.094s.063-.441.657-.947c.594-.506 1.746-.848 1.746.218V25s0 1-.5 2-.744 1.41-1.218 2.142l-.73.858-5.053-4 .229-.729Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChaplaincy);
export default ForwardRef;
