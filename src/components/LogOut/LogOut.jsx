import Button from '../Button/Button'
import React from 'react'
import { Redirect } from "react-router-dom"

export default class Blog extends React.Component {
    redirect = (f = false) => {
        return f
    }


    render () {
        if (this.redirect()) {
            return <Redirect to={'/blog'} />
        }

        return (
            <div className="text-center m-5">
                <h1 className='font-bold text-3xl'>Log Out</h1>
                <h2 className='text-1xl m-5'>Are you sure about leaving us?</h2>
                <Button onClick={this.redirect(true)} isDisable='false' btnName='Log Out' />
            </div>
        )
    }
}