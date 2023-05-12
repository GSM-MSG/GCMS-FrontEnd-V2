import type { CallbackType } from '@/type/lib/Observable'

class Observable {
  private observers: Observer[] = []

  setObserver(callback: CallbackType) {
    const observer = new Observer(callback)
    this.observers.push(observer)

    return observer
  }

  notifyAll() {
    this.observers.forEach((observer) => {
      observer.callback()
    })

    this.observers = []
  }
}

class Observer {
  callback: CallbackType

  constructor(callback: CallbackType) {
    this.callback = callback
  }
}

const observable = new Observable()

export default observable
