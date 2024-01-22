import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHelicopter = (passedProps: SvgProps) => {
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
        d="m42.12 16.173 1.806 4.45-1.853.753-1.664-4.1-9.413.791c-.038 3.77-.347 7.372-1.887 10.093a8.614 8.614 0 0 1-3.792 3.577C23.615 32.572 21.48 33 18.827 33c-5.11 0-7.81-.103-9.243-.21-.715-.052-1.136-.107-1.395-.156a2.44 2.44 0 0 1-.33-.082 1.257 1.257 0 0 1-.254-.12 1.033 1.033 0 0 1-.083-.058l-.015-.012-.007-.006c-.004-.003-.008-.007.64-.769-.938.347-.939.346-.939.346v-.002l-.003-.006-.005-.014a3.569 3.569 0 0 1-.063-.192 8.167 8.167 0 0 1-.14-.523 10.52 10.52 0 0 1-.259-1.81c-.083-1.488.116-3.499 1.269-5.516 1.744-3.05 5.498-5.851 13-7.075V14a1 1 0 1 1 2 0v2.517c2.066-.24 4.382-.37 6.977-.371l10.327-.869 1.741-5.575 1.91.596-1.835 5.875ZM8.933 30.723A8.532 8.532 0 0 1 8.75 28H19.92c.408 0 .705-.201.874-.358.17-.157.294-.343.383-.5.182-.32.333-.724.462-1.141.263-.848.499-1.964.696-3.095a57.71 57.71 0 0 0 .587-4.367c1.79-.22 3.805-.355 6.072-.386-.044 3.704-.366 6.798-1.625 9.022a6.615 6.615 0 0 1-2.933 2.767c-1.35.661-3.161 1.058-5.61 1.058-5.092 0-7.735-.103-9.095-.204-.35-.026-.608-.05-.798-.073Zm11.95-11.882c-6.811 1.194-9.834 3.727-11.147 6.022-.217.38-.392.761-.532 1.137h10.31c.063-.14.135-.335.215-.59.224-.727.443-1.744.636-2.848.229-1.312.409-2.675.518-3.72Z"
        fill="#000"
      />
      <Path
        d="m8.14 31.587-.648.762a1 1 0 0 1-.29-.415l.937-.347ZM5 10a1 1 0 1 0 0 2h33.005a1 1 0 1 0 0-2H5ZM4.375 34.22a1 1 0 0 1 1.406.155c.22.276.783.6 1.758.88.924.265 2.037.44 3.135.554a38.511 38.511 0 0 0 4.083.192h.082l.01-.001H30.5a1 1 0 0 1 0 2H14.847l-.073.001-.271.001a40.498 40.498 0 0 1-4.034-.204c-1.152-.119-2.396-.31-3.481-.62-1.034-.297-2.133-.758-2.769-1.553a1 1 0 0 1 .156-1.406Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgHelicopter;
