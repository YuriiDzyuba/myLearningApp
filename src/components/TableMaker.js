import React from "react";
import "./table.scss"
import {
    ModalProvider,
    Modal,
    useModal,
    ModalTransition,
} from 'react-simple-hook-modal';


export const tableMaker = (table, type) => {

    const { isModalOpen, openModal, closeModal } = useModal();

    let tableBody = table.rows.map((e, i) => {
        return (
            <tr
                key={i}
                className={i % 2 === 0 ? "table-light" : "table-primary"}>
                <th className="tableColumn1"
                    scope="row"
                    data-bs-target="#modal2"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    onClick={openModal}
                >{i + 1}</th>

                <td>{e[0]}</td>
                <td>{e[1]}</td>
                <td>{e[2]}</td>
            </tr>
        )
    })

    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                <tr className="table-primary">
                    <th scope="col">change</th>
                    <th scope="col">Header</th>
                    <th scope="col">Content</th>
                    <th scope="col">Picture url</th>
                </tr>
                </thead>
                <tbody>
                {tableBody}
                </tbody>
            </table>
            <Modal
                id="any-unique-identifier"
                isOpen={isModalOpen}
                transition={ModalTransition.BOTTOM_UP}
            >
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    )

}
