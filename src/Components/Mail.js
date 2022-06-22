import React, { useState, useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import emailjs, { send } from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';

function Mail() {
    const [show, setShow] = useState(false);
    const [maill, setMaill] = useState("turkunay@gmail.com");

    // mail gönderme fonksiyonu 
  
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_ylwifwd","template_8hglny8", e.target, 'KurA0IJXZXtG0Cfzr')
            .then((result) => {
                console.log(result.text);
                alert("Siparisiniz basariyla tarafimiza ulasti.");
            }, (error) => {
                console.log(error.text);
                alert(error.text + "HATA !!!!")
            });
        e.target.reset();
    }
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
                Sepetim
            </Button>

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
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text"  placeholder="Ad Soyad" name="name" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" value={maill} placeholder="Email Address" name="email" />
                            </div>
                           
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea  id="" cols="30" rows="8" placeholder="Mesajın" name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <Button type="submit" value="Send Message">Gönder</Button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>

            </Modal>
    </div>
  )
}

export default Mail