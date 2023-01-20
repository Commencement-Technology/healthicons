import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVomiting = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM30 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-.942 8.607c.585 0 1.06-.472 1.06-1.054 0-.582-.475-1.053-1.06-1.053-.584 0-1.058.471-1.058 1.053s.474 1.054 1.058 1.054ZM34.5 42c4.142 0 7.5-1.12 7.5-2.5 0-.959-1.618-1.791-3.993-2.21.108-.214.169-.455.169-.71 0-.873-.711-1.58-1.588-1.58a1.584 1.584 0 0 0-1.53 2.007c-.184-.005-.37-.007-.558-.007-4.142 0-7.5 1.12-7.5 2.5s3.358 2.5 7.5 2.5Zm-1.324-18.42c0 .873-.711 1.58-1.588 1.58A1.584 1.584 0 0 1 30 23.58c0-.873.71-1.58 1.588-1.58.877 0 1.588.707 1.588 1.58Zm2.883 6.527c.584 0 1.058-.472 1.058-1.054 0-.582-.474-1.053-1.058-1.053-.585 0-1.059.471-1.059 1.053s.474 1.054 1.059 1.054Zm-3.942 1.946c0 .582-.474 1.054-1.058 1.054A1.056 1.056 0 0 1 30 32.053c0-.581.474-1.053 1.058-1.053.585 0 1.06.471 1.06 1.053ZM14.213 27.34a39.714 39.714 0 0 1-1.865-1.958l.356-.593c1.024-1.708 1.986-3.069 3.47-4.362a108.957 108.957 0 0 1-.434 2.29l-.014.073-.004.017v.004l-.001.001a2 2 0 0 0 .483 1.752l4.38 4.788a2 2 0 1 0 2.952-2.7l-3.699-4.043.082-.43c.16-.857.367-2.006.544-3.166.175-1.145.332-2.36.38-3.323.023-.463.029-.982-.038-1.438a2.971 2.971 0 0 0-.284-.925c-.182-.354-.677-1.066-1.668-1.192.173.022-.795-.163-1.464-.193a7.885 7.885 0 0 0-3.138.507c-2.437.91-5.13 3.136-7.828 7.808-.475.823-.477 1.69-.357 2.357.12.663.387 1.295.677 1.844.581 1.1 1.45 2.23 2.28 3.196a42.26 42.26 0 0 0 2.914 3.05l.567 9.417a2 2 0 1 0 3.992-.24l-.614-10.214a2 2 0 0 0-.657-1.365l-.003-.002-.011-.011-.052-.047a41.79 41.79 0 0 1-.946-.902Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgVomiting);
export default ForwardRef;
