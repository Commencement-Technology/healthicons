import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLiver = (passedProps: SvgProps) => {
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
        d="M18 30.707a8.356 8.356 0 0 1-3.312.654c-1.835 0-2.442 1.469-3.087 3.03-.731 1.769-1.512 3.657-4.188 3.657-5.037 0-3.794-15.5-.794-21.5s7.106-6.5 15.5-6.5c5.143 0 6.447.784 7.457 1.392.639.384 1.16.697 2.461.697 1.343 0 3.224-.4 5.104-.802 2.82-.602 5.642-1.204 6.649-.451 1.679 1.253-3.358 10.447-8.395 10.447-2.592 0-4.147 1.859-5.656 3.663-1.422 1.7-2.804 3.352-4.977 3.352-2.092 0-3.451.659-4.762 1.36v9.842h-2v-8.841Zm-9.307 4.899c-.22.225-.536.442-1.28.442h-.002c-.053 0-.093 0-.198-.103-.149-.146-.37-.468-.584-1.077-.432-1.226-.654-3.08-.627-5.296.054-4.443 1.086-9.49 2.406-12.13 1.316-2.63 2.735-3.84 4.61-4.51 2.073-.74 4.849-.884 9.101-.884.317 0 .616.003.9.009-.883 1.129-1.364 2.37-1.622 3.445a10.94 10.94 0 0 0-.293 2.195 9.385 9.385 0 0 0 .013.866l.003.039.002.017.001.018v.006l.001.003.995-.098.995-.099-.002-.03a7.383 7.383 0 0 1-.009-.66c.014-.457.07-1.09.238-1.79.303-1.262.953-2.687 2.324-3.738 1.38.177 2.01.445 2.384.638.167.087.31.172.501.287l.058.035c.206.124.487.291.817.441.731.332 1.536.505 2.612.505 1.042 0 2.25-.189 3.392-.407a108.39 108.39 0 0 0 2.172-.448c.466-.1.921-.196 1.341-.282 1.148-.234 2.133-.404 2.903-.453l.112-.007c-.25.79-.766 1.84-1.497 2.909-.751 1.098-1.66 2.115-2.606 2.837-.964.736-1.803 1.045-2.459 1.045-3.524 0-5.615 2.499-7 4.153l-.131.156c-.744.889-1.308 1.563-1.918 2.055-.57.462-1.05.651-1.584.651-2.039 0-3.54.527-4.762 1.113v-4.411c0-.395.195-.764.534-1.06.357-.313.756-.44.966-.44v-2c-.79 0-1.64.373-2.284.935-.643.563-1.186 1.413-1.215 2.477h-5.094c-2.39 0-5.256 1.051-2.39 3.153 2.08 1.526 5.669.312 7.483-.47v2.86c-1.019.516-1.945.858-3.312.858-1.7 0-2.888.792-3.678 1.842-.582.771-.982 1.749-1.269 2.449a49.899 49.899 0 0 1-.115.28c-.355.847-.617 1.35-.933 1.674Z"
      />
    </Svg>
  );
};
export default SvgLiver;
