import React,{useEffect,useState}  from 'react';
import './navbar.css';
import logo from '../static/logo.png';

const Navbar = () => {
  const [name, setName] = useState("");
  const [productcount, setProductcount] = useState();
  useEffect(() => {
    if(localStorage.token){
      const a = localStorage.token;
      const b = a.split(".");
      const c = atob(b[1]);
      const obj = JSON.parse(c);
      const email = obj.email;
      const info =async()=>{
        const res = await fetch("http://localhost:4000/user",{
          method:'POST',
          headers:{
            'Content-Type':'application/json' 
          },
          body:JSON.stringify({
            email:email
          })
        })
        const data = await res.json();
        handleNameChange(data.name)
        handleCountChange(data.userItems);
      }
      info();
      
    }      
  }, [])
  
  
  const handleNameChange= (name)=>{
    setName(name);
  }
  const handleCountChange = (count)=>{
    setProductcount(count);
  }
    const Handleclick = (e) =>{
       const check = document.getElementById('list');
       console.log(window.getComputedStyle(check));
      if(window.getComputedStyle(check).display === 'block')
      {
        check.style.display = 'none'
      }
      else{
        check.style.display  = 'block'
      }
    }
   const handlelogout = ()=>{
     console.log('logout')
     localStorage.setItem('token',"");
     window.location.href='/';
   }
     
     
  return <div className='navbarmaster'>
       <img className='imagelogo' src={logo} alt="logo" />
        <ul id='list' className="list">
           
            <li className="listname placeSearch">
            <i className="fas fa-map-marker-alt"></i>
                <input id='location' type="text" placeholder=' Set Location' />
            </li>
            <li className="listname">
                <span><i className="fas fa-search fa-2x"></i></span>
                <div>search</div></li>
            <li className="listname logoutmaster g-signin"><a href="/login"><button className='Signinbtn'>{name?name:"login"} <i className="fa fa-caret-down" aria-hidden="true"></i></button></a>
            <div className='logout' onClick={handlelogout}>logout</div>
            </li>
            <li className="listname">
                <i className="fas fa-shopping-cart fa-2x"></i>
                <div className='NumberofItems'>{productcount>0? productcount:""}</div>
            </li>
        </ul>
           <span onClick={Handleclick} className="hamburger"><i className="fas fa-bars fa-2x"></i></span>
  </div>;
};

export default Navbar;
