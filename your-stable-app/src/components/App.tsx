import '@mysten/dapp-kit/dist/index.css'
import '@radix-ui/themes/styles.css'
import '@suiware/kit/main.css'
import SuiProvider from '@suiware/kit/SuiProvider'
import { FC, StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { APP_NAME } from '~~/config/main'
import { getThemeSettings } from '~~/helpers/theme'
import useNetworkConfig from '~~/hooks/useNetworkConfig'
import IndexPage from '~~/dapp/pages/IndexPage'
import ThemeProvider from '~~/providers/ThemeProvider'
import '~~/styles/index.css'
import { ENetwork } from '~~/types/ENetwork'
import { QueryClient } from '@tanstack/react-query'

const themeSettings = getThemeSettings()
export const queryClient = new QueryClient()

const App: FC = () => {
  const { networkConfig } = useNetworkConfig()

  return (
    <StrictMode>
      <ThemeProvider>
        <SuiProvider
          customNetworkConfig={networkConfig}
          defaultNetwork={ENetwork.LOCALNET}
          walletAutoConnect={false}
          walletStashedName={APP_NAME}
          themeSettings={themeSettings}
          customQueryClient={queryClient}
        >
          <BrowserRouter>
            <Routes>
              <Route index path="/" element={<IndexPage />} />
            </Routes>
          </BrowserRouter>
        </SuiProvider>
      </ThemeProvider>
    </StrictMode>
  )
}

export default App
