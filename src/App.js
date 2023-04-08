import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="product">
      <div className="product-container">
        <div className='product-image-container'>
          <img src='./assets/images/image-product-desktop.jpg' className="product-image" alt="" />
        </div>
        <div className='product-desc'>
          <p>Perfume</p>
          <h3>Gabrielle Essence Eau De Parfum</h3>
          <h6>A floral, solar and voluptuous interpretation composed by Olivier, Polge, Perfumer-Creator for the House of CHANEL</h6>
          <h4>$149.99
            <span>$16.99</span>
          </h4>
          <button className='add-btn'>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
