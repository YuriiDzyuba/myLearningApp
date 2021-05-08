import React from "react";
import {ModalProvider, Modal, useModal, ModalTransition,} from 'react-simple-hook-modal';
import 'react-simple-hook-modal/dist/styles.css';
import "./modal.scss"

export const ModalWrapper = ({order, isModalOpen, closeModal})=>{
    let header = "Header"
    let Content = "Content"
    let PictureUrl = "Picture url"

    return (
        <ModalProvider>
        <Modal
            modalClassName ="modal2"
            id="any-unique-identifier"
            isOpen={isModalOpen}
        >
            <div className='d-flex flex-row mt-3 justify-content-between'>
                <div className="col-3">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="addon-wrapping">order :</span>
                        <input type="text"
                               className="form-control"
                               aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-default"
                               value={order}

                        />
                    </div>
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={closeModal}
                    >
                        Close
                    </button>
                </div>
            </div>
            <div className='d-flex flex-row mt-3 justify-content-center'>
                <div className="col-12 chooseFile">
                    <label htmlFor="basic-url" className="form-label">{header+" :"}</label>
                    <div className="input-group mb-3">
                        <input type="text"
                               className="form-control"
                               aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-default"

                        />
                    </div>
                    <label htmlFor="basic-url" className="form-label">{Content+" :"}</label>
                    <div className="input-group mb-3">
                        <input type="text"
                               className="form-control"
                               aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-default"
                        />
                    </div>
                    <label htmlFor="basic-url" className="form-label">{PictureUrl+" :"}</label>
                    <div className="input-group mb-3">
                        <input type="text"
                               className="form-control"
                               aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-default"
                        />
                    </div>
                </div>
            </div>
        </Modal>
        </ModalProvider>
    )
}
