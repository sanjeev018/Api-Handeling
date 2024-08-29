import express from "express"

const app = express(); 

const port = process.env.Port || 3000; 

app.get('/api/products', (req, res)=> { 
    const products =[
     { 
        id:1, 
        name: "table wodden", 
        price: 200,
        image: 'https://images.pexels.com/photos/347139/pexels-photo-347139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }, { 
        id:2, 
        name: "table glass", 
        price: 250,
        image: 'https://images.pexels.com/photos/26292194/pexels-photo-26292194/free-photo-of-a-drink-with-a-straw-and-a-flower-on-top.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }, { 
        id:3, 
        name: "table plastic", 
        price: 150,
        image: 'https://images.pexels.com/photos/4050216/pexels-photo-4050216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },{ 
        id:4, 
        name: "table metal", 
        price: 300,
        image: 'https://images.pexels.com/photos/4947396/pexels-photo-4947396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },{ 
        id:5, 
        name: "table polyester", 
        price: 150,
        image: 'https://images.pexels.com/photos/6405887/pexels-photo-6405887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
]

// http://localhost:3000/api/products?search=metal

if(req.query.search){ 
    const filterProducts = products.filter(product => product.name.includes(req.query.search))
    res.send(filterProducts)
    return; 
}
setTimeout(()=> { 
res.send(products);
},2000);
})

app.listen(port, ()=> { 
    console.log(`Server running on port ${port}`)
});