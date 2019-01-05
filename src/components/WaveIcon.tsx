import * as React from 'react';
import classNameProps from '../class-name-props';

// TODO: アイコンガタガタ。頑張って本家に似せる。
// FIXME: svgファイルをReactコンポーネントとしてimportしてCSSで色変えするつもりが2時間ほどハマったので諦め
const waveIcon: React.StatelessComponent<classNameProps> = props => {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 199 188.16"
    >
      <title>wave-icon</title>
      <g id="wave-icon">
        <path
          id="balloon"
          d="M179.12,36C166.65,19.59,142.63,0,99,0,55.77,0,31.86,19.23,19.42,35.36,5.08,53.94,0,75.87,0,89c0,28.25,11.39,41.72,20.54,52.55,3.91,4.63,7.33,8.68,9.56,13.38.15,4.69-1.2,7.8-3,12-1.4,3.23-5.15,6.45-6.08,11.1,0,0-1,6,1,8s7,2,7,2a15,15,0,0,0,3.39.13c7.78,0,19.15-4.9,28.4-9.7V160.19a165.89,165.89,0,0,1-17.18,8.61A35.85,35.85,0,0,0,46,152.34l-.1-1.27-.5-1.17c-3.14-7.47-7.95-13.17-12.61-18.67C24.14,121,16,111.39,16,89c0-8.55,3.39-27.4,16.08-43.86C47,25.8,69.51,16,99,16c29.75,0,52.42,10,67.38,29.7C178.63,61.86,183,81.24,183,94c0,11.73-5.05,29.25-19.21,43.23C148.09,152.73,125,160.42,95.1,160l-.2,16c34.3.44,61.27-8.77,80.13-27.38C192.7,131.18,199,109,199,94,199,78.64,193.78,55.35,179.12,36Z"
        />
        <path
          id="mouth"
          d="M140.18,89.75c-6,9.08-12.37,16.4-15.36,17.25-2.52-.09-4.82-1.92-8.33-4.86C112.17,98.51,106.79,94,99,94s-12.88,4.45-17,8c-3.66,3.18-5.88,5-8.93,5-2.75-.38-9.28-7.44-15.54-17.25H39a154.11,154.11,0,0,0,9,14.38C57.11,117,65.06,123,73,123c9.26,0,15.19-5.15,19.51-8.91C95.43,111.56,97.3,110,99,110s4,1.66,7.21,4.4C110.53,118,116.46,123,125,123c7.47,0,15.29-6,24.6-18.8,4.23-5.82,7.67-11.57,9.34-14.45Z"
        />
        <circle id="right-eye" cx="69" cy="67" r="8" />
        <circle id="left-eye" cx="124" cy="67" r="8" />
      </g>
    </svg>
  );
};

export default waveIcon;