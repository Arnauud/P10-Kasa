import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Carrousel from '../../components/Carrousel/Carrousel';
import ColorStar from '../../assets/ColoredStar.svg'
import Star from '../../assets/Star.svg'
import { Collapse } from '../../components/Collapse/Collapse';
import Footer from '../../components/Footer/Footer'
import Error from '../Error/Error';

function Logements() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const logementData = data.find(item => item.id === id);
        if (!logementData) {
          throw new Error('Logement not found');
        }
        setLogement(logementData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Navigate to="/error" />;
  }

  if (!logement) {
    return <Navigate to="/error" />;
  }

  const {
    pictures,
    title,
    location,
    tags,
    description,
    host,
    rating,
    equipments,
  } = logement;

  return (
    <>
      <Header />
      <Carrousel pictures={pictures} />
      <div className="housing-container">
        <div className="housing-title-location-container">
          <h1 className="housing-title">{title}</h1>
          <p className="housing-location">{location}</p>

          <div className="housing-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag-name">{tag}</span>
            ))}
          </div>
        </div>

        <div className="housing-host-container">
          <div className="housing-host-name-picture">
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name} />
          </div>
          <div className="housing-host-rating">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={index < rating ? ColorStar : Star}
                alt={index < rating ? 'Colored Star' : 'Greyed Star'}
                className="star-image"
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="housing-collapse-container">
          <Collapse
            title="Description"
            description={description}
            type="description"
          />

          {/* Equipments */}
          <Collapse
            title="Equipments"
            equipments={equipments}
            type="equipments"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Logements