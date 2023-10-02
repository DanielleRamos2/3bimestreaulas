import {Routes, Route } from 'react-router-dom'

import Dani from "./paginas/Dani"
import Ari from "./paginas/Ari"

function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<Dani />} />
            <Route path='/ari' element={<Ari />} />
        </Routes>
    )
}

export default Rotas