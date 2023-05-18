import React, { useState } from "react";

function SelectParticipantsActionBtn({ text, btnColor, toggleOverlay }) {
  const [overlay, setOverlay] = useState(false);

  return (
    <>
      <div
        className="action-button"
        style={{ backgroundColor: `${btnColor}` }}
        onClick={() => setOverlay(true)}
      >
        {text}
      </div>
      {overlay && (
        <div className="overlay">
          <div className="modal-comp">
            <div className="head">
              <h3 className="heading">Form Conformation</h3>
            </div>
            <div className="body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
              </p>
            </div>
            <div className="foot">
              <button className="button">Submit</button>
              <button className="button">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SelectParticipantsActionBtn;
