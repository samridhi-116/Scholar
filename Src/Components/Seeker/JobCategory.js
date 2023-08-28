import React from 'react';
import {Outlet, useNavigate} from 'react-router-dom';

const JobCategory = () => {
  const navigate = useNavigate();
  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' },
  ];

  const handleClick = (categoryId) => {
    navigate(`/jobsbycategory?id=${categoryId}`);
  };

  return (
    <div>
      <h2>All Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {/* <Link to={`/jobsbycategory?id=${category.id}`}>{category.name}</Link> */}
            <button onClick={() => handleClick(category.id)}>Jobs of {category.name}</button>
          </li>
        ))}
      </ul>
      <Outlet/>
    </div>
  );
};

export default JobCategory;
