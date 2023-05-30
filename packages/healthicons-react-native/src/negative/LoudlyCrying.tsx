import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLoudlyCrying = (passedProps: SvgProps) => {
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
      <G
        clipPath="url(#loudly_crying_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#333"
      >
        <Path d="M32.042 37.835A15.927 15.927 0 0 1 24 40c-2.972 0-5.754-.81-8.138-2.221-1.039-4.838.292-9.423 2.356-13.035.06-.104.106-.213.139-.323a9.469 9.469 0 0 1 3.269.44.5.5 0 0 0 .644-.397c.07-.434-.117-.842-.382-1.164-.27-.33-.665-.626-1.142-.869-.956-.487-2.314-.796-3.914-.683-1.635.115-2.806.757-3.499 1.569-.672.787-.93 1.802-.55 2.576a.5.5 0 0 0 .735.189c.313-.22.633-.417.96-.592-1.268 2.833-2.103 6.126-1.963 9.65A15.947 15.947 0 0 1 8 24c0-8.837 7.163-16 16-16s16 7.163 16 16c0 4.375-1.756 8.34-4.602 11.229.154-3.462-.638-6.705-1.859-9.51.188.112.374.233.557.36a.5.5 0 0 0 .736-.188c.368-.749.116-1.727-.528-2.482-.666-.78-1.789-1.394-3.353-1.505-1.53-.108-2.83.188-3.746.655-.457.233-.836.517-1.096.834-.256.31-.438.706-.37 1.129a.5.5 0 0 0 .644.397 8.998 8.998 0 0 1 3.204-.415c.03.082.066.162.11.24 2.073 3.626 3.406 8.233 2.345 13.09Zm-.333-20.319c-1.751-.967-3.296-2.03-4.028-2.71L26.32 16.27c.905.843 2.614 1.997 4.423 2.997 1.801.995 3.851 1.921 5.45 2.216l.363-1.966c-1.269-.235-3.087-1.028-4.846-2Zm-11.017-2.71c-.731.68-2.276 1.743-4.028 2.71-1.759.973-3.577 1.766-4.846 2l.364 1.967c1.598-.295 3.648-1.22 5.45-2.216 1.809-1 3.517-2.154 4.422-2.997l-1.362-1.464ZM20 31a4 4 0 0 1 8 0v2a4 4 0 0 1-8 0v-2Z" />
        <Path d="M48 0H0v48h48V0ZM12.565 37.902A17.964 17.964 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18c0 5.599-2.556 10.6-6.565 13.902C38.26 38.442 40 39.183 40 40c0 1.657-7.163 3-16 3S8 41.657 8 40c0-.817 1.74-1.557 4.565-2.098Z" />
      </G>
      <Defs>
        <ClipPath id="loudly_crying_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgLoudlyCrying;
