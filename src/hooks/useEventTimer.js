import { useState, useEffect } from "react";

const useEventTimer = (startTime, endTime) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [status, setStatus] = useState("upcoming"); // upcoming, live, ended
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    if (!startTime || !endTime) return;

    const updateTimer = () => {
      const now = new Date();
      const start = new Date(startTime);
      const end = new Date(endTime);

      const timeToStart = start.getTime() - now.getTime();
      const timeToEnd = end.getTime() - now.getTime();

      if (timeToEnd <= 0) {
        // Event has ended
        setStatus("ended");
        setTimeLeft(null);
        setCountdown(null);
      } else if (timeToStart <= 0) {
        // Event is live
        setStatus("live");
        setTimeLeft(null);
        setCountdown(null);
      } else if (timeToStart <= 2 * 60 * 1000) {
        // Event starts in 2 minutes or less - show countdown
        setStatus("upcoming");
        const minutes = Math.floor(timeToStart / (1000 * 60));
        const seconds = Math.floor((timeToStart % (1000 * 60)) / 1000);
        setCountdown({ minutes, seconds });
        setTimeLeft(null);
      } else {
        // Event is more than 2 minutes away
        setStatus("upcoming");
        setCountdown(null);
        setTimeLeft(null);
      }
    };

    // Update immediately
    updateTimer();

    // Update every second
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  return { status, countdown, timeLeft };
};

export default useEventTimer;
