import React, {useContext} from 'react';
import UserContext from '../utils/userContext';
import { Link } from 'react-router-dom';

const JobCreator = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
        Welcome {user?.name}!
        <Link to="/create-job"><button>Create Job</button></Link>
    </div>
  )
}

export default JobCreator;