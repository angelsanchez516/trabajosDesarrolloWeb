const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    {
        titulo: "Laptop",
        desc: "16GB RAM",
        price: "$2.000.000",
        image: "https://m.media-amazon.com/images/I/81uTW77d3rL.jpg"
    },
    {
        titulo: "Mouse",
        desc: "Logitech G502 Lightspeed",
        price: "$451.000",
        image: "https://images.squarespace-cdn.com/content/v1/569706fb5dc6def15843549d/1571301224118-S1TTMLT0P7YBBGNR2KHT/Logitech+G502+Lightspeed+Wireless+Gaming+Mouse.PNG"
    },
    {
        titulo: "Licencias",
        desc: "Windows, Office, Adobe",
        price: "$2.000.000",
        image: "https://allimarketec.com/wp-content/uploads/2025/01/licencia-windows-11pro-800x800.webp"
    },
    {
        titulo: "Sonido",
        desc: "Diademas, parlantes",
        price: "$2.000.000",
        image: "https://lwks.com/hubfs/Audio%20Editing%20Basics.webp"
    },
    {
        titulo: "Base",
        desc: "Refrigerante, Básica",
        price: "$2.000.000",
        image: "https://clonesyperifericos.com/wp-content/uploads/2022/08/1-20.jpg"
    }
];

productos.forEach(producto => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = producto.titulo;
    clon.querySelector(".desc").textContent = producto.desc;
    clon.querySelector(".price").textContent = producto.price;
    clon.querySelector(".image").setAttribute("src", producto.image);
    clon.querySelector(".image").setAttribute("alt", producto.titulo);
    contenedor.appendChild(clon);
});


