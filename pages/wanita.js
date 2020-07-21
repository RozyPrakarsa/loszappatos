import Layout from '../layout/layout';
import Menu from '../components/nav';
import listbrand from '../components/listbrand'
import Link from 'next/link';
import ListBrand from '../components/listbrand';
   function Wanita(){
    return (
    <Layout>
    <Menu/>
    <h1>Wanita</h1>
    <ListBrand/>
    </Layout>
    );
   }
   export default Wanita;