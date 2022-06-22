import './App.css';
import React, { useState, useContext } from 'react';
import NewCar from './Components/NewCar';
import { CarContext } from './AppContext/CarContext';
import Login from './Components/Login';
import Menu from './Components/Menu';
import Main from './Components/Main';
import Header from './Components/Header';
import Register from './Components/Register';
import Mail from './Components/Mail';

function App() {

  const [pageState, setPageState] = useState("main");

  //araba listesi
  const [carList, setCarList] = useState([
    {
      model: "Cla 180D",
      label: "Sahibinden temiz Mercedes",
      year: "2015",
      price: "1001000",
      color: "Beyaz",
      type: "sedan",
      brand: "Mercedes",
      owner: "Veli Yılmaz",
      mail: "veli@gmail.com",
      description: "ARACIM İÇİ DISI SIFIRDAN FARKSIZDIR EZİK ÇİZİK NOKTA GAMZE DAHİ YOKTUR YEDEK ANAHTAR VE KİTAPÇIĞI VARDIR ",
      file: "https://i0.shbdn.com/photos/36/61/84/x5_893366184hgz.jpg"
    },
    {
      model: "A3 Sportback",
      label: "Kusursuz Kırmızı Audi",
      year: "6786",
      price: "1001000",
      color: "Kırmızı",
      type: "sedan",
      brand: "Audi",
      owner: "Ali Duru",
      mail: "ali@gmail.com",
      description: "Sıfırı yakın boyasızı yok, orijinal parçalar",
      file: "https://cdn.motor1.com/images/mgl/7MK77/s3/audi-a3-sportback-2020-im-test.jpg"
    },
    {
      model: " Sportif",
      label: "Son Fiyat Jeep",
      year: "2002",
      price: "700000",
      color: "Siyah",
      type: "sedan",
      brand: "Jeep",
      owner: "Ayşe Koç",
      mail: "ayse@gmail.com",
      description: "Sağ kapı  hasarlı , İçi çok temiz ",
      file: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQff4khBlHTr_m1fdaLzCRmmKeBPgMajFVI1Q&usqp=CAU"
    },
    {
      model: "Passat",
      label: "Passat Sıfır Ayarında",
      year: "2021",
      price: "730000",
      color: "Gri",
      type: "sedan",
      brand: "Volkswagen",
      owner: "Elif Su",
      mail: "elif@gmail.com",
      description: "SIFIR AYARINDA",
      file: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScT8moMMJ2On8KAR8KirkQ4ttMaNueiW5dUg&usqp=CAU"
    }
  ]);
  //kullanıcı listesi
  const [userList, setUserList] = useState([

    { mail: "mail@gmail.com", password: "123", name: "ali", },
    { mail: "ikinci@gmail.com", password: "123", name: "veli" },
    { mail: "ucuncu@gmail.com", password: "123", name: "ayşe" }
  ]);
  const [selected, setSelected] = useState("");
  const [user, setUser] = useState({ mail: "", password: "" });
  return (
    <div className="App">


      <CarContext.Provider value={{
        userList, setPageState, setSelected, pageState, selected, user, setUser,
        carList, setCarList, setUserList
      }} >
        {pageState === "login" && <Login />}
        {pageState === "newCar" && <NewCar />}
        {pageState === "menu" && <Menu />}
        {pageState === "main" && <Main />}
        {pageState === "register" && <Register />}
        {pageState === "mail" && <Mail />}
      </CarContext.Provider>


    </div>
  );
}

export default App;
