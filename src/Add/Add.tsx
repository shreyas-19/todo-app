import { Wrapper } from './Add.styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ListItemType } from '../App';

export type AddProps = {
    addtoList: (item: ListItemType) => void
}
 
const Add: React.FC<AddProps> = ({ addtoList }) => {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        addtoList({
            id: uuidv4(),
            title: title,
            details: details
        })
    }

    return ( 
        <Wrapper>
            <form onSubmit={(e) => handleSubmit(e)}>
                <TextField 
                    size='small' 
                    className="textfield" 
                    id="outlined-basic" 
                    label="Title" 
                    variant="outlined"
                    onChange={e => setTitle(e.target.value)}
                    />

                <TextField 
                    size='small' 
                    className="textfield"
                    id="outlined-multiline-static"
                    label="Details"
                    multiline
                    rows={4}
                    variant="outlined"
                    onChange={e => setDetails(e.target.value)}
                    />
                <Button variant="contained" color="primary" type='submit'>Add Todo!</Button>
            </form>
        </Wrapper>
     );
}
 
export default Add;