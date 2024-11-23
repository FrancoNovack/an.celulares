const productos = [
    {
        id: '1',
        nombre: 'Samsung A53',
        stock: 10,
        precio: 1150000,
        descripcion: 'Breve discripcion del producto',
        categoria: 'samsung',
        img:'https://picsum.photos/200'
    },
    {
        id: '2',
        nombre: 'Iphone 15',
        stock: 15,
        precio: 1300000,
        descripcion: 'Breve discripcion del producto',
        img:'https://picsum.photos/201',
        categoria: 'Iphone'
    },
    {
        id: '3',
        nombre: 'Motorola g50',
        stock: 7,
        precio: 1000000,
        descripcion: 'Breve discripcion del producto',
        img:'https://picsum.photos/203',
        categoria: 'motorola'
    },
]

export const getProducts = () =>{
    let error = false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                resolve(productos)
            }
        },3000)
    })
}