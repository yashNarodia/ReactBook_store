import {useNavigate} from 'react-router-dom';

export const Apple = () => {
    const Navigate = useNavigate();
    const onHomePageBottonClick = () => {
        Navigate('/');
    }
    return (
    <div>
        <div>Apple div</div>
        <button onClick={onHomePageBottonClick}>Navigate to Homepage</button>
    </div>
    )
}

