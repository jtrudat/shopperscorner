import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'


export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url,
         method = 'GET',
          body = null,
          ) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      
        const response = await fetch(url, {
          method,
          body,
          signal: httpAbortCtrl.signal
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          reqCtrl => reqCtrl !== httpAbortCtrl
        );
        setIsLoading(false);
        return responseData;
    },
    []
  );


//   useEffect(() => {
//     return () => {
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//       activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
//     };
//   }, []);

  return { isLoading, sendRequest};
};











// export const useTxRx = ()=>{
//     const [isLoading , setIsLoading] = useState(false)

//     const activeRequests = useRef([])

//     const sendRequest = useCallback( async (
//         url, 
//         method = 'GET',
//          body = null ) =>{
//         setIsLoading(true)
//         const aborter = new AbortController()
//         activeRequests.current.push(aborter)
//         const response = await fetch(url, {
//             method: method,
//             body : body,
//             signal: aborter.signal
//         })
//         const responseData = await response.json()
//         return responseData
//         setIsLoading(false)
//     }, [])

//     useEffect(()=>{
//         return ()=>{
//             activeRequests.current.forEach(stop => stop.abort())
//         }
//     }, [])
//     return({
//         isLoading : isLoading,
//         sendRequest : sendRequest

// })
// }