import { useEffect, useState } from "react";

function useGetSize(element) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (element.current) {
      const newWidth = element.current.offsetWidth;
      setWidth(newWidth);
    }
  }, [element]);

  useEffect(() => {
    let timer = null;

    const handleResize = () => {
      if(timer) clearTimeout(timer);
  
      timer = setTimeout(() => {
        const newWidth = element.current.offsetWidth;
        setWidth(newWidth);
      }, 300);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  })

  return width;
}

export default useGetSize;
