import { useQuery } from '@tanstack/react-query';

export function FetchUsersApi() {
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch(`https://home1-backend.onrender.com/`);
      const result = await response.json();      
      return result ;
    },

  });
  return data;
}

export function FetchUserbyIdApi(id :string){
  const {data} = useQuery({
    queryKey: ['user', id],
    queryFn:async () =>{
      const response = await fetch(`https://home1-backend.onrender.com/${id}`);
      const result = await response.json();      
      return result ;      
    }
  })
  return data;
}
