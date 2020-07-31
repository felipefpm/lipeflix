import React from 'react';
import {Link} from 'react-router-dom'
import Tempalte from '../../Components/TemplateDefault'

function CadastroVideo(){
    return(
        <Tempalte>
          <h1>Cadastro de Video</h1>

          <Link to="/cadastro/categoria">
            Cadastrar categoria
          </Link>
        </Tempalte>
    )
}

export default CadastroVideo;