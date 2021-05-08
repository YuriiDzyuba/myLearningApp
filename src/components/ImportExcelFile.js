import React, {Fragment, useEffect, useRef, useState} from 'react'
import {ExcelRenderer} from "react-excel-renderer";
import {useDispatch, useSelector} from "react-redux";
import {addWordsToStateAC} from "../redux/wordsReducer";
import {addPhrasesToStateAC} from "../redux/phraseReducer";
import {TableMaker} from "./TableMaker";


export const ImportExcelFile = ({selectFileHeader, type}) => {

    const [selectedFile, setSelectedFile] = useState("");

    const dispatch = useDispatch()
    const table = useSelector(state => state[type])

    const selectFileHandler = (event) => {
        let selectedFileCorrect = true
        if (selectedFileCorrect) {
            setSelectedFile(event.target.files[0]);
        } else return alert("selected file incorrect!!!")
    };

    const confirmSelectedFile = () => {
        if (selectedFile) {
            ExcelRenderer(selectedFile, (err, resp) => {
                if (err) {
                    console.log(err);
                } else if (type === "words") {
                    console.log("words")
                    dispatch(addWordsToStateAC({
                        dataLoaded: true,
                        cols: resp.cols,
                        rows: resp.rows
                    }));

                } else if (type === "phrases") {
                    console.log("phrases")
                    dispatch(addPhrasesToStateAC({
                        dataLoaded: true,
                        cols: resp.cols,
                        rows: resp.rows
                    }));
                }
            })
        } else {
            alert("Файл не выбран")
            return false
        }
    };


    return (
        <Fragment>

            <div className='d-flex flex-row mt-3 justify-content-center'>
                <div className="col-12 chooseFile">
                    {selectedFile ? (
                        <h6 className="text-center mb-3">
                            <span>Filename: {selectedFile.name} |</span>
                            <span>  Size: {selectedFile.size} bytes</span>
                        </h6>
                    ) : (
                        <h6 className="text-center">{selectFileHeader}</h6>
                    )}

                    <div className="row justify-content-md-center">
                        <div className="col-auto">
                            <input type="file" name="file" className="form-control" onChange={selectFileHandler}/>
                        </div>
                        <div className="col-auto">
                            <button
                                type="submit"
                                className="btn btn-success mb-3"
                                onClick={confirmSelectedFile}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {
                table.dataLoaded
                &&
                <div className="row justify-content-md-center">
                    <div className="tableWrapper">
                        <TableMaker table={table} type={type}/>
                    </div>
                </div>
            }

        </Fragment>
    )
}


