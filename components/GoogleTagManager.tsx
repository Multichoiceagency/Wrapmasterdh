'use client'
import { sendGTMEvent } from '@next/third-parties/google'

export function EventButton() {
  return (
    <button onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })}>
      Track Event
    </button>
  )
}