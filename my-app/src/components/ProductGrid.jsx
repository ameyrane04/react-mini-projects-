import React from 'react';

function ProductGrid() {
    const products = [
        { id: 1, title: "Everything I ever Told You", author: "Author 1", price: "$20.00", image: "https://www.pickfu.com/blog/wp-content/uploads/2021/02/everything-i-never-told-you-1.png" },
        { id: 2, title: "Stephen king", author: "Rupesh Rai", price: "$20.00", image: "https://www.writersdigest.com/.image/t_share/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg" },
        { id: 3, title: "Under the path", author: "sylvia walker", price: "$20.00", image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/kindle-ebook-book-cover-path-in-forest-design-template-d89f870c1425191ef3a23a392f7f1fe7_screen.jpg?ts=1637009210" },
        { id: 4, title: "Of Love and other wars", author: "Sophie hardach", price: "$20.00", image: "https://whatshotblog.com/wp-content/uploads/2014/08/18223656.jpg.webp" },
        { id: 5, title: "Percy Jackson", author: "Rick Rordon", price: "$20.00", image: "https://readriordan.com/wp-content/uploads/2022/02/Lightning-Thief-flat-cover.png" },
        { id: 6, title: "The Fallen Gates", author: "Rick Rordon", price: "$20.00", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDyXga35FRB4zaK6enGdJ5ldBzyVQt7aqMUQ&usqp=CAU" },
        { id: 7, title: "Lost stars", author: "Rick Rordon", price: "$20.00", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfMFh0sLncfiY27P8ImHRa3zVV_S1HNgsJw&usqp=CAU" },
        { id: 8, title: "City Of Orange", author: "Kartik", price: "$20.00", image: "https://images.penguinrandomhouse.com/cover/9780593422182" },
        { id: 9, title: "Harry Potter", author: "JK", price: "$20.00", image: "https://media1.popsugar-assets.com/files/thumbor/UgV02HB6zL2ZLaY2ebOzunGwEAE=/fit-in/1280x1916/filters:format_auto():extract_cover():upscale()/2014/07/30/942/n/1922507/198283eaf80d7804_tumblr_n9inhbOoSO1qb0j8no3_1280.jpg" },
        // Add more products here
    ];

    return (
        <div className="product-grid">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>{product.author}</p>
                    <p>{product.price}</p>
                    <input type="number" min="1" defaultValue="1" />
                </div>
            ))}
        </div>
    );
}

export default ProductGrid;
