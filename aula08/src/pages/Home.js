import { useContext } from 'react'
import { AppContext } from '../App'

export const Home = () => {
    const { name } = useContext(AppContext);
    return <div>
        <h1>Welcome to my Website, {name} </h1>
        <p>Wanna know more about our website, insert your phone: <input type="tel" placeholder="99999-9999" /></p>
    </div>
}