import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";


const BookingRow = ({ booking, handleDelete, handleUpdateDate }) => {
  const { _id, date, service, price, RoomImage,  } = booking;
  const [newDate, setNewDate] = useState(""); // State to store the new date value

  const handleChangeDate = (event) => {
    setNewDate(event.target.value); // Update the new date value when the user changes the date
  };

  const handleSubmitDate = () => {
    console.log("Updating date...");
    if (newDate) {
      handleUpdateDate(_id, newDate);
      toast.success('Date Updated Successfully')
    } else {
      // Display an error message or handle invalid date input
    }
  };
  

  return (
    <>
    
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-error"
        >
          Cancel
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {RoomImage && <img src={RoomImage} />}
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        
          <>
            <input
              type="date"
              value={newDate}
              onChange={handleChangeDate}
            />
            <button className="btn btn-success ps-1" onClick={handleSubmitDate}>Update Date</button>
          </>
        
      </th>
    </tr>
    <ToastContainer/>
    </>
  );
};

export default BookingRow;
