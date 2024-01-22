import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRespirator = (passedProps: SvgProps) => {
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
      <G clipPath="url(#respirator_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM17 19v4.304c.288-.62.593-1.231.912-1.82.757-1.394 1.621-2.703 2.575-3.678.936-.958 2.09-1.724 3.416-1.724s2.48.766 3.416 1.724c.953.975 1.818 2.284 2.575 3.679.392.722.762 1.48 1.106 2.245V19a7 7 0 1 0-14 0Zm16 0V28.22c.213-.192.427-.37.64-.529.573-.428 1.18-.761 1.787-.92.613-.16 1.29-.155 1.895.195l3.175 1.833.045.025c.606.35.948.934 1.116 1.544.167.605.182 1.297.097 2.007-.17 1.425-.765 3.11-1.71 4.748-.947 1.638-2.108 2.996-3.257 3.855-.572.429-1.18.761-1.786.92-.613.16-1.29.155-1.895-.195l-3.22-1.858c-.606-.35-.948-.934-1.116-1.544a4.094 4.094 0 0 1-.126-.705 1.037 1.037 0 0 1-.095.005h-9.295c-.032 0-.064-.002-.095-.005-.023.245-.064.481-.125.705-.168.61-.51 1.195-1.116 1.544L14.707 41.7l-.008.004c-.605.35-1.282.354-1.895.195-.607-.159-1.214-.491-1.787-.92-1.148-.86-2.31-2.217-3.256-3.855-.945-1.639-1.54-3.323-1.71-4.748-.085-.71-.07-1.402.097-2.007.167-.61.51-1.194 1.115-1.544l3.22-1.859c.606-.35 1.283-.354 1.895-.194.607.158 1.214.49 1.787.92.279.208.558.446.835.71V15a9 9 0 1 1 18 0v4ZM10.384 29.17c.19.115.377.243.561.38 1.149.86 2.31 2.217 3.256 3.856.946 1.638 1.541 3.323 1.711 4.747.027.228.044.454.049.676l1.028-.594c.062-.035.173-.133.253-.427.083-.299.111-.732.044-1.294-.134-1.12-.624-2.564-1.475-4.038-.85-1.473-1.857-2.62-2.76-3.296-.452-.339-.842-.531-1.142-.61-.295-.076-.435-.03-.496.006l-1.029.594Zm26.009-.594 1.028.593c-.19.115-.377.243-.56.38-1.15.86-2.31 2.218-3.256 3.856-.946 1.638-1.541 3.323-1.711 4.747a7.046 7.046 0 0 0-.05.677l-1.028-.594c-.061-.035-.172-.133-.253-.427-.082-.299-.11-.732-.043-1.294.133-1.12.624-2.564 1.475-4.038.85-1.474 1.856-2.621 2.76-3.296.452-.34.842-.531 1.142-.61.294-.077.435-.03.496.006Zm-5.682-15.573A8.977 8.977 0 0 0 24 10a8.977 8.977 0 0 0-6.711 3.003 7.003 7.003 0 0 1 13.422 0Zm-6.808 16.162a.93.93 0 1 0 0-1.859.93.93 0 0 0 0 1.86Zm0 3.718a.93.93 0 1 0 0-1.859.93.93 0 0 0 0 1.86Zm2.788-2.788a.93.93 0 1 1-1.859 0 .93.93 0 0 1 1.86 0Zm-4.647.93a.93.93 0 1 0 0-1.86.93.93 0 0 0 0 1.86Zm.119-11.381c.443-.414 1.03-.773 1.74-.773s1.297.359 1.74.773c.447.418.843.977 1.194 1.587a1 1 0 1 1-1.735.996c-.3-.524-.58-.894-.824-1.122-.248-.231-.37-.235-.375-.235-.006 0-.127.004-.375.235-.244.228-.524.598-.825 1.122a1 1 0 1 1-1.734-.996c.35-.61.746-1.17 1.194-1.587Zm1.74 15.098a4.647 4.647 0 1 0 0-9.295 4.647 4.647 0 0 0 0 9.295Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="respirator_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgRespirator;
