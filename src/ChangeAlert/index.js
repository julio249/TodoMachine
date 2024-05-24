import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css';

function ChangeAlert({ sincronize }){
    const {show, toggleShow } = useStorageListener(sincronize);
    if (show) {
        return (
          <div className="ChangeAlert-bg">
            <div className="ChangeAlert-container">
              <p>Seems like there was a change in another Tab or window in your browser  .</p>
              <p>¿Quieres sincronizar tus TODOs?</p>
              <button
                className="TodoForm-button TodoForm-button--add"
                onClick={toggleShow}
              >
                Yes!
              </button>
            </div>
          </div>
        );
      } else {
        return null;
      }
};


export { ChangeAlert };