import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCoughingAlt = (
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
        d="M17.72 29.894c.143-.042.233-.086.28-.117V25h2v4.777c.047.03.137.075.28.117a2.831 2.831 0 0 0 .613.101c-.011-1.61.074-4.346 2.355-4.346 3.29 0 5.64 11.483 4.23 12.654-1.41 1.172-4.23.469-5.64-.937-1.075-1.073-1.047-3.5-.98-5.37a5.17 5.17 0 0 1-1.138-.182 3.138 3.138 0 0 1-.72-.305 3.138 3.138 0 0 1-.72.305 4.825 4.825 0 0 1-1.238.186h-.004c.066 1.87.093 4.294-.981 5.366-1.41 1.406-4.23 2.109-5.64.937-1.41-1.171.94-12.654 4.23-12.654 2.283 0 2.366 2.742 2.354 4.35H17.044a3.08 3.08 0 0 0 .676-.105Zm5.446-2.182.006-.012c.149.132.36.381.61.795.53.877 1.028 2.155 1.413 3.568.382 1.4.619 2.807.682 3.887.023.385.022.693.007.924-.188.03-.464.038-.846-.036-.72-.14-1.401-.503-1.788-.888 0 0-.027-.027-.07-.111a2.057 2.057 0 0 1-.143-.39c-.1-.366-.162-.844-.19-1.42-.027-.57-.017-1.17.002-1.769l.017-.47c.016-.426.032-.862.032-1.22 0-.133 0-.266-.002-.4-.005-.732-.01-1.469.148-2.101.04-.162.084-.278.122-.357Zm-8.438 0-.006-.012c-.148.132-.36.381-.61.795-.53.877-1.027 2.155-1.412 3.568-.382 1.4-.619 2.807-.683 3.887a7.587 7.587 0 0 0-.006.924c.188.03.464.038.845-.036.721-.14 1.402-.503 1.789-.888 0 0 .027-.027.07-.111a2.05 2.05 0 0 0 .143-.39c.1-.366.162-.844.19-1.42.027-.57.017-1.17-.003-1.769l-.016-.47c-.016-.426-.032-.862-.032-1.22 0-.133 0-.266.002-.4.005-.732.01-1.469-.148-2.101a1.857 1.857 0 0 0-.123-.357Z"
      />
      <path d="M32 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM34 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM36 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM42 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM42 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM42 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM38 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM38 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM30 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM23 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM20 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.723 24.02a2 2 0 0 1-2-2v-.947a2 2 0 0 1 2-2h1.06a.781.781 0 0 0 .533-.2.501.501 0 0 0 .17-.36v-.008l.001-.237a175.714 175.714 0 0 0 .005-1.085l-.002-.182v-.024a2.038 2.038 0 0 1 .884-1.816c-.252-.59-.516-1.21-.766-1.848a2 2 0 0 1-.138-.725v-.014l-.003-.088a6.298 6.298 0 0 0-.024-.345 4.521 4.521 0 0 0-.169-.898 4.554 4.554 0 0 0-1.722-2.312A5.145 5.145 0 0 0 19.627 8a5.075 5.075 0 0 0-2.837.855 4.51 4.51 0 0 0-1.732 2.186 4.15 4.15 0 0 0-.063 2.665 4.466 4.466 0 0 0 1.624 2.25 2 2 0 0 1 .81 1.607v4.456a2 2 0 0 1-2 2h-2.83c-1.232-.003-2.396.452-3.25 1.239-.843.777-1.314 1.812-1.349 2.879V40h22.996V29.053l.001-.068a4.5 4.5 0 0 0-.322-1.83 4.775 4.775 0 0 0-1.061-1.597 5.199 5.199 0 0 0-1.667-1.113 5.516 5.516 0 0 0-2.005-.426h-3.22Zm3.998-1.947a7.49 7.49 0 0 1 2 .527c.869.365 1.653.89 2.307 1.544a6.776 6.776 0 0 1 1.503 2.268c.338.842.496 1.74.465 2.641V42H6V28.107c.044-1.632.76-3.182 1.994-4.32 1.234-1.137 2.888-1.772 4.61-1.768h2.825v-4.456a6.466 6.466 0 0 1-2.343-3.261 6.149 6.149 0 0 1 .093-3.945 6.509 6.509 0 0 1 2.493-3.16A7.075 7.075 0 0 1 19.636 6a7.145 7.145 0 0 1 4.072 1.299c1.176.833 2.042 2 2.47 3.332.292.907.292 1.951.292 1.951.245.627.507 1.238.768 1.85l.368.888c.138.241.231.502.277.772.01.18-.05.356-.17.496a.759.759 0 0 1-.475.261c-.013 0-.052-.006-.107-.015-.054-.008-.123-.02-.196-.029-.213-.028-.459-.045-.45.044.015.151 0 1.675 0 1.675a2.476 2.476 0 0 1-.518 1.495l-.004.005a2.615 2.615 0 0 1-.275.303 2.78 2.78 0 0 1-1.905.746h-1.06v.946h3.24c.254.005.507.023.758.054ZM24.49 16.96v.003-.003Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCoughingAlt);
export default ForwardRef;
