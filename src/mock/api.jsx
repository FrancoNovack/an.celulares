
const productos = [
    {
        id:1,
        name:'Samsung A53',
        category:'samsung',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.',
        price:75,
        img:'https://picsum.photos/301',
        stock:10
    },
    {
        id:2,
        name:'Iphone 16 ',
        category:'iphone',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.',
        price:175,
        img:'https://picsum.photos/300',
        stock:15
    },
    {
        id:3,
        name:'Motorola G52',
        category:'motorola',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.',
        price:275,
        img:'https://picsum.photos/303',
        stock:20
    }
]
export const getProducts = () => {
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un problema intente mas tarde')
            }else{
                resolve(productos)
            }
        }, 2000)
    })
}


export const getOneProduct = (id) =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error')
            }else{
                let onProduct = productos.find((item)=> item.id === Number(id))
                resolve(onProduct)
            }
        },2000)
    })
}