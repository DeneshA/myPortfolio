import {Routes,Route} from 'react-router-dom'
import Home from './Home'

export default function Main(){
return(
    <div>
        <Routes>
            <Route path='/' exact element={<Home />}></Route>            
        </Routes>

    </div>
)
}