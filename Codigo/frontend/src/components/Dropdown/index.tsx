const Dropdown = () => {
    const [names, setNames] = useState([]);
  
    useEffect(() => {
      fetch("/api/names") // assuming this API endpoint returns an array of names
        .then((response) => response.json())
        .then((data) => setNames(data))
        .catch((error) => console.error(error));
    }, []);
  
    return (
      <div>
        <Dropdown>
          <Option value="">Select a name</Option>
          {names.map((name) => (
            <Option key={name.id} value={name.id}>
              {name.name}
            </Option>
          ))}
        </Dropdown>
      </div>
    );
  };
  
  export default Dropdown;