import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPediatricSurgery = (passedProps: SvgProps) => {
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
        d="M25.201 11.23c0 2.888-2.335 5.23-5.215 5.23s-5.216-2.342-5.216-5.23c0-2.888 2.335-5.23 5.216-5.23 2.88 0 5.215 2.342 5.215 5.23ZM8.205 15.139l.01.021c1.566 3.364 3.39 5.212 5.507 6.134l1.049.457V25.5H25.23V21.75l1.048-.457c2.117-.922 3.941-2.77 5.507-6.134l.01-.021.01-.021c.08-.16.206-.547.194-.98-.01-.391-.126-.758-.448-1.081-.415-.416-.748-.508-.996-.524-.294-.018-.652.066-1.066.272-.01.006-.08.051-.22.187a8.754 8.754 0 0 0-.579.644l-.31.376a26.67 26.67 0 0 1-1.465 1.682c-1.49 1.537-3.655 3.119-6.915 3.119-3.26 0-5.425-1.582-6.915-3.119a26.652 26.652 0 0 1-1.465-1.681c-.11-.136-.215-.263-.31-.377a8.754 8.754 0 0 0-.579-.644c-.14-.136-.21-.18-.22-.187-.413-.205-.772-.29-1.066-.272-.248.016-.58.108-.996.524-.322.323-.438.69-.448 1.082-.011.432.115.82.194.979l.01.02Zm6.566 13.585V27.5H25.23v1.224c0 .637-.597 2.27-2.428 3.054-.21.09-.445.202-.656.303l-.125.06c-.26.123-.511.24-.766.343-.53.216-.945.32-1.255.32-.31 0-.724-.104-1.255-.32-.255-.104-.506-.22-.766-.344l-.125-.06c-.211-.1-.447-.212-.656-.302-1.83-.783-2.428-2.417-2.428-3.054Zm-.403 2.657a5.031 5.031 0 0 0 2.393 2.406 3.816 3.816 0 0 0-.834.96c-.5.815-.93 1.822-.93 2.77 0 .867.325 1.613.57 2.178l.019.042c.272.624.443 1.044.443 1.488 0 .999-.784 1.775-1.71 1.775-.864 0-1.547-.63-2.056-1.848-.497-1.189-.688-2.657-.688-3.635 0-2.648.997-4.604 2.793-6.136Zm11.264 0a5.031 5.031 0 0 1-2.393 2.406c.297.248.578.542.834.96.5.815.93 1.822.93 2.77 0 .867-.325 1.613-.57 2.178l-.019.042c-.272.624-.444 1.044-.444 1.488 0 .999.785 1.775 1.711 1.775.864 0 1.547-.63 2.056-1.848.497-1.189.688-2.657.688-3.635 0-2.648-.997-4.604-2.793-6.136ZM35 38v-7a2 2 0 0 1 2-2c1.105 0 2.018.902 1.847 1.994C38.114 35.664 35 38 35 38Zm3-11.5a1.5 1.5 0 0 1-2.813.727L38 24.414V26.5Zm0-4.914-3 3v-2.172l3-3v2.172Zm0-5-3 3V12.5a1.5 1.5 0 0 1 3 0v4.086Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgPediatricSurgery;
