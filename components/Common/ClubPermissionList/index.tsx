import { SearchIcon } from '@/assets/svg'
import { useFetch } from '@/hooks'
import RequestClubType from '@/lib/requestClubType'
import { ClubListType } from '@/type/common'
import { SubmitType } from '@/type/components/ClubPermission'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Input'
import * as S from './style'

interface ListProps {
  inputLabel?: string
  data: ClubListType[] | null
  onFetch?: () => void
}

const ClubPermissionList = ({ inputLabel, data, onFetch }: ListProps) => {
  const { register, watch } = useForm({ defaultValues: { value: '' } })
  const [apiData, setApiData] = useState<SubmitType>({
    id: 0,
    method: 'PATCH',
  })

  const { fetch: submit } = useFetch<SubmitType>({
    url: `/admin/${apiData.id}`,
    method: apiData.method,
    onSuccess: () => {
      if (onFetch !== undefined) onFetch()
    },
  })

  useEffect(() => {
    if (apiData.id === 0) return
    submit()
  }, [apiData])

  return (
    <S.Layer>
      <S.InputBox>
        <SearchIcon />
        <Input
          placeholder='검색'
          label={inputLabel ?? ''}
          register={register('value')}
        />
      </S.InputBox>
      <S.ClubContainer>
        <S.Header>
          <small>배너</small>
          <small>유형</small>
          <small>이름</small>
          <small>설명</small>
        </S.Header>
        {data
          ?.filter((i) => i.name.includes(watch('value').trim()))
          .map((item) => (
            <S.ClubWrapper key={item.id}>
              <S.ClubBox>
                <S.ClubImgBox>
                  <S.Img src={item.bannerImg} alt='bannerImg' fill />
                </S.ClubImgBox>
                <S.ClubInfo>
                  <S.ClubKind>{RequestClubType(item.type)}</S.ClubKind>
                  <S.ClubName href={`/detail/${item.id}`}>
                    {item.name}
                  </S.ClubName>
                  <S.ClubDescription>{item.content}</S.ClubDescription>
                </S.ClubInfo>
              </S.ClubBox>
              <S.OptionBox>
                <S.OptionBtn
                  onClick={() => setApiData({ id: item.id, method: 'PATCH' })}
                >
                  허가
                </S.OptionBtn>
                <S.OptionBtn
                  onClick={() => setApiData({ id: item.id, method: 'DELETE' })}
                >
                  거부
                </S.OptionBtn>
              </S.OptionBox>
            </S.ClubWrapper>
          ))}
      </S.ClubContainer>
    </S.Layer>
  )
}

export default ClubPermissionList
