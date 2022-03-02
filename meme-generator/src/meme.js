import React from 'react'
import MemeLists from './MemeList'
export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/jrj7.jpg',
        id: ''
    })
    const [allMemes, setAllMemes] = React.useState([])
    const [memeList, setMemeList] = React.useState([])
    const [editMeme, setEditMeme] = React.useState(false)
    // const [newMeme, setNewMeme] = React.useState([])
    // console.log(memeList)


    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    function getMemeImage() {
        const memeArr = allMemes

        const randomNum = Math.floor(Math.random() * memeArr.length)
        // console.log(randomNum)
        const url = memeArr[randomNum].url

        const memeId = memeArr[randomNum].id
        console.log(memeId)
        setMeme(prevMeme => ({
            ...prevMeme,
            id: memeId,
            randomImage: url
        })
        )
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))

    }


    function handleSave() {
        setMemeList(prevMemeList => {
            return [...prevMemeList,
            {
                topText: meme.topText,
                bottomText: meme.bottomText,
                randomImage: meme.randomImage,
                id: meme.id
            }]
        })


    }
    function handleDelete(id) {

        // console.log(memeId)
       let current = setMemeList((prevMemeList) => {
           
           return prevMemeList.filter((meme, index) =>  {
               console.log(index)
               console.log(meme)
            return index !==id 
        })
        })
    //    memeList.splice(current,1)
        // console.log(index)
      
    }

    // function toggleState(){
    //     setEditMeme((prevEditedMeme =>)
    // }
    function handleNewChange(event) {

        const { name, value } = event.target
        setMeme(prevNewMeme => ({
            ...prevNewMeme,
            [name]: value
        }))
    }
    function handleEdit(memeId, edits) {
        console.log('handling edit!')
        console.log("handle edit  items: ",memeId, edits)
        console.log(".....end handle edit......")
        setMemeList((prevMemeList) => prevMemeList.map((meme ,index) => {
            console.log(index, memeId)
            return memeId !== index ? meme : {...meme, ...edits}
        }
        ))
        setEditMeme(false)
    }

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
    const memeElements = memeList.map((meme, index) => {
        return (<MemeLists key={meme.id} {...meme}
            handleDelete={handleDelete}
            setEditMeme={setEditMeme}
            editMeme={editMeme}
            handleChange={handleChange}
            handleEdit={handleEdit}
            handleNewChange={handleNewChange}
            id={index}
        />)
    })
    return (
        <div className='main'>
            <div className='form'>
                <input
                    type='text'
                    className='input'
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='bottomText'
                    className='input'
                    value={meme.bottomText}
                    onChange={handleChange} />
                <button
                    className='button'
                    onClick={getMemeImage}
                >Make memes here</button>

            </div>


            <div className="saved">
                <h2 className="top">{meme.topText}</h2>
                <img src={meme.randomImage} />
                <h2 className="bottom">{meme.bottomText}</h2>
                {/* <button onClick={(event) =>{console.log(event.target.parentElement.children)}}>sijdisdsidd</button> */}
            </div>
            <h2 className="saved-header">SAVED MEMES</h2>
            <div>
                <button className="save" onClick={handleSave}>SAVE MEME</button>
                {memeElements}

            </div>
        </div>

    )
}

