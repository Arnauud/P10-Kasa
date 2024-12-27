import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchData from '../../utility/fetchData';

function HouseCard() {
  const [data, setData] = useState([]); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await fetchData(); // Fetch data
        setData(fetchedData); // Update state with fetched data
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    }

    loadData();
  }, []); // Empty dependency array to run this only on mount

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching
  }

  return (
    <div className="card-Container">
      {data.map(item => (
        <div key={item.id} className="Card">
          <Link to={`/logements/${item.id}`} className="Card-link">
            <img src={item.cover} alt={item.title} className="Card-image" />
            <div className="Card-location-name">{item.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HouseCard;