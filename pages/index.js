import Brand from '../components/brand';
import Layout from '../layout/layout';
import Menu from '../components/nav';
import Card from '../components/card';
function Beranda(){
  return (
  <Layout>
  <Menu/>
    <section className="banner">
      <section className="banner-container">
        <section className="row">
          <section className="col-sm-6 text">
            <h2>Welcome To Shopping In Our Store</h2>
            <p>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
            <button type="button" className="btn btn-primary">Buy Now</button>
          </section>
        </section>
      </section>
    </section>
    <Brand/>
    <Card/>
  </Layout>
  );
 }
 export default Beranda;