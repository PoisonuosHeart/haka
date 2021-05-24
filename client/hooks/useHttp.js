import {useState, useCallback} from 'react' 

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const request = useCallback(async (url, method="GET", body= null, headers={} ) => {
        setLoading(true) 
        try {
            if(body){
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            const responce = await fetch(url, {method, body, headers}) 
            const data = await responce.json()

            if(!responce.ok){
                throw new Error(data.message || 'Что-то пошло не так')
            }

            setLoading(false) 

            return data
        } catch (e) {
            setLoading(false) // Запрос завершился
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback(async () => setError(null), [])

    return {loading, request, error, clearError}
}