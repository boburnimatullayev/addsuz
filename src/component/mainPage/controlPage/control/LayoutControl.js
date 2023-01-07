// import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./layoutControl.scss";
import Img1 from "./profil.jpg"

const LayoutControl = () => {
  const activeLink = "setState";
  const normalLink = "list-item-link";
  return (
    <div  className="con-fixed">
      <div className="control-con">
        <ul className="list">
          <li className="list-item">
            <NavLink
            className="profil-link"
              to="/"
            >
                <div className="profil-con">
                <div className="profil-img">
                  <img src={Img1} alt="" />
                  <div className="online">
                     <div className="online-green">
                  
                     </div>
                  </div>
                </div>
                <div className="profil-text">
                  <p className="profil-name">Bobur Nimatullayev</p>
                  <p className="profil-username">@nbz6975</p>
                </div>
              </div>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/subscribed"
            >
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5833 7.41536L16.75 8.59036L11.3083 14.082L8.41667 11.1654L9.58333 9.99036L11.3083 11.7237L15.5833 7.41536ZM7.16667 0.332031C8.05072 0.332031 8.89857 0.683221 9.52369 1.30834C10.1488 1.93346 10.5 2.78131 10.5 3.66536C10.5 4.54942 10.1488 5.39727 9.52369 6.02239C8.89857 6.64751 8.05072 6.9987 7.16667 6.9987C6.28261 6.9987 5.43476 6.64751 4.80964 6.02239C4.18452 5.39727 3.83333 4.54942 3.83333 3.66536C3.83333 2.78131 4.18452 1.93346 4.80964 1.30834C5.43476 0.683221 6.28261 0.332031 7.16667 0.332031ZM7.16667 1.9987C6.72464 1.9987 6.30072 2.17429 5.98816 2.48685C5.67559 2.79941 5.5 3.22334 5.5 3.66536C5.5 4.10739 5.67559 4.53131 5.98816 4.84388C6.30072 5.15644 6.72464 5.33203 7.16667 5.33203C7.60869 5.33203 8.03262 5.15644 8.34518 4.84388C8.65774 4.53131 8.83333 4.10739 8.83333 3.66536C8.83333 3.22334 8.65774 2.79941 8.34518 2.48685C8.03262 2.17429 7.60869 1.9987 7.16667 1.9987ZM7.16667 7.83203C7.73333 7.83203 8.41667 7.90703 9.175 8.0487L7.78333 9.44036L7.16667 9.41536C4.69167 9.41536 2.08333 10.632 2.08333 11.1654V12.082H7.25L8.83333 13.6654H0.5V11.1654C0.5 8.9487 4.94167 7.83203 7.16667 7.83203Z"
                  fill="#14191F"
                />
              </svg>
              Subscribed
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/chat"
            >
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 0.666016H3C2.33696 0.666016 1.70107 0.929408 1.23223 1.39825C0.763392 1.86709 0.5 2.50297 0.5 3.16602V12.3327C0.5 12.9957 0.763392 13.6316 1.23223 14.1005C1.70107 14.5693 2.33696 14.8327 3 14.8327H5.15833L7.40833 17.091C7.4862 17.1683 7.57855 17.2294 7.68008 17.2708C7.78161 17.3123 7.89033 17.3333 8 17.3327C8.19862 17.3327 8.39071 17.2618 8.54167 17.1327L11.225 14.8327H13C13.663 14.8327 14.2989 14.5693 14.7678 14.1005C15.2366 13.6316 15.5 12.9957 15.5 12.3327V3.16602C15.5 2.50297 15.2366 1.86709 14.7678 1.39825C14.2989 0.929408 13.663 0.666016 13 0.666016ZM13.8333 12.3327C13.8333 12.5537 13.7455 12.7657 13.5893 12.9219C13.433 13.0782 13.221 13.166 13 13.166H10.9167C10.718 13.166 10.526 13.2369 10.375 13.366L8.04167 15.366L6.09167 13.4077C6.0138 13.3305 5.92145 13.2693 5.81992 13.2279C5.71839 13.1864 5.60967 13.1654 5.5 13.166H3C2.77899 13.166 2.56702 13.0782 2.41074 12.9219C2.25446 12.7657 2.16667 12.5537 2.16667 12.3327V3.16602C2.16667 2.945 2.25446 2.73304 2.41074 2.57676C2.56702 2.42048 2.77899 2.33268 3 2.33268H13C13.221 2.33268 13.433 2.42048 13.5893 2.57676C13.7455 2.73304 13.8333 2.945 13.8333 3.16602V12.3327Z"
                  fill="#14191F"
                />
              </svg>
              Chat
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/news"
            >
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                
                <path
                  d="M13.167 7.16667H12.3337C12.1126 7.16667 11.9007 7.25447 11.7444 7.41075C11.5881 7.56703 11.5003 7.77899 11.5003 8C11.5003 8.22101 11.5881 8.43298 11.7444 8.58926C11.9007 8.74554 12.1126 8.83333 12.3337 8.83333H13.167C13.388 8.83333 13.6 8.74554 13.7562 8.58926C13.9125 8.43298 14.0003 8.22101 14.0003 8C14.0003 7.77899 13.9125 7.56703 13.7562 7.41075C13.6 7.25447 13.388 7.16667 13.167 7.16667ZM13.167 10.5H12.3337C12.1126 10.5 11.9007 10.5878 11.7444 10.7441C11.5881 10.9004 11.5003 11.1123 11.5003 11.3333C11.5003 11.5543 11.5881 11.7663 11.7444 11.9226C11.9007 12.0789 12.1126 12.1667 12.3337 12.1667H13.167C13.388 12.1667 13.6 12.0789 13.7562 11.9226C13.9125 11.7663 14.0003 11.5543 14.0003 11.3333C14.0003 11.1123 13.9125 10.9004 13.7562 10.7441C13.6 10.5878 13.388 10.5 13.167 10.5ZM8.16699 5.5H13.167C13.388 5.5 13.6 5.4122 13.7562 5.25592C13.9125 5.09964 14.0003 4.88768 14.0003 4.66667C14.0003 4.44565 13.9125 4.23369 13.7562 4.07741C13.6 3.92113 13.388 3.83333 13.167 3.83333H8.16699C7.94598 3.83333 7.73402 3.92113 7.57774 4.07741C7.42146 4.23369 7.33366 4.44565 7.33366 4.66667C7.33366 4.88768 7.42146 5.09964 7.57774 5.25592C7.73402 5.4122 7.94598 5.5 8.16699 5.5ZM16.5003 0.5H4.83366C4.61265 0.5 4.40068 0.587797 4.2444 0.744078C4.08812 0.900358 4.00033 1.11232 4.00033 1.33333V3.83333H1.50033C1.27931 3.83333 1.06735 3.92113 0.91107 4.07741C0.75479 4.23369 0.666992 4.44565 0.666992 4.66667V13C0.666992 13.663 0.930384 14.2989 1.39923 14.7678C1.86807 15.2366 2.50395 15.5 3.16699 15.5H14.0003C14.8844 15.5 15.7322 15.1488 16.3573 14.5237C16.9825 13.8986 17.3337 13.0507 17.3337 12.1667V1.33333C17.3337 1.11232 17.2459 0.900358 17.0896 0.744078C16.9333 0.587797 16.7213 0.5 16.5003 0.5ZM4.00033 13C4.00033 13.221 3.91253 13.433 3.75625 13.5893C3.59997 13.7455 3.38801 13.8333 3.16699 13.8333C2.94598 13.8333 2.73402 13.7455 2.57774 13.5893C2.42146 13.433 2.33366 13.221 2.33366 13V5.5H4.00033V13ZM15.667 12.1667C15.667 12.6087 15.4914 13.0326 15.1788 13.3452C14.8663 13.6577 14.4424 13.8333 14.0003 13.8333H5.51699C5.61401 13.5661 5.66474 13.2843 5.66699 13V2.16667H15.667V12.1667ZM8.16699 8.83333H9.00033C9.22134 8.83333 9.4333 8.74554 9.58958 8.58926C9.74586 8.43298 9.83366 8.22101 9.83366 8C9.83366 7.77899 9.74586 7.56703 9.58958 7.41075C9.4333 7.25447 9.22134 7.16667 9.00033 7.16667H8.16699C7.94598 7.16667 7.73402 7.25447 7.57774 7.41075C7.42146 7.56703 7.33366 7.77899 7.33366 8C7.33366 8.22101 7.42146 8.43298 7.57774 8.58926C7.73402 8.74554 7.94598 8.83333 8.16699 8.83333ZM8.16699 12.1667H9.00033C9.22134 12.1667 9.4333 12.0789 9.58958 11.9226C9.74586 11.7663 9.83366 11.5543 9.83366 11.3333C9.83366 11.1123 9.74586 10.9004 9.58958 10.7441C9.4333 10.5878 9.22134 10.5 9.00033 10.5H8.16699C7.94598 10.5 7.73402 10.5878 7.57774 10.7441C7.42146 10.9004 7.33366 11.1123 7.33366 11.3333C7.33366 11.5543 7.42146 11.7663 7.57774 11.9226C7.73402 12.0789 7.94598 12.1667 8.16699 12.1667Z"
                  fill="#14191F"
                />
    

              </svg>
              News
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/sale"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.8225 12.1867L10.8358 4.16667H6.72917C6.8175 4.46417 6.86833 4.75083 6.87333 5.02083C7.69417 5.12333 8.33333 5.8175 8.33333 6.66667C8.33333 7.58667 7.58667 8.33333 6.66667 8.33333C5.74667 8.33333 5 7.58667 5 6.66667C5 5.96417 5.43667 5.36583 6.05167 5.12083C6.06 4.84 5.99583 4.51167 5.8625 4.16667H4.16667V10.8375L12.1858 18.8225L18.8225 12.1867ZM6.74833 5.85C6.675 6.02917 6.57583 6.19 6.44667 6.32333C6.25417 6.5225 6.05333 6.65167 5.8475 6.73583C5.885 7.16167 6.23167 7.5 6.66667 7.5C7.12667 7.5 7.5 7.12667 7.5 6.66667C7.5 6.23583 7.1675 5.8925 6.74833 5.85ZM20 12.1875L12.1875 20L3.33333 11.1842V6.25583C2.3975 5.82917 1.33833 5.34667 0 5.34667V4.51333C1.3425 4.51333 2.43333 4.93917 3.33333 5.34167V3.33333H5.41C4.53167 2.05833 2.75917 0.833333 0 0.833333V0C3.41083 0 5.5025 1.7125 6.38417 3.33333H11.1817L20 12.1875ZM14.1692 13.63L14.6033 14.0642L14.0217 14.645L13.5717 14.1967C13.1342 14.5267 12.6817 14.6942 12.2283 14.6942C11.685 14.6942 11.1683 14.4483 10.7833 14.0667L11.3983 13.4508C11.6508 13.6758 11.9242 13.8358 12.2725 13.8358C12.6417 13.8358 13.0192 13.6458 13.395 13.27C13.6958 12.9708 13.8692 12.6567 13.9125 12.335C13.9975 11.7017 13.505 11.2867 13.0142 11.2867C12.6875 11.2867 12.285 11.44 11.785 11.7558C10.7642 12.4 9.78333 12.7917 8.94083 11.9492C8.17583 11.185 8.40333 10.1892 8.8775 9.50083L8.33333 8.9575L8.915 8.375L9.43667 8.8975C9.885 8.5225 10.3508 8.33333 10.8225 8.33333C11.3767 8.33333 11.8942 8.59667 12.29 8.99333L11.67 9.61333C11.0608 8.995 10.3167 9.15917 9.77333 9.70167C9.505 9.97083 9.34 10.2642 9.29667 10.5517C9.195 11.2267 9.79667 11.5667 10.0975 11.5667C10.3792 11.5667 10.7425 11.4217 11.3108 11.08C12.0975 10.6108 12.6383 10.41 13.12 10.41C13.5475 10.41 13.9225 10.5783 14.2683 10.9242C15.1333 11.7892 14.7883 12.8833 14.1692 13.63Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.6"
                />
              </svg>
              Sale
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/setting"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1663 12.5006C16.0554 12.752 16.0223 13.0308 16.0713 13.3011C16.1204 13.5715 16.2492 13.8209 16.4413 14.0173L16.4913 14.0673C16.6463 14.2221 16.7692 14.4059 16.8531 14.6082C16.937 14.8106 16.9802 15.0275 16.9802 15.2465C16.9802 15.4655 16.937 15.6824 16.8531 15.8847C16.7692 16.087 16.6463 16.2709 16.4913 16.4256C16.3366 16.5806 16.1527 16.7035 15.9504 16.7874C15.7481 16.8713 15.5312 16.9145 15.3122 16.9145C15.0931 16.9145 14.8763 16.8713 14.6739 16.7874C14.4716 16.7035 14.2878 16.5806 14.133 16.4256L14.083 16.3756C13.8866 16.1835 13.6372 16.0547 13.3668 16.0056C13.0965 15.9566 12.8177 15.9897 12.5663 16.1006C12.3199 16.2063 12.1097 16.3817 11.9616 16.6053C11.8135 16.8288 11.7341 17.0908 11.733 17.359V17.5006C11.733 17.9427 11.5574 18.3666 11.2449 18.6792C10.9323 18.9917 10.5084 19.1673 10.0663 19.1673C9.62431 19.1673 9.20039 18.9917 8.88783 18.6792C8.57527 18.3666 8.39967 17.9427 8.39967 17.5006V17.4256C8.39322 17.1498 8.30394 16.8823 8.14343 16.6579C7.98293 16.4335 7.75862 16.2626 7.49967 16.1673C7.24833 16.0564 6.96951 16.0233 6.69918 16.0723C6.42885 16.1213 6.17941 16.2502 5.98301 16.4423L5.93301 16.4923C5.77822 16.6473 5.5944 16.7702 5.39207 16.8541C5.18974 16.938 4.97287 16.9811 4.75384 16.9811C4.53481 16.9811 4.31794 16.938 4.11561 16.8541C3.91328 16.7702 3.72946 16.6473 3.57467 16.4923C3.41971 16.3375 3.29678 16.1537 3.21291 15.9514C3.12903 15.7491 3.08586 15.5322 3.08586 15.3131C3.08586 15.0941 3.12903 14.8772 3.21291 14.6749C3.29678 14.4726 3.41971 14.2888 3.57467 14.134L3.62467 14.084C3.81679 13.8876 3.94566 13.6381 3.99468 13.3678C4.04369 13.0975 4.0106 12.8187 3.89967 12.5673C3.79404 12.3208 3.61864 12.1106 3.39506 11.9626C3.17149 11.8145 2.9095 11.7351 2.64134 11.734H2.49967C2.05765 11.734 1.63372 11.5584 1.32116 11.2458C1.0086 10.9333 0.833008 10.5093 0.833008 10.0673C0.833008 9.62529 1.0086 9.20137 1.32116 8.88881C1.63372 8.57625 2.05765 8.40065 2.49967 8.40065H2.57467C2.8505 8.3942 3.11801 8.30492 3.34242 8.14441C3.56684 7.9839 3.73777 7.7596 3.83301 7.50065C3.94394 7.2493 3.97703 6.97049 3.92801 6.70016C3.879 6.42983 3.75012 6.18038 3.55801 5.98398L3.50801 5.93398C3.35305 5.7792 3.23012 5.59538 3.14624 5.39305C3.06237 5.19072 3.0192 4.97384 3.0192 4.75482C3.0192 4.53579 3.06237 4.31891 3.14624 4.11658C3.23012 3.91425 3.35305 3.73044 3.50801 3.57565C3.6628 3.42069 3.84661 3.29776 4.04894 3.21388C4.25127 3.13001 4.46815 3.08684 4.68717 3.08684C4.9062 3.08684 5.12308 3.13001 5.32541 3.21388C5.52774 3.29776 5.71155 3.42069 5.86634 3.57565L5.91634 3.62565C6.11274 3.81776 6.36219 3.94664 6.63252 3.99565C6.90285 4.04467 7.18166 4.01158 7.43301 3.90065H7.49967C7.74615 3.79501 7.95635 3.61961 8.10442 3.39604C8.25248 3.17246 8.33194 2.91047 8.33301 2.64232V2.50065C8.33301 2.05862 8.5086 1.6347 8.82116 1.32214C9.13372 1.00958 9.55765 0.833984 9.99967 0.833984C10.4417 0.833984 10.8656 1.00958 11.1782 1.32214C11.4907 1.6347 11.6663 2.05862 11.6663 2.50065V2.57565C11.6674 2.84381 11.7469 3.1058 11.8949 3.32937C12.043 3.55295 12.2532 3.72835 12.4997 3.83398C12.751 3.94491 13.0298 3.978 13.3002 3.92899C13.5705 3.87997 13.8199 3.7511 14.0163 3.55898L14.0663 3.50898C14.2211 3.35402 14.4049 3.23109 14.6073 3.14722C14.8096 3.06334 15.0265 3.02017 15.2455 3.02017C15.4645 3.02017 15.6814 3.06334 15.8837 3.14722C16.0861 3.23109 16.2699 3.35402 16.4247 3.50898C16.5796 3.66377 16.7026 3.84759 16.7864 4.04992C16.8703 4.25225 16.9135 4.46912 16.9135 4.68815C16.9135 4.90718 16.8703 5.12405 16.7864 5.32638C16.7026 5.52871 16.5796 5.71253 16.4247 5.86732L16.3747 5.91732C16.1826 6.11372 16.0537 6.36316 16.0047 6.63349C15.9557 6.90382 15.9887 7.18264 16.0997 7.43398V7.50065C16.2053 7.74712 16.3807 7.95733 16.6043 8.10539C16.8279 8.25346 17.0899 8.33291 17.358 8.33398H17.4997C17.9417 8.33398 18.3656 8.50958 18.6782 8.82214C18.9907 9.1347 19.1663 9.55862 19.1663 10.0007C19.1663 10.4427 18.9907 10.8666 18.6782 11.1792C18.3656 11.4917 17.9417 11.6673 17.4997 11.6673H17.4247C17.1565 11.6684 16.8945 11.7478 16.671 11.8959C16.4474 12.044 16.272 12.2542 16.1663 12.5006V12.5006Z"
                  stroke="#14191F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Setting
            </NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
};

export default LayoutControl;
