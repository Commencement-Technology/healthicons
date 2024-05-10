import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChildProgram = (passedProps: SvgProps) => {
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
      <G clipPath="url(#child_program_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM14.067 17.467a3.734 3.734 0 1 0 0-7.467 3.734 3.734 0 0 0 0 7.467Zm-4.371 8.528a2 2 0 0 1-3.392-2.12L8 24.935a803.325 803.325 0 0 1-1.696-1.06v-.001l.001-.002.003-.003.007-.011.024-.038a20.204 20.204 0 0 1 .391-.593c.255-.375.614-.883 1.022-1.4.399-.504.889-1.073 1.407-1.535.259-.231.571-.477.924-.675.332-.186.851-.416 1.486-.416H16.565c.635 0 1.154.23 1.487.416.352.198.665.444.923.675.518.462 1.009 1.031 1.407 1.536a24.669 24.669 0 0 1 1.413 1.992l.025.038.007.01.002.005.001.001-1.626 1.017 1.626-1.016a2 2 0 0 1-3.391 2.12l-.003-.004-.016-.025a15.707 15.707 0 0 0-.152-.235v2.484l.056.595.667 7a2 2 0 0 1-3.97.473l-1-7-.021-.14-.02.14-1 7a2 2 0 0 1-3.971-.473l.667-7L9.848 27h.019v-1.27a18.237 18.237 0 0 0-.153.236l-.015.025-.003.004Zm24.37-8.528a3.733 3.733 0 1 0 0-7.467 3.733 3.733 0 0 0 0 7.467Zm-4.365 8.318a2 2 0 0 1-3.402-2.103l1.643 1.016A703.727 703.727 0 0 1 26.3 23.68l.001-.002.002-.003.008-.011.023-.038.085-.134a25.795 25.795 0 0 1 1.313-1.858c.394-.504.88-1.074 1.392-1.537.257-.231.567-.479.918-.677.33-.188.85-.421 1.488-.421H36.471c.638 0 1.158.233 1.489.42.35.2.66.447.917.678.513.463.998 1.033 1.392 1.537a24.706 24.706 0 0 1 1.398 1.991l.024.039.007.01.002.005.001.001-1.643 1.017 1.643-1.016a2 2 0 0 1-3.402 2.104v-.001l-.003-.004-.015-.025a16.46 16.46 0 0 0-.32-.49 24.315 24.315 0 0 0-.145-.212c.468 2.33 1.39 5.526 1.872 7.142a.991.991 0 0 1-.738 1.26c-3.537.737-6.013.718-9.854-.014a.999.999 0 0 1-.76-1.28c.505-1.624 1.444-4.786 1.889-7.168a23.681 23.681 0 0 0-.506.762l-.015.025-.003.004ZM29.6 36.5v-1.348c1.162.147 2.261.238 3.343.274l-.395 1.465A1.5 1.5 0 0 1 29.6 36.5Zm6.052.39-.397-1.469a37.74 37.74 0 0 0 3.345-.283V36.5a1.5 1.5 0 0 1-2.948.39Z"
        />
      </G>
      <Defs>
        <ClipPath id="child_program_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgChildProgram;
