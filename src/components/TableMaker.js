import React, {Fragment, useEffect} from "react";
import "../functions/table.scss"
import {Modal, useModal,ModalTransition} from 'react-simple-hook-modal';
import "./modal.scss"
import {ModalContent} from "./ModalContent";
import {useDispatch, useSelector} from "react-redux";
import {currentRowToStateAC} from "../redux/currentRowReducer";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const TableMaker = ({table, type}) => {

    const dispatch = useDispatch()
    const data = useSelector(state => state[type])
    let anchorToScroll = null

    useEffect(() => {
        anchorToScroll = document.querySelector(`#anchorLink-${type}`).click()
        console.log(anchorToScroll,"anchorToScroll")
    }, [])

    const {isModalOpen, openModal, closeModal} = useModal();

    const onChangeClick = (event) => {
        let rowNumber = event.target.innerText
        let currentRow = data.rows[rowNumber - 1]

        dispatch(currentRowToStateAC({
            rowNumber:rowNumber,
            origin:currentRow[0],
            translation:currentRow[1],
            pictureUrl:currentRow[2],
        }))
        openModal()
    }

    let tableBody = table.rows.map((e, i) => {
        return (
            <tr
                key={i}
                className={i % 2 === 0 ? "table-light" : "table-primary"}>
                <th className="tableColumn1"
                    scope="row"
                    onClick={event => onChangeClick(event)}
                >{i + 1}</th>

                <td>{e[0]}</td>
                <td>{e[1]}</td>
                <td>{e[2]}</td>
            </tr>
        )
    })

    return (

            <div className="table-responsive">
                <AnchorLink offset='100' href={`#anchor-${type}`} id={`anchorLink-${type}`}/>
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
                    style={{color: "red"}}
                    modalClassName="modal2"
                    id={`any-unique-identifier ${type}`}
                    isOpen={isModalOpen}
                    transition={ModalTransition.SCALE}
                >
                    <ModalContent closeModal={closeModal} type={type}/>
                </Modal>
                <section id={`anchor-${type}`}/>
            </div>

    )

}
