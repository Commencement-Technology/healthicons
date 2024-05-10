import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFoot = (passedProps: SvgProps) => {
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
        d="M37.5 21.795V10h2v11.795c0 1.87.647 3.718 1.451 5.625.563 1.336 1.05 2.965 1.05 4.58-.001 2.349-1.055 3.905-2.446 4.832C38.219 37.722 36.633 38 35.5 38c-1.367 0-2.267-.292-3.028-.665-.235-.115-.477-.25-.689-.367-.093-.052-.18-.1-.259-.142a5.216 5.216 0 0 0-.84-.377c-.274-.092-.867-.156-1.696-.169-.788-.012-1.67.022-2.444.067-.847.049-1.599.35-2.52.72-.281.112-.579.231-.9.352-.95.356-2.213.581-4.124.581-1.983 0-2.93-.114-3.581-.393-.27-.116-.493-.267-.625-.357a4.24 4.24 0 0 0-.183-.117 3.354 3.354 0 0 1-.938.447c-.82.256-2.159.42-4.673.42-.858 0-1.594-.206-2.168-.64-.576-.437-.89-1.028-1.038-1.613-.285-1.115-.014-2.341.27-3.098A1 1 0 0 1 7 32h3.65l.627-.502c1.165-.932 2.49-1.584 3.833-2.064 1.733-.62 3.928-1.57 5.918-2.833 1.944-1.234 3.6-2.71 4.495-4.388l.982-10.308 1.99.19-1 10.5a.998.998 0 0 1-.1.352c-1.108 2.215-3.158 3.986-5.295 5.343-2.153 1.367-4.494 2.375-6.317 3.027-1.2.43-2.313.987-3.257 1.742l-.627.503a2 2 0 0 1-1.25.438H7.751c-.088.434-.112.892-.02 1.253.064.248.17.407.308.512.142.108.42.235.961.235 2.486 0 3.564-.17 4.077-.33.226-.07.332-.137.412-.192l.032-.024c.086-.066.318-.242.532-.348a1 1 0 0 1 .763-.055c.47.157.765.323 1.004.479l.168.111c.101.068.138.093.218.127.224.096.777.232 2.794.232 1.762 0 2.767-.209 3.422-.454.215-.08.443-.173.682-.27.966-.39 2.117-.856 3.324-.926a36.581 36.581 0 0 1 2.591-.07c.816.013 1.696.07 2.297.271.453.151.828.337 1.157.514l.342.188c.185.103.347.193.538.287.514.252 1.114.46 2.147.46.867 0 2.03-.222 2.945-.832C39.305 34.595 40 33.65 40 32c0-1.244-.383-2.595-.892-3.803-.815-1.934-1.608-4.102-1.608-6.402Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 23a1 1 0 0 1 1 1h-1 1v.022l-.001.04c0 .031-.003.074-.006.127a7.383 7.383 0 0 1-.357 1.814c-.36 1.084-1.104 2.444-2.622 3.355a1 1 0 0 1-1.029-1.716c.983-.589 1.49-1.479 1.754-2.27a5.38 5.38 0 0 0 .258-1.297l.003-.068v-.012A1 1 0 0 1 34 23Z"
      />
    </Svg>
  );
};
export default SvgFoot;
