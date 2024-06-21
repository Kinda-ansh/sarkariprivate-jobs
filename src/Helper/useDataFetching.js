import { useState, useEffect } from 'react';
import api from '../axiosInstance';


const useDataFetching = (apiEndpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await api.get(apiEndpoint);
                setData(response.data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [apiEndpoint]);

    return { data, loading, error };
};

export default useDataFetching;