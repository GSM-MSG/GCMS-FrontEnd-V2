import { SelectType } from '@/type/components/ClubCreationPage'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  max-height: 45rem;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  margin-top: 2.5rem;
  color: #fff;
  font-size: 20px;
  margin: 0;
`

export const Options = styled.div`
  margin-top: 7.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Option = styled.div<SelectType>`
  margin-bottom: 18.75rem;
  width: 32%;
  cursor: pointer;
  border-radius: 0.625rem;
  background: #292929;
  overflow: hidden;
  color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 11.75rem;
  ${({ select }) => (select ? 'background: #8BE246; color: #000;' : '')}
`

export const OptionType = styled.h3`
  font-size: 1rem;
  margin: 0;
`

export const OptionDescription = styled.p<SelectType>`
  font-size: 0.8125rem;
  white-space: pre-wrap;
  ${({ select }) =>
    select ? 'color: rgba(0, 0, 0, 0.7);' : 'color: rgba(255, 255, 255, 0.7);'}
`
