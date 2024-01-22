import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMasked = (
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
      <g clipPath="url(#masked_svg__a)" fill="#000">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.957 25.183c.029-.39.043-.785.043-1.183 0-8.837-7.163-16-16-16S8 15.163 8 24c0 .434.017.865.051 1.29.898.465 1.976.768 2.887.957a17.037 17.037 0 0 0 1.463.238c8.965-2.023 14.175-1.932 23.116-.013a17.052 17.052 0 0 0 1.353-.225c.975-.202 2.142-.536 3.075-1.057l.012-.007Zm-13.344-2.74c-.13-.359-.09-.796.017-1.194.112-.416.319-.863.61-1.28.58-.829 1.544-1.59 2.845-1.646 1.346-.056 2.353.799 2.973 1.706.314.46.548.958.695 1.416.142.446.218.902.168 1.267a.5.5 0 0 1-.765.352c-.4-.256-.82-.607-1.207-.93-.177-.149-.347-.29-.505-.416-.563-.444-1-.697-1.363-.715-.345-.017-.743.18-1.244.556-.18.134-.354.277-.534.424l-.196.159c-.244.197-.503.399-.765.557a.5.5 0 0 1-.729-.257Zm-5.775-1.194c.108.398.146.835.017 1.193a.5.5 0 0 1-.73.257 7.187 7.187 0 0 1-.764-.557 46.209 46.209 0 0 1-.196-.16c-.18-.146-.354-.288-.534-.423-.501-.375-.9-.573-1.244-.556-.363.018-.8.271-1.363.715-.158.125-.328.267-.505.415-.388.324-.808.675-1.207.931a.5.5 0 0 1-.765-.352c-.05-.365.025-.821.168-1.267.147-.458.38-.956.695-1.416.62-.907 1.626-1.762 2.973-1.706 1.3.055 2.264.817 2.845 1.647.29.416.498.863.61 1.279Z"
        />
        <path d="M39.607 27.54c-.821.312-1.647.524-2.33.666-.221.045-.43.085-.622.118.547 1.693.716 3.113.605 4.632a15.917 15.917 0 0 0 2.347-5.416ZM10.993 33.32a15.925 15.925 0 0 1-2.582-5.702c.75.27 1.495.458 2.12.588.337.07.647.124.913.166-.487 1.813-.632 3.326-.451 4.948ZM18 30v2h12v-2H18ZM18 34v2h12v-2H18Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm41.11 18.395C38.754 11.198 31.984 6 24 6 16.107 6 9.4 11.08 6.972 18.15a1 1 0 0 0-.203.168c-1.822 1.951-2.628 3.706-2.434 5.296.157 1.282.932 2.208 1.834 2.864a17.965 17.965 0 0 0 5.792 10.904l.04.118c.37.296.744.578 1.124.844A17.92 17.92 0 0 0 24 42c4.58 0 8.76-1.71 11.936-4.526.19-.154.377-.312.564-.474l.017-.064a17.953 17.953 0 0 0 5.335-10.621c.808-.644 1.476-1.522 1.62-2.701.192-1.569-.59-3.298-2.362-5.22Z"
        />
      </g>
      <defs>
        <clipPath id="masked_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMasked);
export default ForwardRef;
