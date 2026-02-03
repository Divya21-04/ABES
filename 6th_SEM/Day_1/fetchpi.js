fetch("https://fakestoreapi.com/product")
     .them((res) => res.json())
     .them((data) => console.log(data))
     .catch((error) =>
        console.log("Some error occured while fetching the data...."))