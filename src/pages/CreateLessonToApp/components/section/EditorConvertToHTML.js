import React, {Component, Fragment, useEffect, useRef, useState} from 'react';
import {EditorState, convertToRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import "./editorConvertToHTML.scss"
import {useDispatch} from "react-redux";
import {onTextAreaChange} from "../../../../redux/lessonToApp/SectionsReducer";


export const EditorConvertToHTML = ({num}) => {

    const dispatch = useDispatch()

    const [state, setState] = useState({editorState: EditorState.createEmpty(),})

    const onEditorStateChange = (editorState) => {
        setState({
            editorState,
        });
    };

    const {editorState} = state;
    const textArea = useRef()

   const getHTML = () =>{
       dispatch(onTextAreaChange(textArea.current ? textArea.current.defaultValue : "", num))
   }


    return (
        <Fragment>
            <div className='d-flex flex-row mt-4 justify-content-center'>
                <h3>{"Section-" + num + " content"}</h3>
            </div>
            <div className={"text-editor"}>
                <Editor

                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={onEditorStateChange}
                />
                <textarea
                    ref={textArea}
                    disabled
                    value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                />
            </div>
            <div className='d-flex flex-row mt-1 justify-content-center'>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={getHTML}
                >
                    {`Add section - ${num} description`}
                </button>
            </div>
        </Fragment>

    );

}
