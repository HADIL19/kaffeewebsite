import kaffeepic from './assets/caffe.jpg'
function  Kaffee () {

    const Kaffee1 = "Aroma";
    const Kaffee2 = "Geschmack";

  return (
    <div classNAme="kaffee">
        <img src={kaffeepic}alt='kaffee picture'></img>
    <h1>Kaffee</h1>
    <p>Der Kaffee ist fertig!</p>
  
    <ul>
        <li> Bonal</li>
        <li>{Kaffee1}</li>
        <li>{Kaffee2.toUpperCase()}</li>
        <li>1001</li>
    </ul>
    </div>
  );
}

export default Kaffee 