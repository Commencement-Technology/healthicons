import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgExerciseWeights = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.5 17.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.004 6.06a1 1 0 0 1 1.08.913l.287 3.369c10.027-1.776 17.002-1.792 27.258.007l.286-3.376a1 1 0 0 1 1.081-.912l1.993.17a1 1 0 0 1 .912 1.08l-.329 3.869a1 1 0 0 1-.146 1.725l-.35 4.122a1 1 0 0 1-1.082.912l-1.992-.17a1 1 0 0 1-.912-1.08l.368-4.34a121.96 121.96 0 0 0-1.614-.274 3 3 0 0 1 .145.925l.004.35v.008c.013 1.151.048 4.188-.309 7.084-.2 1.62-.549 3.459-1.23 4.974-.509 1.13-1.554 2.802-3.454 3.38v1.088c.745-.264 1.492-.515 2.11-.67.391-.1 1.105-.264 1.846-.198a3.404 3.404 0 0 1 1.857.736A3.221 3.221 0 0 1 38 32.263c0 .923-.297 3.116-.534 4.677-.127.838-.26 1.638-.364 2.181l-.009.044c-.073.38-.183.947-.49 1.463v.001l-.002.003c-.07.117-.385.65-1.036 1.042a3.006 3.006 0 0 1-4.455-1.799c-.18-.663-.233-1.355-.26-1.974-.01-.212-.017-.41-.023-.6-.012-.345-.022-.66-.048-.971a45.21 45.21 0 0 1-2.561.816c-1.3.365-2.803.696-4.218.696s-2.917-.33-4.218-.696a44.92 44.92 0 0 1-2.52-.802l-.02.261a177.709 177.709 0 0 1-.186 2.266c-.03.367-.079.94-.315 1.462a3 3 0 0 1-4.857.886c-.725-.725-.822-1.628-.884-2.198l-.02-.174c-.02-.168-.053-.388-.098-.66-.077-.477-.178-1.04-.287-1.652l-.048-.267a87.29 87.29 0 0 1-.356-2.096C10.1 33.575 10 32.844 10 32.263c0-.839.329-1.813 1.187-2.51a3.404 3.404 0 0 1 2.047-.75c.528-.02 1.03.066 1.393.147.099.022.187.044.263.063.618.156 1.364.407 2.11.67V28.78a4.222 4.222 0 0 1-.369-.141c-1.207-.529-1.991-1.54-2.476-2.393a8.648 8.648 0 0 1-.522-1.088c-.56-1.386-.897-3.026-1.116-4.512C12.04 17.41 12 13.985 12 13c0-.326.052-.64.148-.933-.527.086-1.062.178-1.607.276l.369 4.346a1 1 0 0 1-.912 1.08l-1.993.17a1 1 0 0 1-1.08-.912l-.35-4.122a.998.998 0 0 1-.147-1.725L6.099 7.31a1 1 0 0 1 .912-1.08l1.993-.17Zm8.497 5.282c.315.475.499 1.045.499 1.658 0 .905.041 3.98.453 6.771.207 1.406.479 2.526.78 3.229h9.727l.01-.023.012-.024c.307-.683.57-1.806.747-3.245.302-2.45.277-5.053.264-6.26v-.006L29.99 13c0-.609.18-1.175.492-1.648-4.5-.46-8.547-.462-12.981-.01ZM29 28.782v-.802a1 1 0 0 1 .9-.995c1.362-.138 2.221-1.26 2.73-2.39.557-1.238.877-2.839 1.07-4.398.339-2.754.306-5.676.293-6.825v-.005L33.989 13a1 1 0 1 0-2 0l.004.427v.011c.012 1.207.04 3.924-.279 6.515-.184 1.498-.476 2.86-.908 3.82-.206.458-.407.762-.613.955a1 1 0 0 1-.685.272h-10.87a1 1 0 0 1-.804-.405 3.951 3.951 0 0 1-.42-.762c-.414-.948-.722-2.29-.94-3.77C16.04 17.123 16 13.932 16 13a1 1 0 1 0-2 0c0 .795.028 3.207.297 5.769.055.526.12 1.06.198 1.586.226 1.533.565 3.086 1.088 4.28.456 1.042 1.242 2.208 2.526 2.35a1 1 0 0 1 .891.994v.803c.243.073.552.159.916.245 1.006.236 2.427.473 4.084.473a18 18 0 0 0 4.083-.473c.365-.086.674-.172.917-.245Zm-10 2.077a20 20 0 0 0 5 .64 20.002 20.002 0 0 0 5-.64v.444a1 1 0 0 0 1.336.942l.55-.197c1.022-.367 1.991-.713 2.713-.896.366-.092.799-.178 1.18-.144.194.017.5.074.772.296.318.258.449.621.449.96 0 .737-.266 2.759-.511 4.376a57.915 57.915 0 0 1-.351 2.1c-.085.438-.142.679-.254.867l-.005.008a1.005 1.005 0 0 1-1.837-.258v-.002c-.12-.442-.168-.953-.195-1.545-.007-.157-.013-.325-.019-.499-.014-.435-.03-.906-.073-1.337l-.115-1.116a1 1 0 0 0-1.331-.837c-1.116.4-2.386.85-3.632 1.2s-2.538.621-3.677.621c-1.139 0-2.431-.271-3.677-.621-1.17-.33-2.362-.747-3.427-1.127l-.197-.07a1 1 0 0 0-1.334.867c-.037.49-.077 1.032-.118 1.56-.063.813-.125 1.6-.173 2.124l-.004.045c-.042.465-.063.696-.151.889l-.006.014a1.001 1.001 0 0 1-1.614.281c-.21-.21-.235-.408-.327-1.146l-.007-.058c-.025-.203-.062-.45-.108-.733-.08-.495-.184-1.073-.292-1.678l-.05-.273a85.276 85.276 0 0 1-.347-2.046c-.093-.607-.168-1.198-.168-1.607 0-.338.13-.7.449-.96.191-.155.4-.23.573-.266.074-.016.141-.024.198-.03.382-.033.815.053 1.18.145.18.046.374.1.58.164.58.178 1.259.418 1.968.672l.716.257A1 1 0 0 0 19 31.303v-.444Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgExerciseWeights);
export default ForwardRef;