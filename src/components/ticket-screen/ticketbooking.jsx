import { useEffect, useState } from "react";
import Button from "../common/button"

function TicketBooking() {
  const [movieName, setMovieName] = useState('');
  useEffect(() => {
    const name = localStorage.getItem('name');
    setMovieName(name);
  })

  return (
    <div>
      {
        movieName ? (
          <div>
            <h1 className='text-bold text-amber-500'>Ticket Booking</h1>

            <div>
              <h1>
                {movieName}
              </h1>
            </div>

            <Button className="">
              Book your tickets here!
            </Button>
          </div>
        ) : (
          <div>
            <h1>
              No movie selected
            </h1>
          </div>
        )
      }
    </div>
  )
}

export default TicketBooking