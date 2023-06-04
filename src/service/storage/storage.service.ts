/* eslint-disable no-console */
import { Primitive } from 'type-fest'
import HttpException from '@/utility/exceptions/http-exception'
import { STORAGE_KEY } from '@/constants/storageKey'

export class StorageService {
  private readonly storage: Storage

  constructor(storage: 'local' | 'session') {
    this.storage = window[`${storage}Storage`]
  }

  set(key: ValueOf<typeof STORAGE_KEY>, value: Primitive | ArrayBuffer | GenericObj<unknown>) {
    try {
      this.storage.setItem(key, JSON.stringify(value))
    } catch (e) {
      if (__DEV__) {
        console.log('Failed to Store Data to async storage', key, e)
        throw new HttpException(e)
      }
    }
  }

  get<TData>(key: ValueOf<typeof STORAGE_KEY>) {
    try {
      return JSON.parse(this.storage.getItem(key) ?? '') as TData
    } catch (e) {
      if (__DEV__) {
        console.log('Failed to GET Data to async storage', key, e)
        throw new HttpException(e)
      }
    }
  }

  remove(key: ValueOf<typeof STORAGE_KEY>) {
    try {
      this.storage.removeItem(key)
    } catch (e) {
      if (__DEV__) {
        console.log('Failed to Remove Data to async storage', key, e)
        throw new HttpException(e)
      }
    }
  }

  clear() {
    this.storage.clear()
  }
}
