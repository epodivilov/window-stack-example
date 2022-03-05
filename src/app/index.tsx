import { useCallback, useState } from "react";
import { Backdrop } from "../shared/ui/backdrop";
import { Popup } from "../shared/ui/popup";
import { Step, Stepper } from "../shared/ui/stepper";
import "./index.css";

const footerStyle = { background: "#ccc", justifyContent: "flex-end", columnGap: 4 };
const backgrounds = ["tomato", "deepskyblue"];
const results = ["You refused to go through all the steps", "You went through all the steps"];

export function Application() {
  const [result, setResult] = useState(-1);
  const [showStepper, setShowStepper] = useState(false);

  const handleClose = useCallback(() => setResult(0), []);
  const handleSubmit = useCallback(() => setResult(1), []);

  return (
    <div className="app" style={{ background: backgrounds[result] }}>
      {result < 0 ? <button onClick={() => setShowStepper(true)}>Start</button> : <p>{results[result]}</p>}

      {showStepper && result < 0 && <Backdrop />}
      <Stepper onClose={handleClose} onSubmit={handleSubmit}>
        {showStepper && (
          <Step id={0}>
            {({ prev, next }) => (
              <Popup open onClose={prev} backdrop={false}>
                <Popup.Header>First popup</Popup.Header>
                <main style={{ maxWidth: 400, padding: "8px 0" }}>
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
                </main>
                <Popup.Footer style={footerStyle}>
                  <button onClick={() => next(3)}>Finish</button>
                  <button onClick={() => next()}>Next</button>
                </Popup.Footer>
              </Popup>
            )}
          </Step>
        )}
        {showStepper && (
          <Step id={1}>
            {({ prev, next }) => (
              <Popup open onClose={prev} backdrop={false}>
                <Popup.Header>Second popup</Popup.Header>
                <main style={{ maxWidth: 400, padding: "8px 0" }}>
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
                </main>
                <Popup.Footer style={footerStyle}>
                  <button onClick={() => next(-1)}>Abort</button>
                  <button onClick={() => next(3)}>Finish</button>
                  <button onClick={() => next()}>Next</button>
                </Popup.Footer>
              </Popup>
            )}
          </Step>
        )}
        {showStepper && (
          <Step id={2}>
            {({ prev, next }) => (
              <Popup open onClose={prev} backdrop={false}>
                <Popup.Header>Third popup</Popup.Header>
                <main style={{ maxWidth: 400, padding: "8px 0" }}>
                  <p style={{ margin: 0 }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur facilis consectetur excepturi
                    ullam mollitia totam dolore similique provident enim fugiat dicta animi voluptatum, sunt porro,
                    optio nesciunt eius, ab obcaecati.
                  </p>
                </main>
                <Popup.Footer style={footerStyle}>
                  <button onClick={() => next(-1)}>Abort</button>
                  <button onClick={() => next(0)}>To start</button>
                  <button onClick={() => next()}>Next</button>
                </Popup.Footer>
              </Popup>
            )}
          </Step>
        )}
      </Stepper>
    </div>
  );
}
