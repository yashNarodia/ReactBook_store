import {useNavigate} from 'react-router-dom';
import { Button } from '@mui/material';
export const Apple = () => {
    const Navigate = useNavigate();
    const onHomePageBottonClick = () => {
        Navigate('/');
    }
    return (
    <div style={{padding: 5}}>
        <div>Apple div</div>
        <Button onClick={onHomePageBottonClick} variant="contained">Navigate to Homepage</Button>
    </div>
    )
}

