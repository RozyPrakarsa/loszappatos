import Layout2 from '../../layout/layout2';
import Menu from '../../components/nav';
import Link from 'next/link'

function Akun(){
      return (
        <Layout2>
        <div className="login-form">
        <form action="/examples/actions/confirmation.php" method="post">
            <h2 className="text-center">Log in</h2>       
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Username" required="required"/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" required="required"/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">Log in</button>
            </div>
            <div className="clearfix">
                <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
                <a href="#" className="float-right">Forgot Password?</a>
            </div>        
        </form>
        <p className="text-center"><a href="daftar">Create an Account</a></p>
    </div>
    </Layout2>
      );
     }
     export default Akun;