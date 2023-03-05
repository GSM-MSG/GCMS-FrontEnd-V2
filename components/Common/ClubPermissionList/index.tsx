import { SearchIcon } from '@/assets/svg'
import { useFetch } from '@/hooks'
import { ClubListType, ClubType } from '@/type/common'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Input'
import * as S from './style'

interface Props {
  inputLabel?: string
}

const ClubPermissionList = ({ inputLabel }: Props) => {
  const { register, watch } = useForm({ defaultValues: { value: '' } })

  const { fetch, data } = useFetch<ClubListType[]>({
    url: '/admin',
    method: 'GET',
  })

  useEffect(() => {
    fetch()
  }, [])

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
                    <S.OptionBtn>허가</S.OptionBtn>
                    <S.OptionBtn>거부</S.OptionBtn>
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
