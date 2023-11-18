import { useNavigate } from 'react-router-dom';
import Button from './Button';

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={e => {
        e.preventDefault; // to prevent form from submitting automatically
        navigate(-1); // will take us 1 step back in browser history
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
