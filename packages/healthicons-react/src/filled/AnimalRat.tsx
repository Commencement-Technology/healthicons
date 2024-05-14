import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalRat = (
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
        d="M20.452 22.788c-1.574 1.575-6.027 3.475-7.601 1.9-.715-.714-.713-2.023-.351-3.386l-.08.018A10.842 10.842 0 0 0 4 31.89c0 .2.162.361.361.361H44v-2.754c0-3.588-1.427-6.843-3.744-9.228l-2.785.01c-2.002.224-3.45 1.733-4.5 3.435-.512.832-.895 1.656-1.18 2.295l-.104.234c-.098.22-.188.424-.263.577a2.912 2.912 0 0 1-.186.337 1.32 1.32 0 0 1-.196.234c-.069.064-.32.288-.72.288h-4.935c-1.514 0-2.84 1.066-3.253 2.572v2H20v-1c0-3.038 2.373-5.572 5.387-5.572h4.361l.093-.209.002-.003.121-.273c.295-.66.721-1.582 1.305-2.53 1.112-1.803 2.93-3.92 5.731-4.34l.861-.007a13.184 13.184 0 0 0-7.107-2.066c-3.288 0-6.54.612-9.591 1.797a4.033 4.033 0 0 1-.711 4.741ZM12 27.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.774 16.871a13.236 13.236 0 0 0-4.02-.621 26.492 26.492 0 0 0-9.591 1.797 4.03 4.03 0 0 1-.71 4.741c-1.113 1.112-3.66 2.387-5.616 2.485-.813.04-1.524-.122-1.986-.584-.32-.32-.496-.758-.561-1.266a3.56 3.56 0 0 1-.017-.16c-.044-.544.03-1.157.183-1.788l.044-.173-.08.018A10.844 10.844 0 0 0 4 31.888c0 .2.162.362.361.362H44v-2.754c0-3.574-1.416-6.818-3.717-9.2l-.027-.028-2.785.01c-.101.012-.2.027-.299.044-.765.138-1.446.466-2.052.918-.857.64-1.565 1.526-2.148 2.473-.513.832-.896 1.656-1.182 2.295 0 .003-.002.005-.003.008a56.023 56.023 0 0 1-.194.437l-.019.042c-.054.121-.105.232-.15.324a2.912 2.912 0 0 1-.186.337 1.32 1.32 0 0 1-.196.234c-.069.064-.32.288-.72.288h-4.935c-1.514 0-2.84 1.066-3.253 2.572v2H20v-1a5.702 5.702 0 0 1 .207-1.53 5.65 5.65 0 0 1 .975-1.952c.98-1.268 2.49-2.09 4.205-2.09h4.361l.031-.07.062-.139.002-.003.113-.256.008-.017c.295-.66.721-1.582 1.305-2.53.802-1.3 1.97-2.762 3.607-3.634A6.559 6.559 0 0 1 37 18.323l.861-.007a13.186 13.186 0 0 0-.865-.506l-.08-.042a13.164 13.164 0 0 0-2.142-.897Zm-2.458 1.486c-.51-.07-1.032-.107-1.562-.107a24.49 24.49 0 0 0-7.154 1.068 6.017 6.017 0 0 1-1.734 4.885c-1.07 1.07-2.886 2.08-4.613 2.624-.762.24-1.6.42-2.433.448a3.001 3.001 0 1 1-5.563-2.242 8.849 8.849 0 0 0-3.105 5.217h11.913c.472-3.62 3.472-6.572 7.322-6.572h3.071c.284-.6.65-1.32 1.109-2.064.622-1.009 1.519-2.233 2.75-3.257Zm-19.595 8.586a1 1 0 1 0-1.443-1.386 1 1 0 0 0 1.443 1.386Zm11.595 3.307H42v-.754c0-2.752-.986-5.27-2.627-7.225l-1.77.007c-1.029.155-2.003.983-2.928 2.484-.442.717-.782 1.443-1.058 2.061l-.099.222m-9.202 3.205c.273-.37.681-.572 1.071-.572h4.936a3.056 3.056 0 0 0 2.084-.826c.259-.242.423-.478.495-.587.153-.229.265-.457.322-.573m.272-.597.002-.003.017-.04.002-.004.001-.003m-.294.647c.087-.178.185-.4.272-.597l-.272.597Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.05 23.012c1.286-.406 2.484-1.134 2.988-1.638a2.031 2.031 0 0 0-2.873-2.872c-.503.503-1.232 1.701-1.637 2.988-.197.624-.277 1.145-.267 1.512.004.118.015.198.026.25.052.012.133.023.25.026.368.01.889-.07 1.513-.266Zm-3.2 1.677c1.575 1.574 6.028-.326 7.602-1.9a4.031 4.031 0 0 0-5.7-5.701c-1.575 1.574-3.475 6.027-1.901 7.6ZM32 11a1 1 0 0 1 1-1c6.05 0 11 4.787 11 10.747 0 1.683-.397 3.279-1.105 4.7l-1.79-.893A8.504 8.504 0 0 0 42 20.747C42 15.94 37.995 12 33 12a1 1 0 0 1-1-1Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAnimalRat);
export default ForwardRef;
