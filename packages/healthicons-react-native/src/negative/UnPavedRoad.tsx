import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUnPavedRoad = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM16.544 16.545a35.982 35.982 0 0 1 4.134-3.55 1.5 1.5 0 1 1 1.996 2.167c.495.561 1.007 1.147 1.533 1.748a1.5 1.5 0 1 1 1.863 2.138l1.409 1.624a1.5 1.5 0 1 1 1.87 2.163l1.393 1.616a1.5 1.5 0 1 1 1.872 2.178l.007.008a17.997 17.997 0 0 0-8.51 13.368C23.988 41.103 23.105 42 22 42H8c-1.105 0-2.006-.896-1.944-2a36 36 0 0 1 10.488-23.456Zm6.828 6.886.724-.69-1.381-1.447-.724.69a28.847 28.847 0 0 0-1.676 1.742l-.663.748 1.497 1.326.663-.748a26.823 26.823 0 0 1 1.56-1.621Zm-4.264 5.223.535-.845-1.69-1.07-.534.845a31.648 31.648 0 0 0-2.258 4.255l-.4.916 1.832.801.4-.916a29.65 29.65 0 0 1 2.115-3.986Zm-3.613 8.248.262-.965-1.93-.524-.262.965c-.21.771-.392 1.553-.546 2.343l-.192.982 1.963.383.192-.981c.145-.744.316-1.479.513-2.203ZM42 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM40.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm1.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1.5 4.85a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM36.687 7.922a1.5 1.5 0 1 1-2.97.42 1.5 1.5 0 0 1 2.97-.42Zm-.574 6.646a1.5 1.5 0 1 0-.42-2.97 1.5 1.5 0 0 0 .42 2.97Zm1.976 3.255a1.5 1.5 0 1 1-2.97.421 1.5 1.5 0 0 1 2.97-.42Zm-.574 6.646a1.5 1.5 0 1 0-.42-2.97 1.5 1.5 0 0 0 .42 2.97Zm-7.47-14.838a1.5 1.5 0 1 1-2.736 1.23 1.5 1.5 0 0 1 2.736-1.23Zm1.296 6.543a1.5 1.5 0 1 0-1.23-2.736 1.5 1.5 0 0 0 1.23 2.736Zm2.803 2.578a1.5 1.5 0 1 1-2.736 1.23 1.5 1.5 0 0 1 2.736-1.23Zm.43 4.836a1 1 0 1 0-.82-1.824 1 1 0 0 0 .82 1.824Zm-7.012-9.897a.868.868 0 1 1-1.737 0 .868.868 0 0 1 1.737 0Zm1.724 5.21a.868.868 0 1 0 0-1.735.868.868 0 0 0 0 1.736Zm5.293-2.98a.868.868 0 1 1-1.736 0 .868.868 0 0 1 1.736 0Zm3.887.08a.868.868 0 1 0 0-1.737.868.868 0 0 0 0 1.736Zm-4.888-4.64a.868.868 0 1 1-1.737 0 .868.868 0 0 1 1.737 0ZM38.132 11a.868.868 0 1 0 0-1.736.868.868 0 0 0 0 1.736Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgUnPavedRoad);
export default ForwardRef;
