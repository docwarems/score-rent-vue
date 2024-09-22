import type { ListRow } from './list'

export interface User extends ListRow {
  id: string
  firstName: string
  lastName: string
  password?: string
  voice: Voice
  email?: string
  memberState?: MemberState
  isVerified?: boolean
  verificationToken?: string
  isAdmin?: boolean
  isManuallyRegistered?: boolean
  isPasswordHashed?: boolean
  isPlaywright?: boolean
  active?: boolean
  age?: number // does not make sense because age must rather be computed from a birth date; just to test number properties
}

export type Voice = 'Soprano' | 'Alto' | 'Tenor' | 'Bass'
export type MemberState = 'member' | 'student' | 'guest' | 'passive'

export type OrderTerm = 'lastName' | 'voice'
