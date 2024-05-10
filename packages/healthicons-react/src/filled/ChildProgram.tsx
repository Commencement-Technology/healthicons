import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChildProgram = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path d="M17.8 13.734a3.734 3.734 0 1 1-7.466 0 3.734 3.734 0 0 1 7.467 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.696 25.995a2 2 0 0 1-3.392-2.12l.004-.006.007-.011.024-.038a20.204 20.204 0 0 1 .391-.593c.255-.375.614-.883 1.022-1.4.399-.504.889-1.073 1.407-1.535.259-.231.571-.477.924-.675.332-.186.851-.416 1.486-.416h4.996c.635 0 1.154.23 1.487.416.352.198.665.444.923.675.518.462 1.009 1.031 1.407 1.536a24.669 24.669 0 0 1 1.413 1.992l.025.038.007.01.003.006s-.035-.054 0 0a2 2 0 0 1-3.391 2.121l-.003-.004-.016-.025a15.707 15.707 0 0 0-.152-.235v2.484l.723 7.595a2 2 0 0 1-3.97.473L14 29.143l-1.02 7.14a2 2 0 0 1-3.971-.473l.84-8.81h.018v-1.27a18.237 18.237 0 0 0-.153.236l-.015.025-.003.004Z"
      />
      <path d="M37.8 13.733a3.733 3.733 0 1 1-7.467 0 3.733 3.733 0 0 1 7.467 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.701 25.785a2 2 0 0 1-3.402-2.103l.003-.006.008-.011.023-.038.085-.134a25.795 25.795 0 0 1 1.313-1.858c.394-.504.88-1.074 1.392-1.537.257-.231.567-.479.918-.677.33-.188.85-.421 1.488-.421h4.942c.638 0 1.158.233 1.489.42.35.2.66.447.917.678.513.463.998 1.033 1.392 1.537a24.749 24.749 0 0 1 1.398 1.991l.024.039.01.017a2 2 0 0 1-3.402 2.104l-.003-.005-.015-.025a21.702 21.702 0 0 0-.465-.702c.468 2.33 1.39 5.526 1.872 7.142a.992.992 0 0 1-.738 1.26c-3.537.737-6.013.718-9.854-.014a.999.999 0 0 1-.76-1.28c.505-1.624 1.444-4.786 1.889-7.168a23.681 23.681 0 0 0-.506.762l-.015.025-.003.004ZM29.6 35.152V36.5a1.5 1.5 0 0 0 2.948.39l.395-1.464a36.268 36.268 0 0 1-3.343-.274Zm5.655.27.397 1.469A1.5 1.5 0 0 0 38.6 36.5v-1.362a37.7 37.7 0 0 1-3.345.283Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChildProgram);
export default ForwardRef;
