const LoadCategories = () => {
    url = "https://openapi.programming-hero.com/api/categories"

    const response = fetch(url).then(response => response.json())
    // .then(data => console.log(data.categories[0].category_name))
    response.then(data => {
        for(let i=0; i< data.categories.length; i++){
            // console.log(data.categories[i].category_name)
            displayCatergories(data.categories[i].category_name)
        }
    })

}

const displayCatergories = (name) => {
    const category = document.getElementById("fruit-category");
    const elemnet = document.createElement("li")
    // <li>All Trees</li>
    elemnet.innerHTML = name
    category.append(elemnet)
}


const LoadPlants = () => {
    url = "https://openapi.programming-hero.com/api/plants"

    const response = fetch(url).then(response => response.json())
    // .then(data => console.log(data.categories[0].category_name))
    response.then(data => {
        // for(let i=0; i<data.categories.length; i++){
            // console.log(data.categories[i].category_name)
            displayPlants(data)
            // }
        })
        
    }
    
    
const displayPlants = (name) => {

    const plantsCardContainer = document.getElementById("plants-gallery");

    for(plant of name.plants){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex p-3 h-full">
            <div class="bg-white p-3 rounded-lg flex flex-col">
                <img src="${plant.image}" alt="" class="rounded-lg h-[60%]">
                <h2 class="text-lg text-left">${plant.name}</h2>
                <p class="text-[10px] text-left my-2">${plant.description}</p>
                <ul class="flex justify-between text-sm mt-auto items-center">
                    <li class="bg-[#DCFCE7] text-[#15803D] rounded-full px-2 py-1">${plant.category}</li>
                    <li class="">৳${plant.price}</li>
                </ul>
                <a href="" class="w-full bg-[#15803D] text-white rounded-full text-sm my-2 p-2">Add to Cart</a>
            </div>
        </div>
        `
        plantsCardContainer.append(div)
        // console.log(plant)

    }
    }


LoadPlants()
LoadCategories()