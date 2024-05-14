import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSleepy = (passedProps: SvgProps) => {
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
      <Path d="M24 6C14.059 6 6 14.059 6 24c0 9.94 8.059 18 18 18s18-8.06 18-18c0-1.799-.264-3.535-.755-5.174l-1.916.575c.437 1.457.671 3 .671 4.599 0 8.836-7.163 16-16 16S8 32.836 8 24c0-8.837 7.163-16 16-16V6Z" />
      <Path d="M18.164 15.317a1 1 0 0 1 .366-1.366l2.669-1.54a1 1 0 0 1 1.492.985l-.451 3.75 1.27-.733a1 1 0 1 1 1 1.732l-3.003 1.734a1 1 0 0 1-1.492-.986l.451-3.75-.936.54a1 1 0 0 1-1.366-.366ZM26.524 8.07a1 1 0 1 0 .518 1.93l1.932-.517-2.049 5.104a1 1 0 0 0 1.187 1.339l4.347-1.165a1 1 0 1 0-.518-1.932l-2.415.647 2.049-5.104a1 1 0 0 0-1.187-1.338l-3.864 1.035ZM35.556 7a1 1 0 0 1 1-1H41a1 1 0 0 1 .848 1.53L37.804 14H41a1 1 0 1 1 0 2h-5a1 1 0 0 1-.848-1.53L39.196 8h-2.64a1 1 0 0 1-1-1ZM14.404 28.648c-.773-.245-1.44-.8-1.516-1.543a.5.5 0 0 1 .545-.548c1.93.181 3.781-.748 5.075-2.86a.5.5 0 0 1 .843-.015c.402.605.442 1.557.152 2.425a3.794 3.794 0 0 1-2.132 2.295c-1.112.481-2.16.503-2.967.246ZM31.74 24.003c.546-.599.846-1.412.54-2.094a.5.5 0 0 0-.745-.203c-1.582 1.123-3.65 1.244-5.825.062a.5.5 0 0 0-.738.408c-.045.725.396 1.569 1.08 2.176a3.794 3.794 0 0 0 2.995.922c1.203-.14 2.121-.644 2.692-1.27Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.448 31.855c-2.251-3.085-5.587-4.715-8.707-3.879-3.12.836-5.194 3.916-5.601 7.713-.115 1.069.923 1.823 1.961 1.545l11.42-3.06c1.039-.279 1.56-1.45.927-2.32Zm-8.19-1.947c1.894-.507 4.215.306 6.09 2.51L20.24 35.126c.521-2.846 2.125-4.71 4.018-5.218Z"
      />
    </Svg>
  );
};
export default SvgSleepy;
