import Layout from '../../layout/layout';
import Menu from '../../components/nav';
import Link from 'next/link';


   function Keranjang(){
    return (
    <Layout>
    <Menu/>
 
 <div className="shopping-cart">
      <h1>Keranjang</h1>
   <div className="column-labels">
     <label className="product-image">Image</label>
     <label className="product-details">Product</label>
     <label className="product-price">Harga</label>
     <label className="product-quantity">Jumlah</label>
     <label className="product-removal">Hapus</label>
     <label className="product-line-price">Total</label>
   </div>
  
   <div className="product">
     <div className="product-image">
       <img src="../img/r7.jpg"/>
     </div>
     <div className="product-details">
       <div className="product-title">Nike Flex Form TR Women's Sneaker</div>
       <p className="product-description"> It has a lightweight, breathable mesh upper with forefoot cables for a locked-down fit.</p>
     </div>
     <div className="product-price">300.000</div>
     <div className="product-quantity">
       <input type="number" defaultValue="2" min="1"/>
     </div>
     <div className="product-removal">
       <button className="remove-product">
         Hapus
       </button>
     </div>
     <div className="product-line-price">600.000</div>
   </div>
  
   <div className="product">
     <div className="product-image">
       <img src="../img/r6.jpg"/>
     </div>
     <div className="product-details">
       <div className="product-title">ULTRABOOST UNCAGED SHOES</div>
       <p className="product-description">Born from running culture, these men's shoes deliver the freedom of a cage-free design</p>
     </div>
     <div className="product-price">300.000</div>
     <div className="product-quantity">
       <input type="number" defaultValue="2" min="1"/>
     </div>
     <div className="product-removal">
       <button className="remove-product">
         Hapus
       </button>
     </div>
     <div className="product-line-price">300.000</div>
   </div>
  
   <div className="totals">
     <div className="totals-item">
       <label>Subtotal</label>
       <div className="totals-defaultValue" id="cart-subtotal">900.000</div>
     </div>
     <div className="totals-item">
       <label>Pajak (5%)</label>
       <div className="totals-defaultValue" id="cart-tax">50.000</div>
     </div>
     <div className="totals-item">
       <label>Shipping</label>
       <div className="totals-defaultValue" id="cart-shipping">15.000</div>
     </div>
     <div className="totals-item totals-item-total">
       <label>Total</label>
       <div className="totals-defaultValue" id="cart-total">965.000</div>
     </div>
   </div>
        
       <a className="checkout" href="checkout">Checkout</a>
  
 </div>
    </Layout>

    );
   }
   export default Keranjang;