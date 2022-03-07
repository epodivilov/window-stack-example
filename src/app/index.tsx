import { useCallback, useState, CSSProperties } from "react";
import { Popup } from "../shared/ui/popup";
import { Step, Stepper } from "../shared/ui/stepper";
import "./index.css";

const footerStyle = { background: "#ccc", justifyContent: "flex-end", columnGap: 4 } as CSSProperties;
const labelStyle = { position: "absolute", top: 16, left: 16, fontSize: "0.5em", color: "black" } as CSSProperties;
const backgrounds = ["tomato", "deepskyblue"];
const results = ["You refused to go through all the steps", "You went through all the steps"];

export function Application() {
  const [result, setResult] = useState(-1);
  const [stepsOnScreen, setStepsOnScreen] = useState(1);
  const [showStepper, setShowStepper] = useState(false);

  const handleClose = useCallback(() => setResult(0), []);
  const handleSubmit = useCallback(() => setResult(1), []);

  return (
    <div className="app" style={{ background: backgrounds[result] }}>
      <label style={labelStyle}>
        Steps on screen:{" "}
        <input
          type="number"
          min={1}
          defaultValue={stepsOnScreen}
          onChange={(e) => setStepsOnScreen(parseInt(e.target.value))}
        />
      </label>

      {result < 0 ? <button onClick={() => setShowStepper(true)}>Start</button> : <p>{results[result]}</p>}

      {showStepper && (
        <Stepper onClose={handleClose} onSubmit={handleSubmit} stepsOnScreen={stepsOnScreen}>
          <Step>
            {({ prev, next }) => (
              <Popup open onClose={prev} backdrop={false} zIndex={1}>
                <Popup.Header>First popup</Popup.Header>
                <Popup.Main style={{ maxWidth: 400 }}>
                  <p style={{ margin: 0 }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur facilis consectetur excepturi
                    ullam mollitia totam dolore similique provident enim fugiat dicta animi voluptatum, sunt porro,
                    optio nesciunt eius, ab obcaecati.
                  </p>
                  <p style={{ margin: 0 }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur facilis consectetur excepturi
                    ullam mollitia totam dolore similique provident enim fugiat dicta animi voluptatum, sunt porro,
                    optio nesciunt eius, ab obcaecati.
                  </p>
                  <p style={{ margin: 0 }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur facilis consectetur excepturi
                    ullam mollitia totam dolore similique provident enim fugiat dicta animi voluptatum, sunt porro,
                    optio nesciunt eius, ab obcaecati.
                  </p>
                </Popup.Main>
                <Popup.Footer style={footerStyle}>
                  <button onClick={() => next(3)}>Finish</button>
                  <button onClick={() => next()}>Next</button>
                </Popup.Footer>
              </Popup>
            )}
          </Step>

          <Step>
            {({ prev, next }) => (
              <Popup open onClose={prev} backdrop={false} zIndex={2}>
                <Popup.Header>Second popup</Popup.Header>
                <Popup.Main style={{ maxWidth: 380 }}>
                  <p style={{ margin: 0 }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur facilis consectetur excepturi
                    ullam mollitia totam dolore similique provident enim fugiat dicta animi voluptatum, sunt porro,
                    optio nesciunt eius, ab obcaecati.
                  </p>
                  <p style={{ margin: 0 }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur facilis consectetur excepturi
                    ullam mollitia totam dolore similique provident enim fugiat dicta animi voluptatum, sunt porro,
                    optio nesciunt eius, ab obcaecati.
                  </p>
                </Popup.Main>
                <Popup.Footer style={footerStyle}>
                  <button onClick={() => next(-1)}>Abort</button>
                  <button onClick={() => next(3)}>Finish</button>
                  <button onClick={() => next()}>Next</button>
                </Popup.Footer>
              </Popup>
            )}
          </Step>

          <Step>
            {({ prev, next }) => (
              <Popup open onClose={prev} backdrop={false} zIndex={3}>
                <Popup.Header>Third popup</Popup.Header>
                <Popup.Main style={{ maxWidth: 360 }}>
                  <p style={{ margin: 0 }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur facilis consectetur excepturi
                    ullam mollitia totam dolore similique provident enim fugiat dicta animi voluptatum, sunt porro,
                    optio nesciunt eius, ab obcaecati.
                  </p>
                </Popup.Main>
                <Popup.Footer style={footerStyle}>
                  <button onClick={() => next(-1)}>Abort</button>
                  <button onClick={() => next(0)}>To start</button>
                  <button onClick={() => next()}>Next</button>
                </Popup.Footer>
              </Popup>
            )}
          </Step>
        </Stepper>
      )}
    </div>
  );
}
