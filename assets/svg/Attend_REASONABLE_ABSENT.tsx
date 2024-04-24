export const Attend_REASONABLE_ABSENT = ({ color }: { color?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <g clip-path='url(#clip0_1933_5170)'>
        <rect
          x='1.5'
          y='1.5'
          width='21'
          height='21'
          rx='3.5'
          stroke={color ? '#C1C1C1' : 'white'}
          stroke-width='3'
        />
      </g>
      <defs>
        <clipPath id='clip0_1933_5170'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
