import React from 'react'
import { Link } from 'react-router-dom'
import { ErrorCon, ErrorSec } from '../components/styled-comps'

const Error = () => {
    return (
        <ErrorSec>
            <ErrorCon>
                <h1>Sorry there is no page in this path</h1>
                <Link to='/'>go back to homepage</Link>
            </ErrorCon>
        </ErrorSec>
    )
}

export default Error
