import * as React from 'react'

interface IProps {
  children: React.ReactNode,
}

const buttonStyle = {
  backgroundColor: 'purple',
  border: '5px solid pink',
  borderRadius: 20,
  padding: '10px 20px',
  fontSize: '2rem',
  color: '#FFFFFF',
  fontWeight: 700,
  boxShadow: '0px 0px 10px 10px rgba(200, 0, 0, .1)',
}

export function BasicButton({children, ...props}: IProps) {
  return <button {...props} style={buttonStyle}>{children}</button>
}