import React, { Fragment, useState, useRef } from 'react'
import { TodoList } from './components/TodoList'
import { v4 as uuidv4 } from 'uuid'
import AppWallet from "./AppWallet";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './app.css';

export default function App() {

const modalStyles={
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
}

const [show, setShow] = useState(false);

return (
    <Fragment>                

        <div className='principal'>        
          <div className='secundario'>          
            <Button class="btn btn-custom next" onClick={() => { setShow(!show); }}>{show ? 'Desconectar' : 'Conectar'} WALLET para PAGAR</Button>                        
          </div>
        </div>      

        <Modal isOpen={show} style={modalStyles}>
          <ModalHeader>
            Conectar Billetera
          </ModalHeader>
          <ModalBody>
              <AppWallet />
          </ModalBody>
          <ModalFooter>            
            <Button color="secondary" onClick={() => { setShow(!show); }}>Cerrar</Button>  
          </ModalFooter>
        </Modal> 
        
    </Fragment>
  )
}
