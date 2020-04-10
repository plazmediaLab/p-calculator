import React from "react";

const Button = ({ className_arg, innerText_arg, buttonrole_arg, onClick_arg }) => {

  return (
    <div
      className={ className_arg }
      onClick={ onClick_arg }
      buttonrole={ buttonrole_arg }
    >
      { innerText_arg  }
    </div>
  );
};

export default Button;
