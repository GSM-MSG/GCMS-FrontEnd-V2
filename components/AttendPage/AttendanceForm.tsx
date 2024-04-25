import React from 'react'
import * as S from './style'
import Calendar from 'react-calendar'
import dayjs from 'dayjs'
import { PeriodEnumType } from '.'
import { RedX } from '@/assets/svg/RedX'
import { Layer } from '../StatisticsPage/CalendarModal/style'
import Portal from '../Portal'

interface AttendanceFormProps {
  onClose: () => void
  isShow: string
  setIsPick: React.Dispatch<React.SetStateAction<string>>
  setClicked: React.Dispatch<React.SetStateAction<boolean>>
  date: Date
  setDate: React.Dispatch<React.SetStateAction<Date>>
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>
  clicked: boolean
  selectedPeriods: PeriodEnumType[]
  isPick: string
  onClickPeriod: (period: PeriodEnumType) => void
  periodArr: { text: string; period: PeriodEnumType }[]
  create: () => void
  download: () => void
}

const AttendanceForm: React.FC<AttendanceFormProps> = ({
  onClose,
  isShow,
  setIsPick,
  setClicked,
  date,
  setDate,
  setCurrentDate,
  clicked,
  selectedPeriods,
  isPick,
  onClickPeriod,
  periodArr,
  create,
  download,
}) => {
  const yoilArr = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <Portal onClose={onClose}>
      <S.Wrapper>
        <S.Header>
          <S.Title>출석표 {isShow.slice(0, 2)}</S.Title>
          <S.CancelBtn onClick={onClose}>
            <RedX />
          </S.CancelBtn>
        </S.Header>
        <S.InputWrapper>
          <S.DateContainer
            onFocus={() => {
              setIsPick('calendar')
              setClicked(true)
            }}
          >
            <S.SelectDate>날짜 선택</S.SelectDate>
            <S.DateSelectionContainer
              readOnly
              value={
                clicked
                  ? dayjs(date).format(
                      `YYYY.MM.DD (${yoilArr[dayjs(date).day()]})`
                    )
                  : ''
              }
              placeholder={isShow=='조회하기'?"조회할 교시를 선택해주세요. (미선택 시 현재 시간 조회)":"생성할 출석표의 날짜를 선택해주세요."}
            />
          </S.DateContainer>
          <S.DateContainer onFocus={() => setIsPick('period')}>
            <S.SelectDate>교시 선택</S.SelectDate>
            <S.DateSelectionContainer
              readOnly
              value={selectedPeriods.map((period) =>
                period === 'FIRST'
                  ? '1교시'
                  : period === 'SECOND'
                  ? '2교시'
                  : period === 'THIRD'
                  ? '3교시'
                  : period === 'FOURTH'
                  ? '4교시'
                  : period === 'FIFTH'
                  ? '5교시'
                  : period === 'SIXTH'
                  ? '6교시'
                  : period === 'SEVENTH'
                  ? '7교시'
                  : period === 'EIGHTH'
                  ? '8교시'
                  : period === 'NINTH'
                  ? '9교시'
                  : period === 'TENTH'
                  ? '10교시'
                  : period === 'ELEVENTH'
                  ? '11교시'
                  : ''
              )}
              placeholder={isShow=='조회하기'?"조회할 교시를 선택해주세요. (미선택 시 현재 시간 조회)":"생성할 출석표의 교시를 선택해주세요."}
            />
          </S.DateContainer>
          {isPick === 'calendar' ? (
            <Layer>
              <Calendar
                value={date}
                onChange={(value) => {
                  if (!(value instanceof Date)) return
                  setDate(value)
                  setCurrentDate(value)
                }}
                calendarType='US'
                locale='kr'
                formatDay={(_locale, date) =>
                  date.toLocaleString('en', { day: 'numeric' })
                }
              />
            </Layer>
          ) : (
            isPick === 'period' && (
              <S.ClassPick>
                {periodArr.map((item) => (
                  <S.Class
                    key={item.period}
                    onClick={() => onClickPeriod(item.period)}
                    selected={selectedPeriods.includes(item.period)}
                  >
                    {item.text}
                  </S.Class>
                ))}
              </S.ClassPick>
            )
          )}
        </S.InputWrapper>
        <S.Button
          isPick={isPick}
          onClick={isShow === '조회하기' ? download : create}
        >
          출석표 {isShow}
        </S.Button>
      </S.Wrapper>
    </Portal>
  )
}

export default AttendanceForm
