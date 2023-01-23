import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPregnant32W = (passedProps: SvgProps) => {
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
        d="M16.4 40.317a1 1 0 0 0 .844-1.813 16 16 0 0 1-3.208-27.023l.413.533c.116.149.229.293.335.432.419.545.758 1.018.985 1.449.228.434.287.724.268.922-.015.156-.088.38-.45.678l-.747.615c-.59.485-.96 1.1-1.063 1.775-.101.67.076 1.316.432 1.838.714 1.047 2.113 1.577 3.607 1.18.133-.036.23-.057.299-.07.04.066.09.153.162.28l.179.397a3.02 3.02 0 0 0-.598.105l-3.502.991a3 3 0 1 0 1.633 5.774l.878-.249 1.032 2.654a3 3 0 0 0 2.525 1.9c3.35.305 6.066-.82 7.844-2.57.867-.852 1.521-1.864 1.89-2.93.354-1.02.526-2.344.034-3.64a3 3 0 0 0-3.123-1.917l-.648.07-.406-1.44a3 3 0 0 0-5.83.223l-.122-.272-.042-.074c-.098-.174-.21-.373-.329-.54a1.855 1.855 0 0 0-.626-.58c-.602-.326-1.264-.179-1.765-.045-.756.201-1.25-.095-1.44-.374a.57.57 0 0 1-.106-.412c.018-.122.093-.314.355-.53l.748-.614c.683-.562 1.095-1.244 1.17-2.036.07-.75-.178-1.449-.49-2.04-.312-.596-.745-1.186-1.168-1.737l-.371-.478-.322-.414a15.998 15.998 0 0 1 20.115 2.85 16 16 0 0 1 2.712 17.57 1 1 0 1 0 1.813.845A18 18 0 1 0 16.4 40.317Zm6.456-20.208a1 1 0 0 1 1.234.691l.635 2.252a1 1 0 0 0 1.069.724l1.487-.16a1 1 0 0 1 1.042.64c.273.72.201 1.536-.054 2.274-.26.751-.737 1.505-1.403 2.16-1.346 1.323-3.476 2.257-6.261 2.004a1 1 0 0 1-.842-.633l-1.361-3.502a1 1 0 0 0-1.204-.6l-1.753.496a1 1 0 0 1-.545-1.924l3.503-.991a1 1 0 0 1 1.204.6l1.53 3.933a1 1 0 0 0 1.023.633c1.118-.103 2.012-.466 2.689-.935a1 1 0 0 0-.6-1.822 1 1 0 0 1-.991-.728l-1.093-3.878a1 1 0 0 1 .691-1.234Z"
        fill="#333"
      />
      <Path
        d="M35.21 36.132a.8.8 0 0 1 1.58-.264l.463 2.785.552-.967a.8.8 0 0 1 1.39 0l.552.967.464-2.785a.8.8 0 0 1 1.578.264l-.833 5a.8.8 0 0 1-1.484.265l-.972-1.701-.972 1.7a.8.8 0 0 1-1.484-.264l-.833-5ZM25.046 36.986c.124.102.154.2.154.264 0 .065-.03.163-.154.264a.92.92 0 0 1-.579.186h-1.021a.8.8 0 0 0 0 1.6h1.021a.92.92 0 0 1 .579.186c.124.102.154.2.154.264 0 .065-.03.163-.154.264a.92.92 0 0 1-.579.186h-1.021c-.416 0-.653-.215-.712-.351a.8.8 0 1 0-1.468.636c.362.834 1.26 1.315 2.18 1.315h1.021c1.128 0 2.333-.773 2.333-2.05 0-.499-.184-.921-.475-1.25.291-.329.475-.751.475-1.25 0-1.277-1.205-2.05-2.333-2.05h-1.021c-.92 0-1.818.48-2.18 1.315a.8.8 0 0 0 1.468.636c.06-.136.296-.351.711-.351h1.022a.92.92 0 0 1 .579.186ZM32.048 36.98c.12.1.152.198.152.27 0 .076-.038.186-.178.29a1.044 1.044 0 0 0-.024.019l-3.5 2.818A.8.8 0 0 0 29 41.8h4a.8.8 0 0 0 0-1.6h-1.73l1.722-1.387c.466-.353.808-.905.808-1.563 0-1.263-1.172-2.05-2.3-2.05h-1c-.915 0-1.798.489-2.151 1.321a.8.8 0 1 0 1.473.625c.059-.14.287-.346.678-.346h1a.86.86 0 0 1 .548.18Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.787 21.418a3.819 3.819 0 1 0 3.547-6.764 3.819 3.819 0 0 0-3.547 6.764Zm.929-1.772a1.819 1.819 0 1 0 1.69-3.22 1.819 1.819 0 0 0-1.69 3.22Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgPregnant32W;
