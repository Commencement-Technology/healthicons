import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineRespirator = (
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
        d="M24.425 28.066a.921.921 0 1 0 0-1.842.921.921 0 0 0 0 1.842Zm.922 2.764a.921.921 0 1 1-1.843 0 .921.921 0 0 1 1.843 0Zm.921-.921a.921.921 0 1 0 0-1.843.921.921 0 0 0 0 1.843Zm-2.764-.922a.921.921 0 1 1-1.842 0 .921.921 0 0 1 1.842 0Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M24.425 23.381a5.606 5.606 0 1 0 0 11.213 5.606 5.606 0 0 0 0-11.213Zm-3.606 5.607a3.606 3.606 0 1 1 7.213 0 3.606 3.606 0 0 1-7.213 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M24.425 18.775c-.707 0-1.29.358-1.73.769-.445.415-.838.97-1.186 1.576a1 1 0 1 0 1.735.996c.298-.52.575-.886.816-1.11.245-.23.362-.23.365-.23.003 0 .121 0 .366.23.24.224.517.59.816 1.11a1 1 0 1 0 1.734-.996c-.348-.606-.74-1.16-1.185-1.576-.44-.411-1.024-.769-1.73-.769Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M24.5 6a8.5 8.5 0 0 1 8.5 8.5v12.988c.077.225.151.445.221.66a9.3 9.3 0 0 1 .809-.684c.572-.429 1.183-.765 1.798-.925.62-.162 1.314-.16 1.938.2l3.19 1.843c.624.36.973.96 1.143 1.578.169.612.184 1.309.099 2.02-.17 1.424-.764 3.104-1.706 4.735-.941 1.63-2.1 2.985-3.248 3.845-.573.428-1.184.764-1.798.924-.62.162-1.315.16-1.938-.2l-3.191-1.843c-.624-.36-.973-.959-1.143-1.577a4.125 4.125 0 0 1-.126-.706h-9.246c-.023.244-.064.48-.126.706-.17.618-.52 1.218-1.142 1.578l-3.192 1.842c-.623.36-1.317.362-1.937.2-.615-.16-1.226-.495-1.799-.924-1.148-.86-2.306-2.214-3.248-3.845-.941-1.63-1.536-3.31-1.706-4.736-.084-.71-.07-1.407.099-2.02.17-.617.52-1.217 1.143-1.577l3.19-1.842c.624-.36 1.318-.363 1.938-.2.615.16 1.226.495 1.799.924.27.202.54.43.808.684.114-.35.238-.715.371-1.09V14.5A8.5 8.5 0 0 1 24.5 6Zm0 6a6.5 6.5 0 0 0-6.5 6.5v3.792c.156-.312.316-.62.48-.921.75-1.383 1.607-2.681 2.553-3.648.929-.95 2.074-1.712 3.392-1.712s2.463.762 3.392 1.712c.946.966 1.803 2.265 2.554 3.648.217.399.427.81.629 1.226V18.5a6.5 6.5 0 0 0-6.5-6.5Zm-6.514 19.167.083.142c.796 1.38 1.345 2.795 1.597 4.06l.019-.002a1.02 1.02 0 0 1 .134-.009h9.213c.051 0 .102.004.152.012.253-1.266.8-2.681 1.598-4.061.071-.124.144-.247.218-.367v-3.116c-.618-1.76-1.438-3.753-2.387-5.501-.708-1.305-1.463-2.424-2.225-3.204-.78-.796-1.438-1.11-1.963-1.11-.525 0-1.183.314-1.962 1.11-.763.78-1.518 1.9-2.226 3.204-.874 1.61-1.638 3.43-2.237 5.081V31c0 .057-.005.113-.014.167Zm-6.807-2.172.906-.523c.037-.022.154-.07.432.002.285.075.662.26 1.106.591.884.662 1.874 1.79 2.714 3.244.839 1.453 1.32 2.875 1.452 3.972.065.55.037.97-.041 1.252-.077.278-.177.355-.214.376l-.906.523a7.181 7.181 0 0 0-.045-.545c-.17-1.425-.764-3.105-1.706-4.736-.941-1.63-2.099-2.985-3.248-3.845a7.183 7.183 0 0 0-.45-.311Zm3.163 10.757c.038-.022.138-.099.214-.376.078-.283.107-.702.041-1.253-.13-1.096-.612-2.518-1.452-3.972-.839-1.454-1.83-2.582-2.714-3.243-.443-.332-.82-.517-1.105-.591-.278-.073-.395-.024-.432-.003-.038.022-.138.099-.215.376-.078.284-.106.702-.04 1.253.13 1.096.612 2.518 1.451 3.972.84 1.454 1.83 2.582 2.715 3.244.443.332.82.516 1.105.59.278.073.395.025.432.003Zm17.88-1.32-.905-.523c-.038-.021-.138-.098-.214-.376-.078-.283-.107-.702-.041-1.252.13-1.097.612-2.519 1.452-3.972.839-1.454 1.83-2.582 2.714-3.244.444-.332.82-.517 1.105-.59.279-.073.395-.025.433-.003l.905.522a7.256 7.256 0 0 0-.45.312c-1.149.86-2.307 2.214-3.248 3.845-.941 1.63-1.536 3.31-1.706 4.735a7.188 7.188 0 0 0-.045.546Zm7.735-8.118c-.038-.022-.154-.07-.433.003-.284.074-.661.258-1.105.59-.884.662-1.875 1.79-2.714 3.244-.84 1.454-1.321 2.875-1.452 3.972-.066.55-.037.97.041 1.253.076.277.177.354.214.376.038.021.154.07.433-.003.284-.074.661-.259 1.105-.59.884-.662 1.875-1.79 2.714-3.244.84-1.454 1.321-2.876 1.452-3.973.066-.55.037-.969-.041-1.252-.076-.278-.176-.354-.214-.376Zm-9.195-17.561A8.478 8.478 0 0 0 24.5 10a8.478 8.478 0 0 0-6.262 2.753 6.503 6.503 0 0 1 12.524 0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineRespirator);
export default ForwardRef;
