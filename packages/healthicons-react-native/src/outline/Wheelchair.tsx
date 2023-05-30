import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWheelchair = (passedProps: SvgProps) => {
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
      fill="none"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.026 14.526a4.263 4.263 0 1 0 0-8.526 4.263 4.263 0 0 0 0 8.526Zm0-2a2.263 2.263 0 1 0 0-4.526 2.263 2.263 0 0 0 0 4.526ZM23.526 13.595c-1.176-.17-2.206.355-2.952 1.008a6.335 6.335 0 0 0-1.659 2.37c-.176.448-.393 1.38-.605 2.451-.076.386-.154.803-.231 1.24v-3.559l-3.242-2.431-1.2 1.6 2.442 1.831v5.574A9.477 9.477 0 0 0 10 32.526 9.474 9.474 0 0 0 19.474 42c4.896 0 8.926-3.715 9.422-8.48l.056-.005.16.277c.29.506.689 1.198 1.125 1.946.866 1.485 1.896 3.221 2.497 4.13.934 1.41 2.566 1.462 3.67.902a2.903 2.903 0 0 0 1.344-1.377c.29-.645.314-1.4-.01-2.146-.424-.978-1.426-3.33-2.324-5.44l-1.18-2.776-.226-.53c.433.036.776.06.978.069.647.026 1.179-.297 1.531-.641.362-.353.637-.819.781-1.311.144-.49.18-1.086-.052-1.656-.244-.602-.738-1.057-1.42-1.295-.922-.321-2.545-.755-3.9-1.1a176.164 176.164 0 0 0-2.082-.517 83.653 83.653 0 0 0-2.123-3.735c-.633-1.039-1.33-2.111-1.981-2.948a9.064 9.064 0 0 0-.98-1.097c-.285-.26-.716-.601-1.234-.675Zm5.368 17.92 1.171-.085.312.548.126.22a332.997 332.997 0 0 0 1.462 2.532c.872 1.497 1.872 3.182 2.437 4.035.233.351.653.447 1.097.221a.909.909 0 0 0 .425-.413c.057-.127.082-.294-.02-.53-.429-.986-1.434-3.345-2.33-5.453-.45-1.054-.871-2.048-1.181-2.777l-.515-1.213-.002-.002a.17.17 0 0 0-.017-.019c-.015-.014-.102-.098-.377-.098-.362 0-.917-.076-1.471-.166a57.634 57.634 0 0 1-2.274-.425 9.412 9.412 0 0 1 1.157 3.624Zm-4.402-7.025-.362-1.52 1.925-.526h.003l.002.006.008.024a13.957 13.957 0 0 0 .15.451c.102.3.245.7.413 1.11.169.415.352.818.531 1.133.09.158.168.275.232.354l.046.054c.035.012.118.04.27.077.218.055.505.113.849.173.686.12 1.548.24 2.43.348 1.735.212 3.477.369 4.04.396a.438.438 0 0 0 .092-.073c.105-.102.206-.265.258-.442.052-.179.034-.293.014-.342v-.001c-.008-.02-.037-.09-.225-.156-.827-.289-2.367-.702-3.736-1.051a175.295 175.295 0 0 0-2.293-.567l-.147-.035-.496-.118-.211-.406-.012-.021-.034-.066a78.726 78.726 0 0 0-2.227-3.937c-.618-1.016-1.27-2.013-1.85-2.76a7.148 7.148 0 0 0-.754-.85 1.531 1.531 0 0 0-.223-.177c-.38-.034-.823.128-1.293.54a4.339 4.339 0 0 0-1.116 1.599c-.098.248-.285.995-.504 2.104a70.83 70.83 0 0 0-.555 3.245 9.424 9.424 0 0 1 4.775 1.434Zm-5.041.563h.023a7.475 7.475 0 0 1 7.423 6.604l-3.159.227-.02.002h-.002l-.02.002a5.213 5.213 0 0 1-.513.013 5.735 5.735 0 0 1-1.34-.188c-.997-.268-2.035-.87-2.537-2.267-.027-.076-.07-.292-.087-.7-.016-.383-.007-.862.024-1.415.04-.687.113-1.465.208-2.278Zm-2.045.29c-.07.657-.126 1.292-.16 1.874-.033.59-.045 1.14-.026 1.613.02.45.07.918.204 1.294.79 2.195 2.486 3.14 3.9 3.52a7.738 7.738 0 0 0 2.599.232l2.938-.211A7.476 7.476 0 0 1 12 32.526a7.477 7.477 0 0 1 5.406-7.184Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgWheelchair;
