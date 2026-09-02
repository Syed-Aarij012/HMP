import DashboardListingsTable from "@/components/common/DashboardListingsTable";
import DashboardToggle from "@/components/dashboard/DashboardToggle";
import Image from "next/image";
import PageInsightsLineChart from "@/components/sections/dashboard/PageInsightsLineChart";
import {
  dashboardPageListingCars,
} from "@/data/cars";

function Dashboard() {
  return (
    <>
      <div id="themesflat-content">
        <DashboardToggle />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-area">
                <main id="main" className="main-content">
                  <div className="tfcl-dashboard">
                    <h1 className="admin-title">Dashboard</h1>
                    <div className="tfcl-dashboard-overview">
                      <div className="row">
                        <div className="col-sm-6 col-xxl-3">
                          <a className="tfcl-card" href="#">
                            <div className="card-body">
                              <div className="tfcl-icon-overview">
                                <svg
                                  width={36}
                                  height={36}
                                  viewBox="0 0 36 36"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M27.4092 14.014H18.6185C17.9319 14.014 17.3626 13.4447 17.3626 12.7582C17.3626 12.0717 17.9319 11.5024 18.6185 11.5024H27.4092C27.7422 11.5024 28.0616 11.6347 28.2971 11.8702C28.5327 12.1057 28.665 12.4252 28.665 12.7582C28.665 13.0913 28.5327 13.4107 28.2971 13.6462C28.0616 13.8817 27.7422 14.014 27.4092 14.014ZM9.82775 15.2866C9.50961 15.2866 9.19148 15.1694 8.94031 14.9182L7.6845 13.6624C7.19892 13.1768 7.19892 12.3731 7.6845 11.8875C8.17008 11.402 8.9738 11.402 9.45938 11.8875L9.82775 12.2559L12.7078 9.3759C13.1933 8.89032 13.9971 8.89032 14.4826 9.3759C14.9682 9.86149 14.9682 10.6652 14.4826 11.1508L10.7152 14.9182C10.4799 15.1538 10.1607 15.2863 9.82775 15.2866ZM27.4092 25.735H18.6185C17.9319 25.735 17.3626 25.1657 17.3626 24.4792C17.3626 23.7927 17.9319 23.2233 18.6185 23.2233H27.4092C27.7422 23.2233 28.0616 23.3557 28.2971 23.5912C28.5327 23.8267 28.665 24.1461 28.665 24.4792C28.665 24.8122 28.5327 25.1316 28.2971 25.3672C28.0616 25.6027 27.7422 25.735 27.4092 25.735ZM9.82775 27.0075C9.50961 27.0075 9.19148 26.8903 8.94031 26.6392L7.6845 25.3833C7.19892 24.8978 7.19892 24.094 7.6845 23.6085C8.17008 23.1229 8.9738 23.1229 9.45938 23.6085L9.82775 23.9768L12.7078 21.0968C13.1933 20.6113 13.9971 20.6113 14.4826 21.0968C14.9682 21.5824 14.9682 22.3861 14.4826 22.8717L10.7152 26.6392C10.4799 26.8747 10.1607 27.0072 9.82775 27.0075Z"
                                    fill="#405FF2"
                                    stroke="white"
                                    strokeWidth="0.7"
                                  />
                                  <path
                                    d="M23.0233 36H12.9767C3.88465 36 0 32.1153 0 23.0233V12.9767C0 3.88465 3.88465 0 12.9767 0H23.0233C32.1153 0 36 3.88465 36 12.9767V23.0233C36 32.1153 32.1153 36 23.0233 36ZM12.9767 2.51163C5.25767 2.51163 2.51163 5.25767 2.51163 12.9767V23.0233C2.51163 30.7423 5.25767 33.4884 12.9767 33.4884H23.0233C30.7423 33.4884 33.4884 30.7423 33.4884 23.0233V12.9767C33.4884 5.25767 30.7423 2.51163 23.0233 2.51163H12.9767Z"
                                    fill="#405FF2"
                                    stroke="white"
                                    strokeWidth="0.7"
                                  />
                                </svg>
                              </div>
                              <div className="content-overview">
                                <h5>Your listing</h5>
                                <div className="tfcl-dashboard-title">
                                  <div className="listing-text d-flex">
                                    <b>32</b>
                                    <span className="per font-3">
                                      /50 remaining
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="col-sm-6 col-xxl-3">
                          <a className="tfcl-card" href="#">
                            <div className="card-body">
                              <div className="tfcl-icon-overview">
                                <svg
                                  width={36}
                                  height={36}
                                  viewBox="0 0 36 36"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17.8887 36C17.3062 36 16.834 35.5278 16.834 34.9453C16.834 34.3628 17.3062 33.8906 17.8887 33.8906C26.6508 33.8906 33.7793 26.7621 33.7793 18C33.7793 9.23787 26.6508 2.10938 17.8887 2.10938C17.3062 2.10938 16.834 1.63716 16.834 1.05469C16.834 0.472219 17.3062 0 17.8887 0C22.6966 0 27.2168 1.87235 30.6166 5.27203C34.0164 8.67178 35.8887 13.192 35.8887 18C35.8887 22.808 34.0163 27.3281 30.6166 30.728C27.2168 34.1276 22.6966 36 17.8887 36Z"
                                    fill="#405FF2"
                                  />
                                  <path
                                    d="M26.3615 27.5293C26.223 27.5295 26.0858 27.5023 25.9578 27.4492C25.8298 27.3962 25.7136 27.3184 25.6158 27.2203L17.1431 18.7477C16.9453 18.5499 16.8342 18.2816 16.8342 18.0019V7.41111C16.8342 6.82864 17.3064 6.35642 17.8889 6.35642C18.4713 6.35642 18.9436 6.82864 18.9436 7.41111V17.5651L27.1073 25.7288C27.5192 26.1407 27.5192 26.8085 27.1073 27.2204C27.0094 27.3185 26.8932 27.3963 26.7652 27.4493C26.6372 27.5023 26.5001 27.5295 26.3615 27.5293ZM11.7611 3.25437C11.8914 3.25437 12.0238 3.23011 12.1521 3.17886C12.1559 3.17738 12.5314 3.02783 12.9356 2.90147C13.3674 2.76654 13.878 2.62212 13.8831 2.62072C14.4437 2.46237 14.7697 1.87955 14.6113 1.31902C14.4531 0.75849 13.8707 0.43238 13.3097 0.590794C13.2878 0.596982 12.7666 0.744357 12.3064 0.888146C11.99 0.98801 11.6772 1.09884 11.3686 1.22044C10.828 1.43686 10.5652 2.05041 10.7814 2.59111C10.9464 3.0035 11.3424 3.25437 11.7611 3.25437ZM7.5021 3.29712C7.48368 3.31062 7.04725 3.63111 6.66665 3.92691C6.40522 4.13124 6.151 4.34462 5.90446 4.56668C5.47387 4.95875 5.44272 5.62545 5.83457 6.05619C5.93335 6.16498 6.05383 6.25187 6.18824 6.31125C6.32266 6.37064 6.46802 6.40121 6.61497 6.401C6.87739 6.4013 7.13042 6.30343 7.32435 6.12664C7.32737 6.1239 7.62655 5.85235 7.96096 5.59254C8.31829 5.31488 8.74593 5.00079 8.75022 4.9977C9.21983 4.65303 9.32108 3.99301 8.97648 3.52339C8.63174 3.05377 7.97172 2.95245 7.5021 3.29712ZM4.47029 7.56151C3.98296 7.24236 3.32933 7.37862 3.01012 7.86589C2.9976 7.88494 2.70102 8.33797 2.44804 8.74845C2.27477 9.03141 2.1114 9.32031 1.95824 9.61463C1.69225 10.1327 1.89651 10.7681 2.41443 11.0342C2.56321 11.111 2.72818 11.151 2.89558 11.151C3.27822 11.151 3.6475 10.9421 3.83453 10.5784C3.83629 10.5748 4.02149 10.2156 4.24361 9.85524C4.48112 9.47 4.77173 9.02604 4.77461 9.02162C5.09383 8.53435 4.95749 7.88065 4.47029 7.56151ZM0.954459 16.8949C0.995674 16.8998 1.03713 16.9022 1.07863 16.9022C1.60619 16.9022 2.06188 16.5071 2.12481 15.9703C2.1253 15.9663 2.17234 15.5689 2.25489 15.1498C2.34236 14.7059 2.45908 14.1884 2.46027 14.1832C2.58866 13.6151 2.23218 13.0504 1.66398 12.922C1.09572 12.7935 0.531248 13.1502 0.402787 13.7183C0.397725 13.7405 0.278475 14.2688 0.185311 14.742C0.122137 15.0676 0.0702855 15.3954 0.0298499 15.7246C-0.038072 16.3031 0.375858 16.8271 0.954459 16.8949ZM2.41155 21.6194C2.34711 21.3501 2.2919 21.0786 2.24603 20.8055C2.17248 20.359 2.10055 19.8334 2.09985 19.8282C2.02103 19.251 1.49024 18.8467 0.912131 18.9258C0.335006 19.0047 -0.0689392 19.5364 0.0098108 20.1135C0.0129045 20.1361 0.0863108 20.6726 0.164639 21.1483C0.219497 21.4755 0.285724 21.8008 0.363201 22.1234C0.481537 22.6044 0.912412 22.9264 1.38653 22.9264C1.46999 22.9264 1.55472 22.9164 1.63937 22.8956C2.20504 22.7564 2.55076 22.1851 2.41155 21.6194ZM4.21858 26.1063C3.99337 25.7138 3.74186 25.2466 3.73933 25.2419C3.46335 24.7289 2.82358 24.5369 2.31093 24.8127C1.79793 25.0887 1.60576 25.7282 1.88174 26.2411C1.8925 26.2613 2.14921 26.7381 2.38919 27.1562C2.55517 27.4435 2.73108 27.7249 2.9166 27.9999C3.12072 28.2991 3.45161 28.46 3.7884 28.46C3.99308 28.46 4.20001 28.4005 4.38177 28.2765C4.86292 27.9483 4.98688 27.2922 4.65887 26.811C4.65655 26.8077 4.4293 26.4735 4.21858 26.1063ZM8.58161 30.8864C8.35627 30.7252 8.13642 30.5565 7.92243 30.3805C7.57403 30.0918 7.17487 29.7423 7.17093 29.7388C6.73295 29.3549 6.06646 29.3987 5.68262 29.8369C5.29872 30.275 5.34266 30.9413 5.78071 31.3252C5.79787 31.3403 6.20526 31.697 6.57651 32.0047C6.96801 32.3292 7.34994 32.5989 7.36605 32.6103C7.54344 32.7357 7.75537 32.803 7.97263 32.8029C8.30387 32.8029 8.62998 32.6473 8.83544 32.3561C9.17104 31.8802 9.05741 31.2222 8.58161 30.8864ZM13.683 33.3298C13.4155 33.258 13.1506 33.177 12.8887 33.087C12.4612 32.9386 11.965 32.7509 11.96 32.749C11.4154 32.5428 10.8066 32.8173 10.6003 33.3621C10.3941 33.9069 10.6686 34.5157 11.2134 34.7218C11.2348 34.7299 11.7413 34.9214 12.1968 35.0796C12.677 35.2463 13.1292 35.3652 13.1482 35.3703C13.2378 35.3938 13.3278 35.405 13.4162 35.405C13.8842 35.405 14.3116 35.0913 14.4358 34.6174C14.5836 34.0539 14.2465 33.4775 13.683 33.3298Z"
                                    fill="#405FF2"
                                  />
                                </svg>
                              </div>
                              <div className="content-overview">
                                <h5>Pending</h5>
                                <div className="tfcl-dashboard-title">
                                  <span>
                                    <b>02</b>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="col-sm-6 col-xxl-3">
                          <a className="tfcl-card" href="#">
                            <div className="card-body">
                              <div className="tfcl-icon-overview">
                                <svg
                                  width={36}
                                  height={36}
                                  viewBox="0 0 36 36"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.24026 34.7043C7.78238 34.7043 7.32901 34.5603 6.93863 34.2756C6.60484 34.0347 6.34612 33.7042 6.19241 33.3223C6.03871 32.9404 5.99631 32.5229 6.07013 32.1179L7.73626 22.3923L0.667882 15.5163C0.370511 15.2276 0.160689 14.8609 0.0625688 14.4582C-0.0355513 14.0556 -0.017981 13.6335 0.113257 13.2404C0.239719 12.85 0.473671 12.5032 0.788271 12.2397C1.10287 11.9763 1.48537 11.8068 1.89188 11.7509L11.6513 10.3278L16.0253 1.47513C16.3965 0.721375 17.1548 0.25 18.0008 0.25C18.8468 0.25 19.6039 0.72026 19.9774 1.47625L24.3503 10.3278L34.1153 11.752C34.9421 11.8679 35.6228 12.4383 35.8883 13.2404C36.0194 13.6327 36.0372 14.054 35.9397 14.456C35.8422 14.8579 35.6333 15.2242 35.337 15.5129L31.98 18.7675C31.7641 18.9655 31.4795 19.0715 31.1867 19.063C30.8939 19.0545 30.616 18.932 30.412 18.7218C30.2081 18.5115 30.0942 18.23 30.0945 17.937C30.0949 17.6441 30.2095 17.3629 30.414 17.1531L33.7665 13.9019L23.4413 12.4698C23.2609 12.4437 23.0895 12.3741 22.9419 12.2671C22.7944 12.1601 22.675 12.0189 22.5941 11.8555L17.9591 2.473L13.4063 11.8555C13.3255 12.0187 13.2063 12.1599 13.0589 12.2669C12.9116 12.3739 12.7405 12.4435 12.5603 12.4698L2.21026 13.9773L9.72863 21.193C9.8597 21.32 9.9579 21.4771 10.0147 21.6505C10.0716 21.824 10.0854 22.0087 10.0549 22.1886L8.28638 32.5071L17.4754 27.5864C17.6474 27.4956 17.84 27.451 18.0345 27.457C18.2289 27.4629 18.4184 27.5191 18.5846 27.6201C19.1145 27.9441 19.3125 28.6529 18.9896 29.1839C18.8209 29.4595 18.5599 29.6429 18.2741 29.7093L9.26513 34.4489C8.94917 34.6168 8.59693 34.7048 8.23913 34.7054L8.24026 34.7043Z"
                                    fill="#405FF2"
                                    stroke="white"
                                    strokeWidth="0.5"
                                  />
                                  <path
                                    d="M28.125 35.4766C23.7825 35.4766 20.25 31.9441 20.25 27.6016C20.25 23.2591 23.7825 19.7266 28.125 19.7266C32.4675 19.7266 36 23.2591 36 27.6016C36 31.9441 32.4675 35.4766 28.125 35.4766ZM28.125 21.9766C25.0234 21.9766 22.5 24.4999 22.5 27.6016C22.5 30.7032 25.0234 33.2266 28.125 33.2266C31.2266 33.2266 33.75 30.7032 33.75 27.6016C33.75 24.4999 31.2266 21.9766 28.125 21.9766Z"
                                    fill="#405FF2"
                                    stroke="white"
                                    strokeWidth="0.5"
                                  />
                                  <path
                                    d="M28.125 30.9766C27.8266 30.9766 27.5405 30.858 27.3295 30.6471C27.1185 30.4361 27 30.1499 27 29.8516V25.3516C27 25.0532 27.1185 24.767 27.3295 24.5561C27.5405 24.3451 27.8266 24.2266 28.125 24.2266C28.4234 24.2266 28.7095 24.3451 28.9205 24.5561C29.1315 24.767 29.25 25.0532 29.25 25.3516V29.8516C29.25 30.1499 29.1315 30.4361 28.9205 30.6471C28.7095 30.858 28.4234 30.9766 28.125 30.9766Z"
                                    fill="#405FF2"
                                    stroke="white"
                                    strokeWidth="0.5"
                                  />
                                  <path
                                    d="M30.375 28.7266H25.875C25.5766 28.7266 25.2905 28.608 25.0795 28.3971C24.8685 28.1861 24.75 27.8999 24.75 27.6016C24.75 27.3032 24.8685 27.017 25.0795 26.8061C25.2905 26.5951 25.5766 26.4766 25.875 26.4766H30.375C30.6734 26.4766 30.9595 26.5951 31.1705 26.8061C31.3815 27.017 31.5 27.3032 31.5 27.6016C31.5 27.8999 31.3815 28.1861 31.1705 28.3971C30.9595 28.608 30.6734 28.7266 30.375 28.7266Z"
                                    fill="#405FF2"
                                    stroke="white"
                                    strokeWidth="0.5"
                                  />
                                </svg>
                              </div>
                              <div className="content-overview">
                                <h5>Favorites</h5>
                                <div className="tfcl-dashboard-title">
                                  <span>
                                    <b>06</b>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="col-sm-6 col-xxl-3">
                          <a className="tfcl-card" href="#">
                            <div className="card-body">
                              <div className="tfcl-icon-overview">
                                <svg
                                  width={36}
                                  height={36}
                                  viewBox="0 0 36 36"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M32.121 0H3.87893C1.74009 0 0 1.74002 0 3.87886V27.6023C0 29.7411 1.74009 31.4812 3.87893 31.4812H13.0444L17.2541 35.691C17.3521 35.789 17.4683 35.8667 17.5963 35.9197C17.7243 35.9727 17.8614 36 17.9999 36C18.1384 36 18.2756 35.9727 18.4036 35.9197C18.5315 35.8667 18.6478 35.789 18.7457 35.691L22.9556 31.4812H32.1211C34.26 31.4812 36.0001 29.7411 36.0001 27.6023V3.87886C36 1.74002 34.2599 0 32.121 0ZM33.8906 27.6023C33.8906 28.578 33.0968 29.3719 32.121 29.3719H22.5187C22.2389 29.3719 21.9707 29.4829 21.773 29.6808L17.9999 33.4538L14.227 29.6808C14.1291 29.5829 14.0128 29.5052 13.8849 29.4521C13.7569 29.3991 13.6197 29.3719 13.4812 29.3719H3.87893C2.9032 29.3719 2.10938 28.578 2.10938 27.6023V3.87886C2.10938 2.90313 2.9032 2.10938 3.87893 2.10938H32.1211C33.0968 2.10938 33.8906 2.90313 33.8906 3.87886V27.6023Z"
                                    fill="#405FF2"
                                    stroke="white"
                                    strokeWidth="0.7"
                                  />
                                  <path
                                    d="M27.0609 12.1321L21.4544 11.3172L18.9463 6.23624C18.8592 6.05979 18.7245 5.91123 18.5574 5.80735C18.3902 5.70348 18.1974 5.64843 18.0006 5.64844C17.8038 5.64844 17.6109 5.70351 17.4438 5.80739C17.2767 5.91128 17.142 6.05986 17.0549 6.23631L14.547 11.3172L8.9401 12.1321C8.74535 12.1604 8.56241 12.2426 8.41196 12.3695C8.2615 12.4963 8.14954 12.6627 8.08873 12.8499C8.02792 13.0371 8.02068 13.2375 8.06784 13.4286C8.115 13.6196 8.21467 13.7937 8.35559 13.931L12.413 17.8859L11.4554 23.4702C11.4222 23.6641 11.4439 23.8635 11.518 24.0458C11.5922 24.2281 11.7159 24.3859 11.8751 24.5016C12.0342 24.6173 12.2226 24.6861 12.4189 24.7003C12.6151 24.7145 12.8115 24.6736 12.9857 24.582L18.0006 21.9455L23.016 24.582C23.1673 24.6616 23.3356 24.7032 23.5066 24.7032H23.511C24.0922 24.7017 24.5628 24.2301 24.5628 23.6485C24.5628 23.5675 24.5537 23.4886 24.5365 23.4128L23.588 17.8859L27.6454 13.9311C27.7863 13.7938 27.886 13.6197 27.9332 13.4286C27.9804 13.2376 27.9731 13.0371 27.9123 12.85C27.8515 12.6628 27.7396 12.4963 27.5891 12.3695C27.4386 12.2426 27.2557 12.1604 27.0609 12.1321ZM21.7185 16.7624C21.5961 16.8817 21.5045 17.0291 21.4516 17.1917C21.3988 17.3544 21.3863 17.5274 21.4152 17.696L22.1058 21.7204L18.4913 19.8204C18.34 19.7409 18.1716 19.6993 18.0006 19.6993C17.8296 19.6993 17.6611 19.7409 17.5098 19.8204L13.8957 21.7205L14.5858 17.6959C14.6147 17.5274 14.6022 17.3544 14.5494 17.1917C14.4965 17.0291 14.405 16.8818 14.2825 16.7624L11.3584 13.9122L15.3991 13.3249C15.5683 13.3003 15.729 13.2349 15.8674 13.1344C16.0057 13.0339 16.1175 12.9013 16.1932 12.748L18.0006 9.08601L19.8083 12.748C19.884 12.9013 19.9958 13.034 20.1341 13.1344C20.2725 13.2349 20.4331 13.3003 20.6023 13.3249L24.6428 13.9122L21.7185 16.7624Z"
                                    fill="#405FF2"
                                    stroke="white"
                                    strokeWidth="0.7"
                                  />
                                </svg>
                              </div>
                              <div className="content-overview">
                                <h5>Reviews</h5>
                                <div className="tfcl-dashboard-title">
                                  <span>
                                    <b>1.483</b>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="tfcl-dashboard-middle mt-2">
                      <div className="row">
                        <div className="tfcl-dashboard-middle-left col-md-12">
                          <div className="tfcl-dashboard-listing">
                            <h5 className="title-dashboard-table">
                              New listing
                            </h5>
                            <DashboardListingsTable
                              initialListings={dashboardPageListingCars}
                              showFilters
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tfcl-page-insight tfcl-dashboard-listing">
                      <div className="flex-two flex-wrap">
                        <h5 className="mb-2">Page Insights</h5>
                        <div className="group-btn-insignt gap-48">
                          <button>Day</button>
                          <span>/</span>
                          <button>Week</button>
                          <span>/</span>
                          <button>Month</button>
                          <span>/</span>
                          <button>Year</button>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="group-insight-controller">
                            <div className="grid-2 gap-48 mb-30">
                              <div className="form-group">
                                <label
                                  htmlFor=""
                                  className="fs-18 fw-5 text-color-2"
                                >
                                  From date
                                </label>
                                <div className="group-input-icon">
                                  <input
                                    type="text"
                                    id="from-date"
                                    className="datetimepicker hasDatepicker"
                                    name="from_date"
                                    defaultValue=""
                                    placeholder="Choose date"
                                  />
                                  <span className="datepicker-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={19}
                                      height={18}
                                      viewBox="0 0 19 18"
                                      fill="none"
                                    >
                                      <path
                                        d="M5.5625 2.25V3.9375M13.4375 2.25V3.9375M2.75 14.0625V5.625C2.75 5.17745 2.92779 4.74823 3.24426 4.43176C3.56072 4.11529 3.98995 3.9375 4.4375 3.9375H14.5625C15.0101 3.9375 15.4393 4.11529 15.7557 4.43176C16.0722 4.74823 16.25 5.17745 16.25 5.625V14.0625M2.75 14.0625C2.75 14.5101 2.92779 14.9393 3.24426 15.2557C3.56072 15.5722 3.98995 15.75 4.4375 15.75H14.5625C15.0101 15.75 15.4393 15.5722 15.7557 15.2557C16.0722 14.9393 16.25 14.5101 16.25 14.0625M2.75 14.0625V8.4375C2.75 7.98995 2.92779 7.56073 3.24426 7.24426C3.56072 6.92779 3.98995 6.75 4.4375 6.75H14.5625C15.0101 6.75 15.4393 6.92779 15.7557 7.24426C16.0722 7.56073 16.25 7.98995 16.25 8.4375V14.0625M9.5 9.5625H9.506V9.5685H9.5V9.5625ZM9.5 11.25H9.506V11.256H9.5V11.25ZM9.5 12.9375H9.506V12.9435H9.5V12.9375ZM7.8125 11.25H7.8185V11.256H7.8125V11.25ZM7.8125 12.9375H7.8185V12.9435H7.8125V12.9375ZM6.125 11.25H6.131V11.256H6.125V11.25ZM6.125 12.9375H6.131V12.9435H6.125V12.9375ZM11.1875 9.5625H11.1935V9.5685H11.1875V9.5625ZM11.1875 11.25H11.1935V11.256H11.1875V11.25ZM11.1875 12.9375H11.1935V12.9435H11.1875V12.9375ZM12.875 9.5625H12.881V9.5685H12.875V9.5625ZM12.875 11.25H12.881V11.256H12.875V11.25Z"
                                        stroke="#B6B6B6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor=""
                                  className="fs-18 fw-5 text-color-2"
                                >
                                  To date
                                </label>
                                <div className="group-input-icon">
                                  <input
                                    type="text"
                                    id="to-date"
                                    className="datetimepicker hasDatepicker"
                                    name="to_date"
                                    defaultValue=""
                                    placeholder="Choose date"
                                  />
                                  <span className="datepicker-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={19}
                                      height={18}
                                      viewBox="0 0 19 18"
                                      fill="none"
                                    >
                                      <path
                                        d="M5.5625 2.25V3.9375M13.4375 2.25V3.9375M2.75 14.0625V5.625C2.75 5.17745 2.92779 4.74823 3.24426 4.43176C3.56072 4.11529 3.98995 3.9375 4.4375 3.9375H14.5625C15.0101 3.9375 15.4393 4.11529 15.7557 4.43176C16.0722 4.74823 16.25 5.17745 16.25 5.625V14.0625M2.75 14.0625C2.75 14.5101 2.92779 14.9393 3.24426 15.2557C3.56072 15.5722 3.98995 15.75 4.4375 15.75H14.5625C15.0101 15.75 15.4393 15.5722 15.7557 15.2557C16.0722 14.9393 16.25 14.5101 16.25 14.0625M2.75 14.0625V8.4375C2.75 7.98995 2.92779 7.56073 3.24426 7.24426C3.56072 6.92779 3.98995 6.75 4.4375 6.75H14.5625C15.0101 6.75 15.4393 6.92779 15.7557 7.24426C16.0722 7.56073 16.25 7.98995 16.25 8.4375V14.0625M9.5 9.5625H9.506V9.5685H9.5V9.5625ZM9.5 11.25H9.506V11.256H9.5V11.25ZM9.5 12.9375H9.506V12.9435H9.5V12.9375ZM7.8125 11.25H7.8185V11.256H7.8125V11.25ZM7.8125 12.9375H7.8185V12.9435H7.8125V12.9375ZM6.125 11.25H6.131V11.256H6.125V11.25ZM6.125 12.9375H6.131V12.9435H6.125V12.9375ZM11.1875 9.5625H11.1935V9.5685H11.1875V9.5625ZM11.1875 11.25H11.1935V11.256H11.1875V11.25ZM11.1875 12.9375H11.1935V12.9435H11.1875V12.9375ZM12.875 9.5625H12.881V9.5685H12.875V9.5625ZM12.875 11.25H12.881V11.256H12.875V11.25Z"
                                        stroke="#B6B6B6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <PageInsightsLineChart />
                    </div>
                    <div className="tfcl-dashboard-middle-right">
                      <div className="tfcl-card tfcl-dashboard-reviews">
                        <h5>Recent Reviews</h5>
                        <ul>
                          <li className="comment-by-user">
                            <div className="group-author">
                              <Image
                                loading="lazy"
                                className="avatar"
                                width={56}
                                height={56}
                                src="/assets/images/dashboard/rate4.png"
                                alt="avatar"
                              />
                              <div className="group-name">
                                <div className="review-name">
                                  <b>Jenny Wilson</b>
                                  <span className="review-date">
                                    August 13, 2023
                                  </span>
                                </div>
                                <div className="rating-wrap">
                                  <div className="form-group">
                                    <div className="star-rating-review">
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={1}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={2}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={3}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={4}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={5}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi lacinia sit amet elit sed
                                molestie. Sed neque enim, iaculis id viverra in,
                                scelerisque vitae nulla.
                              </p>
                            </div>
                          </li>
                          <li className="comment-by-user">
                            <div className="group-author">
                              <Image
                                loading="lazy"
                                className="avatar"
                                width={56}
                                height={56}
                                src="/assets/images/dashboard/rate3.png"
                                alt="avatar"
                              />
                              <div className="group-name">
                                <div className="review-name">
                                  <b>Jenny Wilson</b>
                                  <span className="review-date">
                                    August 13, 2023
                                  </span>
                                </div>
                                <div className="rating-wrap">
                                  <div className="form-group">
                                    <div className="star-rating-review">
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={1}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={2}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={3}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={4}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={5}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi lacinia sit amet elit sed
                                molestie. Sed neque enim, iaculis id viverra in,
                                scelerisque vitae nulla.
                              </p>
                            </div>
                          </li>
                          <li className="comment-by-user">
                            <div className="group-author">
                              <Image
                                loading="lazy"
                                className="avatar"
                                width={56}
                                height={56}
                                src="/assets/images/dashboard/rate2.png"
                                alt="avatar"
                              />
                              <div className="group-name">
                                <div className="review-name">
                                  <b>Jenny Wilson</b>
                                  <span className="review-date">
                                    August 13, 2023
                                  </span>
                                </div>
                                <div className="rating-wrap">
                                  <div className="form-group">
                                    <div className="star-rating-review">
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={1}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={2}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={3}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={4}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={5}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi lacinia sit amet elit sed
                                molestie. Sed neque enim, iaculis id viverra in,
                                scelerisque vitae nulla.
                              </p>
                            </div>
                          </li>
                          <li className="comment-by-user">
                            <div className="group-author">
                              <Image
                                loading="lazy"
                                className="avatar"
                                width={56}
                                height={56}
                                src="/assets/images/dashboard/rate1.png"
                                alt="avatar"
                              />
                              <div className="group-name">
                                <div className="review-name">
                                  <b>Jenny Wilson</b>
                                  <span className="review-date">
                                    August 13, 2023
                                  </span>
                                </div>
                                <div className="rating-wrap">
                                  <div className="form-group">
                                    <div className="star-rating-review">
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={1}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={2}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={3}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={4}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={5}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi lacinia sit amet elit sed
                                molestie. Sed neque enim, iaculis id viverra in,
                                scelerisque vitae nulla.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
