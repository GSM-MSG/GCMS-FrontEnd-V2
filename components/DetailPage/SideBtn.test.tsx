import SideBtn from './SideBtn'
import { initialState as clubInitialState } from '@/store/clubDetail'
import { initialState as userInitialState } from '@/store/user'
import * as redux from 'react-redux'
import { render, screen } from '@testing-library/react'
jest.mock('react-redux')

const initialState = {
  clubDetail: {
    ...clubInitialState,
  },
  user: {
    ...userInitialState,
  },
}

const spy = jest.spyOn(redux, 'useSelector')

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: () => undefined,
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

describe('Sidebar button test', () => {
  it('button element text should be 지원하기', () => {
    spy.mockReturnValue({
      ...initialState,
      clubDetail: {
        ...initialState.clubDetail,
        scope: 'USER',
        isApplied: false,
        isOpened: true,
      },
    })
    render(<SideBtn />)

    screen.getByRole('button', { name: '지원하기' })
  })

  it('button element text should be 마감', () => {
    spy.mockReturnValue({
      ...initialState,
      clubDetail: {
        ...initialState.clubDetail,
        scope: 'USER',
        isApplied: false,
        isOpened: false,
      },
    })
    render(<SideBtn />)

    screen.getByRole('button', { name: '마감' })
  })

  it('button element text should be 마감', () => {
    spy.mockReturnValue({
      ...initialState,
      clubDetail: {
        ...initialState.clubDetail,
        scope: 'USER',
        isApplied: true,
        isOpened: false,
      },
    })
    render(<SideBtn />)

    screen.getByRole('button', { name: '마감' })
  })

  it('button element text should be 지원 불가', () => {
    spy.mockReturnValue({
      ...initialState,
      clubDetail: {
        ...initialState.clubDetail,
        scope: 'OTHER',
        isApplied: false,
        isOpened: true,
      },
    })
    render(<SideBtn />)

    screen.getByRole('button', { name: '지원 불가' })
  })

  it('club member should only display setting link', () => {
    spy.mockReturnValue({
      ...initialState,
      clubDetail: {
        ...initialState.clubDetail,
        scope: 'MEMBER',
      },
    })
    render(<SideBtn />)

    screen.getByText('설정')
    expect(() => {
      screen.getByText('동아리 모집')
    }).toThrow()
  })

  it('club head should manage club', () => {
    spy.mockReturnValue({
      ...initialState,
      clubDetail: {
        scope: 'HEAD',
      },
    })
    render(<SideBtn />)

    screen.getByText('설정')
    screen.getByText('동아리 모집')
  })

  it('admin should manage club', () => {
    spy.mockReturnValue({
      ...initialState,
      user: {
        role: 'ROLE_ADMIN',
      },
    })
    render(<SideBtn />)

    screen.getByText('설정')
    screen.getByText('동아리 모집')
  })
})

export {}
