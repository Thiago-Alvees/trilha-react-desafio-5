import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostById = async (id) => {
    const { data, error } = await supabase
      .from('posts')  // Nome da sua tabela no Supabase
      .select('*')    // Seleciona todas as colunas, ou ajuste conforme necessário
  
    if (error) {
      console.error(error);
      return null;
    }
  
    return data;
  };