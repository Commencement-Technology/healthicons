import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMalariaOutbreak = (
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
        d="M32 7a1 1 0 1 0-2 0v5.423c0 .059.005.116.015.172l-.043.03a.997.997 0 0 0-.278-.204l-2.102-1.044-.642-1.948a1 1 0 1 0-1.9.626l.773 2.344a1 1 0 0 0 .504.583l2.057 1.022-7.637 1.098-.164.65c-.171.68-.123 1.69.587 2.536.72.858 1.948 1.346 3.715 1.346 1.697 0 2.915-.6 3.724-1.46.086.535.222 1.03.404 1.459l-.713.844a1 1 0 0 0-.215.85l.32 1.53-.83.83a1 1 0 1 0 1.414 1.414l1.212-1.211a1 1 0 0 0 .272-.912l-.33-1.583.207-.246c.195.081.412.131.65.131.496 0 .9-.216 1.2-.482l.464.581-.334 1.599a1 1 0 0 0 .272.912l1.212 1.211a1 1 0 0 0 1.414-1.414l-.83-.83.32-1.53a1 1 0 0 0-.198-.829l-1.162-1.454a1.002 1.002 0 0 0-.125-.13 7.66 7.66 0 0 0 .226-1.272c.052.075.106.15.163.222.798 1.024 2.094 1.77 3.988 1.77 1.767 0 2.995-.488 3.715-1.346.71-.847.758-1.856.587-2.536l-.164-.65-8.445-1.215 1.822-.905a1 1 0 0 0 .505-.583l.772-2.344a1 1 0 0 0-1.9-.626l-.64 1.948L32 12.3V7Zm7.793 10.002a.862.862 0 0 0 .099-.146l-4.998-.72c.081.172.182.34.305.499.401.515 1.105 1 2.41 1 1.432 0 1.982-.392 2.184-.633Zm-17.19-.146c.027.05.06.1.1.146.201.241.75.632 2.182.632 1.306 0 2.01-.484 2.41-1 .124-.158.225-.326.306-.497l-4.998.719Zm7.897-.076c0-.864.152-1.599.358-2.08.05-.117.099-.208.142-.277.043.07.092.16.142.276.206.482.358 1.217.358 2.081 0 .865-.152 1.6-.358 2.081-.05.116-.099.207-.142.277a2.06 2.06 0 0 1-.142-.277c-.206-.481-.358-1.216-.358-2.08Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 17.785a1 1 0 0 1 1 1v5.829a2.472 2.472 0 0 1 .555.55l1.354-1.128.692-1.426a1 1 0 0 1 1.799.874l-.786 1.619a1 1 0 0 1-.26.331l-1.857 1.548a.973.973 0 0 1-.055.043l10.321 1.188.195.618c.24.76.144 1.836-.745 2.683-.85.81-2.276 1.271-4.399 1.271-2.228 0-3.762-.693-4.738-1.694a4.699 4.699 0 0 1-.219-.24v.006c0 .337-.01.67-.028.995a.994.994 0 0 1 .065.042l2.088 1.458a1 1 0 0 1 .241.238l1.11 1.553 1.848.465a1 1 0 0 1-.487 1.94l-2.205-.555a1 1 0 0 1-.57-.388l-1.223-1.712-1.157-.808c-.067.31-.143.605-.229.879l1.465 1.227a1 1 0 0 1 .337.97l-.43 2.062 1.141 1.141a1 1 0 0 1-1.414 1.415l-1.524-1.524a1 1 0 0 1-.272-.912l.419-2.004-.669-.56c-.314.338-.768.65-1.363.65-.55 0-.978-.266-1.288-.572l-.373.402.435 2.084a1 1 0 0 1-.271.912l-1.524 1.524a1 1 0 0 1-1.415-1.415l1.142-1.141-.43-2.061a1 1 0 0 1 .245-.885l1.182-1.273a9.683 9.683 0 0 1-.208-.767l-.784.628-1.242 1.74a1 1 0 0 1-.57.388l-2.205.554a1 1 0 0 1-.487-1.94l1.848-.464 1.11-1.553a.998.998 0 0 1 .187-.198l1.818-1.458.005-.005a17.68 17.68 0 0 1-.032-1.072v-.006a4.699 4.699 0 0 1-.218.24c-.977 1.001-2.511 1.694-4.74 1.694-2.122 0-3.548-.46-4.398-1.27-.889-.848-.986-1.923-.745-2.684l.195-.618 10.32-1.188a1.05 1.05 0 0 1-.054-.043l-1.858-1.548a1.001 1.001 0 0 1-.259-.331l-.786-1.62a1 1 0 1 1 1.8-.873l.691 1.426 1.354 1.128.047-.06c.134-.17.303-.346.508-.49v-5.83a1 1 0 0 1 1-1ZM29.888 30.01a1.03 1.03 0 0 1-.055.057c-.31.295-1.118.718-3.019.718-1.794 0-2.774-.545-3.306-1.09a2.651 2.651 0 0 1-.36-.46l6.74.775Zm-21.776 0c.017.019.035.038.055.057.31.295 1.118.718 3.019.718 1.794 0 2.774-.545 3.306-1.09.145-.15.264-.305.36-.46l-6.74.775Zm10.03.847c0-1.461.2-2.742.494-3.624.124-.373.253-.637.364-.804.111.168.24.43.365.804.293.882.492 2.163.492 3.624 0 1.46-.199 2.742-.492 3.623a3.488 3.488 0 0 1-.365.805 3.493 3.493 0 0 1-.364-.805c-.294-.881-.493-2.162-.493-3.623Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMalariaOutbreak);
export default ForwardRef;
