import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import axios from 'axios';

const Bookings = () => {


    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {

        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res?.data)
            })

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))

    }, [])


    const handleDelete = (id) => {
        const proceed = confirm('Are You sure you want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('delete successfully')
                        const remaiining = bookings.filter(book => book._id !== id)
                        setBookings(remaiining)
                    }
                })
        }
    }




    const handleBookingConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // alert('Updated Successfully')
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id == id)
                    updated.status = 'confirm'
                    const newBookings = [...remaining, updated]
                    setBookings(newBookings)
                }
            })
    }


    return (
        <div>
            <h1 className='text-5xl'>Your Bookings: {bookings.length}</h1><div className="overflow-x-auto">
                <table className="table overflow-x-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                                Delete
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;