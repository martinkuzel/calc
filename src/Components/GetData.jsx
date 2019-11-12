import React, { useEffect, useState } from 'react'
import Axios from 'axios';

const GetData = () => {
    const [data, setData] = useState(null);

    // const fetchData = async () => {
    //     try {
    //         const response = await Axios.get("http://localhost:3001/data");
    //         console.log('response', response);

    //         const data = response.data;
    //         console.log('response data', data);
    //         setData(data);
    //     } catch (error) {
    //         console.log('error', error);
    //     }
    // }

    const fetchData = () => {
            Axios.get("http://localhost:3001/data").then(res => setData(res.data));
            console.log('data', data);
    }

    // draft
    // const fetchData = () => {
    //     try {
    //         const { data } = Axios.get("http://localhost:3001/data").then(res => setData(res));
    //         console.log('response data', data);
    //         return data;
    //     } catch (error) {
    //         console.log('error', error);
    //     }
    // }

    // useEffect(() => {
    //     fetchData().then(res => setData(res));
    //     // setData(fetchData());
    // }, []);

    useEffect(() => {
        fetchData();
        console.log('state data eff', data);
    }, []);

    console.log('state data', data);

    return (
        <div>
            
        </div>
    )
}

export default GetData
