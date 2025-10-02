import React, {useState} from "react";

function Modal({customButton, children}){

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <>  
            <div onClick={toggleModal}>{customButton}</div>
            {modal ? (
                <div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                    {children}
                </div>
            </div>
            ) : null}
            
        </>
    );
}

export default Modal;