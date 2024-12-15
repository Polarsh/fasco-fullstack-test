import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link to={'/'}>
      <svg
        className={`h-auto w-auto ${className}`}
        width='166'
        height='39'
        viewBox='0 0 166 39'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0.288 38V35.608L5.072 34.464V5.136L0.288 3.992V1.6H27.12V12.26H24.728L22.544 5.084L11.468 4.668V17.98L22.7 17.044V21.672L11.468 20.788V34.464L17.292 35.608V38H0.288ZM24.8003 38V35.608L29.6883 34.464L42.3243 1.34H46.0683L57.9243 34.516L62.7083 35.608V38H47.4203V35.608L51.2683 34.724L48.7723 27.704H36.0323L33.3283 34.568L37.9043 35.608V38H24.8003ZM37.1763 24.636H47.6283L42.5323 10.44L37.1763 24.636ZM65.7658 9.92C65.7658 7.04267 66.9098 4.80667 69.1978 3.212C71.4858 1.61733 74.4498 0.819998 78.0898 0.819998C81.9724 0.819998 85.5258 1.21866 88.7498 2.016L88.4898 12H86.1498L83.5498 4.512C82.0938 4.23467 80.6204 4.096 79.1298 4.096C76.7378 4.096 74.8484 4.564 73.4618 5.5C72.1098 6.436 71.4338 7.736 71.4338 9.4C71.4338 10.8213 72.0404 12.0173 73.2538 12.988C74.5018 13.924 76.6511 15.0333 79.7018 16.316C81.3311 16.9747 82.6658 17.5987 83.7058 18.188C84.7804 18.7427 85.9244 19.488 87.1378 20.424C88.3511 21.36 89.2524 22.4867 89.8418 23.804C90.4658 25.1213 90.7778 26.5947 90.7778 28.224C90.7778 31.6907 89.4951 34.36 86.9298 36.232C84.5378 37.9653 81.5391 38.8147 77.9338 38.78C76.9631 38.78 75.3511 38.6933 73.0978 38.52C70.8791 38.3467 68.4698 37.8787 65.8698 37.116V26.872H68.2618L70.9138 34.672C72.3698 35.1227 74.0684 35.348 76.0098 35.348C78.7138 35.348 80.8978 34.88 82.5618 33.944C84.2258 32.9733 85.0578 31.4653 85.0578 29.42C85.0578 27.86 84.3124 26.508 82.8218 25.364C81.3311 24.22 79.1471 23.024 76.2698 21.776C72.3178 20.0773 69.5791 18.4307 68.0538 16.836C66.5284 15.2413 65.7658 12.936 65.7658 9.92ZM114.691 0.819998C118.712 0.819998 122.092 1.42667 124.831 2.64V12.468H122.439L120.047 4.772C118.695 4.46 117.135 4.304 115.367 4.304C106.735 4.304 102.419 9.46933 102.419 19.8C102.419 30.1307 106.388 35.296 114.327 35.296C115.506 35.296 116.563 35.2613 117.499 35.192C118.435 35.1227 119.284 35.0187 120.047 34.88L123.063 26.664H125.455L125.091 36.492C124.606 36.7693 123.912 37.0467 123.011 37.324C122.11 37.6013 121.122 37.844 120.047 38.052C119.007 38.26 117.915 38.4333 116.771 38.572C115.662 38.7107 114.639 38.78 113.703 38.78C107.844 38.78 103.407 37.1507 100.391 33.892C97.3748 30.6333 95.8668 25.936 95.8668 19.8C95.8668 13.664 97.4268 8.96667 100.547 5.708C103.702 2.44933 108.416 0.819998 114.691 0.819998ZM148.174 0.819998C150.982 0.819998 153.46 1.288 155.61 2.224C157.759 3.16 159.579 4.46 161.07 6.124C162.56 7.788 163.687 9.78133 164.45 12.104C165.212 14.4267 165.594 16.9747 165.594 19.748C165.594 22.556 165.212 25.1213 164.45 27.444C163.722 29.7667 162.612 31.7773 161.122 33.476C159.666 35.14 157.846 36.44 155.662 37.376C153.512 38.312 151.016 38.78 148.174 38.78C145.158 38.78 142.54 38.2773 140.322 37.272C138.138 36.2667 136.335 34.9147 134.914 33.216C133.492 31.4827 132.435 29.4547 131.742 27.132C131.083 24.8093 130.754 22.3133 130.754 19.644C130.754 17.044 131.1 14.6173 131.794 12.364C132.487 10.076 133.544 8.08267 134.966 6.384C136.387 4.65066 138.19 3.29866 140.374 2.328C142.592 1.32266 145.192 0.819998 148.174 0.819998ZM148.174 3.888C144.638 3.888 141.951 5.37867 140.114 8.36C138.311 11.3067 137.41 15.12 137.41 19.8C137.41 24.7573 138.363 28.6573 140.27 31.5C142.211 34.308 144.846 35.712 148.174 35.712C151.502 35.712 154.119 34.308 156.026 31.5C157.967 28.6573 158.938 24.7573 158.938 19.8C158.938 15.12 158.019 11.3067 156.182 8.36C154.379 5.37867 151.71 3.888 148.174 3.888Z'
          fill='#484848'
        />
      </svg>
    </Link>
  )
}