import styled from '@emotion/styled'

interface SelectType {
  select: boolean
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

interface OptionProps extends SelectType {
  url: string
  position: string
}

export const Option = styled.div<OptionProps>`
  width: 100%;
  height: 7rem;
  background: #292929;
  color: #fff;
  border-radius: 0.75rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;

  ${({ select }) => (select ? 'background: #8BE246; color: #000;' : '')}

  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: 90% ${({ position }) => position};
`

export const OptionType = styled.h3`
  margin: 0;
`

export const OptionDescription = styled.p<SelectType>`
  font-size: 0.9rem;
  white-space: pre-wrap;
  margin: 0.5rem 0 0 0;
  color: rgba(255, 255, 255, 0.7);

  ${({ select }) => (select ? 'color: #000;' : '')}
`
