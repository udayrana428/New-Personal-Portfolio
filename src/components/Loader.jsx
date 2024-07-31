import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import "../assets/styles/componentStyles/loader.css"

const Loader = () => {
    return (
        <>
            <div className="loader-main">
                <Spinner animation="grow" />
            </div>
        </>
    )
}

export default Loader