import { useState } from 'react';
import './styles/main.css';

export default function App() {

    const [modalVisible, setModalVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const createNote = (event) => {
        event.preventDefault()
        
        console.log(title)
        console.log(content)

        setTitle('')
        setContent('')

        setModalVisible(false)
    }

    return (
        <div>
            <div className='header'>
                <div className='logo'>
                    <p className='title'>Guest Book</p>
                </div>
                <div className='add-section'>
                    <a className='add-btn' href='#' onClick={ () => setModalVisible(true) }>
                        Add Note
                    </a>
                </div>
            </div>
            <div className='posts'>
                <p className='centerText'>No Posts</p>
            </div>
            <div className={ modalVisible ? 'modal' : 'modal-not-visible' }>
                <div className='form'>
                    <div className='form-header'>
                        <div>
                            <p className='form-header-text'>Create a Note</p>
                        </div>
                        <div>
                            <a href='#' className='close-btn' onClick={ () => setModalVisible(!modalVisible) }>
                                X
                            </a>
                        </div>
                    </div>
                    <form action=''>
                        <div className='form-group'>
                            <label htmlFor='title'>
                                Title
                            </label>
                            <input type='text' value={ title } name='title' id='title' className='form-control' onChange={ (e) => setTitle(e.target.value) } />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='content'>
                                content
                            </label>
                            <textarea name='content' value={ content } onChange={ (e) => setContent(e.target.value) } id='content' cols='30' rows='5' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <input type='submit' value='Save' className='btn' onClick={ createNote } />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}