import React from "react";

type Props = {
    children: React.ReactNode
}
const Home = ({ children }: Props) => {
    console.log("Welcome to Home");
    return (
        <div className="home-cl">
            {children}
        </div>
    );
}
export default Home;