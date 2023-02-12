import { store } from '@/store'
import { addActivityImg, setClubType } from './clubCreation'

describe('clubCreation store test', () => {
  it('club type should be undefined', () => {
    const {
      clubCreation: { type },
    } = store.getState()

    expect(type).toEqual('MAJOR')
  })

  it('club type should be MAJOR', () => {
    store.dispatch(setClubType('FREEDOM'))
    const {
      clubCreation: { type },
    } = store.getState()

    expect(type).toEqual('FREEDOM')
  })

  it('4 activity images should be added', () => {
    store.dispatch(addActivityImg(['1', '2', '3', '4']))

    const {
      clubCreation: { activityImgs },
    } = store.getState()

    expect(activityImgs.length).toEqual(4)
  })

  it('Activity images should throw error from 5', () => {
    expect(() =>
      store.dispatch(addActivityImg(['1', '2', '3', '4', '5']))
    ).toThrow(Error('Activity image maximum count is 4'))
  })
})

export {}
