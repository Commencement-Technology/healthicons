import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgToiletPaper = (
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
      <g clipPath="url(#toilet_paper_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM21.846 12.103c-.454-.232-.53-.416-.542-.453.012-.036.088-.22.542-.453.505-.258 1.273-.447 2.176-.447.903 0 1.67.19 2.176.447.454.232.53.417.542.453-.012.037-.088.221-.542.453-.505.258-1.273.447-2.176.447-.903 0-1.67-.189-2.176-.447Zm2.176-3.353c-1.152 0-2.244.237-3.085.666-.788.402-1.636 1.138-1.636 2.234 0 1.097.848 1.832 1.636 2.234.84.43 1.933.666 3.085.666s2.245-.236 3.086-.666c.787-.402 1.635-1.137 1.635-2.234 0-1.096-.848-1.832-1.635-2.234-.841-.43-1.934-.666-3.086-.666Zm-8.753-.912C13.026 8.984 12 10.386 12 11.65c0 1.265 1.026 2.667 3.269 3.812 2.188 1.118 5.282 1.838 8.753 1.838 3.472 0 6.565-.72 8.753-1.838 2.243-1.145 3.27-2.547 3.27-3.812 0-1.264-1.027-2.666-3.27-3.812C30.587 6.721 27.494 6 24.022 6c-3.471 0-6.564.72-8.753 1.838Zm20.775 7.813v20.7c0 1.073-.738 2.244-2.33 3.273l-.207-.423.715-1.46a1 1 0 0 0 0-.88l-.715-1.46.715-1.46a1 1 0 0 0 0-.88l-.715-1.46.715-1.46a1 1 0 0 0 0-.88l-.715-1.46.715-1.46a1 1 0 0 0 0-.88l-.715-1.46.715-1.46a1 1 0 0 0 0-.88l-.715-1.46.715-1.46a1 1 0 0 0-.693-1.42l.156-.078c.88-.45 1.686-.982 2.36-1.592Zm-12.038 3.65h7.715l-.226.46a1 1 0 0 0 0 .88l.715 1.46-.715 1.46a1 1 0 0 0 0 .88l.715 1.46-.715 1.46a1 1 0 0 0 0 .88l.715 1.46-.715 1.46a1 1 0 0 0 0 .88l.715 1.46-.715 1.46a1 1 0 0 0 0 .88l.715 1.46-.715 1.46a1 1 0 0 0 0 .88l.715 1.46-.44.9H24.016c-3.47 0-6.56-.721-8.747-1.838C13.026 39.018 12 37.616 12 36.35v-20.7c.673.61 1.48 1.143 2.36 1.592 2.52 1.288 5.931 2.055 9.646 2.057Zm.051 24.7h-.035c-3.72 0-7.138-.768-9.663-2.057C11.89 40.682 10 38.76 10 36.351v-24.7c0-2.409 1.889-4.332 4.36-5.594C16.883 4.768 20.301 4 24.021 4c3.72 0 7.139.768 9.663 2.057 2.47 1.262 4.36 3.185 4.36 5.593v24.701c0 2.256-1.659 4.087-3.9 5.347l-.853 1.743a1 1 0 0 1-.898.56h-8.337Zm-8.267-22.7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 8.6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 6.6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-10.4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 6.6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        />
      </g>
      <defs>
        <clipPath id="toilet_paper_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgToiletPaper);
export default ForwardRef;