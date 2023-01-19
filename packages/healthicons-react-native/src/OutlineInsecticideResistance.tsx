import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineInsecticideResistance = (
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
        d="M29.086 35H25.5v-2h7v7h-2v-3.586L24.914 42H36.5v2h-24v-2h9.586l-7.293-7.293 1.414-1.414 7.293 7.293L29.086 35ZM24.5 4a1 1 0 0 1 1 1v6.79a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm2 10v1c0 .902.355 2.16 1.366 3.198C28.901 19.259 30.532 20 32.915 20c2.277 0 3.79-.495 4.683-1.348.934-.89 1.034-2.016.783-2.81l-.196-.619-11.3-1.3a1 1 0 0 0 .255-.155l1.813-1.511 2.763-.614a1 1 0 1 0-.434-1.953l-3 .667a1 1 0 0 0-.423.208l-2 1.667A1 1 0 0 0 26.5 14Zm9.87 3.028c-.04.058-.09.117-.152.177-.354.338-1.248.795-3.303.795-1.95 0-3.026-.593-3.616-1.198a2.922 2.922 0 0 1-.476-.643l7.546.869ZM22.5 15v-1a1 1 0 0 0 .64-1.768l-2-1.667a1 1 0 0 0-.424-.208l-3-.667a1 1 0 1 0-.434 1.953l2.764.614 1.813 1.511a1 1 0 0 0 .254.155l-11.3 1.3-.195.619c-.25.794-.15 1.92.782 2.81.895.853 2.407 1.348 4.684 1.348 2.383 0 4.014-.74 5.049-1.802 1.01-1.038 1.366-2.296 1.366-3.198Zm-9.87 2.028c.039.058.088.117.15.177.355.338 1.25.795 3.304.795 1.95 0 3.026-.593 3.616-1.198.202-.207.358-.427.476-.643l-7.546.869Zm8.87 2.192a1 1 0 0 1 1.251 1.56l-1.85 1.483-1.344 1.882a1 1 0 0 1-.57.389l-2.374.596a1 1 0 1 1-.488-1.94l2.018-.506 1.212-1.696a1 1 0 0 1 .188-.198l1.957-1.57Zm.767 3.1a1 1 0 1 1 1.465 1.36l-1.105 1.191.477 2.283a1 1 0 0 1-.272.912l-1.64 1.641a1 1 0 1 1-1.415-1.414l1.259-1.259-.472-2.26a1 1 0 0 1 .246-.885l1.457-1.57Zm5.305-3.14a1 1 0 0 0-1.145 1.64l2.107 1.471 1.325 1.854a1 1 0 0 0 .57.389l2.374.596a1 1 0 0 0 .488-1.94l-2.018-.506-1.212-1.696a1 1 0 0 0-.24-.238l-2.25-1.57Zm-.93 3.053a1 1 0 1 0-1.285 1.534l1.415 1.185-.46 2.202a1 1 0 0 0 .272.912l1.64 1.641a1 1 0 0 0 1.415-1.414l-1.259-1.259.473-2.26a1 1 0 0 0-.337-.971l-1.874-1.57Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M24.034 14.074c-.32.959-.534 2.347-.534 3.926 0 1.58.214 2.968.534 3.926.159.477.326.795.466.975.139-.18.306-.498.465-.975.32-.958.535-2.347.535-3.926 0-1.58-.215-2.967-.535-3.926-.159-.477-.326-.795-.465-.975-.14.18-.307.498-.466.975Zm-1.098-2.222c.329-.417.85-.852 1.564-.852.713 0 1.234.435 1.563.852.338.43.599.988.8 1.59.404 1.212.637 2.824.637 4.558s-.233 3.346-.638 4.559c-.2.601-.46 1.16-.799 1.588-.329.418-.85.853-1.563.853-.714 0-1.235-.435-1.564-.852-.338-.43-.6-.988-.8-1.59-.404-1.212-.636-2.824-.636-4.558s.232-3.346.637-4.559c.2-.601.46-1.16.799-1.589Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineInsecticideResistance);
export default ForwardRef;
