import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { ImPushpin } from "react-icons/im";
import ConformationNotice from "./ConformationNotice";
import BookingPolicy from "./BookingPolicy";

function SelectParticipantsActionBtn({ type, text, btnColor }) {
  const [overlay, setOverlay] = useState(false);

  const toggleOverlay = (value) => {
    setOverlay(value);
  };

  overlay
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "scroll");

  const conformationNoticeData = [
    {
      id: 0,
      title: "Voucher Conformation",
      type: "voucherConformation",
      format: "Mobile Voucher",
      note: "We will send a digital conformation voucher to your email address. Use your phone or Print your Voucher",
    },
    {
      id: 1,
      title: "Booking Confirmation",
      type: "bookingConformation",
      format: "24hrs Required for Confirmation",
      note: "Confirmation within 24hrs",
    },
  ];

  const bookingPolicyData = [
    {
      id: 0,
      title: "Cancellation Policy",
      policy: [
        "In case Tours or Tickets cancelled after Booking 100 % charges will be applicable.",
        "In case Tours or Tickets cancelled after Booking 100 % charges will be applicable.",
      ],
    },
    {
      id: 1,
      title: "Child Policy",
      policy: [
        "Children between 0 to 3 years of age are considered infant and are NOT allowed",
        "Children above the age of 3 will be charged same as adult",
        "Children between 0 to 3 years of age are considered infant and are NOT allowed",
      ],
    },
  ];
  return (
    <>
      <div
        className="action-button"
        style={{ backgroundColor: `${btnColor}` }}
        onClick={() => toggleOverlay(true)}
      >
        {text}
      </div>
      {overlay && (
        <div
          className="overlay"
          // onClick={() => {
          //   toggleOverlay(false);
          // }}
        >
          {type === "formConformation" ? (
            <div className="modal-comp">
              <div className="head">
                <h4 className="heading">Form Conformation</h4>
              </div>
              <div className="body">
                <div className="content-wrapper">
                  <div className="form-group">
                    <form>
                      <div className="row">
                        <div className="col-md-10">
                          <div className="form-group">
                            <label for="fullName">Full Name :</label>
                            <input
                              type="text"
                              name="fullName"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="form-group">
                            <label for="email">Email :</label>
                            <input
                              type="text"
                              name="email"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="contactNumber">Contact No : </label>
                            <input
                              type="text"
                              name="contactNumber"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="emergencyNumber">Emergency : </label>
                            <input
                              type="text"
                              name="emergencyNumber"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-10">
                          <div className="form-group">
                            <label for="address">Address : </label>
                            <input
                              type="text"
                              name="address"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div>Tour Date : 05/20/2023</div>
                        <div>Adult : 5</div>
                        <div>Children : 2</div>
                        <div>Infant 0-3 yrs : 0</div>
                        <h5>Total Amount : Nrs.50,000/-</h5>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="buttons">
                  <button
                    className="button sumbit-btn"
                    onClick={() => {
                      toggleOverlay(false);
                    }}
                  >
                    Submit
                  </button>
                  <button
                    className="button"
                    onClick={() => {
                      toggleOverlay(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <RxCrossCircled
                className="close-button"
                onClick={() => {
                  toggleOverlay(false);
                }}
              />
            </div>
          ) : (
            <div className="modal-comp">
              <div className="head">
                <h4 className="heading">More Information</h4>
              </div>
              <div className="body">
                <div className="content-wrapper">
                  {conformationNoticeData.map((item) => (
                    <ConformationNotice item={item} key={item.id} />
                  ))}
                  <div className="booking-policy-wrapper">
                    <h6 className="title">
                      <ImPushpin className="pushpin-icon" /> Booking Policy
                    </h6>
                    {bookingPolicyData.map((item) => (
                      <BookingPolicy policyData={item} key={item.id} />
                    ))}
                  </div>
                  <div className="summary">
                    <strong>Lorem</strong> Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </div>
                  <div className="buttons">
                    <button
                      className="button"
                      onClick={() => {
                        toggleOverlay(false);
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
              <RxCrossCircled
                className="close-button"
                onClick={() => {
                  toggleOverlay(false);
                }}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default SelectParticipantsActionBtn;
