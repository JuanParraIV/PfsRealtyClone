import React from 'react'
import {HeaderContainer, WalletConnectionButton} from './styles'




const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <div>
          <WalletConnectionButton>Connect your Wallet</WalletConnectionButton>
        </div>
      </nav>
    </HeaderContainer>
  )
}

export default Header
