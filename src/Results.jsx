import { useState } from "react"
import SavedAlbums from "./SavedAlbums"

function Results({ props }) {

    const [saved, setSaved] = useState()

    console.log(saved)
    return (

        <div >
            <SavedAlbums props={saved} />

            {props.albums.items.map((item) => (
                <div key={item.id} className="mb-4">
                    <div className="d-flex align-items-center p-3 border rounded-3 shadow-sm mb-3">
                        <img className="img-fluid me-3" src={item.images[1].url} style={{ width: '90px' }} />
                        <div className="flex-fill">
                            <h5>{item.name}</h5>
                            <p className="mb-1">{item.artists[0].name}</p>
                        </div>
                        <button className="btn btn-outline-success align-self-start" onClick={() => setSaved(item.name)}>save</button>
                    </div>
                </div>
            ))
            }
        </div >

    )
}

export default Results