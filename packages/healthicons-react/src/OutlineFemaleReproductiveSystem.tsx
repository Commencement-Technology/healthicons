import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineFemaleReproductiveSystem = (
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
        fillRule="evenodd"
        d="M6.256 15.129c-.491-.788-.24-1.676.56-2.405.39-.355.843-.592 1.233-.683.4-.093.601-.01.683.055 1.806 1.448 2.976 1.823 3.995 1.912.29.025.508.032.687.038.445.014.638.02 1.046.282l1.08-1.683c-.913-.586-1.733-.604-2.297-.616a4.757 4.757 0 0 1-.342-.014c-.533-.046-1.339-.214-2.918-1.48-.725-.58-1.63-.618-2.387-.442-.766.178-1.518.599-2.126 1.152-1.195 1.087-2.113 3.016-.911 4.942.62.995 1.31 1.85 1.945 2.541.092-.17.209-.327.353-.466.363-.35.85-.542 1.403-.587a15.644 15.644 0 0 1-2.004-2.546Zm6.191 7.959c-.095-.43-.403-1.015-.992-1.557-.589-.543-1.215-.82-1.674-.9-.254-.045-.389-.024-.446-.007-.018.055-.037.182.016.42.096.431.403 1.015.992 1.558.59.543 1.215.82 1.674.9.255.045.389.024.447.007.017-.056.036-.182-.017-.421Zm.002.455s0-.003.005-.009l-.006.009Zm.042-.044c.005-.005.008-.006.009-.006 0 0-.003.003-.01.006ZM9.35 20.59l-.005.009.005-.009Zm-.042.044a.03.03 0 0 1-.01.005l.01-.005Zm4.634 4.237c1.102-1.063.633-3.18-1.047-4.728-1.68-1.55-3.936-1.944-5.038-.881-1.103 1.062-.634 3.18 1.046 4.728 1.68 1.549 3.936 1.943 5.039.88Zm27.802-9.742c.491-.788.24-1.676-.56-2.405-.39-.355-.842-.592-1.233-.683-.4-.093-.602-.01-.683.055-1.806 1.448-2.976 1.823-3.995 1.912-.29.025-.508.032-.687.038-.445.014-.637.02-1.047.282l-1.08-1.683c.914-.586 1.734-.604 2.298-.616.128-.002.243-.005.342-.014.533-.046 1.339-.214 2.918-1.48.724-.58 1.63-.618 2.387-.442.766.178 1.518.599 2.126 1.152 1.194 1.087 2.113 3.016.911 4.942a17.441 17.441 0 0 1-1.985 2.585 1.864 1.864 0 0 0-.375-.51c-.35-.338-.818-.528-1.346-.581a15.68 15.68 0 0 0 2.01-2.553Zm-6.254 7.959c.096-.43.404-1.015.992-1.557.59-.543 1.215-.82 1.674-.9.255-.045.389-.024.447-.007.017.055.036.182-.017.42-.095.431-.403 1.015-.992 1.558-.589.543-1.215.82-1.674.9-.254.045-.388.024-.446.007-.017-.056-.036-.182.017-.421Zm-.001.455-.005-.009.005.009Zm-.042-.044c-.006-.005-.009-.006-.01-.006 0 0 .003.003.01.006Zm3.14-2.909.006.009-.005-.009Zm.043.044a.029.029 0 0 0 .009.005l-.009-.005Zm-4.634 4.237c-1.102-1.063-.634-3.18 1.046-4.728 1.68-1.55 3.937-1.944 5.039-.881 1.102 1.062.633 3.18-1.047 4.728-1.68 1.549-3.936 1.943-5.038.88Zm-15.334-5.659c.433.953.983 1.73 1.39 2.14.745.748 1.09 1.952 1.293 3.122.213 1.224.308 2.675.386 4.128l.044.86c.06 1.189.12 2.369.228 3.48.096.984.226 1.87.411 2.614.13-.112.27-.231.39-.324.132-.1.292-.214.47-.305.167-.086.426-.192.736-.192.317 0 .577.11.751.205.179.098.335.22.459.325l.122.11c.121-.67.189-1.438.224-2.286.036-.892.036-1.815.036-2.763 0-.472 0-.95.004-1.435.013-1.423.066-2.87.3-4.15.232-1.266.664-2.506 1.543-3.39.597-.6 1.264-1.481 1.768-2.459.51-.988.808-1.986.781-2.841-.025-.8-.33-1.494-1.124-2.029C28.024 13.45 26.525 13 24.01 13c-2.5 0-3.982.485-4.827 1.095-.802.58-1.132 1.345-1.178 2.221-.047.915.223 1.943.657 2.896Zm-.65-6.738C19.335 11.518 21.298 11 24.01 11c2.698 0 4.66.472 5.982 1.364 1.38.93 1.962 2.247 2.005 3.624.042 1.323-.41 2.67-1.003 3.82a12.34 12.34 0 0 1-2.127 2.954c-.46.462-.79 1.228-.994 2.339-.2 1.098-.254 2.398-.267 3.808-.004.443-.004.9-.004 1.36 0 .974 0 1.97-.038 2.902-.057 1.378-.2 2.75-.594 3.899-.074.216-.23.543-.575.754a1.23 1.23 0 0 1-1.044.106 1.845 1.845 0 0 1-.543-.307 4.497 4.497 0 0 1-.354-.317 18.57 18.57 0 0 1-.216-.216 6.843 6.843 0 0 0-.25-.244 7.43 7.43 0 0 0-.305.259c-.084.073-.177.155-.292.252-.197.165-.56.468-.973.587-.243.07-.61.107-.981-.09a1.387 1.387 0 0 1-.64-.758c-.425-1.133-.646-2.534-.785-3.961-.112-1.162-.175-2.4-.236-3.592l-.043-.835c-.077-1.46-.169-2.8-.358-3.891-.2-1.146-.472-1.785-.74-2.055-.607-.61-1.283-1.598-1.794-2.722-.511-1.124-.903-2.482-.833-3.827.072-1.384.637-2.751 2.004-3.739Zm5.789 24.22a.025.025 0 0 1-.002 0h.002Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineFemaleReproductiveSystem);
export default ForwardRef;
