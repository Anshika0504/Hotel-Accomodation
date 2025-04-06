import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Bookingscreen() {
  const { roomid } = useParams(); // ✅ safer in modern React Router
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [room, setroom] = useState(null);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        setloading(true);
        const response = await axios.post("/api/rooms/getroombyid", { roomid });
        setroom(response.data);
        setloading(false);
      } catch (error) {
        console.error("Error fetching room:", error);
        seterror(true);
        setloading(false);
      }
    };

    fetchRoomData();
  }, [roomid]);

  return (
    <div className='m-5'>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error fetching room data.</h1>
      ) : (
        <div>
          <div className='row justify-content-center mt-5 bs'>
            <div className='col-md-5'>
              <h1>{room.name}</h1>
              <img src={room.imageurls[0]} className='bigimg' alt='Room' />
            </div>
            <div className='col-md-5'>
              <div style={{ textAlign: 'right' }}>
                <h1>Booking Details</h1>
                <hr />
                <b>
                  <p>Name: John Doe</p>
                  <p>From Date: 01-04-2025</p>
                  <p>To Date: 05-04-2025</p>
                  <p>Max Count: {room.maxcount}</p>
                </b>
              </div>
              <div style={{ textAlign: 'right' }}>
                <b>
                  <h1>Amount</h1>
                  <hr />
                  <p>Total Days: 4</p>
                  <p>Rent Per Day: ₹{room.rentperday}</p>
                  <p>Total Amount: ₹{room.rentperday * 4}</p>
                </b>
              </div>
              <div style={{ float: 'right' }}>
                <button className='btn btn-primary'>Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookingscreen;
