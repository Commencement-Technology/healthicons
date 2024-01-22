import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalSpider = (passedProps: SvgProps) => {
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
        d="M15.196 6.02a1 1 0 0 0-1.177.784l-1.5 7.5a1 1 0 0 0 .187.804l6.078 7.948c-.117.341-.222.696-.315 1.061a1.005 1.005 0 0 0-.115-.052l-6.393-2.422-4.246-4.342a1 1 0 0 0-1.43 1.398l4.4 4.5c.102.104.225.185.36.236l6.6 2.5c.158.06.32.077.476.058-.04.33-.071.665-.091 1.006l-5.541-.495a1 1 0 0 0-.887.393l-3.4 4.5a1 1 0 1 0 1.596 1.206l3.066-4.057 5.047.45c.04.004.08.005.119.004.01.169.022.336.037.502a.995.995 0 0 0-.553.124l-4.5 2.5a1 1 0 0 0-.45.523l-3 8a1 1 0 1 0 1.872.702l2.871-7.655 4.058-2.254C19.206 35.269 21.412 38 24 38c2.588 0 4.794-2.731 5.635-6.558l4.058 2.254 2.87 7.655a1 1 0 0 0 1.873-.702l-3-8a1 1 0 0 0-.45-.523l-4.5-2.5a.995.995 0 0 0-.553-.124c.015-.166.027-.333.037-.502.04.001.079 0 .119-.004l5.047-.45 3.066 4.057a1 1 0 0 0 1.596-1.206l-3.4-4.5a1 1 0 0 0-.887-.393l-5.54.495c-.021-.34-.052-.676-.092-1.006.156.02.318.002.475-.058l6.6-2.5c.136-.051.26-.132.361-.236l4.4-4.5a1 1 0 1 0-1.43-1.398l-4.246 4.342-6.393 2.422c-.04.015-.078.032-.115.052-.093-.365-.198-.72-.315-1.061l6.078-7.948a1 1 0 0 0 .187-.804l-1.5-7.5a1 1 0 0 0-1.962.392l1.412 7.056-5.152 6.738A7.772 7.772 0 0 0 27 19.338V15.5a1 1 0 1 0-2 0v.5h-2v-.5a1 1 0 1 0-2 0v3.838c-.47.453-.9 1.01-1.279 1.652l-5.152-6.738 1.412-7.056a1 1 0 0 0-.785-1.176Zm5.463 17.732a1 1 0 0 0 .335-.864c.397-.898.881-1.616 1.394-2.11l.612-.59V18h2v2.188l.612.59c.513.494.997 1.212 1.394 2.11a1 1 0 0 0 .335.864C27.746 24.954 28 26.395 28 28c0 2.462-.603 4.593-1.472 6.042C25.634 35.532 24.678 36 24 36c-.678 0-1.634-.468-2.528-1.958C20.602 32.592 20 30.462 20 28c0-1.605.254-3.046.66-4.248Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgAnimalSpider;
