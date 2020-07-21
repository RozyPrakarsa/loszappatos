const ListBrand = () =>{
    let reebok = [
        {id:"1",img:"img/r6.jpg",h4:"Sepatu Reebok 1",price:"Rp 150.000"},
        {id:"2",img:"img/r7.jpg",h4:"Sepatu Reebok 2",price:"Rp 150.000"},
        {id:"3",img:"img/r8.jpg",h4:"Sepatu Reebok 3",price:"Rp 150.000"},
        {id:"4",img:"img/r9.jpg",h4:"Sepatu Reebok 4",price:"Rp 150.000"},
        {id:"5",img:"img/r9.jpg",h4:"Sepatu Air Jordan 1",price:"Rp 150.000"},
        {id:"6",img:"img/r6.jpg",h4:"Sepatu Air Jordan 2",price:"Rp 150.000"},
        {id:"7",img:"img/r7.jpg",h4:"Sepatu Air Jordan 3",price:"Rp 150.000"},
        {id:"8",img:"img/r8.jpg",h4:"Sepatu Air Jordan 4",price:"Rp 150.000"},
        {id:"9",img:"img/r9.jpg",h4:"Sepatu Nike 1",price:"Rp 150.000"},
        {id:"10",img:"img/r8.jpg",h4:"Sepatu Nike 2",price:"Rp 150.000"},
        {id:"11",img:"img/r9.jpg",h4:"Sepatu Nike 3",price:"Rp 150.000"},
        {id:"12",img:"img/r8.jpg",h4:"Sepatu Nike 4",price:"Rp 150.000"}
    ]

    return (
                    <section className="product-container">
                    <div className="list">
                        {reebok.map(data => (
                        <a key={data.id} href="/detailBarang" id={data.id}>
                            <div className="list-product">
                                <img src={data.img} alt=""/>
                                <div className="description">
                                    <h4>{data.h4}</h4>
                                    <p>{data.price}</p>
                                </div>
                            </div>
                        </a>
                        ))}
                    </div>
                    </section>
    )
}

export default ListBrand;