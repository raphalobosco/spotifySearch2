import { useState, useEffect } from 'react';
import Results from './Results';

const SearchArtist = ({ artistSearch }) => {
    const [artist, setArtist] = useState('');
    const [token, setToken] = useState('');

    const getToken = async () => {
        const authOptions = {

            method: 'POST',
            headers: {
                'Authorization': `Basic ${btoa(`${import.meta.env.VITE_CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`)}`,
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: 'grant_type=client_credentials'
        };

        try {
            const response = await fetch('https://accounts.spotify.com/api/token', authOptions);
            const data = await response.json();
            setToken(data.access_token);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {

        getToken();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (token) {
                const response = await fetch(
                    `https://api.spotify.com/v1/search?q=${artistSearch}&type=album`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const data = await response.json();
                setArtist(data);
            }
        };
        fetchData();
    }, [artistSearch, token]);



    return (
        <>

            {artist ? <Results props={artist} /> : <div>Loading...</div>}
        </>
    );
};

export default SearchArtist;
