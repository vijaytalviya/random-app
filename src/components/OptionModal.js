import React from 'react'
import Modal from "react-modal"


const OptionModal = (props)=>
  (  <Modal
    isOpen = { !! props.selectedOption}
    onRequestClose ={props.close}
    contentLabel="contentLable"
    //className ="modal"
    //closeTimeoutMS={200}
    >
    <h3>selected option</h3>
    { props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick ={props.close}>Okay</button>
    
    </Modal>
    );


export default OptionModal;