import { useState } from "react";

const AddEvent = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  return (
    <form className="add-form">
      <div className="form-control">
        <label>Event</label>
        <input
          type="text"
          placeholder="Add Event"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(event) => setDay(event.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(event) => setReminder(event.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Event" className="btn btn-block" />
    </form>
  );
};

export default AddEvent;
