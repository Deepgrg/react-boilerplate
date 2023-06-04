import { useMemo } from 'react'
import { StorageService } from '@/service/storage/storage.service'

export const useStorage = (storageLocation: 'local' | 'session' = 'local') => {
  return useMemo(() => new StorageService(storageLocation), [storageLocation])
}
