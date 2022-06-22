import React, { useState, useContext, } from 'react';
import { CarContext } from '../AppContext/CarContext';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MessageIcon from '@mui/icons-material/Message';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Modal } from 'react-bootstrap';
import emailjs, { send } from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    backgroundColor: "#f95738",
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function Menu() {

    const { carList, setPageState, user, setUser, selected, setSelected } = useContext(CarContext);
    const [expanded, setExpanded] = React.useState(false);
    const [carListt, setCarListt] = React.useState([]);
    const [color, setColor] = React.useState("");
    const [model, setModel] = React.useState("");
    const [show, setShow] = useState(false);
    const [maill, setMaill] = useState("");

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // renk ve modele göre filtreleme yapan foksiyon
    React.useEffect(() => {
        let carListe = carList.filter((x) => x.brand.includes(model) && x.color.includes(color));
        setCarListt(carListe);
        console.log(carListt, "yeni")
    }, [color, model])

    // çıkış yapma fonksiyonu

    const Logout = () => {
        setUser({ no: "", password: "" });
        setSelected("")
        setPageState("main")
    }

// mail gönderen fonksiyon
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_ylwifwd","template_8hglny8", e.target, 'KurA0IJXZXtG0Cfzr')
            .then((result) => {
                console.log(result.text);
                alert("Teklif mailiniz gönderildi.");
            }, (error) => {
                console.log(error.text);
                alert(error.text + "HATA !!!!")
            });
        e.target.reset();
    }

    // mail modalı açan fonks
    // mailin içine otomatik olarak o arabının sahibinin mail adresi setleniyor
    const onMail = (mail) => {
        setMaill(mail);
        setShow(true);
    }
    const handleClose = () => setShow(false);


    return (

        <div style={{ width: "100%", backgroundColor: "#0d3b66", height: 1200 }}>

            <div className='header' >

                <div style={{ flexDirection: "row", display: "flex", marginLeft: 10 }}>
                    <h1 style={{ color: "#f95738" }}>Arabam.com</h1>
                    <Box sx={{ minWidth: 120, backgroundColor: "#f95738", marginLeft: 5 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Renk</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={color}
                                label="Renk"
                                onChange={handleChange}
                            >
                                <MenuItem value={"Pembe"}>Pembe</MenuItem>
                                <MenuItem value={"Beyaz"}>Beyaz</MenuItem>
                                <MenuItem value={"Yeşil"}>Yeşil</MenuItem>
                                <MenuItem value={"Siyah"}>Siyah</MenuItem>
                                <MenuItem value={"Siyah"}>Siyah</MenuItem>
                                <MenuItem value={"Mavi"}>Mavi</MenuItem>
                                <MenuItem value={"Gri"}>Gri</MenuItem>
                                <MenuItem value={"Mor"}>Mor</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ minWidth: 120, backgroundColor: "#f95738" }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Marka</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={model}
                                label="Marka"
                                onChange={(event) => setModel(event.target.value)}
                            >
                                <MenuItem value={"Mercedes"}>Mercedes</MenuItem>
                                <MenuItem value={"Audi"}>Auidi</MenuItem>
                                <MenuItem value={"Kia"}>Kia</MenuItem>
                                <MenuItem value={"Opel"}>Opel</MenuItem>
                                <MenuItem value={"Peugeot"}>Peugeot</MenuItem>
                                <MenuItem value={"Volkswagen"}>Volkswagen</MenuItem>
                                <MenuItem value={"Jeep"}>Jeep</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>


                </div>

                {selected !== "" ?
                    <div>
                        <Button variant='text' style={{ color: "#f95738" }} onClick={() => { setPageState("newCar") }}>yeni araba ekle</Button>
                        <Button variant='text' style={{ color: "#f95738" }} onClick={Logout}>çıkış</Button>

                    </div> : <div>  <Button variant='text' style={{ color: "#f95738" }} onClick={() => { setPageState("main") }}>giriş</Button>
                        <Button variant='text' style={{ color: "#f95738" }} onClick={() => { setPageState("main") }}>kayıt ol</Button>
                    </div>

                }

            </div>


            <div className='card' style={{ backgroundColor: "#0d3b66", display: "flex", flexWrap: "wrap", flexDirection: "row" }}>


                {carListt?.map((item) => (
                    <Card sx={{ maxWidth: 600, width: 600, backgroundColor: "#f4d35e", marginLeft: 10, marginTop: 5 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    {item.owner[0]}
                                </Avatar>
                            }

                            title={item.label}
                            subheader={item.brand}
                            
                        />
                        <CardMedia
                            component="img"
                            height="300"
                            image={item.file}
                            alt={item.color}
                        />
                        <CardContent>
                            {/* <Typography variant="body2" color="text.secondary">
                        {item.description}
                       </Typography> */}
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton onClick={() => { onMail(item.mail) }} aria-label="add to favorites">
                                <MessageIcon />
                            </IconButton>

                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                            <div style={{ flexDirection: "row" ,display:"flex" ,justifyContent:"flex-start", paddingLeft:4}}>
                                   
                                   <h4 paragraph>
                                 {item.price}₺
                                   </h4>
                               </div>
                                <div style={{ flexDirection: "row" ,display:"flex" ,justifyContent:"flex-start", paddingLeft:4}}>
                                   
                                <Typography paragraph>
                                İlan sahibi :  {item.owner}
                                 </Typography>
                                </div>
                                <div style={{ flexDirection: "row" ,display:"flex",}}>
                                   
                                   <Typography paragraph>
                                    Model:   {item.model}
                                   </Typography>
                               </div>

                                

                                <div style={{ flexDirection: "row" ,display:"flex",}}>
                                   
                                    <Typography paragraph>
                                      Renk:  {item.color}
                                    </Typography>
                                </div>

                                <div style={{ flexDirection: "row",display:"flex" ,}}>
                                    
                                    <Typography paragraph>
                                    Sene:    {item.year}
                                    </Typography>
                                </div>

                                <div style={{ }}>
                                    <Typography paragraph>--Açıklama--</Typography>
                                    <Typography paragraph>
                                        {item.description}
                                    </Typography>
                                </div>


                            </CardContent>
                        </Collapse>
                    </Card>
                ))}
            </div>
            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Teklif Maili At
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form className='xx' onSubmit={sendEmail}>
                        <div className="row pt-1 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" placeholder="Ad Soyad" name="name" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" hidden value={maill} placeholder="Email Address" name="email" />
                            </div>

                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea id="" cols="30" rows="8" placeholder="Mesajın" name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <Button type="submit" value="Send Message">Gönder</Button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>

            </Modal>


        </div>

    );
}

export default Menu