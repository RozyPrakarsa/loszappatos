import fetch from 'node-fetch';

export async function getStaticPaths(){
    return{
        paths : [
            {params : {gender : 'male', code : 'x'}},
            {params : {gender : 'male', code : 'y'}},
            {params : {gender : 'male', code : 'z'}},
            {params : {gender : 'female', code : 'x'}},
            {params : {gender : 'female', code : 'y'}},
            {params : {gender : 'female', code : 'z'}}
        ],
        fallback : false
    }
}
export async function getStaticProps(context){
    let { gender, code } = context.params;
    let source = `https://randomuser.me/api/?gender=${gender}`;
    let response = await fetch(source);
    let data = await response.json();
    let result = data.results[0];

    let nama = `${result.name.first} ${result.name.last}`;
    let email = result.email;
    let foto = result.picture.large;
    let alamat = `Jalan ${result.location.street.name} No. ${result.location.street.number}, Kota ${result.location.city}, ${result.location.state}, ${result.location.country}`;
    let jenisKelamin = (gender == "male") ? "Pria" : "Wanita";
    return {
    props: {
    nama, email, foto, alamat, jenisKelamin
     }
    }
   }