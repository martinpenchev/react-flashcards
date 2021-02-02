import React, {useState, useEffect} from 'react';

const Timer = ({stop}:{stop: Boolean}) => {
    const [currentSeconds, setCurrentSeconds] = useState(0);
  
    useEffect(() => {
      if (!stop) {
        const updateTime = setInterval(() => {
          setCurrentSeconds(prevTime => prevTime + 1);
        }, 1000);
        return () => {
          clearInterval(updateTime);
          setCurrentSeconds(0);
        };
      }
    }, [stop]);

    return (
      <>
        {FormattedTime(currentSeconds)}
      </>
    );
};

const FormattedTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default Timer;