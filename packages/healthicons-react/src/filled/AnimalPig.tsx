import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalPig = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.208 13c-4.646 0-7.192.935-8.807 2.274-1.352-.426-2.551-.346-4.401.175 1.252.907 1.936 1.553 2.402 2.288-.233.4-.448.806-.663 1.211C7.738 20.84 6.747 22.711 4 23.762v3.32c1.98 1.96 5.972 3.312 9.108 2.87 1.628 3.824 6.97 3.165 11.099 2.656l.77-.094c-.689-.948-1.04-2.149-.968-3.565a1 1 0 0 1 1.998.102c-.072 1.4.425 2.323 1.226 2.933.76.578 1.88.935 3.266 1.004C35.79 32.728 40 28.355 40 23c0-5.198-3.966-9.47-9.036-9.954V13H20.207ZM13 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.126 11.046c.548.5.874 1.22.874 2.079 0 .303-.044.594-.12.869.346-.012.698-.024 1.008-.024a1 1 0 0 1 0 2c-.32 0-.642.012-.99.025-.234.008-.48.017-.747.023-.165.004-.334.006-.506.006-.331.348-.69.657-1.033.923a13.38 13.38 0 0 1-2.123 1.333l-.04.02-.012.006-.004.002h-.002L37 17.406l-.43-.903.004-.002.026-.013a10.804 10.804 0 0 0 .526-.284c.265-.152.594-.355.936-.597a2.851 2.851 0 0 1-.674-.422c-.587-.5-.888-1.209-.888-2.06 0-.861.324-1.584.875-2.084a2.782 2.782 0 0 1 1.877-.704 2.795 2.795 0 0 1 1.874.71Zm-1.408 2.935c.195-.32.282-.605.282-.856 0-.329-.112-.501-.22-.599a.797.797 0 0 0-.532-.19.785.785 0 0 0-.53.186c-.105.095-.218.267-.218.603 0 .345.101.466.184.536.129.11.384.226.843.295.062.01.126.018.191.025Z"
      />
      <path d="M16 30h3v8h-3v-8ZM15 37a1 1 0 0 1 1-1v2h-1v-1ZM31 30h3v8h-3v-8ZM30 37a1 1 0 0 1 1-1v2h-1v-1Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAnimalPig);
export default ForwardRef;
