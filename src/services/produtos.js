import { axios } from 'axios';
import { qcl } from './config'

export default {

        listar:() => {
            return qcl.get('produtos')
        },

        salvar:(produto) => {
            return qcl.post('produto', produto);
        },

        atualizar:(produto) => {
            return qcl.put('produto', produto)
        },

        apagar:(produto) => {
            return qcl.delete('produto', { data: produto })
        }

       
}