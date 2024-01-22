import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPancreas = (
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
        d="M21.737 10.116c-.22-.123-.41-.15-.64-.071a1.063 1.063 0 0 0-.123.05v.002l-.004.002-.014.008-.06.033-.014.009c-.165.11-.251.272-.305.514-.089.4-.051.927.042 1.52.107.676.463 1.63.974 2.27.251.315.49.492.687.566.165.062.358.077.634-.053.418-.195.676-.675.569-1.639-.105-.937-.54-1.926-.936-2.44-.28-.363-.554-.628-.81-.771Zm-1.904-1.672c.182-.114.386-.212.614-.29.85-.293 1.63-.14 2.265.215.6.335 1.07.845 1.419 1.298.625.81 1.196 2.147 1.34 3.44.104.939-.008 2.092-.724 2.931 1.84-.061 3.305.122 4.707.3l.049.006c1.46.185 2.852.362 4.637.295.83-.03 1.538-.197 2.304-.377.21-.05.423-.1.645-.148.996-.22 2.112-.392 3.36-.024.417.124.788.344 1.066.678.276.33.41.712.46 1.075.095.686-.096 1.41-.315 1.995-.45 1.202-1.244 2.386-1.533 2.795-.99 1.398-2.152 2.191-3.409 2.603-1.224.4-2.483.42-3.627.38a61.55 61.55 0 0 1-.965-.044c-.799-.04-1.526-.077-2.252-.024-.486.035-.936.11-1.357.246.234.044.467.103.7.175 1.894.586 3.563 2.038 5.133 3.955.233.238.415.491.55.785.137.299.208.599.26.882.143.776-.076 1.56-.403 2.21a6.246 6.246 0 0 1-1.395 1.801c-.561.504-1.24.933-1.965 1.138-.736.208-1.59.197-2.342-.31-.392-.264-.63-.685-.739-.893a4.268 4.268 0 0 1-.124-.26c-.573-.578-.943-.868-1.256-1.011-.224-.103-.462-.15-.827-.097l-.226.218c-.278.265-.671.63-1.13 1.025-.898.774-2.125 1.735-3.27 2.272-2.324 1.09-4.673 1.572-6.914 1.183-2.26-.393-4.292-1.652-5.993-3.829-4.256-5.45-2.719-13.283.83-18.273 1.519-2.138 4.214-4.251 6.436-5.791a59.231 59.231 0 0 1 3.991-2.53Zm5.074 24.1.205-.208.285-.066c.84-.193 1.603-.174 2.371.177.142.065.28.14.416.223.179-.442.473-.871.785-1.241a7.549 7.549 0 0 1 1.453-1.317 5.84 5.84 0 0 1 .907-.518c-.93-.874-1.822-1.442-2.704-1.715-1.281-.397-2.705-.22-4.46.907l-.01.007-4.967 3.016-.121.037-.29-.957.29.957h-.001l-.006.002-.014.004-.048.014a9.197 9.197 0 0 1-.724.177c-.416.086-1.039.188-1.588.136-.692-.065-1.34-.204-1.948-.507-.615-.306-1.128-.75-1.595-1.34-.941-1.192-1.049-2.28-1.07-3.548-.021-1.196.232-2.161.714-3.047.463-.852 1.123-1.597 1.834-2.362 1.408-1.515 3.624-3.203 5.357-4.435.06-.047.121-.09.185-.13.197-.14.388-.273.571-.4a4.342 4.342 0 0 1-.705-.71c-.765-.96-1.235-2.255-1.385-3.206a9.556 9.556 0 0 1-.105-.916c-.482.31-1.01.66-1.558 1.04-2.206 1.528-4.645 3.475-5.946 5.306-3.266 4.594-4.384 11.4-.882 15.883 1.44 1.844 3.056 2.794 4.758 3.09 1.723.298 3.65-.052 5.722-1.024.883-.414 1.938-1.22 2.814-1.976a28.667 28.667 0 0 0 1.358-1.25l.078-.079.02-.019.004-.005ZM21.27 18.476l-.112.08c-1.73 1.228-3.81 2.822-5.072 4.18-.715.77-1.213 1.351-1.543 1.957-.311.572-.486 1.195-.47 2.056.019 1.133.11 1.673.64 2.342.32.406.613.64.917.791.312.155.696.255 1.243.306.236.022.612-.024.997-.103a8.414 8.414 0 0 0 .503-.12l4.69-2.85 3.098-2.326c1.132-.85 2.37-1.149 3.567-1.236.86-.063 1.772-.016 2.61.026.285.015.56.029.824.038 1.095.038 2.06.004 2.934-.282.84-.275 1.651-.802 2.398-1.857.266-.376.936-1.39 1.293-2.341.184-.492.232-.835.207-1.021a.272.272 0 0 0-.016-.068.34.34 0 0 0-.095-.04c-.748-.22-1.453-.142-2.365.059-.168.037-.346.079-.532.123-.785.186-1.728.409-2.772.448-1.95.073-3.479-.122-4.93-.306l-.082-.01c-1.473-.187-2.874-.36-4.674-.273l-.043.002-.043-.002a12.089 12.089 0 0 0-1.853.084c-.344.044-.66.105-.917.182-.2.06-.328.118-.402.161Zm8.747 15.984c.019.043.043.096.072.15a1.254 1.254 0 0 0 .11.178c.134.08.334.118.654.027.353-.1.77-.34 1.173-.701a4.25 4.25 0 0 0 .944-1.21c.218-.435.258-.761.224-.95a1.736 1.736 0 0 0-.11-.408.791.791 0 0 0-.18-.24l-.002-.002c-.018-.018-.074-.074-.312-.031-.267.048-.63.207-1.033.485a5.547 5.547 0 0 0-1.059.96c-.306.363-.452.646-.488.784-.03.112-.041.343-.024.625a5.373 5.373 0 0 0 .031.333Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPancreas);
export default ForwardRef;
