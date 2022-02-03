
import './App.css';

const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}



function App() {
  return (
    <div className='App'>
      <img src={employee.profileImg} className="App-logo" alt={employee.name} />
      <div className='user-abhi'>
        <h2>{employee.name}</h2>

        <p><strong>Location</strong>{employee.location}</p>
        <p><strong>Bloodgroup</strong>{employee.bloodGroup}</p>
        <p><strong>Age</strong>{employee.age}</p>

      </div>
    </div>

  );



}

export default App;
