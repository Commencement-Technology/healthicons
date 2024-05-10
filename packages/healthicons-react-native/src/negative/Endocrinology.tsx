import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEndocrinology = (passedProps: SvgProps) => {
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
      <G clipPath="url(#endocrinology_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3v-5.367c.056-2.039.957-3.977 2.51-5.399 1.544-1.412 3.61-2.204 5.76-2.21h1.603v-5.57c-1.41-1.037-2.442-2.462-2.95-4.077a7.633 7.633 0 0 1 .117-4.931c.584-1.592 1.681-2.973 3.139-3.95A8.957 8.957 0 0 1 24.172 9a9.043 9.043 0 0 1 5.126 1.623c1.482 1.042 2.572 2.501 3.111 4.166.175.619.368 2.44.368 2.44.31.782.638 1.547.967 2.311l.464 1.11c.172.3.29.623.347.959v.006l.001.001a.875.875 0 0 1-.213.62.98.98 0 0 1-.6.326c-.015 0-.064.005-.132.01-.264.025-.815.077-.815-.01v2.093a3.113 3.113 0 0 1-1.003 2.254 3.495 3.495 0 0 1-1.629.849l-.025.005a3.61 3.61 0 0 1-.746.078h-.536v1.183h1.282a9.588 9.588 0 0 1 3.472.726 9.07 9.07 0 0 1 2.906 1.93 8.465 8.465 0 0 1 1.892 2.834 8.072 8.072 0 0 1 .586 3.303V42H39a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm27.995 36v-4.183a6.073 6.073 0 0 0-.44-2.553 6.466 6.466 0 0 0-1.447-2.165 7.07 7.07 0 0 0-2.266-1.502 7.525 7.525 0 0 0-2.724-.573h-1.26a2 2 0 0 1-2-2v-1.183a2 2 0 0 1 2-2h.535c.408 0 .778-.153 1.033-.392.25-.234.367-.525.37-.801v-2.086a2 2 0 0 1 1.265-1.86l-.159-.381v-.003a85.32 85.32 0 0 1-.985-2.355 1.995 1.995 0 0 1-.129-.524l-.002-.016-.006-.055a51.232 51.232 0 0 0-.105-.866c-.07-.534-.141-.972-.183-1.142-.406-1.22-1.218-2.309-2.344-3.1A7.042 7.042 0 0 0 24.163 11a6.957 6.957 0 0 0-3.871 1.158c-1.12.75-1.942 1.796-2.374 2.976a5.632 5.632 0 0 0-.087 3.643c.376 1.195 1.146 2.271 2.227 3.065a2 2 0 0 1 .815 1.612v5.57a2 2 0 0 1-2 2H17.31c-1.681-.004-3.277.613-4.45 1.685-1.161 1.064-1.813 2.485-1.86 3.954V42h12v-6a1 1 0 1 1 2 0v6h11.995ZM24 31.5c0 1.38-.448 2.5-1 2.5s-1-1.12-1-2.5.448-2.5 1-2.5 1 1.12 1 2.5Zm0 0c0-1.38.448-2.5 1-2.5s1 1.12 1 2.5-.448 2.5-1 2.5-1-1.12-1-2.5Z"
        />
      </G>
      <Defs>
        <ClipPath id="endocrinology_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgEndocrinology;
