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
        d="M36.99 29.003c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071l-.02 2ZM27.378 26.926c3.895-1.59 5.943-1.961 9.612-1.923l.02-2c-3.95-.041-6.26.386-10.388 2.071l.756 1.852ZM36.99 21.003c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071l-.02 2ZM34.5 16v-3h2v3h-2ZM31 14v3h2v-3h-2ZM27.5 18v-3h2v3h-2ZM11.01 29.003c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071l.02 2ZM20.622 26.926c-3.895-1.59-5.942-1.961-9.612-1.923l-.02-2c3.95-.041 6.26.386 10.388 2.071l-.756 1.852ZM11.01 21.003c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071l.02 2ZM13.5 16v-3h-2v3h2ZM17 14v3h-2v-3h2ZM20.5 18v-3h-2v3h2Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 10.984c.406.089.82.185 1.243.287a.991.991 0 0 1 .757.965v25.539c0 .633-.583 1.105-1.204.987-6.213-1.185-10.4-1.268-16.122-.4a3 3 0 0 1-5.348 0c-5.721-.868-9.91-.785-16.122.4A1.011 1.011 0 0 1 4 37.775V12.237c0-.459.311-.859.757-.966.423-.102.837-.198 1.243-.287v-.46c0-.885.589-1.694 1.484-1.92 6.15-1.546 10.628.092 15.757 2.477.25.052.503.104.759.16.256-.056.51-.108.76-.16 5.128-2.385 9.606-4.023 15.756-2.476A1.973 1.973 0 0 1 42 10.524v.46Zm-2 22.984V10.537c-5.658-1.415-9.683.135-15 2.64v23.242l.003.002.002.001a.025.025 0 0 0 .009.003h.003a.038.038 0 0 0 .006-.002c4.909-2.222 9.191-3.483 14.923-2.437a.058.058 0 0 0 .047-.011.037.037 0 0 0 .007-.007Zm-17.003 2.453.003-.002V13.177c-5.317-2.504-9.342-4.055-15-2.64v23.431l.007.007a.058.058 0 0 0 .048.012c5.73-1.047 10.013.214 14.922 2.435a.028.028 0 0 0 .008.003h.001a.026.026 0 0 0 .011-.004Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgRegisterBook;
