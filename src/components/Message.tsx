import { useContext } from 'react'
import { ThemeContext } from '../hooks/useContext'

const Message = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div>
      <h4>Message</h4>
      <p style={{ 
        color: theme === 'dark' ? '#ccc' : '#333',
        backgroundColor: theme === 'dark' ? '#333' : '#ccc',
        padding: '1rem',
        borderRadius: '5px'
      }}>This is a message</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Message
