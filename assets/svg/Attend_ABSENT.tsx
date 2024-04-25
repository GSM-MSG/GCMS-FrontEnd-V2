export const Attend_ABSENT = ({ color }: { color?: string }) => {

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <g clipPath='url(#clip0_746_7978)'>
        <path
          d='M2 2L22 22M2 22L22 2'
          stroke={color ? '#FF6666' : 'white'}
          strokeWidth='4'
          strokeLinecap='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_746_7978'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
