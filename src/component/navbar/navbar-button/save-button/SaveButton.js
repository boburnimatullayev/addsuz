import React from "react";
import "./save-button.scss";

const SaveButton = () => {
  return (
    <div className="save">
      <div className="save-con">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_4201_3019)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.8337 16.6673H14.3101L10.5896 12.9469C10.2642 12.6214 9.73655 12.6214 9.41111 12.9469L5.69068 16.6673L4.16699 16.6673V6.33398C4.16699 4.67713 5.51014 3.33398 7.16699 3.33398H12.8337C14.4905 3.33398 15.8337 4.67713 15.8337 6.33398V16.6673Z"
              fill="#1754F2"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_4201_3019"
              x="0.166992"
              y="0.333984"
              width="19.667"
              height="21.334"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.090196 0 0 0 0 0.330667 0 0 0 0 0.94902 0 0 0 0.24 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_4201_3019"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4201_3019"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="massage-con">
           <div className="massage">
            
           </div>
      </div>
    </div>
  );
};

export default SaveButton;
