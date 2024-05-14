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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path d="M13.367 4.226a1 1 0 0 1 1.407.14l4 4.89A1 1 0 0 1 18 10.889h-1.587l1.354 1.421a1 1 0 0 1-1.447 1.38l-2.966-3.111a1 1 0 0 1 .724-1.69h1.812l-2.664-3.256a1 1 0 0 1 .14-1.407ZM24 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 28.349c.376.078.78.16 1.182.24.744.148 1.52.292 2.126.378.289.041.61.08.89.087.116.003.367.006.643-.051.124-.026.435-.098.761-.318.383-.258.898-.82.898-1.685 0-.227-.04-.418-.048-.454l-.001-.005a3.86 3.86 0 0 0-.047-.194c-.028-.11-.066-.238-.105-.367-.08-.265-.19-.609-.317-.996-.255-.778-.593-1.778-.928-2.758a646.159 646.159 0 0 0-1.228-3.554l-.116-.332a2 2 0 1 0-3.776 1.32v.001l.115.327a656.823 656.823 0 0 1 1.588 4.613c-.604-.122-1.195-.246-1.678-.348l-.03-.006a119.088 119.088 0 0 0-.969-.2 4.067 4.067 0 0 0-.221-.033h-.001c-.026-.003-.12-.014-.238-.014-.477 0-.847.18-.878.194l-.002.001c-.107.049-.199.1-.25.129-.077.044-.178.104-.26.153l-.067.04a9.215 9.215 0 0 1-.785.427c-.628.299-1.405.556-2.258.556s-1.631-.258-2.26-.556a9.114 9.114 0 0 1-.784-.426l-.07-.042c-.082-.05-.18-.108-.254-.15a3.2 3.2 0 0 0-.247-.128C20.368 24.19 19.99 24 19.5 24c-.123 0-.221.012-.247.015h-.001a2.359 2.359 0 0 0-.223.036c-.072.013-.159.031-.25.05l-.672.144-.045.01c-.476.103-1.063.23-1.663.353l.332-.928c.282-.79.578-1.607.83-2.303v-.002c.335-.924.591-1.633.635-1.773a2 2 0 1 0-3.815-1.2l-.03.083-.1.28c-.083.234-.197.547-.33.917l-.056.152c-.258.714-.58 1.606-.9 2.497-.341.953-.683 1.916-.94 2.667-.127.374-.239.71-.32.97-.04.129-.078.258-.109.373a3.695 3.695 0 0 0-.048.206l-.001.004c-.01.047-.047.229-.047.449 0 .76.404 1.31.789 1.61.323.251.644.344.785.38.299.076.57.077.693.076.294-.002.628-.04.919-.08a38.222 38.222 0 0 0 2.14-.383c.4-.08.8-.164 1.174-.243v3.908a2.005 2.005 0 0 0-.28.196l-3 2.5a2 2 0 0 0-.688 1.894l1 5.5a2 2 0 0 0 3.96-.539l-.396-4.358.075-.054c4.211-.806 6.555-.811 10.655-.002l.078.056-.396 4.358a2 2 0 0 0 3.96.539l1-5.5a2 2 0 0 0-.688-1.894l-3-2.5a1.996 1.996 0 0 0-.28-.196v-3.92Zm4.302-3.294h-.007.007Z"
      />
      <Path d="M33.226 4.367a1 1 0 0 1 1.548 1.266L32.11 8.89h1.812a1 1 0 0 1 .724 1.69L31.68 13.69a1 1 0 0 1-1.447-1.38l1.354-1.421H30a1 1 0 0 1-.774-1.633l4-4.89ZM23.487 4.21c.53-.213 1.118.016 1.312.511l1.368 3.486a.969.969 0 0 1-.202 1.003 1.097 1.097 0 0 1-1.015.341L24 9.365l.748 1.745c.21.49-.045 1.071-.57 1.299-.523.227-1.118.015-1.328-.474l-1.5-3.5a.965.965 0 0 1 .182-1.018c.255-.29.651-.426 1.024-.352l1.019.2-.695-1.77c-.194-.496.078-1.071.607-1.285Z" />
    </Svg>
  );
};
export default SvgHeadache;
