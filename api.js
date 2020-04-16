import moment from "moment";

export function formatDate(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format("D MMM YYYY");
}

export function getCountDownParts(eventDate) {
  let now = moment(new Date());
  let then = moment(new Date(eventDate));
  const duration = moment.duration(moment(then).diff(now));

  return {
    days: parseInt(duration.as("days")),
    hours: duration.get("hours"),
    minutes: duration.get("minutes"),
    seconds: duration.get("minutes"),
  };
}
