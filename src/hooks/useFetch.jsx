import { useEffect, useState } from "react";

export const useFetch = (baseUrl, searchTerm = '', page = 1) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const searchQuery = searchTerm ? `&name=${encodeURIComponent(searchTerm)}` : '';
                const url = `${baseUrl}?page=${page}${searchQuery}`;
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [baseUrl, searchTerm, page]);

    return { data, loading, error };
};
