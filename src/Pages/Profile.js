import '../App.css';
import {useNavigate, useParams} from 'react-router-dom';

function Profile() {
  
  let navigate = useNavigate();
  let {username} = useParams();

  return (
    <div>
      <h1>{username}'s Page</h1>
      <button onClick={() => navigate('/about')}>Learn More About Me</button>
    </div>
  );
}

export default Profile;
