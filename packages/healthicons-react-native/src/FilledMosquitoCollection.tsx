import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledMosquitoCollection = (
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
        d="M24 4a1 1 0 0 1 1 1v6.95c.095.152.186.325.27.517l1.959-2.211.827-2.37a1 1 0 0 1 1.888.659l-.892 2.556a.999.999 0 0 1-.195.334l-2.48 2.797 10.386 1.196.195.618c.24.76.144 1.836-.745 2.683-.85.81-2.276 1.271-4.399 1.271-2.228 0-3.762-.693-4.738-1.695a4.597 4.597 0 0 1-1.077-1.762l.001.172c0 .745-.054 1.456-.151 2.104l2.51.962a1 1 0 0 1 .301.183l1.551 1.364 1.97.495a1 1 0 1 1-.487 1.94l-2.205-.555a1 1 0 0 1-.417-.218l-1.598-1.405-1.254-.482 1.555 1.303a1 1 0 0 1 .337.971l-.43 2.06 1.141 1.142a1 1 0 0 1 .154 1.217c2.258-.192 4.254-.508 5.852-.908 1.145-.286 2.006-.596 2.591-.888-.555-.277-1.36-.57-2.42-.845v-2.06c3.08.73 5 1.761 5 2.905v3.667c0 .801-.439 1.438-1 1.927v7.714c0 1.055-.795 1.801-1.571 2.286-.83.517-1.963.946-3.275 1.291C31.517 43.581 27.926 44 24 44s-7.516-.419-10.155-1.114c-1.311-.346-2.445-.775-3.274-1.292C9.795 41.109 9 40.364 9 39.308v-7.713c-.561-.49-1-1.127-1-1.928V26c0-1.144 1.92-2.176 5-2.905v2.06c-1.06.274-1.865.567-2.42.845.585.292 1.446.602 2.591.888 1.694.423 3.835.754 6.26.94a1 1 0 0 1 .133-1.248l1.142-1.142-.43-2.06a1 1 0 0 1 .245-.886l1.227-1.321-.92.393-1.487 1.402a1 1 0 0 1-.443.242l-2.204.554a1 1 0 0 1-.487-1.94l1.952-.49 1.427-1.345a1 1 0 0 1 .292-.191l2.274-.974a14.22 14.22 0 0 1-.151-2.279 4.598 4.598 0 0 1-1.076 1.762C19.948 19.307 18.414 20 16.185 20c-2.122 0-3.548-.46-4.398-1.27-.889-.848-.986-1.923-.745-2.684l.195-.618 10.385-1.196-2.479-2.797a.999.999 0 0 1-.195-.334l-.892-2.556a1 1 0 0 1 1.888-.66l.827 2.37 1.959 2.211c.084-.19.175-.364.27-.515V5a1 1 0 0 1 1-1Zm-.458 18.07a.998.998 0 0 1-.202.325l-1.001 1.079.435 2.084a1 1 0 0 1-.271.912l-1.46 1.46a61.337 61.337 0 0 0 6.283-.02l-1.441-1.44a1 1 0 0 1-.272-.912l.419-2.003-1.281-1.073a.996.996 0 0 1-.293-.412.84.84 0 0 1-.458.145.84.84 0 0 1-.458-.145ZM10 27.938v1.729c0 .012.024.277.712.711.638.402 1.627.801 2.94 1.151 2.608.696 6.267 1.138 10.348 1.138s7.74-.442 10.349-1.138c1.312-.35 2.301-.749 2.939-1.15.688-.435.712-.7.712-.712v-1.729C35.27 29.168 30.024 30 24 30s-11.27-.832-14-2.062Zm28.13-2.4c.001 0-.004.007-.02.023a.093.093 0 0 1 .02-.024Zm-28.26 0c0-.001.009.007.02.023-.016-.016-.021-.024-.02-.024Zm24.994 7.924c.78-.208 1.5-.444 2.136-.707v6.55c-.007.023-.065.24-.63.591-.587.367-1.504.733-2.725 1.056C31.215 41.592 27.805 42 24 42c-3.806 0-7.216-.408-9.645-1.048-1.221-.323-2.138-.69-2.726-1.056-.564-.351-.622-.568-.628-.59v-.002L11 32.754c.636.264 1.356.5 2.136.708 2.82.752 6.66 1.205 10.864 1.205 4.203 0 8.044-.453 10.864-1.205Zm.024-16.237a1.032 1.032 0 0 1-.055.057c-.31.295-1.118.718-3.019.718-1.794 0-2.774-.544-3.306-1.09a2.656 2.656 0 0 1-.36-.46l6.74.775Zm-21.72.057a.994.994 0 0 1-.056-.057l6.74-.776a2.655 2.655 0 0 1-.36.46C18.96 17.457 17.98 18 16.186 18c-1.9 0-2.71-.423-3.019-.718Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledMosquitoCollection);
export default ForwardRef;
