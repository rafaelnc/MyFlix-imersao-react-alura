import React from 'react';
import PageDefault from '../../../components/template';
import {Link} from 'react-router-dom';
function CadastroVideo(){
return(
    <PageDefault>
    
        <div>
            
            <h1>Cadastro de Video</h1>
            
            <Link to="/cadastro/categoria">
            Cadastrar Categorias
            </Link>
       
        </div>

    </PageDefault>
    
    );
}

export default CadastroVideo;