import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledRuralPostAlt = (
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
        d="M8 25.898c.792.547 1.756.87 2.809.87a4.945 4.945 0 0 0 4.074-2.145 5.475 5.475 0 0 0 4.547 2.42 5.476 5.476 0 0 0 4.566-2.447 5.476 5.476 0 0 0 4.57 2.452 5.477 5.477 0 0 0 4.535-2.402 4.943 4.943 0 0 0 4.05 2.098A4.913 4.913 0 0 0 40 25.84V42H20V29h-8v13H8V25.898Zm28 5.15H26v6h10v-6Zm-12-2v10h14v-10H24Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M12 29h8v13h20V25.84a4.901 4.901 0 0 1-2.85.904 4.926 4.926 0 0 1-2.576-.72 4.976 4.976 0 0 1-1.473-1.378 5.512 5.512 0 0 1-1.425 1.434 5.454 5.454 0 0 1-3.067.968h-.087a5.455 5.455 0 0 1-3.108-.995 5.513 5.513 0 0 1-1.418-1.457 5.512 5.512 0 0 1-1.42 1.455 5.45 5.45 0 0 1-3.146.992 5.45 5.45 0 0 1-3.125-.978 5.51 5.51 0 0 1-1.422-1.442 4.976 4.976 0 0 1-1.461 1.396 4.926 4.926 0 0 1-2.614.748A4.9 4.9 0 0 1 8 25.897V42h4V29Zm26 .048H24v10h14m-4-6h-6v2h6v-2Zm2-2v6H26v-6h10Zm-7.435-2H38h-9.435Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M17.603 15.048H8.764c-.707 0-1.321.49-1.479 1.18l-1.113 4.874c-.695 3.045 1.618 5.946 4.741 5.946a4.86 4.86 0 0 0 4.096-2.24 5.474 5.474 0 0 0 4.421 2.24 5.476 5.476 0 0 0 4.568-2.45 5.476 5.476 0 0 0 4.567 2.45 5.473 5.473 0 0 0 4.421-2.24 4.86 4.86 0 0 0 4.096 2.24c3.123 0 5.437-2.901 4.741-5.946l-1.113-4.875a1.517 1.517 0 0 0-1.479-1.179h-8.839v1c0 .345-.043.68-.126 1h1.78v4.52a3.481 3.481 0 0 1-6.962 0v-1.52h-2.173v1.52a3.481 3.481 0 0 1-6.962 0v-4.52h1.78a4.005 4.005 0 0 1-.126-1v-1Zm-8.454 2-1.027 4.5a2.863 2.863 0 1 0 5.654.637v-5.137H9.15Zm29.697 0h-4.627v5.137a2.863 2.863 0 1 0 5.655-.637l-1.028-4.5Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M21 6.048a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4h-6Zm4 3.5a1 1 0 1 0-2 0v2.5h-2.5a1 1 0 1 0 0 2H23v2.5a1 1 0 1 0 2 0v-2.5h2.5a1 1 0 1 0 0-2H25v-2.5Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M21 8.048a2 2 0 0 0-2 2v.401a2.987 2.987 0 0 1 1.5-.4h.5v-.5c0-.547.146-1.06.401-1.5H21Zm5.599 0c.255.441.4.954.4 1.5v.5h.5c.547 0 1.06.146 1.5.401v-.4a2 2 0 0 0-2-2h-.4Zm2.4 7.599a2.986 2.986 0 0 1-1.5.401H27v.5c0 .547-.145 1.059-.4 1.5h.4a2 2 0 0 0 2-2v-.401Zm-7.598 2.401a2.986 2.986 0 0 1-.401-1.5v-.5h-.5a2.986 2.986 0 0 1-1.5-.401v.401a2 2 0 0 0 2 2h.401Zm-4.401-8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6Zm7-1.5a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2H25v2.5a1 1 0 1 1-2 0v-2.5h-2.5a1 1 0 1 1 0-2H23v-2.5a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledRuralPostAlt);
export default ForwardRef;
