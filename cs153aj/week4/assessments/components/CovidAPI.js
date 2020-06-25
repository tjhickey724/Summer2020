import React,{useState,useEffect} from 'react'
import { Text} from 'react-native';
import FetchData from './FetchData';

const CovidAPI = () => {
    return (
        <FetchData url="http://covidtracking.com/api/v1/us/current.json" />
    )
}

export default CovidAPI
