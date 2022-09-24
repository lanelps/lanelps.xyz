import React, { useState, useEffect, useContext } from "react";
import tw, { css } from "twin.macro";

import AppContext from "../context/AppContext";

const Git = () => {
  const { isDark, setIsDark } = useContext(AppContext);

  const [branch, setBranch] = useState(`(mā)`);

  useEffect(() => {
    if (isDark) {
      setBranch(`(pango)`);
    } else {
      setBranch(`(mā)`);
    }
  }, [isDark]);

  const dayNightClick = () => {
    setIsDark(!isDark);
  };

  return (
    <div css={[tw`absolute top-0 md:top-[1.5rem] z-10`]}>
      <span tw="text-red">lanelps </span>
      <button type="button" onClick={dayNightClick} tabIndex={0} tw="text-turq">
        {branch}
      </button>
      <span tw="text-blue"> website</span>
    </div>
  );
};

export default Git;
