import React from "react";
import { useState } from "react";
import AdversPage from "../home/advers/AdversPage";
import "./sale.scss";
import Img from "../home/kom.png";
import Img2 from "../home/prof.png";

const Sale = () => {
  const [state, setState] = useState(true);
  console.log(state);
  return (
    <div className="hompage">
      <div className="homepage-con">
        <div className="product-con">
          <div className="profil-icon">
            <div className="profil-img">
              <img src={Img2} alt="" />
              <p>Texnomart</p>
            </div>
            <div className="follow">
              <button
                onClick={() => setState(!state)}
                className={state ? "btn-nofollow" : "btn-follow"}
              >
                {state ? "Follow me" : "Unfollow"}
              </button>
            </div>
          </div>
          <div className="hompage-img">
            <img className="post-img" src={Img} alt="" />
            <div className="text">
              <p className="product-title">Neo QLED 4K Smart TV QN90A</p>
              <p className="product-company">Samsung</p>
              <del className="delete-price">1200$</del>
              <div className="price">
                <h3 className="price-text">1200$</h3>
                <span>
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      fill="#E1DFDF"
                      stroke="none"
                    >
                      <path
                        d="M2370 4184 c-589 -70 -1135 -342 -1715 -855 -203 -179 -537 -540
-623 -674 -36 -56 -36 -134 0 -190 46 -72 240 -297 378 -438 493 -508 1042
-864 1560 -1012 225 -64 339 -79 590 -79 251 0 365 15 590 79 607 174 1274
647 1806 1283 146 174 158 195 158 262 0 67 -12 88 -158 262 -529 631 -1194
1105 -1796 1280 -202 59 -336 78 -555 82 -110 3 -216 2 -235 0z m435 -349
c471 -71 984 -348 1477 -799 151 -137 448 -454 448 -477 0 -3 -34 -46 -77 -94
-582 -666 -1244 -1089 -1848 -1180 -128 -19 -362 -19 -490 0 -435 66 -899 303
-1360 694 -167 141 -565 551 -565 581 0 4 34 47 77 95 578 661 1240 1086 1839
1179 122 19 375 19 499 1z"
                      />
                      <path
                        d="M2420 3564 c-433 -79 -741 -361 -846 -774 -27 -106 -27 -354 0 -460
97 -380 376 -659 756 -756 106 -27 354 -27 460 0 380 97 659 376 756 756 15
58 19 110 19 230 0 120 -4 172 -19 230 -95 375 -366 650 -741 752 -68 19 -323
33 -385 22z m300 -350 c187 -42 358 -179 445 -359 52 -107 68 -189 63 -325 -5
-129 -30 -216 -90 -318 -42 -72 -158 -188 -230 -230 -211 -124 -485 -124 -696
0 -72 42 -188 158 -230 230 -124 211 -124 485 0 696 42 72 158 188 230 230
151 89 328 116 508 76z"
                      />
                    </g>
                  </svg>
                  &nbsp; &nbsp; 315k
                </span>
              </div>
            </div>
          </div>
          <div className="btn-control">
            <div className="save-btn">
              <div className="save btn">
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.66634 11.3327H8.44746L5.47111 8.35631C5.21076 8.09596 4.78865 8.09596 4.5283 8.35631L1.55196 11.3327L0.333008 11.3327V3.66602C0.333008 2.00916 1.67615 0.666016 3.33301 0.666016H6.66634C8.3232 0.666016 9.66634 2.00916 9.66634 3.66601V11.3327ZM8.33301 2.99935C8.33301 2.44706 7.88529 1.99935 7.33301 1.99935H2.66634C2.11406 1.99935 1.66634 2.44706 1.66634 2.99935V9.33266L3.5855 7.4135C4.36654 6.63246 5.63287 6.63246 6.41392 7.4135L8.33301 9.33259V2.99935Z"
                    fill="#14191F"
                  />
                </svg>
              </div>
              <div className="chat btn">
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0.333984H2C1.46957 0.333984 0.960859 0.544698 0.585787 0.919771C0.210714 1.29484 0 1.80355 0 2.33398V9.66732C0 10.1978 0.210714 10.7065 0.585787 11.0815C0.960859 11.4566 1.46957 11.6673 2 11.6673H3.72667L5.52667 13.474C5.58896 13.5358 5.66284 13.5847 5.74406 13.6178C5.82529 13.651 5.91226 13.6678 6 13.6673C6.1589 13.6673 6.31257 13.6106 6.43333 13.5073L8.58 11.6673H10C10.5304 11.6673 11.0391 11.4566 11.4142 11.0815C11.7893 10.7065 12 10.1978 12 9.66732V2.33398C12 1.80355 11.7893 1.29484 11.4142 0.919771C11.0391 0.544698 10.5304 0.333984 10 0.333984ZM10.6667 9.66732C10.6667 9.84413 10.5964 10.0137 10.4714 10.1387C10.3464 10.2637 10.1768 10.334 10 10.334H8.33333C8.17444 10.334 8.02076 10.3907 7.9 10.494L6.03333 12.094L4.47333 10.5273C4.41104 10.4655 4.33716 10.4166 4.25594 10.3835C4.17471 10.3503 4.08774 10.3335 4 10.334H2C1.82319 10.334 1.65362 10.2637 1.5286 10.1387C1.40357 10.0137 1.33333 9.84413 1.33333 9.66732V2.33398C1.33333 2.15717 1.40357 1.9876 1.5286 1.86258C1.65362 1.73756 1.82319 1.66732 2 1.66732H10C10.1768 1.66732 10.3464 1.73756 10.4714 1.86258C10.5964 1.9876 10.6667 2.15717 10.6667 2.33398V9.66732Z"
                    fill="#14191F"
                  />
                </svg>
              </div>
            </div>
            <div className="share btn">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.74332 0.994393C5.79398 0.464393 6.34732 0.0277261 6.90532 0.346393C8.06532 1.02573 9.15998 1.79973 10.2186 2.62706C11.5253 3.65906 12.574 4.63173 13.3167 5.40839C13.6387 5.74639 13.6087 6.28039 13.3007 6.60306C12.5652 7.36377 11.7873 8.08225 10.9707 8.75506C9.67865 9.81306 8.34065 10.8384 6.88398 11.6604C6.38998 11.9391 5.85465 11.6204 5.75932 11.1264L5.74798 11.0511L5.59665 8.66839C4.38598 8.69373 3.21398 9.10973 2.27665 9.88373L2.09998 10.0317L2.01465 10.1011L1.84998 10.2291C1.82332 10.2491 1.79665 10.2691 1.76998 10.2877L1.61665 10.3944C1.56903 10.4257 1.52057 10.4557 1.47132 10.4844L1.33398 10.5584C0.689984 10.8764 0.333984 10.5951 0.333984 9.33373C0.333984 6.39773 2.49732 3.78506 5.42198 3.38906L5.59465 3.36839L5.74332 0.995059V0.994393ZM7.01598 1.97706L6.88798 4.29173C6.88366 4.37085 6.85129 4.44585 6.79668 4.50327C6.74207 4.56069 6.66879 4.59678 6.58998 4.60506L5.68265 4.69973C3.63932 4.94373 2.01798 6.54106 1.71732 8.62906C2.71668 7.89221 3.90275 7.45058 5.14065 7.35439L5.40532 7.33906L6.54132 7.31506C6.62773 7.3132 6.71148 7.34497 6.77491 7.40368C6.83835 7.46238 6.8765 7.54343 6.88132 7.62973L7.01265 10.0271C8.08132 9.34639 9.09998 8.56306 10.122 7.72706C10.782 7.17871 11.4175 6.60148 12.0267 5.99706L11.8547 5.82639L11.484 5.47106C10.8136 4.84299 10.1165 4.244 9.39465 3.67573C8.62911 3.07216 7.83532 2.5053 7.01598 1.97706Z"
                  fill="#14191F"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="advesr">
        <AdversPage />
      </div>
    </div>
  );
};

export default Sale;
