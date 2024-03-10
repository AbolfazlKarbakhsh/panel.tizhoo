import React from 'react'
import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import router from './router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import useGetData from './hooks/useGetData';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchInterval:2000,
      // gcTime:2000,
      // refetchOnWindowFocus:false,
      // refetchOnMount:false,
      // refetchOnReconnect:true
      // retry:5
      staleTime: 5000,
    }
  }
});

function App() {

  return (
    <>
      <QueryClientProvider client={client}>
        <ToastContainer rtl />
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default App
