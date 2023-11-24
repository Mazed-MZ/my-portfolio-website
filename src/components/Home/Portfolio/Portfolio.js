import React from "react";
import "./Portfolio.css";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";

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

const Portfolio = ({ slide, offset }) => {
  function useTilt(active) {
    const ref = React.useRef(null);

    React.useEffect(() => {
      if (!ref.current || !active) {
        return;
      }

      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined,
      };

      let el = ref.current;

      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;

        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };

      el.addEventListener("mousemove", handleMouseMove);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);

    return ref;
  }

  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  const classes = useStyles;

  return (
    <>
      <div
        ref={ref}
        className="slide"
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
        }}
      >
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${slide.image}')`,
            width: `800px`,
            height: `450px`,
          }}
        >
          <div className="hover_content">
            <div className='overlay'>
            <ThemeProvider theme={theme}>
              <a href={slide.sitelink} target="_blank">
                <Button
                  id="btn_4"
                  variant="contained"
                  color="primary"
                  className={classes.margin}
                >
                 <span className='link-btn'>Demo <i class="uil uil-arrow-right"></i></span>
                </Button>
              </a>
            </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
