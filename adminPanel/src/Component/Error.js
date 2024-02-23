import React from 'react'
import error from '../Photos/not-found.svg'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <main>
                <div className="container">

                    <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                        <h1>404</h1>
                        <h2>The page you are looking for doesn't exist.</h2>
                        <Link className="btn" to="/">Back to home</Link>
                        <img src={error} className="img-fluid py-5" alt="Page Not Found" />

                    </section>

                </div>
            </main>

            <Link to="/" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>

        </>
    )
}

export default Error