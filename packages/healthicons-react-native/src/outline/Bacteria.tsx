import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBacteria = (passedProps: SvgProps) => {
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
        d="M16 8.022a7.41 7.41 0 0 1 4.953 2.44l2.168-2.169 1.414 1.414-2.44 2.44c.488.99.762 2.104.762 3.282 0 2.322.815 4.454 2.175 6.125l2.26-2.261 1.415 1.414-2.261 2.261a9.674 9.674 0 0 0 6.125 2.175c.656 0 1.291.085 1.896.244l1.667-2.887 1.732 1-1.537 2.662A7.425 7.425 0 0 1 40 32.572c0 1.087-.234 2.12-.654 3.05l2.618 1.512-1 1.732-2.679-1.547A7.413 7.413 0 0 1 32.571 40c-.19 0-.381-.002-.571-.007V43h-2v-3.133a24.411 24.411 0 0 1-8.606-2.55l-1.528 2.647-1.732-1 1.518-2.63a24.693 24.693 0 0 1-5.312-4.432l-2.633 2.634-1.414-1.415 2.762-2.762a24.509 24.509 0 0 1-3.801-7.16L6.259 24l-.518-1.932 2.96-.793A24.631 24.631 0 0 1 8 15.43c0-.681.092-1.34.263-1.967L5.5 11.866l1-1.732 2.556 1.476A7.437 7.437 0 0 1 14 8.137V5h2v3.022ZM15.429 10A5.429 5.429 0 0 0 10 15.429C10 27.894 20.106 38 32.571 38a5.429 5.429 0 0 0 0-10.857c-6.47 0-11.714-5.245-11.714-11.714A5.429 5.429 0 0 0 15.43 10ZM15 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm11 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm13 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgBacteria;
