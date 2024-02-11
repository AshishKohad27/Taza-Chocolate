import { useEffect, useState, useRef } from "react";

export default function HeaderButton({ handelFlag }: { handelFlag: any }) {
  const [flag, setFlag] = useState<boolean>(true);
  const handleClick = () => {
    console.log("Click Me");
    handelFlag();
    setFlag(!flag);
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me Fast</button>
    </div>
  );
}
