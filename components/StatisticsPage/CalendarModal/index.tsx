import Portal from '@/components/Portal'
import * as S from './style'
import { RedX } from '@/assets/svg/RedX'
import Calendar from 'react-calendar'
import { useState } from 'react'
import { useDownload } from '@/hooks'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'
import toastOption from '@/lib/toastOption'

interface Props {
  title: string
  onClose: () => void
}

const CalenderModal = ({ title, onClose }: Props) => {
  const [date, setDate] = useState(new Date())
  const [currentDate, setCurrentDate] = useState('')
  const [clicked, setClicked] = useState(false)
  const [onCanlendar, setOnCalendar] = useState(false)
  const yoilArr = ['일', '월', '화', '수', '목', '금', '토']

  const { fetch: attendanceDownload } = useDownload({
    method: 'get',
    url: `/attend/attend/excel?currentDate=${currentDate}`,
    fileName: `${currentDate}_출석부`,
    fileType: 'xlsx',
  })

  const onClick = () => {
    setOnCalendar(true)
    setClicked(true)
    setCurrentDate(dayjs(date).format('YYYY-MM-DD'))
  }
  
  const checkNullValue = () => {
    if(currentDate.trim().length === 0) {
      toast.error('출력할 주간을 선택해주세요', toastOption);
    } else {
      attendanceDownload();
    }
  }

  return (
    <Portal onClose={onClose}>
      <S.Wrapper>
        <S.ModalHeader>
          <S.Title>{title}</S.Title>
          <S.Delete onClick={onClose}>
            <RedX />
          </S.Delete>
        </S.ModalHeader>
        <S.DateContainer>
          <S.SelectDate>날짜 선택</S.SelectDate>
          <S.DateSelectionContainer
            readOnly
            onClick={onClick}
            value={
              clicked
                ? dayjs(date).format(
                    `YYYY.MM.DD (${yoilArr[dayjs(date).day()]})`
                  )
                : ''
            }
            placeholder='출력할 주간을 선택해주세요.'
          />
        </S.DateContainer>
        {onCanlendar ? (
          <S.CalendarContainer>
            <S.Layer>
              <Calendar 
                value={date}
                onChange={(value) => {
                  if (!(value instanceof Date)) return
                  setDate(value)
                  setCurrentDate(dayjs(value).format('YYYY-MM-DD'))
                }}
                calendarType='US'
                locale='kr'
                formatDay={(_locale, date) =>
                  date.toLocaleString('en', { day: 'numeric' })
                }
              />
            </S.Layer>

            <S.DateSelectBtn onClick={() => setOnCalendar(false)}>
              {dayjs(date).format('YYYY년 MM월 DD일')} 선택하기
            </S.DateSelectBtn>
          </S.CalendarContainer>
        ) : (
          <S.DownloadBtn title='출석표 출력' onClick={checkNullValue}>
            출석표 다운로드
          </S.DownloadBtn>
        )}
      </S.Wrapper>
    </Portal>
  )
}

export default CalenderModal
