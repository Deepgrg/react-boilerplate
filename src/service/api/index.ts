import masterApi from '@/core/private/Master/master.apis'
import authApi from '@/core/public/auth.api'

export const apiDetails = {
  private: {
    master: { ...masterApi },
  },
  public: {
    auth: { ...authApi },
  },
}
