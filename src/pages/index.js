import '@tamagui/core/reset.css'

import React, { Suspense } from 'react'
import { TamaguiProvider } from 'tamagui'
import { Button } from 'tamagui'

import config from '../../tamagui.config'

export default function App() {
  return (
    <TamaguiProvider config={config}>
      {/* if you want nice React 18 concurrent hydration, you'll want Suspense near the root */}
      <Suspense>
        <Button>Button</Button>
      </Suspense>
    </TamaguiProvider>
  )
}
