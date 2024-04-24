import styled from '@emotion/styled'
import { PeriodEnumType } from '.'
import Link from 'next/link'

export const Positioner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
`

export const Layer = styled.div`
  width: 90%;
  max-width: 43.75rem;
  display: flex;
  flex-direction: column;

  small {
    color: rgba(255, 255, 255, 0.31);
  }

  h3 {
    margin: 0;
  }
`

export const AllSelectBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`

export const AllSelectBtn = styled.button`
  color: #4164e1;
  background: 0;
  border: none;
`

export const InputBox = styled.div`
  position: relative;
  > svg {
    position: absolute;
    left: 20px;
    bottom: 16px;
  }
  input {
    padding: 0.9rem 3rem;
  }
`

export const SelectClassContainer = styled.div`
  position: relative;
  top: 20px;
  display: inline-flex;
  padding: 8px 15px;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 17px;
  background: #313134;
`
export const SelectClassItem = styled.a<{
  period: PeriodEnumType
  current: PeriodEnumType
}>`
  cursor: pointer;
  color: ${({ period, current }) =>
    period === current ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.4)'};
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;
  padding-left: 15px;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -1px;
    width: 2px;
    height: 10px;
    border-radius: 1px;
    background: #5a5a5a;
  }

  &:first-child {
    padding-left: 0;
    &::after {
      content: none; /* 첫 번째 요소에는 ::after를 표시하지 않음 */
    }
  }

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`

export const Header = styled.div`
  display: flex;
  padding-bottom: 24px;
  justify-content: space-between;
`

export const NavContainer = styled.div`
  display: flex;
  gap: 22px;
`

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const IconBox = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #212431;
  border-radius: 10px;
`

export const NavTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.31);
`

export const InputContainer = styled.div`
  font-size: 0.8125rem;
`

export const InputWrapper = styled.div`
  min-height: 20rem;
  input {
    font-size: 0.8125rem;
  }
`

export const Button = styled.button<{isPick: string}>`
  width: 100%;
  padding: 1rem 0rem;
  border-radius: 0.625rem;
  background: var(--Primary, #4164e1);
  color: #fff;
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1rem;
  border: none;
  border-radius: ${({ isPick }) => (isPick ? '0 0 0.625rem 0.625rem' : '0.625rem')};
`

export const ClassPick = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.31rem 2.42rem;
  place-content: center;
  padding: 1.5rem 0rem;
  justify-content: left;
  padding-left: 0.8rem;

  border-radius: 0.625rem 0.625rem 0 0;
  border: 1px solid #464646;
  border-bottom: none;
`

export const Class = styled.button<{selected: boolean}>`
  width: 3.1rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  color: #fff;
  font-size: 0.8125rem;
  font-weight: 500;
  border-radius: 0.75rem;
  background: ${({ selected }) => (selected ? "var(--Primary, #4164e1) ":"")};
  border: none;
`
//모달

export const Wrapper = styled.div`
  width: 24.375rem;
  background: rgb(30, 30, 30);
  padding-top: 1rem;
  border-radius: 1rem;
  min-width: 20rem;
  padding: 24px;

  input {
    margin-bottom: 10px;
  }
`

export const Title = styled.h2`
  font-size: 17px;
  font-weight: 600;
  margin: 0;
`

export const CancelBtn = styled.div`
  cursor: pointer;
`

export const Description = styled.p`
  padding: 0 1rem;
  white-space: pre-wrap;
  color: rgba(255, 255, 255, 0.6);
`

export const Buttons = styled.div`
  width: 100%;
  height: 3.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const LeftButton = styled.button`
  border: none;
  background: transparent;
  color: #5a5a5a;
  border-top: 1px solid #5a5a5a;
  border-right: 1px solid #5a5a5a;
`

export const RightButton = styled.button`
  border: none;
  background: transparent;
  color: #0a84ff;
  border-top: 1px solid #5a5a5a;
`

export const TitleWrapper = styled.div`
  display: inline-grid;
  margin-top: 12px;
  span {
    color: #646464;
    font-size: 13px;
    font-weight: 500;
  }
`



export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`

export const SelectDate = styled.p`
  font-weight: 600;
  color: #606d6d;
  margin: 0;
`

export const DateSelectionContainer = styled.input`
  font-weight: 500;
  color: #858585;
  outline: none;
  padding-left: 1rem;
  border: 1px solid #464646;
  border-radius: 8px;
  background: #1c1c1e;
  width: 100%;
  height: 45px;
  cursor: pointer;
`
