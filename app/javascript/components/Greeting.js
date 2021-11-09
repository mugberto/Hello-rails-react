import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomMessage } from "../redux/greeting/greetingReducer";

const Greeting = () => {
  const greeting = useSelector(state => state.greeting);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(randomMessage());
  }, [])
  
  return (
    <p style={{textAlign: 'center'}}>{greeting.message || ''}</p>
  );
}

export default Greeting;