
const LoadCategories = () => {
    url = "https://openapi.programming-hero.com/api/categories"

    const response = fetch(url).then(response => response.json())
    // .then(data => console.log(data.categories[0].category_name))
    response.then(data => {
        for(let i=0; i< data.categories.length; i++){
            // console.log(data.categories[i].category_name)
            displayCatergories(data.categories[i].category_name, data.categories[i].id)
        }
        // console.log(data.categories, data.categories[0].id)
    })

}

const displayCatergories = (name, id) => {
    const categoryContainer = document.getElementById("fruit-category");
    const categoryName = document.createElement("li")
    categoryName.setAttribute("onclick", `LoadCategoryPlants(${id})`)
    // <li>All Trees</li>
    categoryName.innerHTML = name
    categoryContainer.append(categoryName)
}

const parsePrice = (value) => Number(String(value).replace(/[^\d.]/g, "")) || 0;

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
    plantsCardContainer.innerHTML = " "

    for(plant of name.plants){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex p-3 h-full">
            <div class="bg-white p-3 rounded-lg flex flex-col space-y-2">
                <img src="${plant.image}" alt="" class="rounded-lg md:h-[60%]">
                <h2 class="text-lg text-left">${plant.name}</h2>
                <p class="text-[10px] text-left my-2 px-1">${plant.description}</p>
                <ul class="flex justify-between text-sm mt-auto items-center">
                    <li class="bg-[#DCFCE7] text-[#15803D] rounded-full px-2 py-1">${plant.category}</li>
                    <li class="">৳${plant.price}</li>
                </ul>
                <button type="button" class="add-to-cart-btn w-full bg-[#15803D] text-white rounded-full text-sm my-2 p-2" data-name="${plant.name}" data-price="${parsePrice(plant.price)}">Add to Cart</button>
            </div>
        </div>
        `
        plantsCardContainer.append(div)
        // console.log(plant)

    }
    }

    // const LoadCategoryPlants = () => {}
    
const LoadCategoryPlants = (id) => {

    const plantsCardContainer = document.getElementById("plants-gallery");

    url = `https://openapi.programming-hero.com/api/category/${id}`
    plantsCardContainer.innerHTML = ""

        const response = fetch(url).then(response => response.json())
        response.then(data => {
            console.log(data.plants)

        for(plant of data.plants){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex p-3 h-full">
            <div class="bg-white p-3 rounded-lg flex flex-col space-y-2">
                <img src="${plant.image}" alt="" class="rounded-lg">
                <h2 class="text-lg text-left">${plant.name}</h2>
                <p class="text-[10px] text-left my-2 px-1">${plant.description}</p>
                <ul class="flex justify-between text-sm mt-auto items-center">
                    <li class="bg-[#DCFCE7] text-[#15803D] rounded-full px-2 py-1">${plant.category}</li>
                    <li class="">৳${plant.price}</li>
                </ul>
                <button type="button" class="add-to-cart-btn w-full bg-[#15803D] text-white rounded-full text-sm my-2 p-2" data-name="${plant.name}" data-price="${parsePrice(plant.price)}">Add to Cart</button>
            </div>
        </div>
        `
        plantsCardContainer.append(div)
        // console.log(plant)
        }


        })
    }

    



LoadPlants()
LoadCategories()

