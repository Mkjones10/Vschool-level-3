import React from "react"

export default function MemeLists(props) {
    // console.log(props)
    const [newMeme, setNewMeme] = React.useState({
        topText:'',
        bottomText:'',
    })
    function handleNewChange(event) {

        const { name, value } = event.target
        setNewMeme(prevNewMeme => ({
            ...prevNewMeme,
            [name]: value
        }))
    }
    return (
        <>
            <div className="container">
                <h2 className="top">{props.topText}</h2>
                <img src={props.randomImage} />
                <h2 className="bottom">{props.bottomText}</h2>
                <button onClick={() => props.handleDelete(props.id)}>DELETE</button>
                <button onClick={() => props.setEditMeme(true)}>Edit Meme</button>
            </div>
            {
                props.editMeme ?
                    <div>
                        <input
                            type='text'
                            className='input1'
                            name='topText'
                            value={newMeme.topText}
                            onChange={handleNewChange}
                        />
                        <input
                            type='text'
                            name='bottomText'
                            className='input2'
                            value={newMeme.bottomText}
                            onChange={handleNewChange} />
                        <button onClick={() => props.handleEdit(props.id, newMeme)}>Save New Meme</button>
                    </div>
                    :
                    null
        }

        </>
    )
}