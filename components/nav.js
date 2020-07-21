import Link from 'next/link';


function Menu(){
    return (
      
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand">Los Zapatos</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-lg-auto">
            <li className="nav-item active"> <Link href="/"><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link></li>
            <li className="nav-item"><Link href="/pria"><a className="nav-link">Pria</a></Link></li>
            <li className="nav-item"><Link href="/wanita"><a className="nav-link">Wanita</a></Link></li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Brand</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href="/brand/reebok"><a className="dropdown-item">Reebok</a></Link>
                <Link href="/brand/air-jordan"><a className="dropdown-item">Air Jordan</a></Link>
                <Link href="/brand/nike"><a className="dropdown-item">Nike</a></Link>
              </div>
            </li>
            <li className="nav-item"><Link href="../keranjang/indek"><a className="nav-link"><i className="fa fa-shopping-cart"><span className="badge">4</span></i></a></Link></li>
            <li className="nav-item"><Link href="/akun/indek"><a className="nav-link">Akun</a></Link></li>
          </ul>
        </div>
      </nav>
    )
   }

export default Menu;