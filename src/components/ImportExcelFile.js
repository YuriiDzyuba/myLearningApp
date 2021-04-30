import React, {Fragment, useState} from 'react'
import {ExcelRenderer} from "react-excel-renderer";
import {CardContent} from "./CardContent";

export const ImportExcelFile = () => {

    const [selectedFile, setSelectedFile] = useState();
    const [selectedJSONFile, setSelectedJSONFile] = useState("");
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
        if (isFilePicked) {
            ExcelRenderer(selectedFile, (err, resp) => {
                if (err) {
                    console.log(err);
                } else {
                    setSelectedJSONFile({
                        dataLoaded: true,
                        cols: resp.cols,
                        rows: resp.rows
                    });
                }
            })
        } else {
            alert("Файл не выбран")
            return false
        }
    };


    const tableMaker = () => {
        let tableBody = selectedJSONFile.rows.map((e, i) => {
            return (
                <tr
                    key={i}
                    className={i % 2 === 0 ? "table-light" : "table-primary"}>
                    <th scope="row">{i + 1}</th>
                    <td>{e[0]}</td>
                    <td>{e[1]}</td>
                    <td>{e[2]}</td>
                </tr>
            )
        })

        return (
            <table className="table">
                <thead>
                <tr className="table-primary">
                    <th scope="col">#</th>
                    <th scope="col">Header</th>
                    <th scope="col">Content</th>
                    <th scope="col">Picture url</th>
                </tr>
                </thead>
                <tbody>
                {tableBody}
                </tbody>
            </table>
        )

    }

    return (
        <Fragment>
            <div className="row justify-content-md-center">
                <div className="col-6 chooseFile">
                    {isFilePicked ? (
                        <p>
                            <span>Filename: {selectedFile.name}  |</span>
                            <span>  Size: {selectedFile.size} bytes</span>
                        </p>
                    ) : (
                        <p>Select a file to show details</p>
                    )}

                    <div className="row justify-content-md-center">
                        <div className="col-auto">
                            <input type="file" name="file" className="form-control" onChange={changeHandler}></input>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-success mb-3" onClick={handleSubmission}>Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {
                selectedJSONFile
                &&
                <CardContent cartItems={selectedJSONFile.rows}/>
            }
            {
                selectedJSONFile
                &&
                <div className="row justify-content-md-center">
                    <div className="tableWrapper">
                        {tableMaker()}
                    </div>
                </div>
            }

        </Fragment>
    )
}


