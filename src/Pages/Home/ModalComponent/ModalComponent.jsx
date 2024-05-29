import React, { useEffect, useState } from 'react';

const ModalComponent = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Set showModal to true when the component mounts
    setShowModal(true);

    // Add event listener to close modal when clicking outside
    const closeModalOnOutsideClick = (event) => {
      if (event.target.id === 'my_modal_7') {
        setShowModal(false);
      }
    };

    document.addEventListener('click', closeModalOnOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', closeModalOnOutsideClick);
    };
  }, []); 

  return (
<div>
  {/* Put this part before </body> tag */}
  <input type="checkbox" id="my_modal_7" className="modal-toggle" checked={showModal} readOnly />
  <div className="modal" role="dialog">
    <div 
      className="modal-box w-[700px] h-[500px]"
      style={{ 
        backgroundImage: 'url("https://i.ibb.co/4PNN5Tp/grab20-28apr-lp2.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      {/* Modal content goes here */}
    </div>
    <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
  </div>
</div>

  );
};

export default ModalComponent;
 