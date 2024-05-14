import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHealthLiteracy = (passedProps: SvgProps) => {
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
      <Path d="M33 15a1 1 0 1 0-2 0v2.734c-.916.33-1.87.784-2.978 1.388a1 1 0 0 0 .956 1.756A23.394 23.394 0 0 1 31 19.882V23a1 1 0 1 0 2 0v-3.765c.884-.187 1.806-.249 2.986-.232a1 1 0 0 0 .028-2c-1.108-.016-2.071.032-3.014.196V15ZM19.142 28.934c-3.097-1.187-4.716-1.462-7.632-1.434l-.02-2c3.18-.03 5.048.294 8.368 1.566l-.716 1.868ZM11.51 22.5c2.916-.028 4.535.247 7.632 1.434l.716-1.868c-3.32-1.272-5.188-1.597-8.368-1.566l.02 2ZM19.142 18.934c-3.097-1.187-4.716-1.462-7.632-1.434l-.02-2c3.18-.03 5.048.293 8.368 1.566l-.716 1.868Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.243 11.27A64.23 64.23 0 0 0 42 10.985v-.46c0-.885-.589-1.694-1.484-1.92-6.15-1.546-10.628.092-15.756 2.477-.25.052-.503.104-.76.159-.257-.055-.51-.107-.76-.159-5.128-2.385-9.606-4.023-15.756-2.476A1.973 1.973 0 0 0 6 10.524v.46c-.406.089-.82.185-1.243.287a.991.991 0 0 0-.757.965v25.539c0 .633.583 1.105 1.204.987 6.213-1.185 10.4-1.268 16.122-.4a3 3 0 0 0 5.348 0c5.721-.868 9.91-.785 16.122.4A1.012 1.012 0 0 0 44 37.775V12.236a.991.991 0 0 0-.757-.965ZM25 13.177c5.317-2.504 9.342-4.054 15-2.639v23.431a.06.06 0 0 1-.029.018.058.058 0 0 1-.025 0c-5.732-1.046-10.014.215-14.923 2.437a.038.038 0 0 1-.006.002h-.003a.026.026 0 0 1-.011-.004L25 36.419 25 13.176ZM8 10.537c5.658-1.415 9.683.136 15 2.64V36.42l-.003.002-.002.001a.025.025 0 0 1-.009.003h-.001l-.008-.002c-4.909-2.222-9.191-3.483-14.923-2.437a.058.058 0 0 1-.047-.011.06.06 0 0 1-.003-.002L8 33.968V10.537Z"
      />
    </Svg>
  );
};
export default SvgHealthLiteracy;
