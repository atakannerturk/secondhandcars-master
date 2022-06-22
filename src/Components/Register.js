import React, { useState, useContext } from 'react';
import { CarContext } from '../AppContext/CarContext';
import Button from '@mui/material/Button';

function Register() {
    const { userList, setUserList,setPageState } = React.useContext(CarContext)
    const [details, setDetails] = useState({ name: "", mail: "", password: "" });

    const NewUser = (details) => {
        return (
            { mail: details.mail, password: details.password, name: details.name }
        )
    };

    // yeni kullanıcı kaydeden fonksiyon

    const Save = (details) => {
        if (details.name!== "" && details.mail!== "" && details.password !== "") {

            if (userList.find(item => item.mail === details.mail)) {
                alert("aynı kullanıcı kaydedilemez")
               
            }
            else {
                setUserList([...userList, NewUser(details)]);
                setDetails({ mail: "", name: "", password: "" });
                setPageState("login");

                console.log(userList, "kayıtlarr")
            }

        }
        else alert("Boş alanları doldurunuz!")

    };
    // kaydetmekten vazgeçince kapatma fonksiyonu
    const Cancel = () => {
        setDetails({ name: "", mail: "", password: "" })
        setPageState("main")
    };
    const submitHandler = e => {
        e.preventDefault();
        Save(details);

    }

    return (
        <div> <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Yeni Kullanıcı Kaydı</h2>

                <div className='form-group'>
                    <label html="name"> İsim Soyisim:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                </div>

                <div className='form-group'>
                    <label htmlFor='text'> E-posta </label>
                    <input type="text" name='number' id='mail' onChange={e => setDetails({ ...details, mail: e.target.value })} value={details.mail}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'> Şifre</label>
                    <input type="password" name='password' id='password' onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}></input>
                </div>
                <input type="submit" value="Kaydet"></input>
                <Button onClick={Cancel}> Vazgeç</Button>

            </div>
        </form>

        </div>

    )
}

export default Register
