import react from "react";

const CvModal = (
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  description,
  darkText,
  buttonLabel,
  image,
  alt,
  headline,
  primary,
  dark,
  dark2
) => {
  return (
    <>
      <div>
        <section>
          <div>
            <h1>MAZED MOHAMMED</h1>
            <h3>Contact: +8801845115245</h3>
            <h3>Email: mazed.mohammed45@gmail.com</h3>
            <h3>Address: Bot Tola, Azimpur, Dhaka-1205</h3>
          </div>
          <div>
              <img src="https://i.ibb.co/L501wxT/Profile.png" alt=""/>
          </div>
        </section>
      </div>
    </>
  );
};

export default CvModal;
