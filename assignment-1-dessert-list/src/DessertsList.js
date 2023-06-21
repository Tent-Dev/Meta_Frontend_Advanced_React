function DessertsList(props) {
  // Implement the component here.
  return (
    <ul>
      {props.data.sort((a, b) => a.calories - b.calories).map((e) => {
        if (e.calories < 500) {
          const showData = e.name + ' - ' + e.calories;
          return <li>{showData}</li>
        }
      })}
    </ul>
  );
}

export default DessertsList;
