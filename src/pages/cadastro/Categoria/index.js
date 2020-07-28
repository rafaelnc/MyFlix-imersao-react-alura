import React from 'react';
import PageDefault from '../../../components/template';
import {Link} from 'react-router-dom';
function CadastroCategoria(){
return(
    <PageDefault>
    
        <div>
            
            <h1>Cadastro de Categoria</h1>
                <form>
                    <label>
                    Nome da Categoria:
                    <input
                        type="text"
                    />
                    </label>

                    <button>
                    Cadastrar
                    </button>
                </form>

            <Link to="/">
            Ir para Home
            </Link>
       
        </div>

    </PageDefault>
    
    );
}

export default CadastroCategoria;