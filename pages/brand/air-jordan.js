import Layout from '../../layout/layout';
import Menu from '../../components/nav';
import Link from 'next/link';
import ListBrand2 from '../../components/listbrand2';
   function Air(){
    return (
    <Layout>
    <Menu/>
    <h1>Air Jordan</h1>
    <ListBrand2/>
    </Layout>
    );
   }
   export default Air;