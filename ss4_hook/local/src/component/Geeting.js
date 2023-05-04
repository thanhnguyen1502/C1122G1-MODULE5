import React, {useState} from 'react';

function Geeting(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const handleFirstName = (firstNameHandle) => {
        setFirstName(firstNameHandle);
    }
    const handleLastName = (lastNameHandle) => {
        setLastName(lastNameHandle)
    }

    return (
        <>
            <div>
                <span>First Name</span>
                <input type="text" onChange={(event) => handleFirstName(event.target.value)}
                />
            </div>
            <br/>
            <div>
                <span>Last Name</span>
                <input type="text" onChange={(event) => handleLastName(event.target.value)}
                />
            </div>
            <br/>
            <h1>
                Hello,{' '}
                <span>{firstName} {lastName}</span>
            </h1>
        </>
    );
}

export default Geeting;