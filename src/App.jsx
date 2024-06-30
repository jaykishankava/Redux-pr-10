import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [data, setData] = useState([]);
  const [todo,setTodo]=useState([])

  const getData = async () => {
    try {
      let record = await axios.get("https://dummyjson.com/products/search?q=phone");
       setData(record.data.products);
      fetch('https://dummyjson.com/todos')
      .then(res=>res.json())
      .then(res=>{
        setTodo(res.todos);
      })
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <div>
        <h1 align="center" className="my-4 fw-bold"><i>Products</i></h1>
        <div className="container">
          <div className="row">
            {
              data.map((val) => {
                return (
                  <div className="col-lg-3 mt-3" key={val.id}>
                 <div className="ms-3">
                 <div className="card ps-3" style={{ width: '18rem',height:'36rem',textAlign:'justify' }}>
                    <div className="img" style={{overflow:"hidden", objectFit:"cover"}}>
                    <img src={val.images[0]} className="card-img-top" alt="..."/>
                    </div>
                      <div className="card-body">
                        <h5 className="card-id">id-:{val.id}</h5>
                        <h6 className="card-title">Product Name :- {val.title}</h6>
                        <h6 className="card-rating">Rating -:{val.rating}</h6>
                        <p className="card-text"><i>{val.description}</i></p>
                        <a href="#" className="btn btn-primary mx-auto d-block">Buy :- {val.price}</a>
                      </div>
                    </div>
                 </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div>
        <h1 align="center" className="mt-5 fw-bold"><i>Carts</i></h1>
        <div className="container mt-5">
          <div className="row">
<table className="table border">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Todo</th>
      <th scope="col">Complete</th>
      <th scope="col">User_ID</th>
    </tr>
  </thead>
  <tbody>
   {
    todo.map((val)=>{
      return(
        <tr key={val.id}>
          <td>{val.id}</td>
          <td>{val.todo}</td>
          <td>{val.completed.toString()}</td>
          <td>{val.userId.toString()}</td>
        </tr>
      )
    })
   }
  </tbody>
</table>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
