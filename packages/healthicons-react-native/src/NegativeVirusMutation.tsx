import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeVirusMutation = (
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
        d="M0 0h48v48H0V0Zm12.857 8c-.46 0-.923.2-1.28.593A2.31 2.31 0 0 0 11 10.142v5.444l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L9 15.586v-5.444c0-1.07.385-2.112 1.097-2.894C10.81 6.462 11.802 6 12.857 6H22.5a1 1 0 1 1 0 2h-9.643ZM29.5 40h5.643c.46 0 .923-.2 1.28-.593A2.31 2.31 0 0 0 37 37.858v-5.444l-1.293 1.293a1 1 0 0 1-1.414-1.414l2.998-2.998a.997.997 0 0 1 1.416-.002l3 3a1 1 0 0 1-1.414 1.414L39 32.414v5.444c0 1.07-.385 2.112-1.097 2.895C37.19 41.537 36.2 42 35.143 42H29.5a1 1 0 1 1 0-2ZM18 37.93a6.972 6.972 0 0 0 3.556-1.615l1.981 1.734-.244.244a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0-1.414-1.414l-.339.338-2.08-1.82A6.962 6.962 0 0 0 23.929 32H26a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0h-2.07a6.965 6.965 0 0 0-1.324-3.192L24 25.414l.293.293a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293-1.394 1.394A6.965 6.965 0 0 0 18 24.07V22a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v2.07a6.965 6.965 0 0 0-3.192 1.324L11.414 24l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 1 0 1.414 1.414l.293-.293 1.394 1.394A6.965 6.965 0 0 0 10.07 30H8a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0h2.07a6.965 6.965 0 0 0 1.324 3.192L10 36.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414L11.414 38l1.394-1.394A6.965 6.965 0 0 0 16 37.93V40a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2v-2.07Zm16.993-19.848a4.18 4.18 0 0 0 1.492-.696l1.673 1.544a1 1 0 0 0 1.45 1.377l1.4-1.4a1 1 0 0 0-1.415-1.414l-.02.02-1.802-1.662a4.17 4.17 0 0 0 .31-.858A1 1 0 0 0 38.2 15h1.846A1 1 0 0 0 42 14.7v-1.4a1 1 0 0 0-1.954-.3H38.2a1 1 0 0 0-.118.007 4.175 4.175 0 0 0-.49-1.185l1.308-1.308a1 1 0 0 0 1.407-1.421l-1.4-1.4A1 1 0 0 0 37.486 9.1l-1.308 1.308A4.174 4.174 0 0 0 35 9.92V7.954A1 1 0 0 0 34.7 6h-1.4a1 1 0 0 0-.3 1.954V9.92a4.189 4.189 0 0 0-1.178.488L30.514 9.1a1 1 0 0 0-1.421-1.407l-1.4 1.4a1 1 0 0 0 1.407 1.421l1.308 1.308c-.22.363-.387.761-.49 1.185A1 1 0 0 0 29.8 13h-1.846a1 1 0 0 0-1.954.3v1.4a1 1 0 0 0 1.954.3H29.8a1 1 0 0 0 .118-.007c.103.424.27.822.49 1.185L29.1 17.486a1 1 0 0 0-1.407 1.421l1.4 1.4a1 1 0 0 0 1.421-1.407l1.308-1.308c.363.22.761.387 1.185.49A1.001 1.001 0 0 0 33 18.2v1.846A1 1 0 0 0 33.3 22h1.4a1 1 0 0 0 .3-1.954V18.2c0-.04-.002-.08-.007-.118Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeVirusMutation);
export default ForwardRef;
