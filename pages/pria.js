import Layout from '../layout/layout';
import Menu from '../components/nav';
import listbrand from '../components/listbrand'
import Link from 'next/link';
import ListBrand from '../components/listbrand';
   function Pria(){
    return (
    <Layout>
    <Menu/>
    <h1>Pria</h1>
    <ListBrand/>
    </Layout>
    );
   }
   export default Pria;