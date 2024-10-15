import { useState, useEffect } from "react";
import Button from "../components/Button";
import Modal from "../components/modal";
import { Spinner } from "../components/spinner";
import { useParams } from "react-router-dom";

const NoteForm = () => {
    const [data, setData] = useState(null)
    const [id, setId] = useState(null)
    const [title, setTitle] = useState(null)
    const [body, setNote] = useState(null)
    const [change, setChange] = useState(null)
    const [text, setText] = useState(null)
    const [BtnClas, setBtnClas] = useState("btn btn-outline-info")
    const link = "/home/" + useParams().id

    useEffect(() => {
        const notes = async () => {
            try {
                const result = await fetch(link)
                const json = await result.json()
                setData(json)
                if (data != null) {
                    data.map((note) => {
                        setId(note._id)
                        setTitle(note.title)
                        setNote(note.body)
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
        notes()
    }, [change])

    setTimeout(() => {
        setChange("hi")
    }, 1000)


    const clearModal = () => {
        setTimeout(() => { setText('') }, 2000)
    }
    // Sending post requiest to server API

    const updating = '/update/' + id
    const update = async (e) => {
        e.preventDefault()
        const notes = { title, body }
        try {
            const response = await fetch(updating, {
                method: 'POST',
                body: JSON.stringify(notes),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = response.json()
            if (response) {
                const min = () => {
                    setText(<Modal text={"Note Updated Succesfully"} />)
                    setTitle('')
                    setNote('')
                    clearModal()
                    setBtnClas("btn btn-outline-info")
                }
                setText(<Spinner />)
                setBtnClas("btn btn-outline-info disabled")
                setTimeout(() => {
                    min()
                }, 2000)
            }
            else { setText(json.error) }
        } catch (error) {
            setText(error)
        }
    }

    return (
        <div className="center m-5">
            <div className="card col-6">
                <div className="card-body">
                    <h3 className="card-title">Enter The Note Here</h3>
                    <form onSubmit={update}>
                        <div className="row mb-3">
                            <label for="inputTitle" className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" onChange={(e) => { setTitle(e.target.value) }}
                                    value={title} required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputNote" className="col-sm-2 col-form-label">Note</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" onChange={(e) => { setNote(e.target.value) }}
                                    value={body} required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <div class="d-flex align-items-center">
                                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <Button value={"Update"} class={BtnClas} />
                                    </div>
                                    <div class="ps-3">{text}
                                    </div>
                                </div></div>
                        </div>

                    </form>

                </div >
            </div >
        </div>
    );
}

export default NoteForm;