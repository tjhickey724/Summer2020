import React,{useState,useEffect} from 'react'
import { Text} from 'react-native';

const FetchData = ({url}) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    const getData = async () => {
      const result = await fetch(url)
      const data = await result.json()
      setData(data)
      setLoading(false)
    }

    useEffect(() => {getData();},[])

    if (loading){
      return (
        <Text>loading</Text>
      )
    } else {
      return (
        <Text>
            {JSON.stringify(data,null,2)}
        </Text>
      )
    }
}

export default FetchData
