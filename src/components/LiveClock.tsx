import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  hour: "2-digit",
  minute: "2-digit",
});

const LiveClock = () => {
  const [time, setTime] = useState(() => formatter.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatter.format(new Date())), 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono text-xs text-muted">
      {time} local
    </span>
  );
};

export default LiveClock;
