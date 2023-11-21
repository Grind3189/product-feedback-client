import { useEffect, useState } from "react";
import { makeRequest } from "utils/makeRequest";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await makeRequest.get(url)
            setData(res.data)
            setError("")
        } catch(err: any){
            console.log(err)
        } finally {
            setLoading(false)
        }
    } 
    fetchData()
  }, [url])

  return [data, loading,error];
};

export default useFetch;
