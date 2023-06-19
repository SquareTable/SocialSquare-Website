import React, { useState } from "react";
import '../App.css';

const TransferFromInstagram = () => {
    const [alreadyDownloadedData, setAlreadyDownloadedData] = useState(null)
    return (
        <div className="App App-header">
            <h1>Transfer data from Instagram</h1>
            {alreadyDownloadedData === false ?
                <>
                    <b>Go to the <a href="https://instagram.com">Instagram website</a>, login to the account you want to transfer your data from to SocialSquare, and then follow these instructions.</b>
                    <ol>
                        <p>Click <i>More</i> in the bottom left, then click <i>Settings</i></p>
                        <p>Click <i>Privacy and security</i></p>
                        <p>Scroll down to <i>Data download</i> and click <i>Request download</i></p>
                        <p>Enter the email address where you'd like to receive a link to your data.</p>
                        <p>Click <i>JSON</i> and then click <i>Next</i></p>
                        <p>Enter your Instagram account password and click <i>Request download</i></p>
                        <p>Within 30 days you'll receive an email titled <i>Your Instagram Data</i> with a link to your data. Click <i>Download data</i> and follow the instructions to finish downloading your information.</p>
                        <p>Once you have downloaded your data from Instagram, come back to this website and press the <i>Yes</i> button</p>
                    </ol>
                </>
            :
                <>
                    <h2>Have you already downloaded your data from Instagram?</h2>
                    <div>
                        <button className="red-outline" onClick={() => setAlreadyDownloadedData(false)}>No</button>
                        <button className="green-outline">Yes</button>
                    </div>
                </>
            }
        </div>
    )
}

export default TransferFromInstagram;