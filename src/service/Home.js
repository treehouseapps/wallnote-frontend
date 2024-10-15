import { useEffect, useState } from "react"
import Item from "../components/Item"
import { Loading } from "../components/spinner"

const NoteService = () => {
    const [Notes, setNotes] = useState(null)
    const [error, setError] = useState(true)
    const [spinner, setSpinner] = useState(null)

    // Sending get requiest to server API
    useEffect(() => {
        const notes = async () => {
            try {
                const result = await fetch('https://wallnote-backend.vercel.app/home')
                const json = await result.json()
                setSpinner(null)
                setNotes(json)
            } catch (error) {
                setSpinner(null)
                setError('Fetching Problem Occured')
            }
        }
        setSpinner(<Loading />)
        setTimeout(() => {
            notes()
        }, 2000)
    }, [])
    return (
        <div>
            <div className="section">
                <div className="header">
                    <div> <h2 className="main">List Of Notes</h2></div>
                    <div className="search-bar">
                        <form className="search-form d-flex align-items-center" method="POST" action="#">
                            <input type="search" name="query" placeholder="Search" title="Enter search keyword" />
                            <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                        </form>
                    </div>
                </div>
                <h3>{error}</h3>
                {spinner}
                <div className="row">
                    {Notes && Notes.map((note) => (
                        <Item key={note._id} item={note} />))
                    }
                </div>
            </div>
        </div>
    )

}

export default NoteService;
