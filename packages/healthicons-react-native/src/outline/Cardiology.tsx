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
      fill="none"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 9a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v30a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Zm4-2a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9Zm13.507 4.533a1 1 0 0 1 1-1H27.5a1 1 0 0 1 1 1v1.346l.06.054c.185.17.406.395.642.682 1.685-.297 3.72-.129 6.145.768l.91.337-.31.92c-.222.663-.468 1.19-.691 1.668l-.006.013c-.227.486-.43.924-.616 1.475l-.36 1.072-.785-.377c3.256 3.07 2.426 7.696.392 11.214-1.06 1.833-2.506 3.5-4.09 4.718-1.568 1.206-3.368 2.044-5.124 2.044-1.761 0-3.518-.843-5.031-2.044-1.528-1.213-2.901-2.862-3.911-4.65-1.007-1.784-1.686-3.77-1.75-5.66-.037-1.109.139-2.2.594-3.19a3.954 3.954 0 0 0-.485-.499c-.408-.353-.992-.716-1.742-.837a1 1 0 0 1-.825-1.173c.335-1.767.637-2.818.87-3.446a4.79 4.79 0 0 1 .312-.695 2.04 2.04 0 0 1 .193-.282l.032-.035.016-.016.008-.008.003-.005.002-.002c.002 0 .003-.001.704.711.282-.959.283-.959.283-.958h.002l.004.001.014.005.049.014.171.056a15.583 15.583 0 0 1 2.43 1.036 9.822 9.822 0 0 1 1.587 1.04l-1.036-1.596a1 1 0 0 1 .272-1.368l3.209-2.21a1 1 0 0 1 1.37.228l.495.667v-1.018Zm-4.911 7.537a3.058 3.058 0 0 0-.38-.438c-.41-.4-.963-.765-1.55-1.079-.53-.284-1.06-.51-1.48-.673-.138.41-.317 1.043-.521 1.998a5.702 5.702 0 0 1 2.004 1.288 18.772 18.772 0 0 1 .486-.306c.417-.34.877-.582 1.357-.748l.084-.041Zm-.268 2.418c.285-.17.604-.348.945-.521a4.194 4.194 0 0 1 1.21-.163c.915-.004 1.936.21 2.923.52a19.695 19.695 0 0 1 2.692 1.087l-.607 2.179-2.186.988-2.579-.607-.458 1.946 1.784.42-.567 1.434 1.86.735.843-2.132.603-.273-.045.163.915 2.114.176 2.582 1.995-.136-.123-1.802 1.91-.222-.231-1.986-2.119.245-.407-.94 1.163-4.173.075-.124.144-.17.004-.004.015-.018.066-.074a18.37 18.37 0 0 1 1.152-1.186c.624-.586 1.32-1.144 1.933-1.462.246.133.454.234.625.318.076.037.144.07.205.102.262.132.458.247.741.498 2.354 2.085 2.088 5.552.165 8.878-.937 1.62-2.213 3.084-3.579 4.134-1.38 1.062-2.757 1.629-3.904 1.629-1.14 0-2.467-.563-3.788-1.611-1.307-1.037-2.518-2.481-3.413-4.067-.897-1.59-1.442-3.26-1.492-4.744-.049-1.453.373-2.675 1.354-3.557Zm-2.664.561.001.002m0-.002v.002a.998.998 0 0 0 1.44.245m10.06-1.663.084-.108c.397-.509.978-1.177 1.704-1.788 1.228-1.032 3.063-2.044 5.152-1.53.11-.255.22-.492.326-.718l.006-.013c.086-.184.168-.36.248-.54-3.408-1.003-5.539-.198-6.872.905-1.133.937-1.786 2.17-2.105 3.011a54.788 54.788 0 0 1 1.457.781Zm.764-6.45a1 1 0 0 1-.429-.821v-.829h-1.993v1.21a1 1 0 0 1-.178.57l-.657.946a1 1 0 0 1-1.624.027l-1.066-1.435-1.613 1.11.97 1.495a1 1 0 0 1 .03 1.04 1.537 1.537 0 0 0-.019.082c-.035.179-.08.524-.1 1.142.121.017.252.02.507.02.462 0 1.068.002 2.08.169.466-1.159 1.226-2.284 2.084-3.176.578-.603 1.268-1.168 2.008-1.55Zm-13.272 1.454.283-.96a1 1 0 0 0-.984.247l.7.713Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgCardiology;
