import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSynergistInsecticideBioassays = (passedProps: SvgProps) => {
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
      <G clipPath="url(#synergist_insecticide_bioassays_svg__a)" fill="#000">
        <Path d="M14 10a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 14 10Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 24a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 2a4 4 0 0 1 3.446 6.032l-5.478-5.478A3.981 3.981 0 0 1 14 26Zm-3.446 1.968a4 4 0 0 0 5.478 5.478l-5.478-5.478Z"
        />
        <Path d="M35 12.156c0-.705-.384-1.352-1-1.69v-.695h6v.696c-.616.337-1 .984-1 1.689v7.688c0 .705.384 1.352 1 1.69v.695h-6v-.696c.616-.337 1-.984 1-1.689v-7.688Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM10 10.333a1 1 0 0 0 1 1h2V13H9.5a1.5 1.5 0 0 0-.018 3 .827.827 0 0 1-.051.159l-3.263 7.458a2 2 0 0 0-.168.801V41a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V24.418a2 2 0 0 0-.168-.801l-3.263-7.459a.833.833 0 0 1-.05-.158 1.5 1.5 0 0 0-.019-3H15v-1.667h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v3.333ZM42 40c0 1.105-.625 2-5 2-3.495 0-4.597-.571-4.899-1.364-.363.517-1.042.949-1.876 1.13-.709.155-1.392.098-1.917-.118-.819.447-1.875.515-2.778-.069C24.528 40.931 24 39.667 24 38a1 1 0 1 1 2 0c0 1.3.404 1.762.617 1.9.215.14.523.144.814-.058a1.04 1.04 0 0 1 .04-.026c.3-.627 1.06-1.176 2.026-1.387 1.333-.29 2.574.167 2.842 1.026.223-.206.55-.423.957-.625l-2.066-2.392h-1.146a1.25 1.25 0 0 1-1.09-.637l-1.865-3.31a1 1 0 0 1 1.742-.982l1.65 2.928h.938c.436 0 .85.19 1.135.52l2.225 2.577c.17.197.25.442.243.683.141-.032.285-.06.432-.086l.134-2.222-1.435-.828a1.5 1.5 0 0 1-.586-1.982l1.289-2.523a1 1 0 0 1 1.78.91l-1.072 2.1 1.291.745a1.5 1.5 0 0 1 .747 1.39l-.137 2.294.181.012 1.853-1.711-.943-1.587a1.25 1.25 0 0 1-.015-1.252l1.422-2.529a1 1 0 0 1 1.744.98l-1.21 2.152.928 1.562a1.5 1.5 0 0 1-.271 1.868l-1.13 1.043C41.242 39 42 39.613 42 40Zm-1-20.2c.616.338 1 .985 1 1.69V26H32v-4.51c0-.705.384-1.352 1-1.69v-7.6c-.616-.338-1-.985-1-1.69V6h10v4.51c0 .705-.384 1.352-1 1.69v7.6Z"
        />
      </G>
      <Defs>
        <ClipPath id="synergist_insecticide_bioassays_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgSynergistInsecticideBioassays;
