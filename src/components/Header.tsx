import { useContext } from "react";
import { CountContext } from "../services/CounterContext";

const Header = () => {
    const context = useContext(CountContext);

    if (!context) return null; // safety check for TypeScript

    const { count, reset } = context;
    return (
        <div className="headers">
            <div className="menu-left">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Contact Us
                    </li>
                </ul>
            </div>
            <div className="cart-section">
            <ul>
                    <li>
                        <div>
                            Card <span>{count}</span>
                        </div>
                    </li>
                    <li>
                        <button onClick={reset} type="button">Delete</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Header;