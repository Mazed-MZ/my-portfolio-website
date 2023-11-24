import React, { useState, useEffect } from "react";
import "./Service.css";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createTheme({
  palette: {
    primary: green,
  },
});

const ServiceCard = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const classes = useStyles();
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        class="col-md-4 mb-5"
      >
        <div class="card h-100 shadow card_item">
          <img src={props.data.service_img} class="card-img-top" alt="..." />
          <div class="card-body card_element">
            <h5 class="card-title">{props.data.service_title}</h5>
            <p class="card-text">{props.data.service_info}</p>
            <div className="hover_content">
              <div className="overlay">
                <h2>{props.data.service_title}</h2>
              </div>
            </div>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                className={classes.margin}
                onClick={() => setModalShow(true)}
              >
                Learn More
              </Button>
            </ThemeProvider>
          </div>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          myService={props.data}
        />
      </div>
    </>
  );
};

export default ServiceCard;
