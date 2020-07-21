import dummyData from '../../dataset/dummy.json';
import DaftarArtikel from '../../components/daftarartikel'
const Artikel = (props) => {
    return (
        <div className="container">
            <DaftarArtikel/>
            <hr/>
            <h1 className="title">{props.judul}</h1>
            <p>{props.isi}</p>
        </div>
    )
}

export async function getStaticProps(context){
    
    let kode = context.params.kode;
    let data = dummyData.find(x => x.id == kode);
    
    let { judul, isi } = data;
    return {
    props : {
   
    judul, isi
    }
    }
    }
   export async function getStaticPaths(){
    return {
    paths : [
   
    {params : {kode : '1'}},
    {params : {kode : '2'}},
    {params : {kode : '3'}},
    {params : {kode : '4'}}
    ],
    fallback : false
    }
    }
   export default Artikel;