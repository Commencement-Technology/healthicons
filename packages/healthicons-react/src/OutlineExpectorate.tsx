import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineExpectorate = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        d="M24 40c.428 0 .852-.017 1.27-.05a6.25 6.25 0 0 0 .83 1.929c-.69.08-1.39.121-2.1.121-9.941 0-18-8.059-18-18S14.059 6 24 6s18 8.059 18 18c0 .586-.028 1.166-.083 1.737a4.771 4.771 0 0 0-1.95-.699c.022-.343.033-.69.033-1.038 0-8.837-7.163-16-16-16S8 15.163 8 24s7.163 16 16 16Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M25 35a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm14.605-1.015c-1.12.108-2.298-.372-3.213-.893a10.83 10.83 0 0 1-.716-.446c-.568-.385-.926-.703-.926-.703s.285-.375.76-.857c.183-.185.394-.386.628-.588.794-.685 1.852-1.377 2.969-1.485 1.454-.14 2.743.86 2.881 2.232.138 1.373-.93 2.6-2.383 2.74Zm-.306-2.981c.465-.045.682.268.699.44.017.166-.125.506-.585.55-.381.037-.902-.09-1.49-.36.518-.372.998-.594 1.376-.63ZM27.196 36.5s-.133.629-.18 1.498c-.008.158-.014.323-.016.494-.01 1.09.15 2.406.816 3.354.85 1.211 2.468 1.518 3.614.686 1.147-.833 1.386-2.49.536-3.701-.66-.94-1.815-1.517-2.823-1.863a10.384 10.384 0 0 0-.556-.173 10.259 10.259 0 0 0-1.39-.295Zm1.819 2.561c.046.72.2 1.297.438 1.636.257.367.627.343.802.216.198-.143.344-.549.074-.933-.23-.327-.69-.648-1.314-.919Zm11.149-4.649c1.752 1.017 2.379 3.21 1.4 4.895-.98 1.687-3.194 2.229-4.946 1.212-2.776-1.612-3.778-6.278-3.778-6.278s4.548-1.441 7.324.17Zm-1.004 1.73c.86.499 1.063 1.492.674 2.161-.389.67-1.352.985-2.212.486-.818-.475-1.547-1.547-2.101-2.814a12.212 12.212 0 0 1-.1-.235l.253-.03c1.375-.146 2.668-.044 3.486.431Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M17.241 18.349a1 1 0 0 1 1.314-.181l3 2a1 1 0 0 1 0 1.664l-3 2a1 1 0 0 1-1.267-1.534c.325-.33.757-.659 1.087-.91.112-.085.212-.162.292-.226a4.54 4.54 0 0 0 .173-.144 6.065 6.065 0 0 0-.201-.167l-.236-.184c-.342-.265-.8-.618-1.141-.992a1 1 0 0 1-.02-1.326Zm16.204-.181a1 1 0 0 1 1.293 1.507c-.342.374-.8.727-1.14.991l-.237.185a6.065 6.065 0 0 0-.2.167c.047.043.105.09.172.144.08.064.18.14.291.225.33.252.763.581 1.088.91a1 1 0 0 1-1.267 1.535l-3-2a1 1 0 0 1 0-1.664l3-2Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineExpectorate);
export default ForwardRef;
