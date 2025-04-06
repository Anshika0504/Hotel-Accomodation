import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Room from './../components/Room'; // Make sure this path is correct

const Homescreen = () => {
  const [rooms, setrooms] = useState([]);
  const[loading,setloading]=useState();
  const[error,setError]=useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true)
        const response = await axios.get('/api/rooms/getallrooms');
        setrooms(response.data);
        setloading(false);
      } catch (error) {
        setError(true)
        console.error('Error fetching rooms:', error);
        setloading(false)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Home Screen</h2>
      <h4>There are total {rooms.length} rooms</h4>

    
      <div className="row">
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <div className="col-md-12" key={room._id}>
              <Room room={room} />
            </div>
          ))
        ) : (
          <p>Loading rooms or no rooms found.</p>
        )}
      </div>
    </div>
  );
};

export default Homescreen;
