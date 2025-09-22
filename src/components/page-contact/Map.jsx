import React from 'react';

function Map() {
  return (
    <div className="google-map">
      <iframe
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392.40293096242175!2d55.37146030011509!3d25.270554682731845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf998288aa326745%3A0x26a93c4ffed5407a!2sBizDoc%20Businessmen%20Services!5e1!3m2!1sen!2sin!4v1758273195687!5m2!1sen!2sin"
      ></iframe>
    </div>
  );
}

export default Map;
