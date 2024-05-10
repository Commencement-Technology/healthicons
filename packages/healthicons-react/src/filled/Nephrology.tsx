import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNephrology = (
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
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H26.848V27.363c0-.855.31-1.155.482-1.278a1.026 1.026 0 0 1 .402-.169l.01-.001H27.729l-.005.001h-.003l-.07-.997-.07-.998h-.004l-.006.001-.014.001a1.348 1.348 0 0 0-.142.019 3.026 3.026 0 0 0-1.245.515c-.73.518-1.322 1.44-1.322 2.905V42h-1.836V27.363c0-1.465-.593-2.388-1.321-2.907a3.025 3.025 0 0 0-1.35-.529 1.352 1.352 0 0 0-.037-.004h-.015l-.006-.001h-.003s-.002 0-.07.997l-.07.997h-.015l-.006-.001.01.001a1.027 1.027 0 0 1 .402.17c.172.122.481.422.481 1.277V42H9a3 3 0 0 1-3-3V9Zm26.964 22.248c8.623-3.637 5.22-15.913-.766-17.942-2.483-.841-5.223 1.95-5.205 3.684.007.749.394 1.48.797 2.241.529 1 1.086 2.052.85 3.268-.417 2.143-.884 5.76.318 7.476 1.203 1.716 2.412 1.945 4.006 1.273Zm-18.068 0c-8.623-3.637-5.22-15.913.766-17.942 2.483-.841 5.223 1.95 5.206 3.684-.008.749-.395 1.48-.797 2.241-.53 1-1.086 2.052-.85 3.268.417 2.143.883 5.76-.319 7.476-1.202 1.716-2.411 1.945-4.006 1.273Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNephrology);
export default ForwardRef;
