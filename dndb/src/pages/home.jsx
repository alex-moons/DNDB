import React from 'react';

export default function home(){

    const handleSave = async(e) => {
        e.preventDefault();
        console.log(messageRef.current.value);
    }
    return (<div>
        <form onSubmit={handleSave}>
            <label>Name:</label>
            <input type="text" ref={nameRef}/>
            <button type='submit'> send</button>

        </form>
    </div>
    )
}