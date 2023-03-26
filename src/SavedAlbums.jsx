

function SavedAlbums({ props }) {


    const nome = props


    return (
        <div>
            {nome ? <h1>{nome}</h1> : <h1>No albums saved</h1>}
        </div>
    )
}

export default SavedAlbums