import type { ListRow } from './list'

export interface User extends ListRow {
  firstName: string
  lastName: string
  password?: string
  voice: Voice
  email?: string
  memberState?: string
  isVerified?: boolean
  verificationToken?: String | undefined
  isAdmin?: boolean
  isManuallyRegistered?: boolean
  isPasswordHashed?: boolean
  isPlaywright?: boolean
  active?: boolean
}

export type Voice = 'Soprano' | 'Alto' | 'Tenor' | 'Bass'

export type OrderTerm = 'lastName' | 'voice'
