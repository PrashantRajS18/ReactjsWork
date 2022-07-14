import Info from "./Info";
function App() {
  return (
  <>
  <h1>This is Homepage</h1>
  <h1 style={{textAlign :'center'}}>Score</h1>
  <div className="flex">
  
    <Info   fname='Prashant'/>
    <Info  fname ='Ujjawal'/>
    <Info  fname = 'Abhishek'/>
    <Info   fname='Gaurav'/>
    <Info  fname ='Reetool'/>
    <Info  fname = 'Mausham'/>
  </div>
  </>
  );
}
export default App;
