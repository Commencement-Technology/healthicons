import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgConstructionWorker = (
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
        d="m33.219 13.21-.09-.07c-.173-1.314-.802-2.683-1.784-3.837C29.75 7.428 27.15 6 23.67 6c-3.43 0-5.847 1.564-7.273 3.503A8.217 8.217 0 0 0 15 12.51a6.855 6.855 0 0 0-.112.616l-.108.083c-1.124.871-1.949 1.927-1.753 3.138.188 1.17 1.246 1.882 2.23 2.317.25.111.52.215.807.312a8 8 0 1 0 15.87 0c.287-.097.557-.2.807-.312.984-.435 2.041-1.147 2.23-2.317.196-1.211-.629-2.267-1.753-3.138Zm-16.274 1.462c-.13-.374-.164-.975.005-1.718.166-.725.51-1.52 1.05-2.256V13.5a1 1 0 1 0 2 0V8.91c.823-.468 1.818-.795 3-.885V11.5a1 1 0 1 0 2 0V8.087c1.168.157 2.167.518 3 1V13.5a1 1 0 1 0 2 0v-2.682c1.105 1.416 1.364 2.944 1.053 3.861a1 1 0 0 0 1.759.905c.197.275.19.421.186.444-.013.08-.166.41-1.065.808-.39.172-.854.327-1.375.464l-.024.006c-.565.146-1.194.27-1.867.372a30.95 30.95 0 0 1-3.767.31 36.375 36.375 0 0 1-2.6-.028 29.667 29.667 0 0 1-2.976-.284c-.67-.1-1.295-.224-1.858-.37l-.024-.006a9.185 9.185 0 0 1-1.375-.464c-.899-.398-1.052-.728-1.065-.808-.004-.023-.011-.169.186-.444a1 1 0 0 0 1.757-.912Zm1.077 4.809c.332.065.676.124 1.028.177 1.068.16 2.218.262 3.388.31a38.119 38.119 0 0 0 3.13 0c1.164-.048 2.31-.15 3.373-.31.355-.052.702-.111 1.037-.177a6 6 0 1 1-11.956 0Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 28.49c.658.115 1.328.249 2 .402C36.443 30.135 42 32.62 42 36v6H6v-6c0-3.38 5.557-5.865 11-7.108a39.712 39.712 0 0 1 2-.402V33h10v-4.51ZM15 31.49c.654-.2 1.325-.381 2-.544V35h14v-4.053a33.39 33.39 0 0 1 3 .868V40h2v-7.403c.29.129.57.262.838.399 1.137.578 1.98 1.174 2.514 1.744.525.56.648.973.648 1.26v4H8v-4c0-.287.123-.7.648-1.26.534-.57 1.377-1.166 2.514-1.744.569-.29 1.186-.562 1.838-.815V40h2v-8.509Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgConstructionWorker);
export default ForwardRef;
