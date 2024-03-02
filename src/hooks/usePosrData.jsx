import { useMutation, useQueryClient } from "@tanstack/react-query"
import { httpsInterceptedService } from "@core/http-service"
import { useEffect } from "react"
import { toast } from "react-toastify"

export const usePostData = (key , url , refKey) => {
    const client = useQueryClient()
    const {mutate,  isPaused , isError , error} = useMutation({
        mutationKey: [key],
        mutationFn: async (data) => {
            const res = await httpsInterceptedService.post(`${url}` , data  )
            return res
        },onSuccess: () => {
            client.invalidateQueries({ queryKey: [refKey] });
            toast.success("  فیلد مورد نظر افزوده  شد", {
                position: "bottom-left"
            });
        }
    })    

    useEffect(() => {
         if(isPaused){
            toast.error("عملیات انجام نشد خطای سمت سرور", {
                position: "bottom-left",
            });
         }
    } , [isPaused])
    
    useEffect(() => {
         if(isError){
            toast.error(error?.response?.data?.message, {
                position: "bottom-left",
            });
         }
    } , [isError])


  

    return [mutate ]
}