import { useQuery } from "@tanstack/react-query";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export function useFetchBlogApi(){
    const query = useQuery({
        queryKey: ['blogs'],
        queryFn: async()=>{
            const response = await fetch(` ${apiUrl}/blog`);
            const result = await response.json();
            return result;
        }
    });
    return query.data;
}

export function useFetchBlogApiByPage(page: number){
    const query = useQuery({
        queryKey: ['blogs',page],
        queryFn: async()=>{
            const response = await fetch(`${apiUrl}/blog/page/${page}`);
            const result = await response.json();
            return {
                data: result.data,
                itemsCount: result.itemsCount,
            };
        }
    });

    return query.data;
}