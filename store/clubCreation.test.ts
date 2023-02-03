import { store } from '@/store'
import { addActivityImg, setClubType } from './clubCreation'

describe('clubCreation store test', () => {
  it('club type should be undefined', () => {
    const {
      clubCreation: { type },
    } = store.getState()

    expect(type).toEqual(undefined)
  })

  it('club type should be MAJOR', () => {
    store.dispatch(setClubType('MAJOR'))
    const {
      clubCreation: { type },
    } = store.getState()

    expect(type).toEqual('MAJOR')
  })

  it('4 activity images should be added', () => {
    ;['1', '2', '3', '4'].forEach((i) => {
      store.dispatch(addActivityImg(i))
    })

    const {
      clubCreation: { activityImgs },
    } = store.getState()

    expect(activityImgs.length).toEqual(4)
  })

  it('Activity images should throw error from 5', () => {
    expect(() => store.dispatch(addActivityImg('5'))).toThrow(
      Error('Activity image maximum count is 4')
    )
  })
})

export {}
