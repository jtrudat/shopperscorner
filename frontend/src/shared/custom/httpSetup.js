//COMPONENT NOT USED. AXIOS METHOD PREFFERED WHEN CONNECTING TO BACKEND

import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpSetup = () => {
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

  // const clearError = () => {
  //   setError(null);
  // };

  // useEffect(() => {
  //   return () => {
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //     activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
  //   };
  // }, []);

  return { isLoading, sendRequest };
};
