import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOdontology = (passedProps: SvgProps) => {
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
        d="M22.254 12.648a2 2 0 0 0 2.541.05l.003-.002.005-.004.05-.038a14.824 14.824 0 0 1 1.14-.758c.793-.476 1.874-1.032 3.08-1.406 2.392-.741 4.929-.705 6.993 1.689 1.246 1.444 1.765 2.84 1.898 4.21.097.997-.006 2.038-.256 3.142a8 8 0 1 0-4.887 14.467c-.326.926-.62 1.572-.928 2.087-.364.608-.784 1.097-1.431 1.683-.327-.31-.74-.804-1.285-1.505l-.267-.345c-.562-.728-1.228-1.59-1.907-2.28-.717-.726-1.923-1.773-3.5-1.768-1.568.005-2.777 1.035-3.51 1.767-.688.69-1.364 1.551-1.934 2.28-.092.118-.182.233-.27.343-.556.705-.976 1.202-1.309 1.511-1.611-1.574-2.5-3.808-3.52-7.965-.232-.94-.584-2.072-.949-3.24v-.001c-.104-.335-.21-.674-.313-1.011-.481-1.565-.959-3.212-1.286-4.839-.687-3.416-.558-6.03.717-7.578 1.695-2.058 3.38-2.994 5.002-3.121 1.629-.128 3.66.522 6.123 2.632Zm12.758 21.097c-1.022 3.234-1.866 4.386-3.725 5.956-1.198 1.013-2.55-.736-3.973-2.577-1.233-1.595-2.519-3.258-3.804-3.254-1.307.004-2.614 1.67-3.864 3.264-1.441 1.838-2.808 3.581-4.013 2.567-2.433-2.048-3.5-4.877-4.616-9.418-.215-.874-.541-1.923-.902-3.08-1.51-4.849-3.612-11.595-.53-15.337 3.818-4.635 8.562-5.37 13.97-.737 0 0 8.459-6.711 14.026-.256 2.9 3.362 2.779 6.844 1.773 10.265a8.003 8.003 0 0 1-4.342 12.607ZM39 26a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-6-4a1 1 0 0 0-1 1v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1Z"
      />
    </Svg>
  );
};
export default SvgOdontology;
