import React from 'react'
import RegisterUser from '../../component/register-user/register-user'

export default function Register(props) {
    return (
        <>
          <RegisterUser history={props.history} />   
        </>
    )
}
