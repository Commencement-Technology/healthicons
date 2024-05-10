import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPediatrics = (
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
      <path d="M28.055 14.278a4.278 4.278 0 1 1-8.555 0 4.278 4.278 0 0 1 8.555 0ZM27.667 27.842c0 .493-.444 1.758-1.805 2.364-.156.07-.331.156-.488.235l-.093.045c-.194.096-.38.186-.57.267-.395.167-.702.247-.933.247-.231 0-.539-.08-.933-.247-.19-.08-.377-.171-.57-.267l-.093-.046c-.157-.078-.332-.165-.488-.234-1.361-.606-1.805-1.871-1.805-2.364v-1.509h7.778v1.51Z" />
      <path d="M27.667 23.31c1.361-.194 2.79-.488 4.369-.878a2 2 0 1 0-.96-3.883c-2.945.728-5.142 1.05-7.29 1.041-2.155-.008-4.36-.348-7.328-1.047a2 2 0 1 0-.916 3.894c1.567.369 2.99.657 4.347.853v1.488h7.778V23.31ZM17.225 34.103c0-1.09.26-2.014.749-2.81l.09-.143a5.743 5.743 0 0 1 1.032-1.162c.163.275.372.55.634.809l.014.014c.09.087.184.172.286.254l.013.011c.274.222.594.423.962.59-.139.13-.27.282-.395.468a5.267 5.267 0 0 0-.429.761l-.014.033c-.17.382-.28.785-.28 1.175 0 .616.252 1.146.444 1.548l.013.03c.212.443.345.742.345 1.057 0 .71-.61 1.262-1.33 1.262-.672 0-1.203-.448-1.599-1.313-.387-.846-.535-1.89-.535-2.584ZM28.46 29.988c-.163.275-.373.55-.634.808l-.015.014c-.089.088-.184.173-.285.255l-.013.01a4.476 4.476 0 0 1-.962.59c.138.131.27.282.395.468.158.235.307.493.428.762l.015.032c.169.383.28.786.28 1.175 0 .617-.253 1.147-.444 1.548l-.014.03c-.211.444-.345.742-.345 1.058 0 .71.61 1.261 1.33 1.261.672 0 1.204-.447 1.6-1.313.386-.845.535-1.889.535-2.584 0-1.09-.26-2.014-.75-2.81a5.75 5.75 0 0 0-1.122-1.304Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm2 0a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPediatrics);
export default ForwardRef;
