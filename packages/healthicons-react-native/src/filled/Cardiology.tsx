import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCardiology = (passedProps: SvgProps) => {
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
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm25.273 13.868-.784-.377c3.256 3.07 2.426 7.696.392 11.214-1.06 1.833-2.506 3.5-4.09 4.718-1.568 1.206-3.368 2.044-5.124 2.044-1.761 0-3.518-.843-5.031-2.044-1.528-1.213-2.901-2.862-3.911-4.65-1.007-1.784-1.686-3.77-1.75-5.66-.037-1.109.139-2.2.594-3.19a3.954 3.954 0 0 0-.485-.499c-.408-.353-.992-.716-1.742-.837a1 1 0 0 1-.825-1.173c.335-1.767.637-2.818.87-3.446a4.79 4.79 0 0 1 .312-.695 2.04 2.04 0 0 1 .193-.282l.032-.035.016-.016.008-.008.003-.005.002-.002c.002 0 .003-.001.704.711.282-.959.283-.959.283-.958h.002l.004.001.014.005.049.014.171.056a15.583 15.583 0 0 1 2.43 1.036 9.822 9.822 0 0 1 1.587 1.04l-1.036-1.596a1 1 0 0 1 .272-1.368l3.209-2.21a1 1 0 0 1 1.37.228l.495.667v-1.018a1 1 0 0 1 1-1H27.5a1 1 0 0 1 1 1v1.346l.06.054c.185.17.406.395.642.682 1.685-.297 3.72-.129 6.145.768l.91.337-.31.92c-.222.663-.468 1.19-.691 1.668l-.006.013c-.227.486-.43.924-.616 1.475l-.36 1.072Zm-20.616-4.231-.701-.713a1 1 0 0 1 .984-.246l-.283.958Zm2.498 4.223c.417-.34.877-.582 1.357-.748l.084-.041a3.058 3.058 0 0 0-.38-.439c-.41-.4-.963-.765-1.55-1.079-.53-.284-1.06-.51-1.48-.673-.138.41-.317 1.043-.521 1.998a5.702 5.702 0 0 1 2.004 1.288 18.772 18.772 0 0 1 .486-.306Zm2.118 1.107c-.341.173-.66.352-.945.521-.981.882-1.403 2.105-1.354 3.557.05 1.483.595 3.154 1.492 4.744.895 1.586 2.106 3.03 3.413 4.067 1.321 1.048 2.648 1.611 3.788 1.611 1.147 0 2.523-.567 3.904-1.63 1.366-1.049 2.642-2.513 3.579-4.133 1.923-3.326 2.189-6.793-.165-8.878a3.085 3.085 0 0 0-.74-.498c-.062-.032-.13-.065-.206-.102-.17-.084-.379-.185-.625-.318-.613.318-1.309.876-1.934 1.462a18.37 18.37 0 0 0-1.217 1.26l-.015.018-.003.004-.145.17-.075.124-1.163 4.173.407.94 2.119-.245.23 1.986-1.909.222.123 1.802-1.995.136-.176-2.582-.915-2.114.045-.163-.602.273-.844 2.132-1.86-.735.567-1.433-1.784-.42.458-1.947 2.58.607 2.185-.988.607-2.179a19.695 19.695 0 0 0-2.692-1.087c-.987-.31-2.008-.524-2.924-.52a4.193 4.193 0 0 0-1.209.163Zm7.892-.334.084-.108c.397-.509.978-1.177 1.704-1.788 1.228-1.032 3.063-2.044 5.152-1.53.11-.255.22-.492.326-.718l.006-.013c.086-.184.168-.36.248-.54-3.408-1.003-5.539-.198-6.872.905-1.133.937-1.786 2.17-2.105 3.011a54.788 54.788 0 0 1 1.457.781Zm-5.815-3.055.019-.082a1 1 0 0 0-.03-1.04l-.97-1.495 1.613-1.11 1.066 1.435a1 1 0 0 0 1.624-.027l.657-.947a1 1 0 0 0 .178-.57v-1.209H26.5v.829a1 1 0 0 0 .429.82c-.74.383-1.43.948-2.008 1.55-.858.893-1.618 2.018-2.084 3.177a11.41 11.41 0 0 0-2.08-.17c-.255 0-.386-.002-.508-.02.02-.617.066-.962.101-1.141Z"
      />
    </Svg>
  );
};
export default SvgCardiology;
