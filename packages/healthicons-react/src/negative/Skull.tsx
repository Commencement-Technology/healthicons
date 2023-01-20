import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSkull = (
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
        d="M48 0H0v48h48V0ZM9 16.5c0-3.52 1.362-6.678 3.97-8.943C15.566 5.302 19.318 4 24 4c4.681 0 8.433 1.302 11.03 3.557C37.639 9.822 39 12.98 39 16.5c0 3.431-.799 5.584-1.606 7.197-.183.367-.366.705-.531 1.01l-.035.063c-.177.327-.328.608-.456.877-.251.531-.372.939-.372 1.353v4a1 1 0 0 1-1 1h-.016c-.014.543-.04 1.27-.089 2.086-.103 1.719-.313 3.902-.75 5.57a2.612 2.612 0 0 1-1.12 1.536C31.735 42.019 28.222 44 24 44s-7.736-1.981-9.025-2.808a2.612 2.612 0 0 1-1.12-1.537c-.437-1.667-.647-3.85-.75-5.569a60.923 60.923 0 0 1-.09-2.086H13a1 1 0 0 1-1-1v-4c0-.414-.12-.822-.373-1.353-.127-.269-.278-.55-.455-.877l-.035-.064a33.423 33.423 0 0 1-.531-1.009C9.799 22.084 9 19.931 9 16.5Zm23.616 16.038c.1-.068.219-.134.358-.196a58.363 58.363 0 0 1-.075 1.624c-.102 1.699-.304 3.716-.69 5.18a.612.612 0 0 1-.264.362C30.766 40.264 27.648 42 24 42c-3.648 0-6.766-1.736-7.945-2.492a.612.612 0 0 1-.265-.361c-.385-1.465-.587-3.482-.689-5.18a58.363 58.363 0 0 1-.075-1.625c.14.062.257.128.358.196.398.271.605.626.711 1.029.112.425.108.896.06 1.33a8.725 8.725 0 0 1-.086.57l-.008.044c-.011.065-.024.134-.033.193-.009.055-.028.175-.028.296 0 .855.724 1.611 1.85 2.104 1.18.516 3.087.896 6.15.896s4.97-.38 6.15-.896C31.277 37.61 32 36.854 32 36c0-.12-.02-.24-.028-.296l-.033-.193-.008-.044a8.725 8.725 0 0 1-.086-.57c-.048-.434-.052-.905.06-1.33.106-.404.313-.758.711-1.029ZM24 37c2.937 0 4.53-.37 5.35-.729.378-.165.55-.305.625-.381l-.013-.074a10.647 10.647 0 0 1-.104-.698c-.061-.55-.088-1.298.112-2.06.207-.784.656-1.586 1.523-2.174.65-.442 1.48-.725 2.507-.834V27c0-.836.254-1.553.565-2.21.154-.325.33-.652.505-.974l.032-.058c.167-.308.336-.619.504-.955C36.299 21.416 37 19.569 37 16.5c0-2.98-1.138-5.572-3.28-7.432C31.566 7.198 28.318 6 24 6c-4.319 0-7.567 1.198-9.72 3.068C12.139 10.928 11 13.52 11 16.5c0 3.069.701 4.916 1.394 6.303.168.336.337.646.504.955l.032.058c.174.322.351.65.505.975.31.656.565 1.373.565 2.209v3.05c1.027.109 1.857.392 2.507.834.867.588 1.316 1.39 1.523 2.174.2.762.173 1.51.112 2.06-.03.28-.072.522-.104.698l-.013.074c.075.076.247.216.626.381.82.359 2.412.729 5.349.729Zm-9-13c0 2.761 1.79 5 4 5s4-2.239 4-5-1.79-5-4-5-4 2.239-4 5Zm14 5c2.21 0 4-2.239 4-5s-1.79-5-4-5-4 2.239-4 5 1.79 5 4 5Zm-5.018.008L24 29l.018.008S27 30.369 27 32.276c0 .83-.58 1.604-1.4 1.711a1.498 1.498 0 0 1-.194.013c-.639 0-1.113-.372-1.406-.9-.293.528-.767.9-1.406.9-.066 0-.131-.004-.195-.013-.82-.107-1.399-.88-1.399-1.711 0-1.827 2.732-3.15 2.982-3.268Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSkull);
export default ForwardRef;
