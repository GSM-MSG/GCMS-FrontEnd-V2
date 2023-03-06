import { SearchIcon } from '@/assets/svg'
import { useFetch } from '@/hooks'
import { ClubType } from '@/type/common'
import { ListProps, SubmitType } from '@/type/components/ClubPermission'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Input'
import * as S from './style'

const ClubPermissionList = ({ inputLabel, data, onFetch }: ListProps) => {
  const { register, watch } = useForm({ defaultValues: { value: '' } })
  const [apiData, setApiData] = useState<SubmitType>({
    id: 0,
    method: 'PATCH',
  })

  const { fetch: submit } = useFetch<SubmitType>({
    url: `/admin/${apiData.id}`,
    method: apiData.method,
  })

  useEffect(() => {
    if (apiData.id === 0) return
    submit()
    onFetch && onFetch()
  }, [apiData])

  const ClubType = (type: ClubType) => {
    switch (type) {
      case 'MAJOR':
        return '전공 동아리'
      case 'FREEDOM':
        return '자율 동아리'
      case 'EDITORIAL':
        return '사설 동아리'
    }
  }

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
          ?.filter((i) => {
            return i.name.includes(watch('value').trim())
          })
          .map((item) => {
            return (
              <S.ClubWrapper key={item.id}>
                <S.ClubBox>
                  <S.ClubImgBox>
                    <S.Img src={item.bannerImg} alt='bannerImg' />
                  </S.ClubImgBox>
                  <S.ClubInfo>
                    <S.ClubKind>{ClubType(item.type)}</S.ClubKind>
                    <S.ClubName href={`/detail/${item.id}`}>
                      {item.name}
                    </S.ClubName>
                    <S.ClubDescription>{item.content}</S.ClubDescription>
                  </S.ClubInfo>
                  <S.OptionBox>
                    <S.OptionBtn
                      onClick={() =>
                        setApiData({ id: item.id, method: 'PATCH' })
                      }
                    >
                      허가
                    </S.OptionBtn>
                    <S.OptionBtn
                      onClick={() =>
                        setApiData({ id: item.id, method: 'DELETE' })
                      }
                    >
                      거부
                    </S.OptionBtn>
                  </S.OptionBox>
                </S.ClubBox>
              </S.ClubWrapper>
            )
          })}
      </S.ClubContainer>
    </S.Layer>
  )
}

export default ClubPermissionList
