import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMinerWorker = (
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
        d="M24 6a1 1 0 0 1 1 1v.068c2.798.292 4.933 1.495 6.323 3.026.956 1.053 1.589 2.308 1.788 3.532l.108.083c1.124.871 1.949 1.927 1.753 3.138-.189 1.17-1.246 1.882-2.23 2.317a9.329 9.329 0 0 1-.76.296 8 8 0 1 1-15.964 0 9.329 9.329 0 0 1-.76-.296c-.984-.435-2.041-1.147-2.23-2.317-.196-1.211.629-2.267 1.753-3.138l.127-.098a6.19 6.19 0 0 1 .096-.474 7.579 7.579 0 0 1 1.411-2.853C17.755 8.576 19.948 7.196 23 7.02V7a1 1 0 0 1 1-1Zm7.66 10.44a1 1 0 0 0 1.152-.356c.197.275.19.421.186.444-.013.08-.166.41-1.065.808-1.049.464-2.627.8-4.437.99a3.5 3.5 0 0 0-6.992 0c-1.81-.19-3.388-.526-4.437-.99-.899-.398-1.052-.728-1.065-.808-.004-.023-.011-.168.186-.444a1 1 0 0 0 1.75-.931c-.12-.324-.157-.861.009-1.543a5.585 5.585 0 0 1 1.042-2.091l.011-.014V13.5a1 1 0 1 0 2 0V9.846c.822-.435 1.817-.739 3-.823V11.5a1 1 0 1 0 2 0V9.081c1.17.147 2.168.482 3 .93V13.5a1 1 0 1 0 2 0v-1.881c1.116 1.327 1.352 2.731 1.06 3.541a1 1 0 0 0 .6 1.28Zm-10.193 4.475a28.087 28.087 0 0 1-3.448-.435 6 6 0 0 0 11.962 0c-1.06.208-2.234.352-3.448.435A3.49 3.49 0 0 1 24 22a3.49 3.49 0 0 1-2.533-1.085ZM25.5 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path d="M24 39a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.534 28.4 23 31h2l3.466-2.6C34.561 29.376 42 32.09 42 36v6H6v-6c0-3.91 7.439-6.624 13.534-7.6Zm6.133 4.6 3.31-2.483c1.003.184 2.024.415 3.023.686V40h2v-8.185c.7.24 1.371.501 2 .782V40H12v-7.403c.629-.28 1.3-.542 2-.782V40h2v-8.797c.999-.271 2.02-.502 3.023-.686L22.333 33h3.334Zm13.638 1.69c.564.584.695 1.015.695 1.31v4h-2v-6.344c.54.346.976.694 1.305 1.035Zm-30.61 0c.33-.34.766-.688 1.305-1.034V40H8v-4c0-.295.13-.726.695-1.31Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMinerWorker);
export default ForwardRef;
