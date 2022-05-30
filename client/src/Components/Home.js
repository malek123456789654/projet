import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "react-bootstrap";
import { listProducts as list } from "../redux/actions/ProductAction";
function Home() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.listProducts);
  const { products, loading, error } = list;
  useEffect(() => {
    dispatch(list());
  }, [dispatch]);
  return (
    <div>
      <div className="homese">
        {loading ? (
          <h2>loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <productList
              key={product._id}
              productId={product._id}
              name={product.name}
              prix={product.prix}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/633661/pexels-photo-633661.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>AstroShop</h3>
            <p>your best shop to get your bracelet</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2020/05/26/12/44/night-5222912_960_720.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>AstroShop</h3>
            <p>Best shop to get bracelet.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1567069/pexels-photo-1567069.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Astro shop</h3>
            <p>Best shop to get your bracelet </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
