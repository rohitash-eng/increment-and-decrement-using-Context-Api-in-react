import { useContext } from "react";
import { CountContext } from "../services/CounterContext";

const ContentSection = () => {
    const context = useContext(CountContext);
    if (!context) return null;

    const { increament, decreament } = context;
    console.log("Context section");
    return (
        <div className="content-sect">
            <h2>Increment and decrement using Context Api</h2>
            <div className="action-div">
                <button type="button" onClick={increament}>Increment</button>
                <button type="button" onClick={decreament}>Decrement</button>
                <button type="button">Reset</button>
            </div>
        </div>
    );
}
export default ContentSection;