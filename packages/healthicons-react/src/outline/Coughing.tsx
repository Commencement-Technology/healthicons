import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCoughing = (
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
        d="m40.272 31.501.088.016.013-.029-.101.013ZM24 40c1.882 0 3.688-.325 5.365-.922l2.094 1.309A17.934 17.934 0 0 1 24 42c-9.941 0-18-8.059-18-18S14.059 6 24 6s18 8.059 18 18c0 .416-.014.828-.042 1.237l-2.027.259c.046-.493.069-.992.069-1.496 0-8.837-7.163-16-16-16S8 15.163 8 24s7.163 16 16 16Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.241 18.349a1 1 0 0 1 1.314-.181l3 2a1 1 0 0 1 0 1.664l-3 2a1 1 0 0 1-1.267-1.534c.325-.33.757-.659 1.087-.91.112-.086.212-.162.292-.226.067-.054.125-.101.173-.144a6.065 6.065 0 0 0-.201-.167l-.236-.184c-.342-.265-.8-.618-1.141-.992a1 1 0 0 1-.02-1.326ZM34.759 18.349a1 1 0 0 0-1.314-.181l-3 2a1 1 0 0 0 0 1.664l3 2a1 1 0 0 0 1.267-1.534c-.325-.33-.757-.659-1.088-.91l-.291-.226a5.143 5.143 0 0 1-.173-.144c.056-.048.122-.104.201-.167l.236-.184c.342-.265.8-.618 1.141-.992a1 1 0 0 0 .02-1.326ZM26 35a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM41.99 30.525a.938.938 0 0 1-1.01.935l-1.55-.115a1.066 1.066 0 0 1-.969-1.08.938.938 0 0 1 1.01-.935l1.55.114c.546.04.98.524.968 1.08ZM37.244 30.175a.938.938 0 0 1-1.01.935l-1.147-.085a1.066 1.066 0 0 1-.969-1.08.938.938 0 0 1 1.01-.935l1.148.084c.546.04.98.524.968 1.08ZM35.57 38.082c.388-.372 1.015-.337 1.4.079l1.859 2.009c.385.416.382 1.054-.006 1.426-.388.373-1.014.337-1.399-.078l-1.86-2.01c-.385-.415-.382-1.054.006-1.426ZM32.443 34.704c.388-.372 1.014-.337 1.4.079l.892.965c.385.416.383 1.054-.005 1.427-.388.372-1.015.337-1.4-.08l-.893-.964c-.385-.416-.382-1.055.006-1.427ZM39.813 35.37c.197-.508.77-.736 1.28-.508l.173.077c.51.228.763.826.565 1.335-.197.51-.77.737-1.28.51l-.173-.078c-.51-.228-.763-.826-.566-1.335ZM33.678 32.626c.197-.51.77-.738 1.28-.51l3.272 1.464c.51.228.762.826.565 1.335-.198.51-.771.738-1.28.51l-3.272-1.464c-.51-.228-.763-.826-.565-1.335Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCoughing);
export default ForwardRef;
