function DessertsList(props) {
  // Implement the component here.

  const getData = () => {
    props.data.map((e) => e.calories < 500).sort((a, b) => a.calories - b.calories);
  }
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
