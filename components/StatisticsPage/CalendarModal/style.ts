import styled from '@emotion/styled'

export const Wrapper = styled.div`
  background: #1c1c1e;
  border-radius: 1rem;
  text-align: left;
  padding: 0 24px;
  min-width: 390px;
  min-height: 479px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`

export const ModalHeader = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h2`
  font-weight: 600;
  margin: 0;
`

export const Delete = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
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

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Layer = styled.div`
  border: 1px solid #464646;
  border-radius: 10px 10px 0 0;
  width: 342px;
  height: 249px;

  * {
    border: none;
    line-height: 1.4rem;
    text-align: center;
    text-decoration: none;
  }

  .react-calendar {
    background: #1c1c1e;
    color: #222;
    border-radius: 11px;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
    font-size: 13px;
    display: block;
  }

  .react-calendar__navigation {
    padding-top: 12px;
    margin: 0 auto;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      color: #fff;
      background: #1c1c1e;
      font-size: 16px;
      font-weight: 600;
      border-radius: 10px;
      padding: none;
    }

    abbr[title] {
      text-decoration: none;
    }

    span {
      word-break: keep-all;
    }
  }

  .react-calendar__navigation__label {
    pointer-events: none;
  }

  .react-calendar__viewContainer {
    padding: 0 17px;
  }

  .react-calendar__month-view__weekdays {
    font-size: 10px;
    font-weight: 400;
    max-height: 36px;
    padding: 12px 0;
    color: #fff;
    opacity: 0.3;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-calendar__month-view__days {
    background: none;
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    button {
      background: transparent;
      color: #fff;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;

      abbr {
        text-align: center;
        max-width: 24px;
        max-height: 24px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }

  .react-calendar__tile--active {
    abbr {
      flex: 0;
      background: #4164e1;
      font-weight: 700;
      color: #fff;
      font-size: 1rem;
      border-radius: 50%;
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #fff;
    opacity: 0.5;
  }
`

export const DateSelectBtn = styled.button`
  background: #4164e1;
  color: #fff;
  border: none;
  border-radius: 0 0 10px 10px;
  width: 342px;
  height: 48px;
  cursor: pointer;
`

export const DownloadBtn = styled(DateSelectBtn)`
  border-radius: 10px;
  position: absolute;
  bottom: 1rem;
`
