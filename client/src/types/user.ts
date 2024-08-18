export interface User {
  id: string
  firstName: string
  lastName: string
  voice: Voice
}

export type Voice = 'Soprano' | 'Alto' | 'Tenor' | 'Bass'

export type OrderTerm = 'lastName' | 'voice'
