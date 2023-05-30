import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgExerciseWeights = (passedProps: SvgProps) => {
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
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.085 6.972a1 1 0 0 0-1.081-.911L7.01 6.23a1 1 0 0 0-.912 1.081l.329 3.869a1 1 0 0 0 .146 1.725l.35 4.122a1 1 0 0 0 1.081.912l1.993-.17a1 1 0 0 0 .912-1.08l-.37-4.346c.51-.091 1.01-.178 1.504-.26.105 1.65.41 4.449.972 7.085.36 1.68.852 3.434 1.536 4.814.34.688.782 1.392 1.367 1.948.517.492 1.217.927 2.081 1.041v4.332l-.326-.117-.223-.08c-1.005-.36-2.026-.726-2.806-.923-.378-.096-.951-.221-1.513-.171a2.406 2.406 0 0 0-1.314.516A2.221 2.221 0 0 0 11 32.263c0 .823.281 2.94.52 4.631a275.893 275.893 0 0 0 .46 3.129l.032.209.009.055.002.014v.005L14 40l-1.976.306a2 2 0 0 0 3.97-.163l.37-5.177c1.111.398 2.408.857 3.689 1.217 1.273.358 2.67.66 3.947.66 1.277 0 2.674-.302 3.947-.66 1.27-.357 2.556-.812 3.66-1.207l.399 5.177a2 2 0 0 0 3.97.154L34 40l1.976.306.001-.005.002-.014.009-.055.032-.21.114-.753c.094-.628.22-1.48.346-2.375.239-1.691.52-3.808.52-4.63 0-.59-.23-1.258-.818-1.736a2.405 2.405 0 0 0-1.314-.516c-.562-.05-1.135.075-1.514.17-.78.198-1.8.564-2.805.924l-.223.08-.326.117v-4.327c1.89-.211 3.035-1.743 3.666-2.962.732-1.412 1.21-3.197 1.534-4.886.508-2.639.708-5.41.773-7.032.488.08.983.165 1.486.254l-.37 4.339a1 1 0 0 0 .913 1.08l1.992.17a1 1 0 0 0 1.081-.912l.35-4.122a.998.998 0 0 0 .147-1.725l.329-3.869a1 1 0 0 0-.912-1.081l-1.993-.17a1 1 0 0 0-1.08.912l-.287 3.377c-.638-.112-1.263-.217-1.877-.315a2 2 0 0 0-3.161-.453c-6.077-.767-11.222-.766-17.193-.01a2 2 0 0 0-3.144.453c-.616.098-1.243.204-1.883.318l-.286-3.37Zm6.843 11.36a48.495 48.495 0 0 1-.912-6.824c5.531-.673 10.345-.673 15.975.013-.038 1.332-.208 4.194-.719 6.851-.3 1.561-.69 2.901-1.157 3.802-.318.613-.536.785-.608.826H18.643c-.116-.121-.295-.366-.507-.794-.462-.933-.872-2.304-1.208-3.874ZM28.5 16.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgExerciseWeights;
