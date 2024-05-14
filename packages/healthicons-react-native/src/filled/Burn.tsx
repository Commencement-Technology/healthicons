import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBurn = (passedProps: SvgProps) => {
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
        d="M8.037 17c0 .744-.07 1.448-.197 2.123-.462 2.47-1.676 4.562-2.946 6.915-1.469 2.721-.87 5.176.453 7.468.492.852 1.084 1.682 1.707 2.494v-.536c-.002-.986-.003-1.748.048-2.39.146-1.854.725-2.707 2.974-5.041 1.026 1.897.77 3.861.392 5.857-.037.198-.076.397-.115.596A43.843 43.843 0 0 0 10.076 36c.41-.205.817-.395 1.216-.582.238-.112.473-.222.704-.334 1.835-.88 3.448-1.82 4.472-3.925 1.209-2.483.676-4.445-.155-6.819-.282-.804-.597-1.655-.89-2.59-.357 1.357-1.022 2.59-1.454 3.454-.86-3.44-3.312-5.959-5.932-8.204Z"
      />
      <Path d="M39 17.22H22.269c-.987 0-1.377-1.276-.56-1.828l4.036-2.724a2.552 2.552 0 0 0-2.643-4.36l-12.815 6.938c-.155.084-.307.17-.458.26 1.447 1.302 2.652 2.634 4.062 4.994.61-1 1.039-2.214 1.5-4 .24.777.648 1.742 1.108 2.83 1.69 3.993 4.077 9.638 1.392 13.67-1.994 2.746-3.678 3.566-5.899 4.647l-.303.148c-.229.112-.46.223-.695.335 1.524.7 3.22 1.09 5.006 1.09h17a2 2 0 0 0 0-4H22.889v-2h16.11a2 2 0 0 0 0-4H25v-2h17a2 2 0 1 0 0-4H25v-2h14a2 2 0 0 0 0-4Z" />
    </Svg>
  );
};
export default SvgBurn;
