import { React, useState } from 'react'
import styles from '../css/signin.module.scss'
import classNames from 'classnames'

export const SignIn = () => {
  const [regForm, setRegForm] = useState(false)
  return (
    <div className={styles.wrapper}>
      <div className={styles.container_enter}>
        <div className={styles.modal__block}>
          <form className={styles.modal__formLogin} id="formLogIn" action="#">
            <div
              className={styles.modal__closeBtn}
              //   onClick={() => {
              //     return closeModal('')
              //   }}
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>cross</title>
                  <desc>Created with Sketch Beta.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Icon-Set-Filled"
                      transform="translate(-469.000000, -1041.000000)"
                      fill="#009ee4"
                    >
                      <path
                        d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48"
                        id="cross"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className={styles.modal__logo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="140"
                height="21"
                viewBox="0 0 140 21"
                fill="none"
              >
                <path
                  d="M3.87267 20.431C1.61897 21.7328 0 20.6479 0 18.7183C0 16.6642 0 10.5008 0 10.5008C0 10.5008 0 4.33736 0 2.28322C0 0.353629 1.61796 -0.731199 3.87267 0.570594C7.38278 2.59761 17.9121 8.68068 17.9121 8.68068C19.3121 9.48928 19.3121 11.5113 17.9121 12.3199C17.9121 12.3209 7.38278 18.4039 3.87267 20.431Z"
                  fill="#00C1FF"
                />
                <path
                  d="M15.462 20.4293C13.2083 21.7311 11.5894 20.6462 11.5894 18.7166C11.5894 16.6625 11.5894 10.4991 11.5894 10.4991C11.5894 10.4991 11.5894 4.33565 11.5894 2.28151C11.5894 0.35192 13.2073 -0.732908 15.462 0.568885C18.8948 2.55171 29.1931 8.50118 29.1931 8.50118C30.7308 9.38914 30.7308 11.609 29.1931 12.497C29.1921 12.497 18.8948 18.4464 15.462 20.4293Z"
                  fill="#BCEC30"
                />
                <mask
                  id="mask0_7_381"
                  style={{ maskType: 'alpha' }}
                  maskUnits="userSpaceOnUse"
                  x="11"
                  y="0"
                  width="20"
                  height="21"
                >
                  <path
                    d="M15.462 20.4293C13.2083 21.7311 11.5894 20.6462 11.5894 18.7166C11.5894 16.6625 11.5894 10.4991 11.5894 10.4991C11.5894 10.4991 11.5894 4.33565 11.5894 2.28151C11.5894 0.35192 13.2073 -0.732908 15.462 0.568885C18.8948 2.55171 29.1931 8.50118 29.1931 8.50118C30.7308 9.38914 30.7308 11.609 29.1931 12.497C29.1921 12.497 18.8948 18.4464 15.462 20.4293Z"
                    fill="#6FE4FF"
                  />
                </mask>
                <g mask="url(#mask0_7_381)">
                  <g filter="url(#filter0_f_7_381)">
                    <path
                      d="M3.87316 20.431C1.61946 21.7328 0.000488281 20.6479 0.000488281 18.7183C0.000488281 16.6642 0.000488281 10.5008 0.000488281 10.5008C0.000488281 10.5008 0.000488281 4.33736 0.000488281 2.28322C0.000488281 0.353629 1.61845 -0.731199 3.87316 0.570594C7.38327 2.59761 17.9126 8.68068 17.9126 8.68068C19.3126 9.48928 19.3126 11.5113 17.9126 12.3199C17.9126 12.3209 7.38327 18.4039 3.87316 20.431Z"
                      fill="#99D100"
                    />
                  </g>
                </g>
                <path
                  d="M37.6903 14.1679L38.0829 13.2739C38.3506 12.6659 38.8324 12.505 39.4391 12.952C40.5991 13.8103 42.5086 14.4361 45.0606 14.4361C47.2378 14.4361 48.1658 13.8818 48.1658 13.2202C48.1658 12.4693 47.3984 12.2726 46.1313 12.1117L43.2403 11.7362C39.7604 11.2713 38.0115 10.0197 38.0115 7.83837C38.0115 5.49611 39.921 3.6366 44.3468 3.6366C46.8095 3.6366 48.3978 4.01207 49.4328 4.40543C50.5749 4.85243 50.7356 5.22791 50.7356 6.15766V7.3735C50.7356 8.12445 50.4679 8.37477 49.7362 8.37477H48.9153C48.1658 8.37477 47.9159 8.10657 47.9159 7.3735V6.98014C47.4341 6.81922 46.2384 6.58678 44.8464 6.58678C42.4016 6.58678 41.2237 7.03378 41.2237 7.78473C41.2237 8.33901 41.9376 8.66085 43.2403 8.83965L46.0778 9.21513C49.5042 9.64425 51.3245 10.6813 51.3245 13.1845C51.3245 15.7234 48.9153 17.3505 44.6144 17.3505C41.4557 17.3505 38.9216 16.3492 37.9044 15.4195C37.5475 15.0619 37.494 14.6149 37.6903 14.1679Z"
                  fill="black"
                />
                <path
                  d="M69.0264 17.1354H67.563C66.8492 17.1354 66.6172 17.0281 66.2603 16.4917L63.512 12.433C63.1194 11.8787 62.816 11.7357 61.9951 11.7357H59.2469V16.1341C59.2469 16.8851 58.9792 17.1354 58.2475 17.1354H57.1946C56.4451 17.1354 56.1952 16.8672 56.1952 16.1341V2.93878H55.2137C54.4642 2.93878 54.2144 2.67058 54.2144 1.93751V1.04351C54.2144 0.292555 54.482 0.0422363 55.2137 0.0422363H58.2654C59.0149 0.0422363 59.2647 0.310435 59.2647 1.04351V8.76763H61.7274C62.5484 8.76763 62.8339 8.64247 63.2443 8.07031L65.5465 4.51221C65.9212 3.95793 66.1532 3.85066 66.867 3.85066H68.3304C69.1335 3.85066 69.2762 4.49433 68.8301 5.15589L66.2603 9.05371C65.9926 9.42918 65.6714 9.82254 65.368 10.1444C65.6892 10.4126 66.1354 10.8596 66.3138 11.1278L69.5261 15.8659C69.9722 16.4917 69.8116 17.1354 69.0264 17.1354Z"
                  fill="black"
                />
                <path
                  d="M74.2481 19.567V18.6908C74.2481 17.9399 74.5158 17.6896 75.2475 17.6896H76.5145C77.2819 17.6896 77.6567 17.5287 77.9422 16.9207L78.1028 16.581L72.0352 5.08424C71.6605 4.38693 71.9638 3.86841 72.7491 3.86841H74.1232C74.837 3.86841 75.1582 3.99357 75.4259 4.51208L77.96 9.73302C78.549 10.931 79.2092 12.3077 79.7268 13.5057C80.2622 12.3435 80.8689 11.0025 81.44 9.8403L84.0276 4.51208C84.2596 4.01145 84.6165 3.86841 85.3304 3.86841H86.7045C87.5076 3.86841 87.7931 4.40481 87.4183 5.08424L80.512 18.226C79.7089 19.7458 78.7988 20.5861 76.7287 20.5861H75.2118C74.498 20.5861 74.2481 20.3179 74.2481 19.567Z"
                  fill="black"
                />
                <path
                  d="M106.08 10.5025C106.08 14.7221 102.957 17.3505 98.7458 17.3505C96.9255 17.3505 95.5336 16.9035 94.5521 16.3492V19.9609C94.5521 20.7119 94.2844 20.9622 93.5527 20.9622H92.4998C91.7503 20.9622 91.5004 20.694 91.5004 19.9609V6.76558H90.5189C89.7694 6.76558 89.5195 6.49738 89.5195 5.76431V4.87031C89.5195 4.11935 89.7872 3.86904 90.5189 3.86904H93.0887C93.8382 3.86904 94.0881 4.13723 94.0881 4.87031V4.94183C95.0874 4.28027 96.6043 3.6366 98.7458 3.6366C102.957 3.65448 106.08 6.28282 106.08 10.5025ZM102.904 10.5025C102.904 8.03505 100.923 6.6583 98.4603 6.6583C96.6935 6.6583 95.248 7.40926 94.5699 8.01717V13.0057C95.2659 13.6136 96.6935 14.3645 98.4603 14.3645C100.923 14.3467 102.904 12.9699 102.904 10.5025Z"
                  fill="black"
                />
                <path
                  d="M122.705 9.46551C122.705 10.2165 122.438 10.4668 121.706 10.4668H120.653C119.904 10.4668 119.654 10.2522 119.654 9.46551C119.654 7.49872 118.904 6.6226 117.12 6.6226C115.424 6.6226 114.015 7.67752 113.229 8.96487V16.1347C113.229 16.8857 112.962 17.136 112.23 17.136H111.177C110.428 17.136 110.178 16.8678 110.178 16.1347V6.76564H109.196C108.447 6.76564 108.197 6.49745 108.197 5.76437V4.87037C108.197 4.11942 108.464 3.8691 109.196 3.8691H111.766C112.515 3.8691 112.765 4.1373 112.765 4.87037V5.72861C113.711 4.6737 115.157 3.65454 117.619 3.65454C121.224 3.65454 122.705 5.80013 122.705 9.46551Z"
                  fill="black"
                />
                <path
                  d="M124.6 10.5025C124.6 6.56897 127.919 3.65454 132.327 3.65454C136.699 3.65454 140.001 6.56897 140.001 10.5025C140.001 14.454 136.681 17.3684 132.327 17.3684C127.919 17.3684 124.6 14.454 124.6 10.5025ZM136.967 10.5025C136.967 8.21392 134.95 6.55109 132.327 6.55109C129.65 6.55109 127.633 8.2318 127.633 10.5025C127.633 12.8091 129.65 14.4898 132.327 14.4898C134.968 14.4898 136.967 12.8091 136.967 10.5025Z"
                  fill="black"
                />
                <defs>
                  <filter
                    id="filter0_f_7_381"
                    x="-8.92896"
                    y="-8.92774"
                    width="36.8208"
                    height="38.8571"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="4.46473"
                      result="effect1_foregroundBlur_7_381"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <input
              className={classNames(styles.modal__input, styles.login)}
              type="text"
              name="login"
              id="formlogin"
              placeholder="email"
            />
            <input
              className={classNames(styles.modal__input, styles.password)}
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            {regForm && (
              <>
                <input
                  className={classNames(
                    styles.modal__input,
                    styles.passwordDouble,
                  )}
                  type="password"
                  name="password"
                  id="passwordSecond"
                  placeholder="Повторите пароль"
                />
                <input
                  className={classNames(styles.modal__input, styles.firstName)}
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя (необязательно)"
                />
                <input
                  className={classNames(styles.modal__input, styles.firstLast)}
                  type="text"
                  name="first-last"
                  id="first-last"
                  placeholder="Фамилия (необязательно)"
                />
                <input
                  className={classNames(styles.modal__input, styles.city)}
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Город (необязательно)"
                />
              </>
            )}

            <button className={styles.modal__btnEnter} id="btnEnter">
              {regForm ? 'Зарегистрироваться' : 'Войти'}
            </button>
            {!regForm && (
              <button
                className={styles.modal__btnSignup}
                onClick={() => {
                  setRegForm(true)
                }}
                id="btnSignUp"
              >
                Зарегистрироваться
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
