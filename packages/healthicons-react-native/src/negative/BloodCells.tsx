import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodCells = (passedProps: SvgProps) => {
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
      <G clipPath="url(#blood_cells_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM6.252 33.786c-1.96-3.395.077-8.25 4.551-10.912C7.873 21.132 6 18.476 6 15.5 6 10.253 11.82 6 19 6s13 4.253 13 9.5c0 4.228-3.78 7.811-9.005 9.043 1.676 3.412-.437 8.114-4.87 10.674-4.576 2.641-9.892 2-11.873-1.431Zm10.172-7.706.142-1.246c.713.099 1.448.155 2.198.164.197.186.372.402.516.652.644 1.115.41 2.41-.168 3.47-.586 1.077-1.602 2.083-2.879 2.82-1.277.737-2.656 1.114-3.882 1.083-1.207-.03-2.445-.474-3.088-1.589-.563-.974-.453-2.094-.035-3.056l1.835.797c-.26.596-.213 1.01-.068 1.259.163.283.584.57 1.405.59.802.02 1.822-.232 2.833-.816 1.011-.584 1.74-1.34 2.123-2.045.393-.722.355-1.23.192-1.513-.144-.25-.479-.497-1.124-.57Zm24.62-3.406c-.482 1.796-2.814 2.732-5.209 2.09-2.395-.641-3.946-2.618-3.465-4.414.482-1.796 2.813-2.732 5.208-2.09 2.395.641 3.947 2.618 3.465 4.414Zm1.201 13.783c-1.071 3.998-6.261 6.081-11.592 4.653-5.331-1.428-8.784-5.828-7.713-9.826 1.071-3.998 6.261-6.081 11.592-4.653 5.331 1.429 8.784 5.828 7.713 9.826Zm-6.938-1.082c.832-.245 1.196-.655 1.29-1.006.082-.309.01-.753-.417-1.291l1.565-1.245c.677.85 1.083 1.937.783 3.054-.342 1.278-1.454 2.053-2.655 2.407-1.22.36-2.705.353-4.186-.044-1.48-.397-2.77-1.133-3.647-2.055-.863-.907-1.439-2.134-1.096-3.412.3-1.117 1.194-1.855 2.205-2.253l.733 1.86c-.64.252-.923.601-1.006.91-.094.35.015.888.613 1.517.584.613 1.531 1.184 2.716 1.501 1.184.318 2.29.297 3.102.057Zm-8.295-14.772C28.99 19.158 30 17.33 30 15.5c0-1.83-1.011-3.658-2.988-5.103C25.037 8.954 22.211 8 19 8c-3.21 0-6.037.954-8.012 2.397C9.01 11.842 8 13.67 8 15.5c0 1.83 1.011 3.658 2.988 5.103C12.963 22.046 15.789 23 19 23c3.21 0 6.037-.954 8.012-2.397ZM25 14.333c0 .454-.37 1.108-1.514 1.707-1.097.575-2.681.96-4.486.96-1.805 0-3.39-.385-4.486-.96C13.37 15.441 13 14.787 13 14.333c0-.396.274-.942 1.136-1.489l-1.072-1.688c-1.137.72-2.064 1.801-2.064 3.177 0 1.571 1.197 2.751 2.586 3.479C15.023 18.564 16.94 19 19 19c2.061 0 3.977-.436 5.414-1.188 1.39-.728 2.586-1.908 2.586-3.479 0-1.376-.927-2.456-2.064-3.178l-1.072 1.69c.862.546 1.136 1.092 1.136 1.488Z"
        />
      </G>
      <Defs>
        <ClipPath id="blood_cells_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBloodCells;
