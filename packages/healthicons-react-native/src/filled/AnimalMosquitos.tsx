import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalMosquitos = (passedProps: SvgProps) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.726 7a1 1 0 0 0-2 0v5.35c-.02.018-.04.037-.06.058l-2.075-1.031-.641-1.948a1 1 0 1 0-1.9.626l.773 2.344a1 1 0 0 0 .504.583l1.936.961-8.043 1.323-.146.661c-.15.68-.115 1.709.534 2.593.68.927 1.873 1.48 3.601 1.48 1.866 0 3.115-.846 3.859-1.936.184-.27.335-.551.458-.834.054.747.19 1.431.386 2.006a1 1 0 0 0-.279.23l-.854 1.011a1 1 0 0 0-.215.85l.32 1.53-.83.83a1 1 0 1 0 1.414 1.414l1.212-1.211a1 1 0 0 0 .272-.912l-.33-1.583.43-.509A.971.971 0 0 0 31.5 21c.335 0 .652-.186.93-.514l.713.893-.334 1.599a1 1 0 0 0 .272.912l1.212 1.211a1 1 0 0 0 1.414-1.414l-.83-.83.32-1.53a1 1 0 0 0-.198-.829l-1.162-1.454a.996.996 0 0 0-.589-.357c.11-.445.188-.936.226-1.457.123.283.274.564.458.834.744 1.09 1.993 1.936 3.859 1.936 1.728 0 2.921-.553 3.601-1.48.65-.884.684-1.913.534-2.593l-.146-.661-7.703-1.267 2.048-1.017a1 1 0 0 0 .505-.583l.772-2.344a1 1 0 1 0-1.9-.626l-.64 1.948-2.104 1.044-.032.017V7Zm7.222 9.992c-.035.12-.09.238-.168.345-.194.264-.686.663-1.99.663-1.166 0-1.813-.488-2.206-1.064a3.2 3.2 0 0 1-.362-.722l4.726.778Zm-16.728.345a1.105 1.105 0 0 1-.168-.345l4.727-.778a3.2 3.2 0 0 1-.363.722c-.393.576-1.04 1.064-2.207 1.064-1.303 0-1.795-.4-1.989-.663Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 17.785a1 1 0 0 1 1 1v6.95c.095.152.186.325.27.516l1.959-2.21.827-2.37a1 1 0 0 1 1.888.658l-.892 2.557a.999.999 0 0 1-.195.334l-2.48 2.797 10.386 1.196.195.618c.24.76.144 1.836-.745 2.683-.85.81-2.276 1.271-4.399 1.271-2.228 0-3.762-.693-4.738-1.695a4.597 4.597 0 0 1-1.077-1.762L21 30.5c0 .745-.054 1.456-.151 2.104l2.51.962c.11.043.212.105.301.183l1.551 1.364 1.97.495a1 1 0 0 1-.487 1.94l-2.205-.555a1 1 0 0 1-.417-.218l-1.598-1.406-1.254-.48 1.555 1.302a1 1 0 0 1 .337.97l-.43 2.062 1.141 1.141a1 1 0 0 1-1.414 1.415l-1.524-1.524a1 1 0 0 1-.272-.912l.419-2.004-1.281-1.072a.996.996 0 0 1-.293-.412A.84.84 0 0 1 19 36a.84.84 0 0 1-.458-.145.997.997 0 0 1-.202.325L17.34 37.26l.435 2.084a1 1 0 0 1-.271.912l-1.524 1.524a1 1 0 0 1-1.415-1.415l1.142-1.141-.43-2.061a1 1 0 0 1 .245-.885l1.227-1.321-.92.393-1.487 1.402a1 1 0 0 1-.442.242l-2.205.554a1 1 0 0 1-.487-1.94l1.952-.49 1.427-1.345a1 1 0 0 1 .292-.191l2.274-.974a14.22 14.22 0 0 1-.151-2.28 4.598 4.598 0 0 1-1.076 1.763c-.977 1.002-2.511 1.695-4.74 1.695-2.122 0-3.548-.46-4.398-1.27-.889-.848-.986-1.923-.745-2.684l.195-.618 10.385-1.196-2.479-2.797a1 1 0 0 1-.195-.334l-.892-2.557a1 1 0 0 1 1.888-.658l.827 2.37 1.959 2.21c.084-.19.175-.364.27-.515v-6.951a1 1 0 0 1 1-1ZM29.888 31.01a1.03 1.03 0 0 1-.055.057c-.31.295-1.118.718-3.019.718-1.794 0-2.774-.545-3.306-1.09a2.65 2.65 0 0 1-.36-.46l6.74.775Zm-21.72.057a1.02 1.02 0 0 1-.056-.057l6.74-.776a2.655 2.655 0 0 1-.36.46c-.532.546-1.512 1.091-3.306 1.091-1.9 0-2.71-.423-3.019-.718Z"
      />
    </Svg>
  );
};
export default SvgAnimalMosquitos;
