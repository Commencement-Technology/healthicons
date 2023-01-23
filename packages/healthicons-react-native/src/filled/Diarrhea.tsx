import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDiarrhea = (passedProps: SvgProps) => {
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
        d="M37.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-8.246 8.277c.02-.282.044-.59.072-.915-.587.395-1.01.695-1.39 1.016-.557.472-1.015.993-1.658 2.065l-.303.504a28.965 28.965 0 0 0 2.472 1.754l.05.03.011.008c.386.238.68.6.833 1.026l3.795 10.558a2 2 0 1 1-3.764 1.353l-3.566-9.92c-.161-.107-.35-.234-.557-.377a30.786 30.786 0 0 1-2.43-1.85c-.842-.716-1.766-1.606-2.398-2.554-.553-.83-1.358-2.445-.424-4.064 2.725-4.72 5.628-6.941 8.13-7.809 1.236-.428 2.338-.512 3.205-.417.424.047.835.14 1.196.289.171.07.407.183.64.364.115.089.287.24.446.462.15.212.386.627.386 1.2 0 .173-.03.465-.051.655l-.004.035c-.028.268-.068.627-.114 1.04l-.02.18c-.09.8-.2 1.785-.303 2.767a90.569 90.569 0 0 0-.28 3.132l.54.335h.002l.001.001c.623.385 1.563.966 2.923 1.816a2 2 0 0 1-2.12 3.392 569.096 569.096 0 0 0-2.855-1.774h-.001l-.724-.449c-.542-.338-.826-.52-1.154-.847a2.104 2.104 0 0 1-.538-.935l-.002-.006a2.598 2.598 0 0 1-.073-.4 4.868 4.868 0 0 1-.024-.527c.001-.32.022-.718.051-1.138ZM13.5 42H22c0-1.38-.5-5-8.5-5C9.358 37 6 38.12 6 39.5S9.358 42 13.5 42Zm4.639-12.954a1 1 0 0 1 .464 1.336L16.4 34.935a1 1 0 0 1-1.8-.87l2.203-4.554a1 1 0 0 1 1.335-.465Zm3.762 4.388a1 1 0 0 0-1.802-.867l-1.224 2.544a1 1 0 1 0 1.803.867l1.223-2.544Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgDiarrhea;
