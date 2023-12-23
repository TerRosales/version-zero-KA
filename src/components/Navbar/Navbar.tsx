import React from "react";

const Navbar = () => {
    //TO-DO 
    // responsive 
    // edit style
    // connect login with authenthication
    return (
        <div className="bg-gray-500 p-4 flex justify-between items-center">
            <div className="text-white text-sm">KidAdult</div>
            <div className="bg-blue-500 text-white p-2 rounded mx-auto">Leaderboard</div>
            <div className="text-white flex items-center space-x-2">
                <input type="text" id="username" className="border rounded px-2 py-1 text-sm" placeholder="Username" />
                <input type="password" id="password" className="border rounded px-2 py-1 text-sm" placeholder="Password" />
            </div>
        </div>
    );
};

export default Navbar;
