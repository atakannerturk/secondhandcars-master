import React, { useState, useContext } from 'react';
import LoginForm from './LoginForm';
import { CarContext } from '../AppContext/CarContext';
import Main from './Main';

export default function Login() {

    const [error, setError] = useState("");

    const { userList, setPageState, setSelected, user, setUser } = useContext(CarContext);

    // login ekranında bilgileri karşılaştırıp  kullanıcılar arasında o kişi varsa eğer giriş yapıyoruz
    const Login = details => {
        console.log(details);
        let selected;
        selected = userList.find(item => item.mail === details.mail && item.password === details.password)
        setSelected(selected)
        if (selected) {
            setUser({
                mail: details.mail,
                password: details.password
            });
            setPageState("menu")


        } else {
            console.log("girmedi", selected)
            setError("BİLGİLER UYMADI")
        }
    }


    const Logout = () => {
        setUser({ mail: "", password: "" })
    }
    const Cancel = () => {

        setPageState("main")
    };

    return (

        <div className='Login'>
            {(user.mail !== "" && user.password !== "") ? (
                <div className='welcome'>
                    <h2> Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout} >logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} Cancel={Cancel} error={error} />
            )}
        </div>





    )
}
