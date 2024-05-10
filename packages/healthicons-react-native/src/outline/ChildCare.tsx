import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChildCare = (passedProps: SvgProps) => {
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
        d="M17.657 29.008c-.303.018-.473.062-.537.09-.634.29-2.715 1.045-4.12 1.548v7.1c.72-.033 1.53-.061 1.985-.043 2.022.081 3.549.552 4.976 1.005l.126.04c1.378.438 2.664.847 4.355.975.519.04.972.085 1.396.128a29.95 29.95 0 0 0 1.515.129c.86.044 1.52-.003 2.054-.199.66-.242 3.04-1.355 5.43-2.568a83.53 83.53 0 0 0 3.272-1.739 23.82 23.82 0 0 0 1.165-.696c.327-.213.485-.34.528-.384.178-.183.305-.688.072-1.143-.162-.317-.614-.781-1.884-.571-1.47.243-3.218.96-4.935 1.664-.833.342-1.662.681-2.395.926-.704.235-1.46.434-2.108.395-.94-.057-2.596-.305-3.97-.529a156.202 156.202 0 0 1-2.362-.404l-.153-.027-.053-.01.179-.984-.18.984.192-1.984 5.36.065c.005 0 .012 0 .022-.002.036-.003.108-.012.212-.039.204-.053.54-.177.956-.475.144-.103.32-.282.479-.514.13-.19.227-.381.284-.543-.799-.023-1.583-.157-2.168-.285a14.874 14.874 0 0 1-1.022-.262l-.046-.014-6.566-1.473h-.002a8.74 8.74 0 0 0-.314-.05c-.212-.031-.503-.068-.818-.093a7.078 7.078 0 0 0-.925-.018Zm2.258-.82.183-.982.018.003 6.688 1.5.041.014.012.004.046.014.188.054c.165.046.403.107.686.169.574.126 1.298.242 1.974.242.624 0 1.269.233 1.614.865.296.542.227 1.138.116 1.55-.138.514-.424 1.054-.787 1.513.49-.185 1.026-.404 1.602-.64l.123-.05c1.623-.667 3.547-1.457 5.244-1.737 1.94-.321 3.351.383 3.991 1.632.57 1.112.438 2.571-.42 3.45-.215.221-.543.453-.872.666a25.75 25.75 0 0 1-1.266.76 85.65 85.65 0 0 1-3.354 1.782c-2.371 1.203-4.857 2.373-5.647 2.662-.916.335-1.9.367-2.845.318a37.884 37.884 0 0 1-1.708-.145c-.43-.043-.858-.085-1.25-.115-1.928-.146-3.408-.617-4.77-1.05l-.166-.053c-1.407-.447-2.716-.843-4.451-.913-.59-.023-2.057.053-2.847.099L11 39.862V29.235l.665-.236c1.355-.482 3.982-1.427 4.625-1.72.402-.183.867-.245 1.252-.268a9.039 9.039 0 0 1 1.195.021 14.44 14.44 0 0 1 1.327.168l.024.004.006.001h.004l-.183.984Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 29a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v10.996a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V29.001Zm2 0v10.996h3V29.001H8ZM19.299 19.078l.02-.02a.643.643 0 0 0-.913-.907l-1.96 1.973a2 2 0 0 1-1.42.59h-2.585a.643.643 0 0 0 0 1.286h2.76a3 3 0 0 0 2.157-.915l1.94-2.007Zm-4.272-.365H12.44a2.643 2.643 0 0 0 0 5.287h2.76a5 5 0 0 0 3.595-1.524l1.94-2.007a2.643 2.643 0 1 0-3.748-3.728l-1.961 1.972ZM32.74 12.998a2.5 2.5 0 1 0 0-4.998 2.5 2.5 0 0 0 0 4.998Zm4.5-2.499a4.5 4.5 0 1 1-8.998 0 4.5 4.5 0 0 1 8.998 0ZM29.718 23.294l.073.072a2.293 2.293 0 0 0 1.63.622l.039.003c.012.002.025.004.039.004l3.137-.004a2.667 2.667 0 0 0-.005-5.334h-1.956c-.2 0-1.65-1.527-2.73-2.697a4.07 4.07 0 0 0-2.985-1.316h-4.856l.468 9.35h3.083a4.655 4.655 0 0 0 1.816-.371c.574-.245 1.454-.979 1.526-1.051.068-.068.654.641.716.716l.005.006Zm-3.032-1.51.047-.025c.035-.02.081-.047.136-.082.112-.07.237-.158.361-.25a9.012 9.012 0 0 0 .404-.319c.68-.637 1.485-.563 1.8-.496.328.07.561.206.646.257a2.6 2.6 0 0 1 .403.304c.148.133.29.287.385.392.106.117.205.232.275.315l.04.048a.29.29 0 0 0 .068.04m-4.565-.185c-.327.139-.678.21-1.033.212h-1.179l-.267-5.351h2.753c.564 0 1.115.24 1.515.673.545.59 1.196 1.284 1.744 1.837.27.273.538.535.766.739.11.097.245.214.388.317.069.05.181.127.322.201l.006.003c.082.044.46.243.974.243h1.956a.667.667 0 0 1 .002 1.334l-3.04.003a2.222 2.222 0 0 0-.172-.006h-.052a.293.293 0 0 1-.118-.02"
      />
    </Svg>
  );
};
export default SvgChildCare;
