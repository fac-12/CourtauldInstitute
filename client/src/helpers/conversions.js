const pInt = input => parseInt(input, 10);

export const parseDateTime = datetime => {
  const dateObj = new Date(pInt(datetime));
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };
  const date = dateObj.toLocaleDateString("en-GB", options);
  const time = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });
  return { date, time };
};
