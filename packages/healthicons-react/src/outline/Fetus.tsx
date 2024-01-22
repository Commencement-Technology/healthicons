import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFetus = (
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
        d="M32.5 23a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 2a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.244 38.504A16 16 0 1 0 30.755 9.497a16 16 0 0 0-13.51 29.007l-.845 1.813A18 18 0 1 1 31.6 7.683a18 18 0 0 1-15.2 32.634l.844-1.813Z"
        fill="#000"
      />
      <path
        d="m13.475 19.883.636.772-.636-.773Zm.748-.615-.636-.773.636.773Zm1.336 3.668.257.966-.257-.966Zm1.445.435-.86.512.86-.512Zm.211 2.901a1 1 0 1 0 1.826-.818l-1.826.818Zm.066-2.296-.94.343.94-.343Zm12.646 3.133.92-.393-.92.393Zm-2.349-1.149.254.968h.001l-.255-.968Zm2.242 3.627-.904-.427.904.427ZM28.725 31.1l.72.694-.72-.694Zm-2.93 2.34-.555-.831.556.831Zm-2.926 1.766.479.878-.479-.878Zm-1.035.536-.434-.9.434.9Zm-.394.177-.373-.928.373.928Zm-.29.1-.266-.964.267.963Zm-.4.07-.077-.997.076.997Zm-.559-.034-.199.98.2-.98Zm-1.213-.773.804-.594-.804.594Zm-.132-.202.871-.492-.003-.006-.867.498Zm-.038-.07-.881.473.88-.472Zm-.05-.095-.891.454.891-.454Zm-.113-.227.896-.443-.896.443Zm-.346-.706-.899.438.899-.438Zm-.169-.347.899-.438-.899.438Zm-.84-1.718-.897.44.897-.44Zm-.698-1.409.893-.449a1 1 0 0 0-1.31-.46l.416.91Zm-.587.27.419.908-.42-.908Zm-1.262.568.37.929-.37-.929Zm-1.485-3.714.371.928-.37-.928Zm.872-.394.42.907-.42-.907Zm.946-.435-.414-.91.414.91Zm1.131-.492-.374-.928.374.928Zm.517-.19.297.956-.297-.955Zm.363-.09.174.985-.174-.984Zm.352-.034-.018-1 .018 1Zm.815.15-.377.927.377-.927Zm.626.403-.685.729.685-.73Zm.194.208.774-.633-.774.633Zm.163.224.835-.55-.835.55Zm.19.314.87-.492-.87.492Zm.403.757-.888.458.888-.458Zm1.05 2.1-.897.44.897-.44Zm.609 1.243-.9.439a1 1 0 0 0 1.394.43l-.494-.869Zm2.085-1.282-.556-.831.556.831Zm.13-.088.56.829a1 1 0 0 0 .09-1.589l-.65.76Zm-.492-.63.894-.448-.894.449Zm-2.072-4.644-.926.376.926-.376Zm1.103-2.605-.376-.927.376.927Zm2.604 1.102.927-.375-.927.375Zm1.015 2.298-.913.408.913-.408Zm.338.754-.913.41a1 1 0 0 0 1.138.564l-.226-.974Zm.93-.225.244.97-.244-.97Zm.328-.084.25.968h.002l-.252-.968Zm.09-.024.252.968h.002l-.253-.968Zm-13.437-5.313.747-.615-1.27-1.544-.748.614 1.27 1.545Zm1.19 1.315c-.755.201-1.25-.095-1.44-.374a.57.57 0 0 1-.106-.412c.018-.122.094-.314.356-.53l-1.27-1.544c-.59.485-.961 1.1-1.063 1.776a2.57 2.57 0 0 0 .43 1.837c.716 1.047 2.114 1.577 3.608 1.18l-.515-1.933Zm2.562.89c-.165-.278-.459-.755-1.044-.953-.522-.177-1.073-.056-1.518.063l.515 1.932c.206-.055.327-.076.397-.083.066-.006.036.007-.035-.017a.423.423 0 0 1-.143-.085 2.213 2.213 0 0 1 .11.166l1.718-1.023Zm-3.005-2.82c.732-.602 1.102-1.36 1.129-2.198.025-.782-.25-1.537-.59-2.195-.345-.668-.807-1.334-1.262-1.95-.477-.648-.913-1.201-1.318-1.774l-1.633 1.154c.411.582.922 1.237 1.341 1.806.442.6.826 1.16 1.094 1.68.273.53.378.927.369 1.214-.008.23-.087.46-.4.718l1.27 1.545Zm4.183 5.414c-.278-.62-.729-1.569-.82-1.82l-1.88.685c.124.339.653 1.46.874 1.953l1.826-.818Zm-2.896-1.571c.069.115.13.256.196.436l1.88-.686a4.538 4.538 0 0 0-.358-.773l-1.718 1.023Zm14.702 2.833a3 3 0 0 0-3.523-1.723l.51 1.934a1 1 0 0 1 1.174.575l1.839-.786Zm-.123 3.299c.343-.727.694-1.961.123-3.299l-1.84.786c.26.606.123 1.206-.091 1.658l1.808.855Zm-1.28 1.779c.434-.45.937-1.052 1.28-1.78l-1.808-.854c-.212.448-.549.87-.912 1.247l1.44 1.387Zm-3.093 2.478c1.044-.697 2.212-1.562 3.094-2.478l-1.44-1.387c-.733.76-1.76 1.53-2.765 2.202l1.111 1.663Zm-3.003 1.812a40.325 40.325 0 0 0 3.003-1.812l-1.11-1.663a38.358 38.358 0 0 1-2.85 1.719l.957 1.756Zm-1.081.56c.291-.14.665-.333 1.08-.56l-.956-1.756c-.397.216-.739.392-.99.513l.866 1.803Zm-.454.203c.155-.063.316-.137.454-.203L21.4 34.84c-.123.06-.238.112-.333.15l.746 1.856Zm-.396.135c.183-.05.332-.11.396-.135l-.746-1.856a1.727 1.727 0 0 1-.183.064l.533 1.927Zm-.591.104c.292-.022.517-.083.591-.104l-.533-1.927c-.029.008-.11.03-.211.037l.153 1.994Zm-.834-.051c.383.078.694.062.834.051l-.153-1.994c-.048.004-.153.01-.282-.017l-.399 1.96Zm-1.818-1.159a3.005 3.005 0 0 0 1.818 1.159l.398-1.96c-.119-.024-.399-.105-.608-.388l-1.608 1.189Zm-.198-.303c.013.022.088.154.198.303l1.608-1.189a1.1 1.1 0 0 1-.062-.093l-.002-.005h-.001l-1.741.984Zm-.05-.09.053.095 1.735-.996a1.772 1.772 0 0 1-.025-.044l-1.762.945Zm-.059-.114.06.114 1.762-.945a4.265 4.265 0 0 1-.04-.077l-1.782.908Zm-.119-.238.119.238 1.782-.908a22.022 22.022 0 0 1-.108-.215l-1.793.885Zm-.348-.711.348.711 1.793-.886-.343-.702-1.798.877Zm-.169-.347.169.347 1.798-.877-.169-.346-1.798.876Zm-.838-1.715c.296.601.589 1.203.838 1.715l1.798-.876c-.25-.512-.544-1.116-.841-1.721l-1.795.882Zm-.695-1.4c.215.427.454.91.695 1.4l1.795-.882c-.242-.493-.485-.982-.703-1.417l-1.787.899Zm.726.728.583-.268-.831-1.82-.59.272.838 1.816Zm-1.31.589c.272-.11.81-.358 1.31-.589l-.838-1.816c-.532.246-1.005.464-1.214.547l.742 1.858Zm-3.9-1.673a3 3 0 0 0 3.9 1.673l-.742-1.858a1 1 0 0 1-1.3-.557l-1.857.742Zm1.673-3.899a3 3 0 0 0-1.672 3.9l1.857-.743a1 1 0 0 1 .557-1.3l-.742-1.857Zm.823-.373c-.429.198-.708.327-.823.373l.742 1.857c.179-.071.527-.232.92-.415l-.839-1.815Zm.952-.437c-.349.159-.674.309-.952.437l.84 1.816c.278-.129.597-.277.94-.432l-.828-1.821Zm1.171-.51c-.354.143-.778.332-1.17.51l.826 1.82c.39-.176.78-.35 1.092-.475l-.748-1.855Zm.594-.216a7.873 7.873 0 0 0-.594.216l.748 1.855c.153-.062.307-.12.44-.162l-.595-1.91Zm.485-.12a3.95 3.95 0 0 0-.485.12l.594 1.91c.063-.02.149-.045.24-.06l-.349-1.97Zm.51-.05a3.24 3.24 0 0 0-.51.05l.349 1.97c.044-.009.114-.019.196-.02l-.036-2Zm1.209.224a3.063 3.063 0 0 0-1.21-.224l.036 2c.063-.001.23 0 .42.077l.754-1.853Zm.933.6a3.038 3.038 0 0 0-.933-.6l-.754 1.853c.176.071.288.176.318.205l1.369-1.459Zm.284.304a3.174 3.174 0 0 0-.284-.305l-1.369 1.459c.048.045.084.087.105.112l1.548-1.266Zm.224.307a3.683 3.683 0 0 0-.224-.307L18.3 27.391c.043.053.078.104.101.14l1.671-1.099Zm.225.372a6.569 6.569 0 0 0-.225-.372l-1.67 1.099c.05.076.102.166.154.257l1.74-.984Zm.422.79c-.15-.292-.298-.57-.422-.79l-1.741.984c.105.186.238.437.386.723l1.777-.916Zm1.059 2.117c-.37-.752-.753-1.523-1.059-2.116l-1.777.916c.296.576.672 1.332 1.04 2.082l1.796-.882Zm.61 1.247c-.192-.393-.4-.82-.61-1.247l-1.795.882.607 1.242 1.798-.877Zm.63-1.675c-.69.46-1.404.892-2.024 1.244l.99 1.739c.65-.37 1.407-.827 2.145-1.32l-1.11-1.663Zm.126-.085-.125.085 1.11 1.663.136-.091-1.12-1.657Zm-.826.647c.207.413.477.72.737.942l1.3-1.52a1.007 1.007 0 0 1-.249-.319l-1.788.897Zm-2.104-4.717c.219.54 1.968 4.446 2.104 4.717l1.788-.896-.028-.06-.072-.156-.228-.502a432.26 432.26 0 0 1-.655-1.46 153.984 153.984 0 0 1-1.056-2.395l-1.853.752Zm1.653-3.908a3 3 0 0 0-1.653 3.908l1.853-.752a1 1 0 0 1 .551-1.302l-.751-1.854Zm3.907 1.654a3 3 0 0 0-3.907-1.654l.751 1.854a1 1 0 0 1 1.303.55l1.853-.75Zm1.001 2.265a168.541 168.541 0 0 1-1-2.265l-1.854.75c.09.223.558 1.279 1.028 2.331l1.826-.816Zm.337.753-.337-.753-1.826.816.338.755 1.825-.818Zm-.227-.786c-.253.064-.58.144-.91.22l.45 1.95c.347-.081.688-.165.95-.23l-.49-1.94Zm.323-.083-.323.083.49 1.94.334-.086-.5-1.937Zm.09-.023-.091.024.503 1.935.09-.023L27.297 25Zm.027-.007-.03.008.507 1.934.03-.007-.507-1.935Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFetus);
export default ForwardRef;
