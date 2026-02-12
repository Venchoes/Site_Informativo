import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="main-container">
        <div className="background-section">
          <h1>Bem-vindo ao Site</h1>
          <p>Faça scroll para ver mais</p>
        </div>

        {scrollPosition > 100 && (
          <div className="purple-box">
            <div className="purple-content">
              <div className="purple-text">
                <h2>Descrição Especial</h2>
                <p>
                  Este é um quadrado roxo que aparece quando você faz scroll para baixo.
                  Ele cobre toda a tela horizontalmente com um conteúdo especial e chamativo.
                  Perfeito para destacar informações importantes do seu site!
                </p>
              </div>
              <img src="/images/E838FB96-45A0-407D-A3FF-818D3222F420.webp" alt="Imagem especial" className="purple-image" />
            </div>
          </div>
        )}

        <div className="extra-content">
          <h2>Mais Conteúdo</h2>
          <p>Continue explorando o site...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Continue scrollando para mais conteúdo...</p>
          <div style={{ height: '500px' }}></div>
        </div>
      </div>
    </>
  )
}

export default App
