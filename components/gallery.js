import Image from "next/image";
import { Eth } from "@web3uikit/icons";
import styles from "@/styles/Home.module.css";

import AzukiProfile from "../public/assets/azuki_profile.webp";

export default function GallerySection() {
  return (
    <section className={styles.CollectionHeroSection}>
      <section>
        <Image
          src={AzukiProfile}
          alt="azuki profile"
          className={styles.collectionProfile}
        />
        <section className={styles.collection_marketplace_title_icons}>
          <p>Azuki</p>
          <section>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.collection_icons}
            >
              <path
                d="M24 12C24 18.6271 18.6271 24 12 24C5.37296 24 0 18.6271 0 12C0 5.37296 5.37296 0 12 0C18.6285 0 24 5.37296 24 12Z"
                fill="#2081E2"
              ></path>
              <path
                d="M5.92022 12.4029L5.97199 12.3216L9.09367 7.4381C9.1393 7.36661 9.24655 7.374 9.28106 7.45166C9.80258 8.62044 10.2526 10.074 10.0418 10.979C9.95176 11.3513 9.70519 11.8555 9.42778 12.3216C9.39204 12.3894 9.35258 12.456 9.31066 12.5201C9.29092 12.5497 9.25764 12.5669 9.22188 12.5669H6.01144C5.92514 12.5669 5.8746 12.4732 5.92022 12.4029Z"
                fill="white"
              ></path>
              <path
                d="M19.8347 13.3104V14.0834C19.8347 14.1278 19.8075 14.1673 19.7682 14.1845C19.5265 14.2881 18.6992 14.6678 18.3552 15.1462C17.4774 16.368 16.8068 18.115 15.3075 18.115H9.05308C6.83636 18.115 5.04004 16.3126 5.04004 14.0884V14.0169C5.04004 13.9577 5.0881 13.9096 5.1473 13.9096H8.63392C8.70294 13.9096 8.75348 13.9738 8.74734 14.0415C8.72266 14.2684 8.7646 14.5001 8.87185 14.711C9.07897 15.1315 9.50802 15.394 9.97158 15.394H11.6976V14.0464H9.9913C9.90378 14.0464 9.85202 13.9454 9.90256 13.8739C9.92104 13.8455 9.94201 13.8159 9.96418 13.7827C10.1257 13.5533 10.3562 13.1971 10.5856 12.7915C10.7421 12.5177 10.8938 12.2255 11.0158 11.932C11.0406 11.879 11.0602 11.8248 11.0799 11.7718C11.1132 11.6781 11.1478 11.5906 11.1725 11.503C11.1971 11.429 11.2167 11.3513 11.2365 11.2786C11.2945 11.0296 11.3192 10.7658 11.3192 10.4921C11.3192 10.3848 11.3142 10.2726 11.3043 10.1653C11.2994 10.0482 11.2846 9.93108 11.2698 9.81396C11.2599 9.7104 11.2415 9.60806 11.2218 9.50082C11.1971 9.34424 11.1625 9.1889 11.1231 9.0323L11.1095 8.97314C11.0799 8.86586 11.0553 8.76356 11.0208 8.6563C10.9234 8.3197 10.8112 7.99176 10.6928 7.68478C10.6497 7.56272 10.6004 7.4456 10.551 7.32848C10.4783 7.15216 10.4043 6.9919 10.3365 6.84024C10.302 6.7712 10.2724 6.70832 10.2428 6.6442C10.2095 6.57146 10.175 6.49872 10.1405 6.4297C10.1158 6.37668 10.0875 6.32736 10.0677 6.27804L9.85693 5.88844C9.82734 5.83544 9.87666 5.77256 9.9346 5.78858L11.2538 6.14612H11.2575C11.2599 6.14612 11.2611 6.14736 11.2625 6.14736L11.4362 6.19544L11.6274 6.2497L11.6976 6.2694V5.4853C11.6976 5.1068 12.0009 4.7998 12.3757 4.7998C12.5631 4.7998 12.7332 4.87624 12.8553 5.00076C12.9774 5.1253 13.0538 5.29544 13.0538 5.4853V6.64916L13.1943 6.68858C13.2055 6.6923 13.2166 6.69722 13.2264 6.70462C13.261 6.73052 13.3102 6.76872 13.3731 6.8156C13.4225 6.85502 13.4755 6.90312 13.5395 6.95244C13.6666 7.05476 13.8182 7.18668 13.9846 7.33834C14.029 7.37654 14.0722 7.416 14.1116 7.45546C14.3262 7.65518 14.5666 7.88942 14.7959 8.14834C14.8599 8.22108 14.9229 8.29504 14.9869 8.37272C15.0511 8.45162 15.1189 8.5293 15.1781 8.60698C15.2557 8.71054 15.3396 8.8178 15.4124 8.93C15.4469 8.98301 15.4863 9.03724 15.5196 9.09026C15.6133 9.23204 15.6959 9.37876 15.7748 9.52548C15.8081 9.59328 15.8426 9.66724 15.8722 9.74C15.9597 9.93602 16.0287 10.1358 16.0731 10.3355C16.0867 10.3786 16.0966 10.4255 16.1015 10.4674V10.4773C16.1163 10.5364 16.1213 10.5993 16.1262 10.6634C16.1459 10.8681 16.136 11.0727 16.0917 11.2786C16.0731 11.3662 16.0485 11.4488 16.0189 11.5364C15.9894 11.6201 15.9597 11.7076 15.9215 11.7903C15.8475 11.9616 15.7599 12.133 15.6564 12.2933C15.6231 12.3525 15.5837 12.4154 15.5443 12.4745C15.5011 12.5374 15.4567 12.5966 15.4173 12.6545C15.363 12.7285 15.305 12.8062 15.2459 12.8752C15.1929 12.948 15.1387 13.0208 15.0794 13.0848C14.9969 13.1822 14.918 13.2747 14.8353 13.3634C14.786 13.4215 14.733 13.4806 14.6787 13.5336C14.6257 13.5927 14.5715 13.6457 14.5222 13.6951C14.4396 13.7777 14.3706 13.8418 14.3125 13.8948L14.1769 14.0194C14.1573 14.0366 14.1313 14.0464 14.1043 14.0464H13.0538V15.394H14.3755C14.6713 15.394 14.9525 15.2892 15.1794 15.0969C15.2569 15.0291 15.596 14.7357 15.9967 14.2931C16.0103 14.2783 16.0275 14.2671 16.0473 14.2622L19.6978 13.2069C19.7657 13.1871 19.8347 13.2389 19.8347 13.3104Z"
                fill="white"
              ></path>
            </svg>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.collection_icons}
            >
              <path
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                fill="#080404"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 11.0954L8.8028 6.31738H15.1973L20 11.0954L12 19.0542L4 11.0954ZM8.5793 9.42028C10.4685 7.52868 13.5315 7.52868 15.4207 9.42028L17.0527 11.0542L15.4207 12.6882C13.5315 14.5798 10.4685 14.5798 8.5793 12.6882L6.9474 11.0542L8.5793 9.42028Z"
                fill="#0CE465"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 11.1075C10 12.1831 10.8954 13.0549 12 13.0549C13.1046 13.0549 14 12.1831 14 11.1075C14 10.032 13.1046 9.16016 12 9.16016C10.8954 9.16016 10 10.032 10 11.1075ZM11.1577 11.055C11.1577 11.5202 11.535 11.8971 11.9998 11.8971C12.4647 11.8971 12.842 11.5202 12.842 11.055C12.842 10.5897 12.4647 10.2129 11.9998 10.2129C11.535 10.2129 11.1577 10.5897 11.1577 11.055Z"
                fill="white"
              ></path>
            </svg>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.collection_icons}
            >
              <g clipPath="url(#clip0_4313_515698)">
                <path
                  d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                  fill="white"
                ></path>
                <path
                  d="M18.9247 6.69799C17.5883 5.3923 15.7604 4.58755 13.7443 4.58755C9.65028 4.58755 6.33134 7.90629 6.33134 12.0005C6.33134 16.0946 9.65028 19.4136 13.7443 19.4136C15.7603 19.4136 17.5883 18.6086 18.9247 17.3029C17.3308 19.3815 14.8219 20.7216 12.0002 20.7216C7.1835 20.7216 3.27881 16.8171 3.27881 12.0005C3.27881 7.18379 7.1835 3.2793 12.0002 3.2793C14.8219 3.2793 17.3308 4.61943 18.9247 6.69799Z"
                  fill="url(#paint0_linear_4313_515698)"
                ></path>
                <path
                  d="M8.20459 16.2423C9.27378 17.2869 10.7361 17.9307 12.3489 17.9307C15.6244 17.9307 18.2795 15.2758 18.2795 12.0003C18.2795 8.72507 15.6244 6.07 12.3489 6.07C10.7361 6.07 9.27378 6.7138 8.20459 7.7584C9.47979 6.09558 11.4869 5.02344 13.7444 5.02344C17.5977 5.02344 20.7213 8.14699 20.7213 12.0003C20.7213 15.8537 17.5977 18.9772 13.7444 18.9772C11.4869 18.9772 9.47979 17.9051 8.20459 16.2423Z"
                  fill="url(#paint1_linear_4313_515698)"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 6.76795C14.89 6.76795 17.2328 9.11077 17.2328 12.0006C17.2328 14.8906 14.89 17.2334 12 17.2334C9.11015 17.2334 6.76733 14.8906 6.76733 12.0006C6.76733 9.11077 9.11015 6.76795 12 6.76795ZM12 8.51223C13.9266 8.51223 15.4885 10.0741 15.4885 12.0006C15.4885 13.9272 13.9266 15.4891 12 15.4891C10.0733 15.4891 8.51161 13.9272 8.51161 12.0006C8.51161 10.0741 10.0733 8.51223 12 8.51223Z"
                  fill="url(#paint2_linear_4313_515698)"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_4313_515698"
                  x1="18.9247"
                  y1="12.0005"
                  x2="2.58021"
                  y2="12.0005"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5334C1"></stop>
                  <stop offset="1" stopColor="#0BDFF6"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_4313_515698"
                  x1="20.7212"
                  y1="12.0004"
                  x2="7.64571"
                  y2="12.0004"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5334C1"></stop>
                  <stop offset="1" stopColor="#0BDFF6"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_4313_515698"
                  x1="20.9998"
                  y1="12.0005"
                  x2="2.99976"
                  y2="12.0005"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5334C1"></stop>
                  <stop offset="1" stopColor="#0BDFF6"></stop>
                </linearGradient>
                <clipPath id="clip0_4313_515698">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.collection_icons}
            >
              <circle cx="12" cy="12" r="12" fill="#D9D9D9"></circle>
              <path
                d="M4.98787 11.427C4.98785 11.293 5.0143 11.1603 5.0657 11.0365C5.1171 10.9127 5.19244 10.8003 5.28739 10.7058C5.38234 10.6112 5.49504 10.5363 5.619 10.4855C5.74295 10.4346 5.87574 10.4087 6.00972 10.4094L7.70383 10.4149C7.83758 10.4149 7.97002 10.4413 8.09359 10.4925C8.21716 10.5437 8.32944 10.6187 8.42402 10.7133C8.51859 10.808 8.59361 10.9203 8.6448 11.0439C8.69598 11.1675 8.72232 11.3 8.72232 11.4338V17.8422C8.91316 17.7856 9.15792 17.7253 9.42605 17.6624C9.61222 17.6186 9.77813 17.5131 9.89689 17.3632C10.0156 17.2132 10.0803 17.0275 10.0803 16.8362V8.88707C10.0803 8.61682 10.1876 8.35763 10.3786 8.16651C10.5696 7.97539 10.8287 7.868 11.0988 7.86796H12.7964C13.0665 7.86802 13.3256 7.97542 13.5166 8.16654C13.7076 8.35765 13.8149 8.61683 13.8149 8.88707V16.2649C13.8149 16.2649 14.2397 16.0928 14.6538 15.918C14.8076 15.8529 14.9388 15.744 15.0311 15.6048C15.1234 15.4656 15.1727 15.3023 15.1728 15.1353V6.33945C15.1728 6.20566 15.1991 6.07318 15.2503 5.94957C15.3015 5.82596 15.3765 5.71365 15.471 5.61904C15.5656 5.52443 15.6779 5.44937 15.8014 5.39816C15.925 5.34696 16.0574 5.32059 16.1911 5.32058H17.8887C18.1588 5.32058 18.4179 5.42793 18.6089 5.619C18.7999 5.81007 18.9072 6.06922 18.9073 6.33945V13.5823C20.3789 12.5154 21.8704 11.2321 23.054 9.68904C23.2258 9.46506 23.3394 9.20203 23.3848 8.92343C23.4302 8.64483 23.4059 8.35932 23.3142 8.09238C22.5134 5.75759 21.0112 3.72723 19.013 2.27894C17.0149 0.830642 14.6183 0.0350996 12.1511 0.00108791C5.4979 -0.0883195 -0.000595993 5.34469 5.75687e-05 12.0011C-0.00647503 14.1074 0.543066 16.1781 1.59311 18.0038C1.73792 18.2536 1.95096 18.4568 2.20721 18.5895C2.46345 18.7223 2.75225 18.7792 3.03969 18.7535C3.43902 18.7179 3.83782 18.6766 4.23595 18.6295C4.44283 18.6059 4.63382 18.5071 4.77256 18.3517C4.91129 18.1964 4.98807 17.9955 4.98828 17.7872L4.98787 11.427Z"
                fill="#21325B"
              ></path>
              <path
                d="M4.95077 21.7046C6.74005 23.0067 8.85454 23.7883 11.0603 23.9629C13.2661 24.1375 15.4771 23.6983 17.4488 22.6938C19.4205 21.6894 21.0761 20.1589 22.2322 18.2716C23.3884 16.3843 24.0001 14.2139 23.9998 12.0005C23.9998 11.7241 23.987 11.4509 23.9685 11.1792C19.5862 17.7172 11.4949 20.7739 4.95077 21.7046Z"
                fill="#979695"
              ></path>
            </svg>
          </section>
        </section>
      </section>
      <section>
        <table className={styles.collection_header_dataTable}>
          <thead>
            <tr className={styles.collection_header_dataTable_head_row}>
              <th>COLLECTION</th>
              <th>FLOOR PRICE</th>
              <th>1D CHANGE</th>
              <th>7D CHANGE</th>
              <th>1D VOLUME</th>
              <th>7D VOLUME</th>
              <th>OWNERS</th>
              <th>SUPPLY</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.collection_header_dataTable_body_row}>
              <td>Azuki</td>
              <td>
                13.89
                <Eth fontSize="17px" />
              </td>
              <td className={styles.collection_header_dataTable_body_td_red}>
                -5.12%
              </td>
              <td className={styles.collection_header_dataTable_body_td_red}>
                -4.99%
              </td>
              <td>
                3277.46
                <Eth fontSize="17px" />
              </td>
              <td>
                10395.46
                <Eth fontSize="17px" />
              </td>
              <td>4915 (49%)</td>
              <td>10,000</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
}
