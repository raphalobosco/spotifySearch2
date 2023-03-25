import { useEffect, useState } from "react";

function getTokenAPI() {


    const [token, setToken] = useState(null);

    useEffect(() => {
        const getToken = async () => {
            const authOptions = {
                url: 'https://accounts.spotify.com/api/token',
                headers: {
                    'Authorization': 'Basic ' + (new Buffer(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET).toString('base64'))
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

}

export default getTokenAPI
