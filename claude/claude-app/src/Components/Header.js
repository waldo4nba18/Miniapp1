import Button from './Button'


const Header = ({title}) => {
    const onClick = () => {
        console.log('You pressed me a different way')
    }
  return (
    <header className='header'>
        <h1> {title}</h1>
        <Button color='green' text='Choose' onClick={onClick}/>
        

    </header>
  )
}



export default Header
