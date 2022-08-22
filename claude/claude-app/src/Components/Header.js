import Button from './Button'
import { FaReact } from 'react-icons/fa'

const Header = ({title}) => {
    const onClick = () => {
        
    }
  return (
    <header className='header'>
        <h1> {title}       <FaReact style={{padding: 2}}/>
        </h1>
        <p><Button color='Home' text='Home' onClick={onClick}/> <Button color='Green' text='Moves' onClick={onClick}/><Button color='Blue' text='Story' onClick={onClick}/></p>
        

    </header>
  )
}



export default Header
