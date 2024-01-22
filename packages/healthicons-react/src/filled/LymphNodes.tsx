import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLymphNodes = (
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
        d="M11.316 6.051a1 1 0 0 0-.632 1.898c.434.145 1.15.474 1.888.975C11.774 9.391 10.015 10 7 10a1 1 0 1 0 0 2c3.707 0 6.033-.85 7.117-1.713.193.227.371.47.525.727a1 1 0 0 0 .175.217c-.292.957-.004 2.162.838 3.1.705.784 1.639 1.203 2.502 1.207.04.063.088.123.144.177a1.968 1.968 0 0 1 .219.394c.174.403.404 1.16.482 2.451 0 .016.002.03.004.046-.703.584-1.014 1.503-.94 2.493a.457.457 0 0 0-.013.007c-.038.019-.173.064-.45.091-.26.026-.576.03-.927.016a19.028 19.028 0 0 1-1.702-.157c-.084-1.331-1.37-2.522-3.09-2.77a4.357 4.357 0 0 0-1.193-.01.992.992 0 0 0-.172-.13.862.862 0 0 1-.15-.205C10.222 17.687 10 17.117 10 16a1 1 0 1 0-2 0c0 1.383.277 2.313.632 2.934.042.074.086.144.13.209a2.524 2.524 0 0 0-.447.556A13.843 13.843 0 0 0 6 19.5a1 1 0 1 0 0 2c.858 0 1.618.1 2.185.207.418 1.01 1.524 1.827 2.915 2.027 1.2.173 2.328-.155 3.055-.795.064.023.133.04.204.051.593.085 1.434.19 2.24.222a8.95 8.95 0 0 0 1.2-.025 3.82 3.82 0 0 0 .879-.18c.128.222.276.438.444.646 1.277 1.587 3.253 2.156 4.605 1.393.483.345 1.151.756 1.914 1.11a9.91 9.91 0 0 0 1.74.63 5.53 5.53 0 0 0-.501 1.225 8.26 8.26 0 0 0-2.96.707 6.863 6.863 0 0 0-1.42.847c-.808-.474-1.937-.6-3.065-.255-1.298.396-2.25 1.31-2.55 2.313-.764.039-1.697-.002-2.666-.094a36.797 36.797 0 0 1-2.056-.255 4.547 4.547 0 0 0-.775-1.686 4.559 4.559 0 0 0-1.334-1.235c.026-.172.063-.359.113-.547.13-.493.32-.88.54-1.099a1 1 0 0 0-1.414-1.414c-.58.58-.89 1.36-1.06 2.001a7.067 7.067 0 0 0-.132.612 2.012 2.012 0 0 0-.2.044c-.274-.512-.668-1.131-1.194-1.657a1 1 0 0 0-1.414 1.414c.393.393.711.912.938 1.365.11.221.193.414.247.55l.012.03c-.134.884.143 1.96.828 2.9 1.139 1.563 2.972 2.166 4.096 1.347.23-.168.414-.383.549-.632.638.095 1.347.186 2.068.254 1.062.1 2.211.157 3.206.084.16.206.36.386.587.537-.449.793-1.141 1.478-1.817 2.01-.145.114-.287.218-.422.314a4.768 4.768 0 0 0-1.209-.382c-2.008-.353-3.852.589-4.12 2.105-.266 1.516 1.145 3.032 3.153 3.385 2.008.354 3.853-.589 4.12-2.105.102-.58-.043-1.162-.373-1.678l.087-.067c.87-.683 1.935-1.714 2.557-3.055a4.43 4.43 0 0 0 1.213-.195c1.701-.52 2.807-1.93 2.632-3.262a4.63 4.63 0 0 1 1.095-.67 6.23 6.23 0 0 1 2.02-.519c.145.847.55 1.578 1.192 2.042a11.14 11.14 0 0 0-.263 1.748c-.034.552-.022 1.197.13 1.805.094.374.25.772.51 1.125-.638 1.373.28 3.205 2.087 4.128 1.838.938 3.9.58 4.604-.8.089-.173.152-.355.19-.541a10.15 10.15 0 0 0 1.304-.093l.017-.002c.288.265.678.594 1.122.914.573.413 1.293.854 2.03 1.1a1 1 0 1 0 .633-1.898c-.435-.145-.93-.428-1.406-.762a8.017 8.017 0 0 0 1.832-1.076 1 1 0 1 0-1.236-1.572c-1.058.831-2.276 1.18-3.261 1.314a8.077 8.077 0 0 1-1.453.065c-.393-.649-1.02-1.238-1.823-1.648-1.051-.537-2.175-.65-3.077-.39a1.366 1.366 0 0 1-.133-.35c-.082-.33-.101-.747-.073-1.195a8.7 8.7 0 0 1 .206-1.38c1.276-.138 2.597-1.047 3.4-2.49 1.018-1.828.872-3.91-.252-5.022.12-1.352.484-2.132.782-2.562.026-.038.052-.073.077-.106.875.488 2.065.634 3.273.315 2.067-.547 3.416-2.256 3.053-3.844.455-.352.976-.798 1.465-1.3.73-.746 1.513-1.738 1.78-2.805a1 1 0 1 0-1.94-.486 2.65 2.65 0 0 1-.326.723A2.596 2.596 0 0 1 41 14a1 1 0 1 0-2 0c0 1.072.403 1.982.803 2.592-.268.245-.536.467-.78.657-.883-.544-2.129-.72-3.393-.386-1.216.321-2.183 1.045-2.7 1.909a6.285 6.285 0 0 1-1.926-.601 7.118 7.118 0 0 1-.711-.402c.046-.65-.084-1.377-.407-2.084a13.659 13.659 0 0 0 1.556-.923c.818-.563 1.805-1.38 2.49-2.438.785.344 1.798.417 2.824.134 1.936-.533 3.185-2.13 2.79-3.566-.396-1.436-2.286-2.168-4.222-1.634-1.906.525-3.146 2.08-2.807 3.499a3.82 3.82 0 0 1-.357.618c-.468.666-1.153 1.258-1.851 1.739a11.88 11.88 0 0 1-1.64.939l-.013-.01a3.544 3.544 0 0 0-.798-.51l-.082-.406-.046-.226a31.68 31.68 0 0 1-.146-.762c.813-.423 1.466-1.277 1.69-2.352.364-1.74-.532-3.398-2-3.705-1.47-.307-2.955.854-3.319 2.593-.33 1.584.383 3.1 1.622 3.591.055.349.13.721.193 1.033l.049.24.008.04c-1.1.698-1.317 2.518-.467 4.168.885 1.719 2.593 2.602 3.814 1.973.082-.043.16-.091.235-.145.205.125.444.259.713.39a8.315 8.315 0 0 0 2.464.779 1.933 1.933 0 0 0 .02.072c-.141.149-.286.323-.428.528-.459.662-.867 1.602-1.06 2.925-.721 0-1.472.26-2.15.73-.787-.006-1.665-.275-2.484-.656a10.331 10.331 0 0 1-1.553-.895c.301-1.127-.02-2.539-.956-3.701-.829-1.03-1.952-1.63-3.007-1.717-.11-1.255-.356-2.124-.613-2.716a4.094 4.094 0 0 0-.358-.665c.73-1.003.541-2.591-.51-3.762-.917-1.02-2.22-1.422-3.252-1.098-1.397-2.163-3.835-3.377-4.919-3.738Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgLymphNodes);
export default ForwardRef;
