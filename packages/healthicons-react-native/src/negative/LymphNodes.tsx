import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLymphNodes = (passedProps: SvgProps) => {
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
      <G clipPath="url(#lymph_nodes_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM10.051 6.684a1 1 0 0 1 1.265-.633c1.084.361 3.522 1.575 4.919 3.738 1.031-.324 2.335.077 3.252 1.098 1.052 1.17 1.24 2.76.51 3.762.112.166.236.383.358.665.257.592.503 1.462.613 2.716 1.055.087 2.178.687 3.007 1.717.935 1.162 1.257 2.574.956 3.7.381.27.927.605 1.553.896.82.381 1.697.65 2.485.657.677-.472 1.428-.73 2.149-.73.193-1.323.601-2.264 1.06-2.926.142-.205.287-.38.427-.528l-.009-.033a1.933 1.933 0 0 1-.01-.04 8.315 8.315 0 0 1-2.464-.777 9.158 9.158 0 0 1-.713-.391 1.787 1.787 0 0 1-.235.145c-1.221.629-2.929-.254-3.814-1.973-.85-1.65-.633-3.47.467-4.169l-.057-.28a24.805 24.805 0 0 1-.193-1.032c-1.24-.49-1.953-2.007-1.622-3.591.364-1.74 1.85-2.9 3.318-2.593 1.47.307 2.366 1.966 2.002 3.705-.225 1.075-.878 1.93-1.691 2.352.038.22.089.479.146.762l.046.225v.001l.082.407c.274.125.544.296.798.509l.013.01a7.123 7.123 0 0 0 .43-.213c.318-.165.75-.41 1.21-.726.698-.481 1.383-1.073 1.85-1.74.141-.199.262-.405.358-.617-.34-1.419.9-2.974 2.806-3.5 1.937-.533 3.827.2 4.222 1.635.396 1.436-.853 3.033-2.789 3.566-1.026.283-2.04.21-2.824-.134-.685 1.058-1.672 1.875-2.49 2.438a13.883 13.883 0 0 1-1.556.923c.323.707.453 1.435.407 2.084.187.121.428.263.71.402a6.285 6.285 0 0 0 1.927.601c.517-.864 1.484-1.588 2.7-1.91 1.264-.334 2.51-.157 3.394.387.243-.19.511-.412.78-.657-.4-.61-.804-1.52-.804-2.592a1 1 0 1 1 2 0c0 .36.087.695.204.98.16-.26.271-.503.326-.723a1 1 0 1 1 1.94.486c-.267 1.067-1.05 2.059-1.78 2.806-.489.5-1.01.947-1.465 1.3.363 1.587-.986 3.296-3.053 3.843-1.208.319-2.398.172-3.273-.315a2.694 2.694 0 0 0-.077.106c-.298.43-.662 1.21-.782 2.562 1.124 1.112 1.27 3.194.253 5.021-.804 1.444-2.125 2.353-3.401 2.49-.014.061-.03.13-.045.207a8.7 8.7 0 0 0-.161 1.174c-.028.448-.01.866.073 1.196.039.153.085.266.133.35.902-.26 2.026-.148 3.077.389.803.41 1.43 1 1.823 1.648.067.004.152.008.253.01.292.004.71-.008 1.2-.075.985-.134 2.203-.483 3.261-1.314a1 1 0 1 1 1.236 1.572 8.017 8.017 0 0 1-1.832 1.076c.475.334.971.617 1.406.762a1 1 0 0 1-.632 1.898c-.738-.246-1.458-.687-2.031-1.1a12.37 12.37 0 0 1-1.122-.914l-.017.002c-.506.069-.953.09-1.304.093a2.143 2.143 0 0 1-.19.54c-.705 1.381-2.766 1.74-4.604.8-1.807-.922-2.725-2.754-2.086-4.127a3.195 3.195 0 0 1-.511-1.125c-.152-.608-.164-1.253-.13-1.805a10.692 10.692 0 0 1 .263-1.748c-.642-.464-1.047-1.195-1.191-2.041a6.23 6.23 0 0 0-2.021.518 4.63 4.63 0 0 0-1.095.67c.175 1.333-.93 2.742-2.632 3.262a4.43 4.43 0 0 1-1.213.195c-.622 1.341-1.688 2.372-2.557 3.055a7.16 7.16 0 0 1-.056.044l-.03.023c.33.516.474 1.097.372 1.678-.267 1.516-2.112 2.459-4.12 2.105-2.008-.353-3.42-1.87-3.152-3.385.267-1.516 2.111-2.458 4.12-2.105.434.077.84.208 1.208.382.135-.096.277-.2.422-.315.676-.53 1.368-1.216 1.817-2.01a2.452 2.452 0 0 1-.587-.536c-.995.073-2.144.016-3.206-.084a38.636 38.636 0 0 1-2.068-.254c-.135.249-.318.464-.549.632-1.124.819-2.957.216-4.096-1.347-.685-.94-.962-2.016-.828-2.9l-.012-.03a7.347 7.347 0 0 0-.247-.55c-.227-.453-.545-.972-.938-1.365a1 1 0 1 1 1.414-1.414c.526.526.92 1.145 1.194 1.657.066-.018.132-.033.2-.044.034-.198.077-.404.132-.612.17-.64.48-1.42 1.06-2.001a1 1 0 0 1 1.414 1.414c-.22.22-.41.606-.54 1.099-.05.188-.087.375-.113.547.488.29.95.708 1.334 1.235.392.538.65 1.12.775 1.686.628.096 1.337.188 2.056.255.969.092 1.902.133 2.666.094.3-1.003 1.252-1.917 2.55-2.313 1.128-.345 2.257-.22 3.065.255a6.863 6.863 0 0 1 1.42-.847 8.26 8.26 0 0 1 2.96-.707 5.53 5.53 0 0 1 .5-1.225 9.91 9.91 0 0 1-1.74-.63 12.287 12.287 0 0 1-1.913-1.11c-1.352.763-3.328.194-4.605-1.393a5.142 5.142 0 0 1-.444-.645 3.82 3.82 0 0 1-.878.18 8.95 8.95 0 0 1-1.201.024 22.64 22.64 0 0 1-2.24-.222 1.003 1.003 0 0 1-.204-.051c-.727.64-1.854.968-3.055.795-1.391-.2-2.497-1.017-2.915-2.027A11.882 11.882 0 0 0 6 21.5a1 1 0 1 1 0-2c.89 0 1.686.091 2.315.199.119-.203.27-.39.447-.556a3.287 3.287 0 0 1-.13-.21C8.277 18.314 8 17.384 8 16a1 1 0 1 1 2 0c0 1.117.223 1.687.368 1.941a.862.862 0 0 0 .15.204c.064.038.121.082.173.132.38-.051.783-.05 1.194.009 1.72.248 3.005 1.439 3.09 2.77.517.068 1.128.135 1.701.157.351.014.668.01.927-.016.277-.027.412-.072.45-.091l.014-.007c-.075-.99.236-1.909.939-2.493a.986.986 0 0 1-.004-.046c-.078-1.291-.308-2.048-.482-2.45a1.968 1.968 0 0 0-.22-.395.992.992 0 0 1-.143-.177c-.863-.004-1.797-.423-2.502-1.208-.842-.937-1.13-2.142-.838-3.1a1 1 0 0 1-.175-.216 5.51 5.51 0 0 0-.525-.727C13.033 11.15 10.707 12 7 12a1 1 0 1 1 0-2c3.015 0 4.774-.609 5.572-1.076-.738-.501-1.454-.83-1.888-.975a1 1 0 0 1-.633-1.265Z"
          fill="#333"
        />
      </G>
      <Defs>
        <ClipPath id="lymph_nodes_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgLymphNodes;
