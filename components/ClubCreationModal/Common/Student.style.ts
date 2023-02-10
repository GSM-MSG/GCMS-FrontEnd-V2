import styled from '@emotion/styled'

export const Wrapper = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.75rem;
  padding: 0.8rem 0.8rem;
  cursor: pointer;

  :hover {
    background: #2d2d2f;
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const UserSampleImg = styled.div`
  background: #444444;
  height: 2.8rem;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
`

export const UserImg = styled.img`
  width: 2.8rem;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
  object-fit: cover;
  object-position: center;
`

export const GradeInfo = styled.div`
  color: #fff;
`

export const UserName = styled.h4`
  margin: 0;
`

export const StudentDescription = styled.p`
  margin: 0;
  opacity: 0.35;
  font-size: 0.9rem;
`

export const CheckBox = styled.input`
  display: none;

  &:checked + label {
    border: 0.1rem solid #8be246;

    ::after {
      background: #575ce0;
    }
  }
`

export const CheckBoxLabel = styled.label`
  width: 1rem;
  height: 1rem;
  border: 0.1rem solid #6a6a6a;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ::after {
    content: '';
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
  }
`
