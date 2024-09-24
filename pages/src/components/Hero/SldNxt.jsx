import React from "react";
import { useSwiper } from "swiper/react";

function SldNxt(props) {
  const swiper = useSwiper();
  console.log("Inside button state", props.stute);

  React.useEffect(() => {
    console.log("useEffect ran. count is: ", props.stute);
    const SetBool = props.setst
    if(props.stute === true){
        swiper.slideNext();
        swiper.slideNext()
        props.setst(false)
    }
  }, [props.stute]);

  return (
    <button

      style={{
        display: "none",
      }}
    >
      SldNxt
    </button>
  );
}

export default SldNxt;
