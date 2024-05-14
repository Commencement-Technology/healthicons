import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgExerciseYoga = (passedProps: SvgProps) => {
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
        d="M24 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm-2.692 9.462A4 4 0 0 1 19 17h10a4 4 0 0 1 3.692 2.462l2.5 6c1.033 2.477-.618 5.193-3.192 5.508v.922a1 1 0 0 0 .47.848l5.548 3.467A4.217 4.217 0 0 1 35.783 44h-23.57a4.213 4.213 0 0 1-2.223-7.792l5.588-3.47a1 1 0 0 0 .472-.85v-.913c-2.603-.285-4.281-3.02-3.242-5.514l2.5-6ZM18.05 31v.888a3 3 0 0 1-1.417 2.548l-5.587 3.47A2.213 2.213 0 0 0 12.213 42H30a1 1 0 0 0 1-1v-.13a1 1 0 0 0-.933-.997l-13.084-.875a1 1 0 0 1 .134-1.996l13.083.875a3 3 0 0 1 2.8 2.994V41c0 .35-.06.687-.17 1h2.953a2.217 2.217 0 0 0 1.175-4.097l-5.548-3.468A3 3 0 0 1 30 31.891V31h-2.757a4 4 0 0 1-2.829-1.172L24 29.414l-.414.414A4 4 0 0 1 20.757 31H18.05ZM25 27.586l.828.828a2 2 0 0 0 1.415.586H31.5a2 2 0 0 0 1.846-2.77l-2.5-6A2 2 0 0 0 29 19H19a2 2 0 0 0-1.846 1.23l-2.5 6A2 2 0 0 0 16.5 29h4.257a2 2 0 0 0 1.415-.586l.828-.828v-2.32c-.226.13-.43.308-.6.534l-.6.8a1 1 0 0 1-.8.4h-3a1 1 0 0 1-.894-1.447l1-2a1 1 0 1 1 1.788.894l-.276.553h.882l.3-.4c1.6-2.133 4.8-2.133 6.4 0l.3.4h.882l-.276-.553a1 1 0 1 1 1.788-.894l1 2A1 1 0 0 1 30 27h-3a1 1 0 0 1-.8-.4l-.6-.8a1.994 1.994 0 0 0-.6-.534v2.32Z"
      />
    </Svg>
  );
};
export default SvgExerciseYoga;
