import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgExpectorate = (passedProps: SvgProps) => {
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
        d="M24 40c.428 0 .852-.017 1.27-.05.166.655.426 1.32.83 1.929-.69.08-1.39.121-2.1.121-9.941 0-18-8.059-18-18S14.059 6 24 6s18 8.059 18 18c0 .586-.028 1.166-.083 1.737a4.771 4.771 0 0 0-1.95-.699c.022-.343.033-.69.033-1.038 0-8.837-7.163-16-16-16S8 15.163 8 24s7.163 16 16 16Z"
        fill="#333"
      />
      <Path d="M30 30a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 35a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        fill="#333"
      />
      <Path
        d="M39.107 27.013c1.454-.14 2.743.86 2.881 2.232.138 1.373-.93 2.6-2.383 2.74-2.303.222-4.855-2.042-4.855-2.042s2.054-2.708 4.357-2.93ZM27.816 41.846c.85 1.211 2.468 1.518 3.614.686 1.147-.833 1.386-2.49.536-3.701-1.347-1.92-4.77-2.331-4.77-2.331s-.728 3.427.62 5.346Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.196 36.5s-.133.629-.18 1.498c-.008.158-.014.323-.016.494-.01 1.09.15 2.406.816 3.354.85 1.211 2.468 1.518 3.614.686 1.147-.833 1.386-2.49.536-3.701-.66-.94-1.815-1.517-2.823-1.863a10.384 10.384 0 0 0-.556-.173c-.794-.223-1.39-.295-1.39-.295Z"
        fill="#333"
      />
      <Path
        d="M40.164 34.412c1.752 1.017 2.379 3.21 1.4 4.895-.98 1.687-3.194 2.229-4.946 1.212-2.776-1.612-3.778-6.278-3.778-6.278s4.548-1.441 7.324.17Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.563 39.307c.98-1.686.353-3.878-1.399-4.895-2.776-1.612-7.324-.17-7.324-.17s1.002 4.665 3.778 6.277c1.752 1.017 3.966.475 4.945-1.212ZM17.241 18.349a1 1 0 0 1 1.314-.181l3 2a1 1 0 0 1 0 1.664l-3 2a1 1 0 0 1-1.267-1.534c.724-.734.825-1.08.824-1.26-.002-.202-.129-.574-.85-1.363a1 1 0 0 1-.02-1.326ZM34.759 18.349a1 1 0 0 0-1.314-.181l-3 2a1 1 0 0 0 0 1.664l3 2a1 1 0 0 0 1.267-1.534c-.724-.734-.825-1.08-.824-1.26.002-.202.129-.574.85-1.363a1 1 0 0 0 .02-1.326Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgExpectorate;
