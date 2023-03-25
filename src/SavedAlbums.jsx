
function SavedAlbums({ props }) {
    return (
        <div>
            {props.albums.items.map((item) => (
                <div key={item.id} className="mb-4">
                    <div className="d-flex align-items-center p-3 border rounded-3 shadow-sm mb-3">
                        <img className="img-fluid me-3" src={imageUrl} style={{ width: '90px' }} />
                        <div>
                            <h5>{albumName}</h5>
                            <p className="mb-1">{artistName}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SavedAlbums