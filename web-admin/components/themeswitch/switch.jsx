import { useState } from 'react';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function Switch() {
    const [dark, setdark] = useState(false);

      // changing the drak theme
    const ModeHandler = () => {
        const html = document.querySelector("html");
        if (dark == true) {
            html.classList.remove("dark");
        } else {
            html.classList.add("dark");
        }
        setdark(!dark);
    };

  return (
    <div>
         <div className="icon-container text-center pr-4"  onClick={ModeHandler} >
                            {dark ? (
                                <LightModeIcon
                                    className="text-yellow-400"
                                    fontSize="medium"
                                    style={{ width: "30px" }}
                                />
                            ) : (
                                <DarkModeIcon fontSize="medium" />
                            )}
      </div>
      

    </div>
  )
}

export default Switch;


// import React from 'react';

// const Switch = () => {
//   return (
//     <div className="icon-container">
//       <i className="fas fa-bell"></i>
//     </div>
//   );
// };

// export default Switch;
