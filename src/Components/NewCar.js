import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CarContext } from '../AppContext/CarContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function NewCar() {

    //ARABA SAHİBİNİN İSMİNİ DE ARABA OBJESİNE KAYDEDİP LİSTEYE ATCAMMMM
    const { setSelected, selected, carList, setCarList, setPageState } = useContext(CarContext);
    const [file, setFile] = React.useState();


    // arabya görsel ekleme fonksiyonu
    function handleChange(e) {
        console.log(e.target.files);
        SetNewCar({ ...newCar, file: URL.createObjectURL(e.target.files[0]) })
        setFile(URL.createObjectURL(e.target.files[0]));

    }
    // yeni araba oluştururken bu objenin şeklinde bu objeyi setleyerek oluşturuyoruz
    const [newCar, SetNewCar] = React.useState({
        model: "",
        label: "",
        year: "",
        price: "",
        color: "",
        type: "",
        brand: "",
        owner: selected.name,
        mail: selected.mail,
        description: "",
        file: "",
    });

    // carlist içine yeni araba objesini ekleyerek araba listesini güncelliyoruz.

    const Save = () => {
        if (newCar.model !== "" && newCar.price !== "" && newCar.year !== "" && newCar.color !== "" &&
            newCar.type !== "" && newCar.brand !== "" && newCar.label !== "") {
            setCarList([...carList, newCar]);
            SetNewCar({
                model: "",
                label: "",
                year: "",
                price: "",
                color: "",
                type: "",
                brand: "",
                description: "",
                file: "",
            });

        }
        else {
            alert("Boş Alanları Doldurunuz")
        }

        console.log(carList, "kayıtlarr")

    };


    return (

        <div style={{ backgroundColor: "#faf0ca", width: "100%", height: 1000, flexDirection: "row" }}>
            <div style={{ marginTop: 10, paddingLeft: 10 }}>


                <h3> YENİ ARABA EKLE</h3>
                <Box

                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '70%' },
                    }}
                    noValidate
                    autoComplete="off"

                >
                    <div>



                        <TextField
                            required
                            id="outlined-required"
                            label="İlan Başlığı"
                            defaultValue=""
                            onChange={e => SetNewCar({ ...newCar, label: e.target.value })}
                            value={newCar.label}
                        />

                
                           <Box sx={{ maxWidth: "70%", marginLeft: 1 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Marka</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={newCar.brand}
                                    label="Marka"
                                    onChange={e => SetNewCar({ ...newCar, brand: e.target.value })}
                                >
                                    <MenuItem value={"pembe"}>Mercedes</MenuItem>
                                    <MenuItem value={"beyaz"}>Auidi</MenuItem>
                                    <MenuItem value={"mor"}>Kia</MenuItem>
                                    <MenuItem value={"mor"}>Opel</MenuItem>
                                    <MenuItem value={"mor"}>Peugeot</MenuItem>
                                    <MenuItem value={"mor"}>Volkswagen</MenuItem>
                                    <MenuItem value={"mor"}>Şahin</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <TextField
                            // disabled
                            id="outlined-disabled"
                            value={newCar.brand}
                            label="Model"
                            defaultValue=""
                            onChange={e => SetNewCar({ ...newCar, model: e.target.value })}
                        />
                        <Box sx={{ maxWidth: "70%", marginLeft: 1 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Renk</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={newCar.color}
                                    label="Renk"
                                    onChange={e => SetNewCar({ ...newCar, color: e.target.value })}
                                >
                                    <MenuItem value={"pembe"}>Pembe</MenuItem>
                                    <MenuItem value={"beyaz"}>Beyaz</MenuItem>
                                    <MenuItem value={"mor"}>Yeşil</MenuItem>
                                    <MenuItem value={"mor"}>Siyah</MenuItem>
                                    <MenuItem value={"mor"}>Kırmızı</MenuItem>
                                    <MenuItem value={"mor"}>Mavi</MenuItem>
                                    <MenuItem value={"mor"}>Gri</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>



                        <TextField
                            id="outlined-number"
                            label="Araç Yılı"
                            value={newCar.year}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => SetNewCar({ ...newCar, year: e.target.value })}

                        />
                        <TextField
                            id="outlined-number"
                            label="Fiyat"
                            type="number"
                            value={newCar.price}
                            onChange={e => SetNewCar({ ...newCar, price: e.target.value })}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        {/* <TextField id="outlined-search" label="Search field" type="search" /> */}
                        <TextField
                            id="outlined-helperText"
                            label="Tipi"
                            defaultValue="Default Value"
                            value={newCar.type}
                            onChange={e => SetNewCar({ ...newCar, type: e.target.value })}
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Açıklama"
                            defaultValue=""
                            onChange={e => SetNewCar({ ...newCar, description: e.target.value })}
                            value={newCar.description}
                        />
                        <div style={{ width: "100%", flexDirection: "row", paddingLeft: "1%" }}>
                            <label>Görsel Ekle</label>
                            <input style={{ marginLeft: "1%" }} type="file" onChange={handleChange} />
                            {/* <img src={file} /> */}
                        </div>
                        <Button style={{ marginTop: 20, backgroundColor: "#f95738" }} onClick={Save} variant="contained"> Arabayı Kaydet</Button>
                        <Button style={{ marginTop: 20, marginLeft: 5, backgroundColor: "#f95738" }} onClick={() => { setPageState("menu"); }} variant="contained">  bitir</Button>


                    </div>
                </Box>
            </div>

            <image src={file} />
        </div>






    )
}

export default NewCar

