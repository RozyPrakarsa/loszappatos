import Layout from '../../layout/layout';
import Menu from '../../components/nav';
import Link from 'next/link';
import ListBrand2 from '../../components/listbrand2';
   function Nike(){
    return (
    <Layout>
    <Menu/>
    <h1>Nike</h1>
    <ListBrand2/>
    </Layout>
    );
   }
   export default Nike;