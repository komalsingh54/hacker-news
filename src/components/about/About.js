import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAboutData } from '../../redux/actions/about';

const About = () => {
  const [count, setCount] = useState(0);
  const a = useSelector((state) => state.about);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAboutData());
  }, [dispatch]);

  return (
    <>
      {a.text}
      <button type="button" onClick={() => setCount(count + 1)}>Click me</button>
      <button type="button" onClick={() => { dispatch(getAboutData('Hi Komal')); }}>Komal</button>
    </>
  );
};

export default About;
