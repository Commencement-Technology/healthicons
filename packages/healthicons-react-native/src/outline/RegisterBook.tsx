import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRegisterBook = (passedProps: SvgProps) => {
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
        d="M11.01 21.003c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071l.02 2ZM20.622 26.926c-3.895-1.59-5.942-1.961-9.612-1.923l-.02-2c3.95-.041 6.26.386 10.388 2.071l-.756 1.852ZM11.01 29.003c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071l.02 2ZM36.99 29.003c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071l-.02 2ZM27.378 26.926c3.895-1.59 5.943-1.961 9.612-1.923l.02-2c-3.95-.041-6.26.386-10.388 2.071l.756 1.852ZM36.99 21.003c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071l-.02 2ZM13.5 16v-3h-2v3h2ZM17 14v3h-2v-3h2ZM20.5 18v-3h-2v3h2ZM34.5 16v-3h2v3h-2ZM31 14v3h2v-3h-2ZM27.5 18v-3h2v3h-2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m24 11.24.258-.055c4.996-2.406 9.301-4.136 15.268-2.608A1.97 1.97 0 0 1 41 10.492v.281c.72.145 1.466.31 2.243.498a.991.991 0 0 1 .757.965v25.539c0 .633-.583 1.105-1.204.987-6.213-1.185-10.4-1.268-16.122-.4a3 3 0 0 1-5.348 0c-5.721-.868-9.91-.785-16.122.4A1.011 1.011 0 0 1 4 37.775V12.236c0-.458.311-.858.757-.965A59.758 59.758 0 0 1 7 10.773v-.281c0-.88.583-1.687 1.474-1.915 5.967-1.528 10.272.202 15.268 2.608l.258.055Zm1 1.807c4.98-2.404 8.734-3.88 14-2.54v22.548s-.003.005-.008.008a.064.064 0 0 1-.052.013c-4.9-.898-8.681.037-12.795 1.826A3.001 3.001 0 0 0 25 34.171V13.047Zm-2 .001v21.123a3.001 3.001 0 0 0-1.145.731c-4.114-1.79-7.896-2.724-12.795-1.826a.064.064 0 0 1-.053-.013h-.001L9 33.054V10.507c5.266-1.34 9.02.137 14 2.541Zm19-.015c-.34-.077-.673-.15-1-.218v20.24c0 1.31-1.21 2.21-2.421 1.989-3.776-.693-6.8-.193-10.073 1.052 4.573-.533 8.428-.402 13.494.487v-23.55ZM19.494 36.096c-3.272-1.245-6.297-1.745-10.073-1.052C8.211 35.266 7 34.364 7 33.055v-20.24c-.327.068-.66.14-1 .218v23.55c5.066-.889 8.92-1.02 13.494-.487Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgRegisterBook;
