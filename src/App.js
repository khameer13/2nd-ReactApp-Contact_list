
import './App.css';


function handleKeyPress(event) {
  if (event.key === 'Enter') {
    addingcontacts();
  }
}
function addingcontacts() {
  const inputdata = document.getElementById('data').value;
  if (inputdata.length >= 1) {
    const li_new = document.createElement("li");
    li_new.innerHTML = inputdata;
    document.getElementById("listofcontacts").appendChild(li_new);
    document.getElementById('data').value = "";
  }
  else {
    alert("enter a name or number")
  };
}



function App() {
  return (
    <>
      <div className='flexing'>
        <div className='contactBox'>

          <h1 className='heading'>
            contact List
          </h1>

          < div className='contactlist'>
            <ol id="listofcontacts">

            </ol>
          </div>

          <div className='inputBox'>
            <input id="data" type="text" placeholder="Enter your text here" onKeyPress={handleKeyPress} />
          </div>

          <button type="button" onClick={addingcontacts}> save </button>

        </div>

      </div>


    </>
  );
}

export default App;
