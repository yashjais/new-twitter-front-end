import React, { useState } from 'react'
import axios from 'axios'
const Twitter = require('twitter')

const twit = new Twitter({
    consumer_key: '881flbXb16SbwdP3R2sRKvdji',
    consumer_secret: '1lgXzKUdWoMzdvba4r1YEY7gAEXqlMOSRMq99Iz7mUM2nNikFi',
    access_token_key: '1132229170388332545-Cw7n7UQzfMXUn8fkKvU8g3JPUXG7iK',
    access_token_secret: 'TZxdpxpwV5ys7F9bxZkK7hoW3ErpBJUfwBX6MZMINgCpg'
})

function Tweets(props) {
    const [input, setinput] = useState('');
    const [tweets, setTweets] = useState([])
    // const [theArray, setTheArray] = useState();

    const handleChange = (e) => {
        setinput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // put all tokens and credentials in .env file
        // all the tokens and credentials are revoked, so you have to make your own twitter developer account

        // getting the token
        // curl - u '881flbXb16SbwdP3R2sRKvdji:1lgXzKUdWoMzdvba4r1YEY7gAEXqlMOSRMq99Iz7mUM2nNikFi' \
        // --data 'grant_type=client_credentials' \
        // 'https://api.twitter.com/oauth2/token'

        // curl--request POST \
        // --url https://api.twitter.com/oauth2/token \
        // --header 'authorization: Basic T3k2TlA4SnpCVGRiNXlFTUt2dGswamJGSTpiSlpEYm1xeExyeDJKU25JbUplcWdlQTJkREcwZXg0bUNtOUdGTGJ1TGF3TkZkNkxqNg==' \
        // --header 'content-type: application/x-www-form-urlencoded' \
        // --data grant_type = client_credentials



        axios.post('https://cors-anywhere.herokuapp.com/' + 'https://api.twitter.com/oauth2/token', {
            headers: {
                // // Authorization was copied from the Postman headers
                // Authorization: 'OAuth oauth_consumer_key="881flbXb16SbwdP3R2sRKvdji",oauth_token="1lgXzKUdWoMzdvba4r1YEY7gAEXqlMOSRMq99Iz7mUM2nNikFi",,oauth_signature_method="HMAC-SHA1",,oauth_timestamp="1,515677408",,oauth_nonce="nonce",,oauth_version="1,.0",,oauth_signature="signature"',
                Authorization: OAuth oauth_consumer_key = "{consumer-key}", oauth_token = "{oauth token},oauth_signature_method="HMAC - SHA1",oauth_timestamp="1500034490",oauth_nonce="ycnFHs",oauth_version="1.0",oauth_signature="{ oauth - signature
        } "
            },
        withCredentials: true,
})
            .then(response => console.log(response.data))
    .catch(err => console.log(err))


        // var params = { screen_name: 'nodejs' };

        // var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        //     targetUrl = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=nodejs'
        // fetch(proxyUrl + targetUrl)
        //     .then(blob => blob.json())
        //     .then(data => {
        //         console.table(data);
        //         document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
        //         return data;
        //     })
        //     .catch(e => {
        //         console.log(e);
        //         return e;
        //     });
        // twit.get(proxyUrl + 'statuses/user_timeline', params, function (error, tweets, response) {
        //     if (!error) {
        //         console.log(tweets);
        //     }
        // });

        /*
        var params = { screen_name: 'nodejs' };
        twit.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                console.log(tweets);
            }
        });
        */

        // console.log('input', input)
        // twit.stream('statuses/filter', { track: input }, function (stream) {

        //     stream.on('data', function (event) {
        //         console.log(event)
        //     })

        //     stream.on('error', function (error) {
        //         console.log(error)
        //     })
        // });

    }


return (
    <div style={{ textAlign: "center" }}>
        <br />
        <br />
        <h1> Tweets Page</h1>
        <br />
        <form onSubmit={handleSubmit}>
            <input type="text" id_str="tweet" placeholder="search for your tweet" value={input} onChange={handleChange} /> <br />

            <input type="submit" />
        </form>

        <br />
        <br />
        {
            tweets.map(tweet => {
                return (
                    <li key={tweet.id}> {tweet.text} </li>
                )
            })
        }
    </div>
)
}

export default Tweets
