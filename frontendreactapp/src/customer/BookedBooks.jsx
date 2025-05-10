import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function BookedEvents() {
  const [bookedEvents, setBookedEvents] = useState([]);
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchBookedEvents = async () => {
      const storedCustomer = sessionStorage.getItem('customer');
      if (storedCustomer) {
        const customerData = JSON.parse(storedCustomer);
        setCustomer(customerData);
        try {
          const response = await axios.get(`${config.url}/customer/bookedevents/${customerData.id}`);
          setBookedEvents(response.data);
        } catch (error) {
          console.error('Error fetching booked events:', error);
        }
      } else {
        alert('Please log in to view your booked events.');
      }
    };

    fetchBookedEvents();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Your Borrowed Books</h3> {/*Your Booked Events*/}
      {customer ? (
        <div>
          <table style={{ width: '100%', textAlign: 'center', marginBottom: '30px' }}>
            <thead style={{ backgroundColor: '#f2f2f2' }}>
              <tr>
                <th>Booking ID</th>
                <th>Book Category</th>
                <th>Book Title</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Booked Capacity</th>
                <th>Status</th>
                <th>Booking Time</th>
              </tr>
            </thead>
            <tbody>
              {
                bookedEvents.length > 0 ? bookedEvents.map((event, index) => (
                  <tr key={index}>
                    <td>{event.id}</td>
                    <td>{event.event.category}</td>
                    <td>{event.event.title}</td>
                    <td>{event.startdate}</td>
                    <td>{event.enddate}</td>
                    <td>{event.bookedcapacity}</td>
                    <td>{event.status}</td>
                    <td>{new Date(event.bookingtime).toLocaleString()}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="8">No borrowed books found.</td> {/*No booked events found*/}
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading your student details...</p> 
      )}
    </div>
  );
}