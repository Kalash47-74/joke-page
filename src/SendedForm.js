import React from 'react';
import TextFields from './TextFields'
import Button from './Button'

const SendedForm = (props) => (
    <div>
        <TextFields {...props}/>
        <Button child='Отправить' onClick={() => alert(`Hi, ${props.name}. I will meet you in ${props.address} at ${props.time} in the ${props.date}`)} />
    </div>
)

export default SendedForm;