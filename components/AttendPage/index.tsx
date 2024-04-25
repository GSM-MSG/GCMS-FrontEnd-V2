import { SearchIcon } from '@/assets/svg'
import { useFetch } from '@/hooks'
import { RootState } from '@/store'
import { addAllUser, removeAllUser } from '@/store/applicant'
import { ApplicantListType } from '@/type/common'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import ClubNav from '../Common/ClubNav'
import Input from '../Common/Input'
import ChoiceUser from './ChoiceUser'
import SelectedUserImg from './SelectedUserImg'
import UserList from './UserList'
import * as S from './style'
import * as SVG from '@/assets/svg'
import dayjs from 'dayjs'
import AttendanceForm from './AttendanceForm'
import AttendListType from '@/type/common/AttendListType'

export type PeriodEnumType =
  | ''
  | 'FIRST'
  | 'SECOND'
  | 'THIRD'
  | 'FOURTH'
  | 'FIFTH'
  | 'SIXTH'
  | 'SEVENTH'
  | 'EIGHTH'
  | 'NINTH'
  | 'TENTH'
  | 'ELEVENTH'
const periodArr: { text: string; period: PeriodEnumType }[] = [
  { text: '1교시', period: 'FIRST' },
  { text: '2교시', period: 'SECOND' },
  { text: '3교시', period: 'THIRD' },
  { text: '4교시', period: 'FOURTH' },
  { text: '5교시', period: 'FIFTH' },
  { text: '6교시', period: 'SIXTH' },
  { text: '7교시', period: 'SEVENTH' },
  { text: '8교시', period: 'EIGHTH' },
  { text: '9교시', period: 'NINTH' },
  { text: '10교시', period: 'TENTH' },
  { text: '11교시', period: 'ELEVENTH' },
]

export default function AttendPage() {
  const router = useRouter()
  const clubId = router.query.clubID
  const [date, setDate] = useState(new Date())
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedPeriods, setSelectedPeriods] = useState<PeriodEnumType[]>([])
  const [clicked, setClicked] = useState(false)
  const [dateData, setDateData] = useState(new Date())
  const [periodData, setPeriodData] = useState('')

  const { fetch: attendanceDownload, data: attendData } =
    useFetch<AttendListType>({
      url: `/attend/${clubId}?date=${dayjs(currentDate).format('YYYY-MM-DD')}&period=${selectedPeriods}`,
      method: 'get',
      autoPushToggle: false,
      errors: '출석부를 찾을 수 없습니다. 생성을 진행해주세요.',
    })

  const { fetch: attendanceCreate } = useFetch<ApplicantListType>({
    url: `/attend/${clubId}/club`,
    method: 'post',
    autoPushToggle: false,
    successMessage: '출석부 생성에 성공했습니다',
    errors: '같은 날짜와 교시에 해당하는 스케쥴이 이미 존재합니다',
  })

  const create = () => {
    attendanceCreate({
      name: 'test',
      date: dayjs(currentDate).format('YYYY-MM-DD'),
      periods: selectedPeriods,
    })
    setIsShow('')
  }

  const download = () => {
    attendanceDownload()
    setIsShow('')
  }

  useEffect(() => {
    if (attendData) {
      setPeriodData(selectedPeriods[0])
      setDateData(currentDate)
      dispatch(removeAllUser())
    }
  }, [attendData])

  const [isShow, setIsShow] = useState<string>('')
  const [isPick, setIsPick] = useState<string>('')

  const reset = () => {
    setSelectedPeriods([])
    setIsPick('')
    setCurrentDate(new Date())
    setDate(new Date())
  }

  const onClose = () => {
    setIsShow('')
    reset()
  }

  const onClickPeriod = (period: PeriodEnumType) => {
    if (isShow === '조회하기') {
      setSelectedPeriods([period])
    } else {
      const index = selectedPeriods.indexOf(period)
      if (index === -1) {
        setSelectedPeriods([...selectedPeriods, period])
      } else {
        const updatedPeriods = [...selectedPeriods]
        updatedPeriods.splice(index, 1)
        setSelectedPeriods(updatedPeriods)
      }
    }
  }

  const { applicant } = useSelector((state: RootState) => ({
    applicant: state.applicant,
  }))
  const dispatch = useDispatch()
  const { register, watch } = useForm({ defaultValues: { value: '' } })
  const isAllSelected = attendData?.users.length === applicant.length

  const onClick3 = () => {
    if (!attendData) return
    if (isAllSelected) {
      return dispatch(removeAllUser())
    }
    dispatch(addAllUser(attendData?.users))
  }

  const selectedPeriodText = periodArr.find(
    (item) => item.period === periodData
  )?.text

  const yoilArr = ['일', '월', '화', '수', '목', '금', '토']
  const displayDate = dayjs(dateData).isValid() ? dateData : new Date()

  return (
    <>
      <S.Positioner>
        <S.Layer>
          <ClubNav />
          <S.Header>
            <S.TitleWrapper>
              <h3>동아리 출석</h3>
              {attendData && attendData.users.length > 0 && (
                <>
                  <span>
                    {dayjs(displayDate).format(
                      `YYYY.MM.DD (${yoilArr[dayjs(displayDate).day()]})`
                    )}
                    &nbsp;
                    {selectedPeriodText}
                  </span>

                  <span>
                    <>총 {attendData?.users.length ?? 0}명</>
                  </span>
                </>
              )}
            </S.TitleWrapper>
            <S.NavContainer>
              <S.NavWrapper
                onClick={() => {
                  setIsShow('조회하기')
                  reset()
                }}
                style={{ cursor: 'pointer' }}
              >
                <S.IconBox>
                  <SVG.Calendar />
                </S.IconBox>
                <S.NavTitle>
                  <small>날짜 변경</small>
                </S.NavTitle>
              </S.NavWrapper>
              <S.NavWrapper
                onClick={() => {
                  setIsShow('생성하기')
                  reset()
                }}
                style={{ cursor: 'pointer' }}
              >
                <S.IconBox>
                  <SVG.Plus />
                </S.IconBox>
                <S.NavTitle>
                  <small>생성 하기</small>
                </S.NavTitle>
              </S.NavWrapper>
            </S.NavContainer>
          </S.Header>
          <S.InputBox>
            <SearchIcon />
            <Input placeholder='검색' register={register('value')} />
          </S.InputBox>

          {attendData && attendData.users.length > 0 && (
            <>
              <SelectedUserImg selected={applicant} />
              <S.AllSelectBox>
                <S.AllSelectBtn onClick={onClick3}>
                  전체 {isAllSelected ? '삭제' : '선택'}
                </S.AllSelectBtn>
              </S.AllSelectBox>
            </>
          )}

          <UserList data={attendData} value={watch('value').trim()} />
          <ChoiceUser onSubmit={() => attendanceDownload()} />
        </S.Layer>
      </S.Positioner>

      {isShow && (
        <AttendanceForm
          onClose={onClose}
          isShow={isShow}
          setIsPick={setIsPick}
          setClicked={setClicked}
          date={date}
          setDate={setDate}
          setCurrentDate={setCurrentDate}
          clicked={clicked}
          selectedPeriods={selectedPeriods}
          isPick={isPick}
          onClickPeriod={onClickPeriod}
          periodArr={periodArr}
          download={download}
          create={create}
        />
      )}
    </>
  )
}
