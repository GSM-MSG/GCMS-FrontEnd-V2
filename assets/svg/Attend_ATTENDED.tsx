export const Attend_ATTENDED = ({ color }: { color?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <g clip-path='url(#clip0_746_7970)'>
        <circle
          cx='12'
          cy='12'
          r='10'
          stroke={color ? '#4164E1' : 'white'}
          strokeWidth='4'
        />
      </g>
      <defs>
        <clipPath id='clip0_746_7970'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
