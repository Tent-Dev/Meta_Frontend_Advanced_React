function DessertsList(props) {
  // Implement the component here.
  return (
    <ul>
      {props.data.sort((a, b) => a.calories - b.calories).filter((e) => e.calories < 500).map((e) => {

        const showData = e.name + ' - ' + e.calories;
        return <li>{showData}</li>

      })}
    </ul>
  );
}

export default DessertsList;
