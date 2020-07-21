import Footer from '../components/footer';
import Head from 'next/head';

const Layout = (props) => (
 <div>
    <Head>
        <title>
            los Zapatos
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css"/>
        <script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
        <script src="../bootstrap/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"/>
        <link rel="stylesheet" href="../style/style.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </Head>
    <section className="container-umum">
    {props.children}
    </section>
    
    <Footer/>
 </div>
)
export default Layout;