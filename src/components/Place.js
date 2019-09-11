import React from "react";

function Place() {
  return (
    <section className="placeList">
      <div className="place">
        <img
          src="https://www.dieaugenweide.ch/wp-content/uploads/2018/10/Kolumba-Zumthor-Koeln-2sns.jpg"
          className="image"
        ></img>
        <div className="placeText">
          <h3>Kolumba Museum</h3>
          <p>Place description</p>
        </div>
      </div>
      <div className="place">
        <img
          src="https://www.koelner-dom.de/fileadmin/_processed_/csm_D0_DBH_MU_DSC_2373_fb627b59da.jpg"
          className="image"
        ></img>
        <div className="placeText">
          <h3>Domdach(führung)</h3>
          <p>Place description</p>
        </div>
      </div>
      <div className="place">
        <img
          src="https://www.rhein-magazin-duesseldorf.de/wp-content/uploads/rheinboulevard.jpg"
          className="image"
        ></img>
        <div className="placeText">
          <h3>Rheinpromenade</h3>
          <p>Place description</p>
        </div>
      </div>
      <div className="place">
        <div className="image"></div>
        <div className="placeText">
          <h3>Place 4 headline</h3>
          <p>Place description</p>
        </div>
      </div>
    </section>
  );
}

export default Place;
