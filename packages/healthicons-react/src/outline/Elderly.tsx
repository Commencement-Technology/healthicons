import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgElderly = (
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
        d="M17 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill="#000"
      />
      <path
        d="M21 38V33.93l2 2.857V38a3 3 0 0 1-5.5 1.66A2.999 2.999 0 0 1 12 38V26.642a3 3 0 0 1-4.372-3.186c.234-1.267.47-2.374.769-3.282.293-.895.74-1.901 1.575-2.708.912-.879 1.96-1.216 2.857-1.353.739-.114 1.563-.113 2.243-.113h.038l2.76 2h-2.76c-.725 0-1.405.002-1.979.09-.64.098-1.25.315-1.77.816-.494.477-.813 1.125-1.064 1.892-.253.771-.47 1.765-.702 3.02a1 1 0 0 0 1.967.363c.17-.922.322-1.64.472-2.203l1.966.257V38a1 1 0 0 0 1.999.054L16.538 28h1.925L19 38.054a1 1 0 0 0 2-.054Z"
        fill="#000"
      />
      <path
        d="M17.87 18H19.038l.007.001h.007c.994.02 1.887.364 2.632.927l1.053-1.723A6.39 6.39 0 0 0 19 16h-3.89l2.76 2ZM8.5 27A2.5 2.5 0 0 0 6 29.5v.803a1 1 0 1 0 2 0V29.5a.5.5 0 0 1 1 0V39a1 1 0 1 0 2 0v-9.5A2.5 2.5 0 0 0 8.5 27ZM37 29.5a2.5 2.5 0 0 1 5 0V39a1 1 0 1 1-2 0v-9.5a.5.5 0 0 0-1 0v.803a1 1 0 1 1-2 0V29.5Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 14.57c2.209 0 4-1.694 4-3.785C34 8.695 32.209 7 30 7c-2.21 0-4 1.695-4 3.785s1.79 3.786 4 3.786Zm0-1.892c1.104 0 2-.847 2-1.893 0-1.045-.896-1.892-2-1.892-1.105 0-2 .847-2 1.892 0 1.046.895 1.893 2 1.893ZM31.479 16.463c.43 0 1.18.045 1.967.42 1.33.634 2.09 1.672 2.541 2.59l.083.168c.157.318.2.405.223.497.008.035.014.07.021.12.014.087.035.218.091.466.176.767.18.787.28 1.272.095.463.282 1.371.81 3.858.326 1.537-.727 3.034-2.351 3.342-.26.05-.52.066-.772.051l.986 4.34c.149.813-.284 1.7-1.21 2.013-.908.306-2.553.736-4.648.736-2.096 0-3.74-.43-4.648-.736a1.778 1.778 0 0 1-1.21-2.013l.54-2.933a3.172 3.172 0 0 1-.772-.051c-1.625-.309-2.677-1.805-2.351-3.343.527-2.486.714-3.393.81-3.857.1-.485.104-.506.279-1.273.185-.808.433-1.78.865-2.657.45-.917 1.21-1.956 2.541-2.59.787-.375 1.537-.42 1.967-.42h3.958Zm0 1.893H27.52c-.284 0-.678.032-1.068.218-.793.378-1.29 1.012-1.627 1.698-.33.671-.542 1.464-.723 2.258-.173.754-.175.766-.269 1.222l-.002.012c-.096.467-.284 1.378-.812 3.869-.109.512.242 1.011.784 1.114.25.048.499.002.705-.113l1.186-6.174 1.968.339-.627 3.26.024-.026-1.436 7.817c.773.252 2.143.593 3.876.593s3.103-.34 3.876-.593l-1.437-7.82.021.011-.623-3.242 1.968-.339.77 4.784c.2.103.436.142.675.097.541-.103.892-.602.783-1.114-.528-2.49-.715-3.402-.812-3.87l-.002-.01c-.094-.457-.096-.469-.268-1.223-.074-.324-.08-.414-.081-.452 0-.01 0-.017-.002-.023-.003-.012-.009-.022-.026-.052-.024-.045-.072-.132-.168-.326-.337-.685-.834-1.32-1.627-1.698a2.47 2.47 0 0 0-1.069-.217Z"
        fill="#000"
      />
      <path
        d="M25 39.58v-2.298c1.305.17 2.507.276 3.682.317l-.743 2.383c-.212.677-.916 1.104-1.654 1.003-.738-.1-1.285-.699-1.285-1.404ZM31.07 40.011l-.805-2.394A37.155 37.155 0 0 0 34 37.369v2.212c0 .7-.54 1.295-1.27 1.402-.73.108-1.435-.305-1.66-.972Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgElderly);
export default ForwardRef;
