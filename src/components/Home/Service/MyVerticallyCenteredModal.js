import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';


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


const MyVerticallyCenteredModal = (props) => {


  const classes = useStyles();

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.myService.service_title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal_section'>
        <p>
          {props.myService.service_info_2}
        </p>
        <img src={props.myService.service_img} alt="" />
        <div className='modal_info'>
          <h5>{props.myService.service_subtxt}</h5>
          <div className='modal_txt'>
            <div className='modal_div_1'>
              <p><FontAwesomeIcon icon={faArrowAltCircleRight} /> {props.myService.service_txt_1}</p>
              <p><FontAwesomeIcon icon={faArrowAltCircleRight} /> {props.myService.service_txt_2}</p>
              <p><FontAwesomeIcon icon={faArrowAltCircleRight} /> {props.myService.service_txt_3}</p>
              <p><FontAwesomeIcon icon={faArrowAltCircleRight} /> {props.myService.service_txt_4}</p>
            </div>
            <div className='modal_div_2'>
              <p><FontAwesomeIcon icon={faArrowAltCircleRight} /> {props.myService.service_txt_5}</p>
              <p><FontAwesomeIcon icon={faArrowAltCircleRight} /> {props.myService.service_txt_6}</p>
              <p><FontAwesomeIcon icon={faArrowAltCircleRight} /> {props.myService.service_txt_7}</p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary" className={classes.margin} onClick={props.onHide}>
            close
          </Button>
        </ThemeProvider>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;