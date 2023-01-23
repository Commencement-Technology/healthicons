import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHeadache = (passedProps: SvgProps) => {
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
        d="M35.068 20.12a3 3 0 0 0-5.84 1.293c.007.052.019.104.034.155.323 1.054.765 2.14 1.17 3.126-1.409-.098-2.802-.194-3.02-.194-.428 0-.766.093-.856.118l-.004.001a4.438 4.438 0 0 0-.325.104c-.146.053-.304.117-.418.163l-.085.035c-.233.095-.465.189-.721.282-.662.24-1.06.305-1.192.3-.114-.005-.467-.084-1.038-.31-.222-.09-.421-.177-.62-.263l-.067-.03c-.094-.041-.23-.1-.354-.15a4.2 4.2 0 0 0-.292-.103c-.077-.025-.459-.147-.943-.147-.182 0-1.674.096-3.2.194l.06-.125v-.001l.523-1.098c.053-.113.111-.227.178-.358l.017-.034c.07-.14.15-.296.225-.458a4.39 4.39 0 0 0 .372-1.15 3 3 0 0 0-2.493-3.433c-1.52-.241-2.757.72-3.276 1.908-.405.928-.853 1.837-1.313 2.77l-.24.491c-.54 1.098-1.082 2.23-1.544 3.404-.044.111-.117.302-.174.508l-.001.003c-.021.075-.1.356-.117.71A3.008 3.008 0 0 0 12.518 31c.2.001 1.858-.105 3.479-.21L17 30.726v1.267l-2.612 1.666a3 3 0 0 0-1.325 3.14l1 4.812a3 3 0 0 0 5.921-.92l-.245-2.354 1.1-.336h6.538l.889.29-.25 2.4a3 3 0 0 0 5.921.92l1-4.812a3 3 0 0 0-1.22-3.07L31 31.831v-1.085l.65.046c1.47.102 2.987.207 3.209.207a3.01 3.01 0 0 0 2.998-2.721c.042-.42-.016-.76-.031-.852v-.003m-15.791-.373c.595.236 1.217.43 1.694.45.55.022 1.264-.168 1.955-.418.296-.107.56-.214.788-.308l.09-.036c.27-.11.552-.239.85-.239h.003l.087.004.247.014c.204.012.477.03.795.051l2.247.154 1.1.077a1 1 0 0 0 .998-1.367l-.192-.481c-.126-.315-.256-.633-.387-.95-.4-.974-.804-1.958-1.108-2.932a1 1 0 0 1 1.957-.352l.022.068c.313.844.706 1.709 1.083 2.54.161.355.32.704.468 1.043.512 1.17.934 2.28 1.121 3.388v.003c.007.04.029.169.014.32a1.01 1.01 0 0 1-1.008.92h-.003a120.014 120.014 0 0 1-1.084-.066l-2.19-.15-1.513-.106a1 1 0 0 0-1.069.998v2.677a1 1 0 0 0 .428.82l3.144 2.194a1 1 0 0 1 .407 1.024l-1 4.813a1 1 0 0 1-1.974-.307l.333-3.205a1 1 0 0 0-.685-1.054l-1.808-.589a.998.998 0 0 0-.31-.049H20.69a.998.998 0 0 0-.292.044l-2.03.62a1 1 0 0 0-.703 1.059l.33 3.174a1 1 0 0 1-1.974.306l-1-4.812a1 1 0 0 1 .442-1.047l3.075-1.96a1 1 0 0 0 .462-.843v-2.882a1 1 0 0 0-1.064-.998l-1.834.118-2.408.153a169.991 169.991 0 0 1-1.176.068 1.006 1.006 0 0 1-.932-.627c-.086-.21-.077-.395-.075-.441.007-.13.037-.24.046-.273l.001-.004c.029-.102.07-.215.11-.313.429-1.093.94-2.161 1.477-3.255l.236-.48c.459-.932.93-1.888 1.355-2.862.24-.55.706-.8 1.13-.733a1 1 0 0 1 .831 1.145 2.442 2.442 0 0 1-.213.624c-.057.125-.12.25-.192.391l-.019.037c-.064.126-.134.265-.2.404l-.522 1.094a637.04 637.04 0 0 0-.792 1.666 1 1 0 0 0 .968 1.426l1.341-.087a1391.511 1391.511 0 0 1 3.112-.195 28.99 28.99 0 0 1 .313-.017h.004c.523 0 1.076.367 1.538.55ZM23.642 4.066a1 1 0 0 1 1.292.576l1.207 3.144a1 1 0 0 1-1.103 1.344l-.98-.169.639 1.306a1 1 0 0 1-1.796.88l-1.5-3.062a1 1 0 0 1 1.067-1.426l1.176.202-.577-1.502a1 1 0 0 1 .575-1.293Zm-10.342.22a1 1 0 0 1 1.414.014l3.922 4a1 1 0 0 1-.714 1.7h-1.483l1.306 1.288a1 1 0 0 1-1.404 1.424l-3.043-3A1 1 0 0 1 14 8h1.54l-2.254-2.3a1 1 0 0 1 .014-1.414Zm21.407.007a1 1 0 0 1 0 1.414L32.414 8h1.508a1 1 0 0 1 .711 1.703l-2.965 3a1 1 0 0 1-1.423-1.406L31.527 10H30a1 1 0 0 1-.707-1.707l4-4a1 1 0 0 1 1.414 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 2a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgHeadache;
