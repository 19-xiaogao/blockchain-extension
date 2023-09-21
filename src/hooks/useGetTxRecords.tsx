import { useEffect, useState } from "react"
import { getTxRecordsStorage } from "~background"

export const useGetTxRecords = () => {

    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getTxlist()
    }, [])

    const getTxlist = async () => {
        setLoading(true)
        const result = await getTxRecordsStorage()
        setLoading(false)
        setList(!result ? [] : result)
    }

    return { list, loading }
}

export default useGetTxRecords