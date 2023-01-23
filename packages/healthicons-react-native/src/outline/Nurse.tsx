import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNurse = (passedProps: SvgProps) => {
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
      <Path d="M27 13v-2h-2V9h-2v2h-2v2h2v2h2v-2h2Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m31.32 16.767 1.978-5.606c.536-1.52-.228-3.24-1.829-3.747C29.61 6.824 26.57 6 24 6s-5.61.824-7.47 1.414c-1.6.508-2.364 2.228-1.828 3.747l1.979 5.606a8 8 0 1 0 14.639 0ZM24 8c-2.24 0-5.029.738-6.865 1.32-.46.146-.73.658-.547 1.176l2.024 5.734c3.587-1.14 7.189-1.14 10.776 0l2.024-5.734c.183-.518-.087-1.03-.547-1.175C29.029 8.738 26.239 8 24 8Zm5.806 10.481h-.001a.996.996 0 0 1-.156-.045c-3.774-1.415-7.524-1.415-11.298 0a.998.998 0 0 1-.157.045 6 6 0 1 0 11.613 0Z"
        fill="#333"
      />
      <Path d="M34 34h2v2h-2v2h-2v-2h-2v-2h2v-2h2v2Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.879 28S6 31.393 6 35.467V42h36v-6.533C42 31.393 31.121 28 31.121 28l-5.972 4.193a2 2 0 0 1-2.298 0L16.879 28Zm14.562 2.22-5.142 3.61a4 4 0 0 1-4.598 0l-5.142-3.61a37.796 37.796 0 0 0-4.227 1.776c-1.296.646-2.482 1.363-3.316 2.092C8.115 34.875 8 35.343 8 35.467V40h32v-4.533c0-.124-.115-.592-1.016-1.38-.834-.728-2.02-1.445-3.317-2.092a37.796 37.796 0 0 0-3.547-1.528c-.25-.094-.478-.176-.679-.248Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgNurse;
