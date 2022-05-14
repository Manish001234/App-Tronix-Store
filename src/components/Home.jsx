import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  const navigate=useNavigate()
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img  onClick={()=>{navigate("/product")}} src="/homeimg/img1-unsplash.jpg" class="d-block w-100" alt="iphone" height="630px"/>
          </div>
          <div class="carousel-item">
            <img onClick={()=>{navigate("/Ipad")}} src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-og-202203?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1645658178919" class="d-block w-100" alt="iphone" height="630px"/>
          </div>
          <div class="carousel-item">
            <img onClick={()=>{navigate("/laptop")}} src="https://9to5mac.com/wp-content/uploads/sites/6/2021/10/MacBook-Pro-2021.jpg?resize=1024,512" class="d-block w-100" alt="iphone" height="630px" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <h1 className="center">Products</h1>
      <div className="cont2" style={{width:"90%",height:"500px",margin:"auto"}}>
        
           <div className="cont2in" >
             <img onClick={()=>{navigate("/product")}} height="100%" width="100%" src="https://images.unsplash.com/photo-1592832122594-c0c6bad718b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBwaG9uZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
             <h3>Mobile</h3>
           </div>
           <div className="cont2in">
            <img onClick={()=>{navigate("/laptop")}} height="100%" width="100%" src="https://cdn.wallpapersafari.com/32/49/MUtCwY.jpg" alt="" />
            <h3>Laptop</h3>
           </div>
           <div className="cont2in">
            <img onClick={()=>{navigate("/Ipad")}} height="100%" width="100%" src="data:image/jpeg;base64,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" alt="" />
            <h3>Tab</h3>
           </div>
           
      </div>
      <div className="images">
      <img onClick={()=>{navigate("/Ipad")}} width="100%" src="https://www.aptronixindia.com/media/slidebanner/i/p/ipad_9th_gen_desktop.png" alt="" />
  
      </div>
      <h1 className="center">Trending</h1>

      <div className="container2">
          
          <div className="container2in">
            
            <img height="100%" width="100%"  src="https://www.aptronixindia.com/media/slidebanner/g/i/gift_cards_banner_2x.jpeg" alt="" />
          </div>
          <div className="container2in">
            <img height="100%" width="100%"  src="https://www.aptronixindia.com/media/froogal/events/images/2/7/277256902_1354526655029294_1164861297238614513_n.png" alt="" />
          </div>
      </div>
      
      <Footer></Footer>
    </>
  );
}

export default Home;
