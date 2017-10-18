import React from 'react'
import colors from 'fyndiq-styles-colors'

import styles from '../illustrations.css'

const LoginIllustration = ({ className }) => (
  <svg
    viewBox="0 0 201 200"
    className={`
      ${styles.illustration}
      ${className}
    `}
  >
    <defs>
      <path d="M0.677,100 C0.677,155.228 45.448,200 100.677,200 C155.905,200 200.677,155.228 200.677,100 C200.677,44.771 155.905,0 100.677,0 C45.448,0 0.677,44.771 0.677,100 Z" id="login-path-1" />
      <path d="M2.774,0.947 C1.615,0.947 0.676,1.887 0.676,3.045 C0.676,4.203 1.615,5.142 2.774,5.142 L39.559,5.142 C40.716,5.142 41.657,4.203 41.657,3.045 C41.657,1.887 40.716,0.947 39.559,0.947 L2.774,0.947 Z" id="login-path-3" />
      <path d="M2.263,0.947 C1.386,0.947 0.676,1.887 0.676,3.045 C0.676,4.203 1.386,5.142 2.263,5.142 L30.089,5.142 C30.966,5.142 31.677,4.203 31.677,3.045 C31.677,1.887 30.966,0.947 30.089,0.947 L2.263,0.947 Z" id="login-path-5" />
      <path d="M2.69,0.83 C1.532,0.83 0.592,1.77 0.592,2.927 C0.592,4.085 1.532,5.025 2.69,5.025 L44.848,5.025 C46.005,5.025 46.946,4.085 46.946,2.927 C46.946,1.77 46.005,0.83 44.848,0.83 L2.69,0.83 Z" id="login-path-7" />
      <path d="M2.615,0.83 C1.457,0.83 0.518,1.77 0.518,2.927 C0.518,4.085 1.457,5.025 2.615,5.025 L19.452,5.025 C20.609,5.025 21.549,4.085 21.549,2.927 C21.549,1.77 20.609,0.83 19.452,0.83 L2.615,0.83 Z" id="login-path-9" />
      <path d="M2.348,0.83 C1.19,0.83 0.25,1.77 0.25,2.927 C0.25,4.085 1.19,5.025 2.348,5.025 L36.442,5.025 C37.599,5.025 38.539,4.085 38.539,2.927 C38.539,1.77 37.599,0.83 36.442,0.83 L2.348,0.83 Z" id="login-path-11" />
      <path d="M2.271,0.83 C1.113,0.83 0.174,1.77 0.174,2.927 C0.174,4.085 1.113,5.025 2.271,5.025 L44.48,5.025 C45.638,5.025 46.576,4.085 46.576,2.927 C46.576,1.77 45.638,0.83 44.48,0.83 L2.271,0.83 Z" id="login-path-13" />
      <path d="M2.494,0.947 C1.336,0.947 0.397,1.887 0.397,3.045 C0.397,4.203 1.336,5.142 2.494,5.142 L41.378,5.142 C42.537,5.142 43.476,4.203 43.476,3.045 C43.476,1.887 42.537,0.947 41.378,0.947 L2.494,0.947 Z" id="login-path-15" />
      <path d="M3.282,0.947 C1.688,0.947 0.397,1.887 0.397,3.045 C0.397,4.203 1.688,5.142 3.282,5.142 L56.79,5.142 C58.383,5.142 59.677,4.203 59.677,3.045 C59.677,1.887 58.383,0.947 56.79,0.947 L3.282,0.947 Z" id="login-path-17" />
      <path d="M20.682,11.151 C22.803,5.012 28.646,0.799 35.185,0.791 C43.651,0.794 50.526,7.673 50.53,16.137 C50.53,16.797 50.477,17.456 50.394,18.109 C55.432,19.234 59.049,23.709 59.049,28.915 C59.047,35.031 54.08,39.998 47.963,40 L11.762,40 C5.645,39.998 0.679,35.03 0.676,28.915 C0.675,24.562 3.22,20.652 7.161,18.85 C7.111,18.481 7.064,18.111 7.064,17.733 C7.067,13.085 10.84,9.313 15.488,9.309 C17.389,9.309 19.202,9.981 20.682,11.151 Z M35.185,3.798 C29.786,3.792 24.897,7.434 23.361,12.601 L23.361,12.6 C23.108,13.448 22.437,14.103 21.585,14.339 C21.358,14.403 21.127,14.436 20.898,14.436 C20.258,14.434 19.636,14.194 19.159,13.751 L19.159,13.754 C18.151,12.823 16.855,12.318 15.488,12.316 C13.993,12.318 12.647,12.923 11.661,13.906 C10.677,14.893 10.073,16.238 10.071,17.733 C10.071,18.045 10.098,18.361 10.152,18.671 L10.152,18.667 C10.177,18.813 10.188,18.959 10.188,19.105 C10.19,20.127 9.581,21.061 8.625,21.47 L8.62,21.472 C5.618,22.742 3.685,25.657 3.683,28.915 C3.685,31.143 4.587,33.154 6.053,34.625 C7.522,36.09 9.532,36.993 11.762,36.993 L47.963,36.993 C50.193,36.993 52.205,36.09 53.674,34.625 C55.14,33.154 56.041,31.143 56.042,28.915 C56.042,25.019 53.265,21.679 49.447,20.971 L49.446,20.971 C48.212,20.739 47.343,19.669 47.346,18.446 L47.375,18.053 C47.474,17.421 47.522,16.777 47.522,16.137 C47.522,12.734 46.142,9.658 43.905,7.417 C41.665,5.18 38.591,3.8 35.185,3.798 Z M49.995,18.015 L49.993,18.015 L49.995,18.015 Z M7.451,18.703 C7.45,18.703 7.45,18.703 7.45,18.703 L7.446,18.703 L7.448,18.703 C7.448,18.703 7.449,18.703 7.45,18.703 L7.451,18.703 Z M7.188,19.176 L7.188,19.177 L7.188,19.176 Z" id="login-path-19" />
      <path d="M0.105,5.666 C0.105,2.595 2.605,0.094 5.677,0.094 C8.747,0.094 11.247,2.595 11.247,5.666 C11.247,8.084 9.69,10.127 7.534,10.895 L7.534,24.237 C7.534,25.263 6.703,26.095 5.677,26.095 C4.649,26.095 3.819,25.263 3.819,24.237 L3.819,10.895 C1.662,10.127 0.105,8.084 0.105,5.666 Z M3.819,5.666 C3.819,6.69 4.651,7.523 5.677,7.523 C6.702,7.523 7.534,6.69 7.534,5.666 C7.534,4.642 6.702,3.809 5.677,3.809 C4.651,3.809 3.819,4.642 3.819,5.666 Z" id="login-path-21" />
      <path d="M8.582,1.982 C8.582,5.607 5.633,8.556 2.008,8.556 C1.281,8.556 0.693,9.144 0.693,9.87 C0.693,10.598 1.281,11.186 2.008,11.186 C7.081,11.186 11.212,7.056 11.212,1.982 C11.212,1.255 10.624,0.667 9.897,0.667 C9.169,0.667 8.582,1.255 8.582,1.982 Z" id="login-path-23" />
      <path d="M27.148,1.057 C27,1.349 23.421,8.222 15.175,8.222 C6.942,8.222 3.362,1.37 3.202,1.058 C2.877,0.412 2.089,0.151 1.44,0.473 C0.79,0.797 0.527,1.588 0.852,2.237 C1.027,2.588 5.274,10.851 15.175,10.851 C25.078,10.851 29.324,2.588 29.5,2.236 C29.823,1.588 29.561,0.801 28.914,0.475 C28.725,0.379 28.523,0.334 28.324,0.334 C27.845,0.334 27.381,0.599 27.148,1.057 Z" id="login-path-25" />
      <path d="M4.708,19.101 C10.641,7.761 22.515,0.001 36.175,0.001 C49.834,0.001 61.711,7.761 67.644,19.1 C67.675,19.157 67.708,19.207 67.732,19.267 C70.245,24.135 71.677,29.653 71.677,35.5 C71.677,55.074 55.752,70.999 36.177,70.999 C16.602,70.999 0.677,55.074 0.677,35.5 C0.677,29.653 2.107,24.135 4.622,19.267 C4.644,19.207 4.677,19.157 4.708,19.101 Z M36.175,2.63 C24.307,2.63 13.888,8.954 8.11,18.407 L64.241,18.407 C58.463,8.954 48.044,2.63 36.175,2.63 Z M50.284,39.414 C49.971,39.434 49.66,39.444 49.35,39.444 C44.518,39.444 39.949,37.017 37.261,32.964 C36.766,32.22 35.584,32.22 35.091,32.964 C32.23,37.276 27.243,39.763 22.068,39.413 C14.496,38.922 8.565,32.387 8.565,24.531 L8.565,21.037 L6.668,21.037 C4.518,25.405 3.305,30.313 3.305,35.5 C3.305,53.624 18.052,68.37 36.175,68.37 C54.3,68.37 69.046,53.624 69.046,35.5 C69.046,30.313 67.833,25.405 65.683,21.037 L63.787,21.037 L63.787,24.532 C63.787,32.387 57.855,38.924 50.284,39.414 Z M61.156,21.037 L11.196,21.037 L11.194,21.037 L11.196,21.037 L11.196,24.531 C11.196,31.005 16.047,36.388 22.239,36.788 C26.484,37.068 30.56,35.04 32.9,31.51 C33.631,30.407 34.855,29.748 36.177,29.748 C37.499,29.748 38.722,30.407 39.455,31.51 C41.795,35.04 45.883,37.071 50.115,36.788 C56.306,36.389 61.156,31.005 61.156,24.531 L61.156,21.037 Z" id="login-path-27" />
      <path d="M8.286,1.982 C8.286,5.607 5.336,8.556 1.713,8.556 C0.985,8.556 0.397,9.144 0.397,9.87 C0.397,10.598 0.985,11.186 1.713,11.186 C6.785,11.186 10.915,7.056 10.915,1.982 C10.915,1.255 10.328,0.667 9.601,0.667 C8.873,0.667 8.286,1.255 8.286,1.982 Z" id="login-path-29" />
      <path d="M20.361,9.601 C21.896,4.437 26.779,0.799 32.173,0.799 C32.177,0.799 32.181,0.799 32.185,0.799 C35.591,0.799 38.665,2.18 40.905,4.418 C43.142,6.657 44.522,9.733 44.522,13.138 C44.522,13.776 44.474,14.42 44.375,15.052 L44.346,15.445 C44.343,16.668 45.212,17.74 46.446,17.972 L46.447,17.972 C50.265,18.678 53.042,22.018 53.042,25.914 C53.042,28.143 52.14,30.154 50.674,31.623 C49.205,33.089 47.193,33.992 44.963,33.992 L8.762,33.992 C6.532,33.992 4.522,33.089 3.053,31.623 C1.587,30.154 0.685,28.143 0.683,25.914 C0.685,22.656 2.618,19.742 5.62,18.471 L5.625,18.469 C6.581,18.062 7.19,17.127 7.188,16.106 C7.188,15.96 7.177,15.812 7.152,15.668 L7.152,15.67 C7.098,15.361 7.071,15.046 7.071,14.733 C7.073,13.238 7.677,11.893 8.661,10.907 C9.647,9.922 10.993,9.317 12.488,9.317 C13.856,9.32 15.151,9.825 16.159,10.754 L16.159,10.752 C16.636,11.193 17.258,11.435 17.899,11.435 C18.125,11.435 18.355,11.404 18.581,11.341 C18.58,11.342 18.579,11.342 18.579,11.343 L18.585,11.34 C18.586,11.34 18.587,11.34 18.589,11.339 C19.439,11.101 20.108,10.445 20.361,9.599 L20.361,9.601 Z M18.585,11.34 L18.591,11.338 C18.59,11.338 18.59,11.339 18.589,11.339 C18.588,11.339 18.586,11.34 18.585,11.34 Z M18.581,11.341 C18.582,11.341 18.584,11.341 18.585,11.34 C18.583,11.34 18.582,11.341 18.581,11.341 Z" id="login-path-31" />
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-613, -71)">
        <g transform="translate(430, 71.312500)">
          <g transform="translate(182.667969, 0)">
            <g id="Group-3">
              <mask id="login-mask-2" fill="white">
                <use xlinkHref="#login-path-1" />
              </mask>
              <g id="Clip-2" />
              <polygon id="Fill-1" fill={colors.palegrey} mask="url(#login-mask-2)" points="-4.324 205 205.676 205 205.676 -5 -4.324 -5" />
            </g>
            <g id="Group-6" transform="translate(4, 166)">
              <mask id="login-mask-4" fill="white">
                <use xlinkHref="#login-path-3" />
              </mask>
              <g id="Clip-5" />
              <polygon id="Fill-4" fill={colors.border} mask="url(#login-mask-4)" points="-4.324 10.142 46.656 10.142 46.656 -4.053 -4.324 -4.053" />
            </g>
            <g id="Group-9" transform="translate(51, 166)">
              <mask id="login-mask-6" fill="white">
                <use xlinkHref="#login-path-5" />
              </mask>
              <g id="Clip-8" />
              <polygon id="Fill-7" fill={colors.border} mask="url(#login-mask-6)" points="-3.106 10.142 35.458 10.142 35.458 -4.053 -3.106 -4.053" />
            </g>
            <g id="Group-12" transform="translate(20, 174)">
              <mask id="login-mask-8" fill="white">
                <use xlinkHref="#login-path-7" />
              </mask>
              <g id="Clip-11" />
              <polygon id="Fill-10" fill={colors.border} mask="url(#login-mask-8)" points="-4.408 10.025 51.945 10.025 51.945 -4.17 -4.408 -4.17" />
            </g>
            <g id="Group-15" transform="translate(71, 174)">
              <mask id="login-mask-10" fill="white">
                <use xlinkHref="#login-path-9" />
              </mask>
              <g id="Clip-14" />
              <polygon id="Fill-13" fill={colors.border} mask="url(#login-mask-10)" points="-4.482 10.025 26.548 10.025 26.548 -4.17 -4.482 -4.17" />
            </g>
            <g id="Group-18" transform="translate(97, 174)">
              <mask id="login-mask-12" fill="white">
                <use xlinkHref="#login-path-11" />
              </mask>
              <g id="Clip-17" />
              <polygon id="Fill-16" fill={colors.border} mask="url(#login-mask-12)" points="-4.749 10.025 43.539 10.025 43.539 -4.17 -4.749 -4.17" />
            </g>
            <g id="Group-21" transform="translate(139, 174)">
              <mask id="login-mask-14" fill="white">
                <use xlinkHref="#login-path-13" />
              </mask>
              <g id="Clip-20" />
              <polygon id="Fill-19" fill={colors.border} mask="url(#login-mask-14)" points="-4.826 10.025 51.576 10.025 51.576 -4.17 -4.826 -4.17" />
            </g>
            <g id="Group-24" transform="translate(153, 166)">
              <mask id="login-mask-16" fill="white">
                <use xlinkHref="#login-path-15" />
              </mask>
              <g id="Clip-23" />
              <polygon id="Fill-22" fill={colors.border} mask="url(#login-mask-16)" points="-4.603 10.142 48.476 10.142 48.476 -4.053 -4.603 -4.053" />
            </g>
            <g id="Group-27" transform="translate(88, 166)">
              <mask id="login-mask-18" fill="white">
                <use xlinkHref="#login-path-17" />
              </mask>
              <g id="Clip-26" />
              <polygon id="Fill-25" fill={colors.border} mask="url(#login-mask-18)" points="-6.484 10.142 66.556 10.142 66.556 -4.053 -6.484 -4.053" />
            </g>
            <g id="Group-33" transform="translate(33, 30)">
              <mask id="login-mask-20" fill="white">
                <use xlinkHref="#login-path-19" />
              </mask>
              <g id="Clip-32" />
              <polygon id="Fill-31" fill={colors.border} mask="url(#login-mask-20)" points="-6.841 47.517 66.567 47.517 66.567 -6.726 -6.841 -6.726" />
            </g>
            <g id="Group-42" transform="translate(63, 39)">
              <path d="M44.3033,65.7764 C44.3033,68.1494 42.3793,70.0734 40.0063,70.0734 C37.6343,70.0734 35.7103,68.1494 35.7103,65.7764 C35.7103,63.4034 37.6343,61.4794 40.0063,61.4794 C42.3793,61.4794 44.3033,63.4034 44.3033,65.7764" id="Fill-34" fill="#FFFFFF" />
              <path d="M74.9615,41.5234 L74.9615,97.2404 C74.9615,99.2834 73.2955,100.9494 71.2465,100.9494 L8.1065,100.9494 C6.0575,100.9494 4.3915,99.2834 4.3915,97.2404 L4.3915,41.5234 L74.9615,41.5234 Z" id="Fill-36" fill={colors.border} />
              <path d="M63.817,37.8086 L63.817,28.5216 C63.817,15.2076 52.989,4.3806 39.676,4.3806 C26.364,4.3806 15.536,15.2076 15.536,28.5216 L15.536,37.8086 L63.817,37.8086 Z M74.962,97.2406 L74.962,41.5236 L4.391,41.5236 L4.391,97.2406 C4.391,99.2836 6.057,100.9496 8.106,100.9496 L71.247,100.9496 C73.296,100.9496 74.962,99.2836 74.962,97.2406 L74.962,97.2406 Z M78.676,39.6656 L78.676,97.2406 C78.676,101.3316 75.345,104.6636 71.247,104.6636 L8.106,104.6636 C4.008,104.6636 0.676,101.3316 0.676,97.2406 L0.676,39.6656 C0.676,38.6416 1.509,37.8086 2.534,37.8086 L11.821,37.8086 L11.821,28.5216 C11.821,13.1656 24.314,0.6656 39.676,0.6656 C55.039,0.6656 67.532,13.1656 67.532,28.5216 L67.532,37.8086 L76.819,37.8086 C77.843,37.8086 78.676,38.6416 78.676,39.6656 L78.676,39.6656 Z" id="Fill-38" fill={colors.black} />
              <path d="M37.819,70.8955 L37.819,84.2375 C37.819,85.2625 38.649,86.0945 39.676,86.0945 C40.704,86.0945 41.534,85.2625 41.534,84.2375 L41.534,70.8955 C43.69,70.1265 45.248,68.0835 45.248,65.6665 C45.248,62.5945 42.748,60.0945 39.676,60.0945 C36.605,60.0945 34.105,62.5945 34.105,65.6665 C34.105,68.0835 35.663,70.1265 37.819,70.8955 M39.676,63.8085 C40.702,63.8085 41.534,64.6425 41.534,65.6665 C41.534,66.6895 40.702,67.5235 39.676,67.5235 C38.651,67.5235 37.819,66.6895 37.819,65.6665 C37.819,64.6425 38.651,63.8085 39.676,63.8085" id="Fill-40" fill={colors.black} />
            </g>
            <ellipse id="Oval" fill="#FFFFFF" cx="103.5" cy="105" rx="3.5" ry="4" />
            <g id="Group-45" transform="translate(97, 99)">
              <mask id="login-mask-22" fill="white">
                <use xlinkHref="#login-path-21" />
              </mask>
              <g id="Clip-44" />
              <polygon id="Fill-43" fill={colors.black} mask="url(#login-mask-22)" points="-9.181 35.381 20.534 35.381 20.534 -9.191 -9.181 -9.191" />
            </g>
            <g id="Group-50" transform="translate(104, 43)">
              <path d="M45.4147,2.4111 C63.4647,8.1121 73.5207,27.4391 67.8167,45.4991 C62.1157,63.5501 42.7827,73.5941 24.7317,67.8921 C6.6827,62.1911 -3.3653,42.8671 2.3357,24.8171 C8.0397,6.7571 27.3637,-3.2899 45.4147,2.4111" id="Fill-46" fill="#FFFFFF" />
              <path d="M48.0084,34.1855 C47.2804,34.1855 46.6934,33.5975 46.6934,32.8705 C46.6934,32.1435 47.2804,31.5555 48.0084,31.5555 C51.6324,31.5555 54.5814,28.6065 54.5814,24.9815 C54.5814,24.2545 55.1694,23.6665 55.8974,23.6665 C56.6234,23.6665 57.2114,24.2545 57.2114,24.9815 C57.2114,30.0555 53.0814,34.1855 48.0084,34.1855" id="Fill-48" fill={colors.black} />
            </g>
            <g id="Group-53" transform="translate(150, 66)">
              <mask id="login-mask-24" fill="white">
                <use xlinkHref="#login-path-23" />
              </mask>
              <g id="Clip-52" />
              <polygon id="Fill-51" fill={colors.black} mask="url(#login-mask-24)" points="-5.881 17.759 17.786 17.759 17.786 -5.907 -5.881 -5.907" />
            </g>
            <path d="M152.9137,90.4756 C152.2677,90.1476 151.4777,90.4086 151.1477,91.0566 C151.0007,91.3486 147.4207,98.2216 139.1757,98.2216 C130.9417,98.2216 127.3617,91.3706 127.2027,91.0586 C126.8767,90.4126 126.0897,90.1516 125.4397,90.4726 C124.7907,90.7966 124.5267,91.5876 124.8517,92.2376 C125.0267,92.5876 129.2737,100.8516 139.1757,100.8516 C149.0777,100.8516 153.3237,92.5876 153.5007,92.2356 C153.8237,91.5876 153.5607,90.8006 152.9137,90.4756" id="Fill-54" fill={colors.black} />
            <g id="Group-58" transform="translate(124, 90)">
              <mask id="login-mask-26" fill="white">
                <use xlinkHref="#login-path-25" />
              </mask>
              <g id="Clip-57" />
              <polygon id="Fill-56" fill={colors.black} mask="url(#login-mask-26)" points="-5.861 17.426 36.212 17.426 36.212 -6.24 -5.861 -6.24" />
            </g>
            <path d="M170.6442,62.0996 C164.7102,50.7606 152.8342,43.0006 139.1752,43.0006 C125.5152,43.0006 113.6412,50.7606 107.7072,62.1006 C107.6772,62.1566 107.6442,62.2066 107.6222,62.2676 C105.1072,67.1356 103.6772,72.6536 103.6772,78.4996 C103.6772,98.0746 119.6022,113.9986 139.1772,113.9986 C158.7512,113.9986 174.6762,98.0746 174.6762,78.4996 C174.6762,72.6536 173.2462,67.1356 170.7322,62.2676 C170.7082,62.2066 170.6752,62.1566 170.6442,62.0996 L170.6442,62.0996 Z M139.1752,45.6296 C151.0442,45.6296 161.4622,51.9536 167.2412,61.4076 L111.1102,61.4076 C116.8882,51.9536 127.3072,45.6296 139.1752,45.6296 L139.1752,45.6296 Z M114.1942,64.0366 L164.1572,64.0366 L164.1572,67.5306 C164.1572,74.0046 159.3062,79.3886 153.1152,79.7876 C148.8822,80.0716 144.7942,78.0396 142.4552,74.5096 C141.7222,73.4066 140.4982,72.7476 139.1772,72.7476 C137.8552,72.7476 136.6302,73.4066 135.9002,74.5096 C133.5602,78.0396 129.4842,80.0686 125.2392,79.7876 C119.0472,79.3876 114.1972,74.0046 114.1972,67.5306 L114.1972,64.0366 L114.1942,64.0366 Z M139.1752,111.3706 C121.0512,111.3706 106.3052,96.6236 106.3052,78.4996 C106.3052,73.3136 107.5182,68.4056 109.6672,64.0366 L111.5652,64.0366 L111.5652,67.5306 C111.5652,75.3866 117.4962,81.9226 125.0682,82.4126 C130.2432,82.7626 135.2302,80.2766 138.0902,75.9636 C138.5832,75.2196 139.7662,75.2196 140.2612,75.9636 C142.9492,80.0176 147.5182,82.4436 152.3502,82.4436 C152.6602,82.4436 152.9712,82.4336 153.2842,82.4136 C160.8552,81.9236 166.7872,75.3866 166.7872,67.5326 L166.7872,64.0366 L168.6832,64.0366 C170.8332,68.4056 172.0452,73.3136 172.0452,78.4996 C172.0452,96.6236 157.3002,111.3706 139.1752,111.3706 L139.1752,111.3706 Z" id="Fill-59" fill={colors.black} />
            <g id="Group-63" transform="translate(103, 43)">
              <mask id="login-mask-28" fill="white">
                <use xlinkHref="#login-path-27" />
              </mask>
              <g id="Clip-62" />
              <polygon id="Fill-61" fill={colors.black} mask="url(#login-mask-28)" points="-5.897 77.573 78.25 77.573 78.25 -6.573 -5.897 -6.573" />
            </g>
            <path d="M125.7125,77.1855 C124.9845,77.1855 124.3975,76.5975 124.3975,75.8705 C124.3975,75.1435 124.9845,74.5555 125.7125,74.5555 C129.3365,74.5555 132.2855,71.6065 132.2855,67.9815 C132.2855,67.2545 132.8735,66.6665 133.6015,66.6665 C134.3275,66.6665 134.9155,67.2545 134.9155,67.9815 C134.9155,73.0555 130.7855,77.1855 125.7125,77.1855" id="Fill-64" fill={colors.black} />
            <g id="Group-68" transform="translate(124, 66)">
              <mask id="login-mask-30" fill="white">
                <use xlinkHref="#login-path-29" />
              </mask>
              <g id="Clip-67" />
              <polygon id="Fill-66" fill={colors.black} mask="url(#login-mask-30)" points="-6.177 17.759 17.49 17.759 17.49 -5.907 -6.177 -5.907" />
            </g>
            <g id="Group-30" transform="translate(36, 33)">
              <mask id="login-mask-32" fill="white">
                <use xlinkHref="#login-path-31" />
              </mask>
              <g id="Clip-29" />
              <polygon id="Fill-28" fill="#FFFFFF" mask="url(#login-mask-32)" points="-6.834 41.51 60.56 41.51 60.56 -6.718 -6.834 -6.718" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default LoginIllustration
