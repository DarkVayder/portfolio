import { useEffect, useState } from "react";
import { PROFILE } from "../data/profile";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: PROFILE.timeZone,
  hour: "2-digit",
  minute: "2-digit",
});

/** Renders nothing until mounted so the prerendered HTML never carries a stale time. */
const LiveClock = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <>
      <span aria-hidden="true">·</span>
      <span>{time} my time</span>
    </>
  );
};

export default LiveClock;
