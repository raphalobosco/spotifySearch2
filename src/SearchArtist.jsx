import { useState, useEffect } from 'react';
import Results from './Results';
// import getTokenAPI from './getToken';

// const clientID = import.meta.env.REACT_APP_CLIENT_ID
// const clientSecret = import.meta.env.REACT_APP_CLIENT_SECRET

const SearchArtist = ({ artistSearch }) => {
    const [artist, setArtist] = useState('');
    const [token, setToken] = useState();

    useEffect(() => {
        const getToken = async () => {
            const authOptions = {
                url: 'https://accounts.spotify.com/api/token',
                headers: {
                    'Authorization': 'Basic ' + (new Buffer(import.meta.env.REACT_APP_CLIENT_ID + ':' + import.meta.env.REACT_APP_CLIENT_SECRET).toString('base64'))
                },
                form: {
                    grant_type: 'client_credentials'
                },
                json: true
            };
            try {
                const response = await axios.post(authOptions.url, authOptions.form, { headers: authOptions.headers });
                const { access_token } = response.data;
                setToken(access_token);
            } catch (error) {
                console.log(error);
            }
        };
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
}


export default SearchArtist;
