const prdctContainer = document.getElementById("myProduct")


const getProduct = ()=>{
    return fetch('https://dummyjson.com/products')//todos?liimit =20 or 17?limi 
    .then(response =>response.json())
    // .then(response =>response)
    .then(response=>response)

    .catch(error=>error)
}
// getPoduct()
const displayProduct = async()=>{
    const product = await getProduct()
    console.log(product);

    product.products.map((item)=>{
        let div = document.createElement('div')
        let image = document.createElement ('img')
        let title = document.createElement ('p')
        let description= document.createElement('p')

        image.src = item.thumbnail
        title.innerHTML = item.title
        description.innerHTML =item.description

        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(description);

        div .setAttribute('key',item.id);
        div .setAttribute('class','products');

        prdctContainer.appendChild(div);
    })
}

displayProduct()



