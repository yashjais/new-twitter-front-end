import React, { useState } from 'react'
import axios from 'axios'



function Tweets(props) {
    const [input, setinput] = useState('');
    const [tweets, setTweets] = useState([])
    // const [theArray, setTheArray] = useState();

    const handleChange = (e) => {
        setinput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('input', input)


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