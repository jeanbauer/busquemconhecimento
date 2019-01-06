import styled from 'styled-components'

export default ({ children, ...props }) => (
  <Button tabindex='0' role='button' aria-pressed='false' {...props}>
    {children}
  </Button>
)

const Button = styled.span`
  background-color: ${props => (props.disabled ? '#797979' : '#ff4143')};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};

  cursor: pointer;
  width: 200px;
  border-radius: 4px;
  color: #fff;
  padding: 10px;
  text-align: center;
  margin: 20px;
  border-bottom: 2px solid #cb4040;

  &:hover {
    background: #cb4040;
  }

  @media (max-width: 768px) {
    width: auto;
  }
`
