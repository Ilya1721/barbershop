<div className="time">
  {activeBarber.schedule.days
    .filter((day) => day.id === 0)[0]
    .visits.filter((visit) => visit.isFree !== false)
    .map((visit) => (
      <button
        onClick={onChooseTime}
        className={isTimeSelected(visit.id)}
        id={visit.id}
        key={visit.id}
      >
        {visit.time}
      </button>
    ))}
</div>;
