import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeGynecology = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm4.15 8.466c-.28-.492-.145-1.066.34-1.551.235-.236.493-.376.684-.425a.427.427 0 0 1 .153-.019c1.253 1.101 2.112 1.426 2.904 1.502.264.025.432.03.55.034.229.007.266.008.459.144l1.152-1.635c-.723-.51-1.424-.521-1.795-.527a2.424 2.424 0 0 1-.175-.007c-.262-.025-.745-.105-1.79-1.025-.601-.53-1.358-.557-1.954-.405-.597.153-1.16.505-1.603.95-.875.874-1.538 2.41-.664 3.951a13.317 13.317 0 0 0 1.496 2.111c.025-.418.163-.792.421-1.073.237-.258.548-.41.9-.462a11.182 11.182 0 0 1-1.078-1.563Zm1.191-1.99s-.004 0-.01-.004l.01.003Zm4.765 9.35c.865-.857.497-2.566-.82-3.816-1.319-1.25-3.088-1.57-3.952-.712-.865.858-.497 2.567.82 3.818 1.319 1.25 3.088 1.569 3.952.71Zm21.249-7.335c.278-.523.13-1.124-.316-1.6-.218-.235-.448-.363-.601-.405a.478.478 0 0 0-.067-.014c-1.16 1.084-1.974 1.421-2.744 1.5a6.671 6.671 0 0 1-.538.036c-.185.005-.196.005-.353.123l-1.205-1.596c.704-.531 1.407-.542 1.745-.547.062 0 .111-.002.147-.005.209-.022.642-.085 1.615-1.003.586-.553 1.338-.585 1.928-.423.582.159 1.119.523 1.535.969.825.883 1.421 2.393.621 3.902-.47.886-1 1.627-1.466 2.195-.015-.442-.144-.838-.396-1.132a1.368 1.368 0 0 0-.888-.468c.327-.43.672-.945.983-1.532Zm-1.013-2.02.009-.001a.03.03 0 0 0-.009 0Zm-5.012 9.356c-.864-.858-.496-2.567.822-3.817 1.317-1.25 3.087-1.57 3.951-.712.865.858.497 2.567-.82 3.818-1.319 1.25-3.088 1.569-3.953.71ZM24.11 14c-10.834 0-6.771 8.043-4.063 8.043 1.279 0 1.428 2.887 1.586 5.936.12 2.31.244 4.711.867 6.021.198.416.608.278 1.019.139.206-.07.412-.139.591-.139.189 0 .382.077.566.15.34.134.645.255.824-.15.571-1.294.65-3.656.728-5.94.104-3.079.204-6.017 1.493-6.017 2.71 0 7.223-8.043-3.61-8.043Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeGynecology);
export default ForwardRef;
