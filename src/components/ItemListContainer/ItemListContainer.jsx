
//const categorias = ['Bazar', 'Cocina', 'Living', "Deco", "Vajilla"]
const categories = [
    {
      id: 1,
      name: "Bazar",
      img: "https://clarika.b-cdn.net/prod/793E269E-62AB-4897-8D39-C2B80D9F0A39/product/JARRACAPRI2fAMALFIVIDRIOC2fMIMBRE_1.jpeg",
    },
    {
      id: 2,
      name: "Cocina",
      img: "https://clarika.b-cdn.net/prod/793E269E-62AB-4897-8D39-C2B80D9F0A39/product/TABLAMADERAYMARMOL28X20_1.jpeg",
    },
    {
      id: 3,
      name: "Living",
      img: "https:/https://clarika.b-cdn.net/prod/793E269E-62AB-4897-8D39-C2B80D9F0A39/product/FANALBLACKXL_1.jpeg",
    },
    {
      id: 4,
      name: "Deco",
      img: "https://clarika.b-cdn.net/prod/793E269E-62AB-4897-8D39-C2B80D9F0A39/product/FANALWHITE_1.jpeg",
    },
    {
      id: 5,
      name: "Vajilla",
      img: "https://clarika.b-cdn.net/prod/793E269E-62AB-4897-8D39-C2B80D9F0A39/product/TRAMONTINAPOLLYWOODJUEGO12PIEZAS_1.jpeg",
    },
  ];
  function ItemListContainer({greetings}) {
      //console.log(categorias)
    return (
      <>
        <h2>{greetings}</h2>
  
          {categories.map( item => (
              <div key={item.id} className="card" style={{width: '18rem'}}>
                  <img src={item.img} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
              </div>
          ))}
  
      </>
    );
  }
  
  export default ItemListContainer
  