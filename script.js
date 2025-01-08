const recipes=[
    {
        title:"glazur donut",
        description:"delicios donut with glaze for all  famaly",
        image:"src/glaze donut.jpg"
    },
    {
        title:"choco donut",
        description:"delicios donut with chocolate for all  famaly",
        image:"src/choco donut.jpg"
    }, {
        title:"vanilla donut",
        description:"delicios donut with vanilla for all  famaly",
        image:"src/vanilla donut.jpg"
    }, {
        title:"honey donut",
        description:"delicios donut with honey for all  famaly",
        image:"src/honey donut.jpg"
    },
]

const search_input=document.querySelector(".input")
const search_button=document.querySelector(".search img")
const receipt_container=document.querySelector(".receipt")

template_card=(recipe)=>{
    const card=document.createElement("div")
    card.classList.add("card")
    card.innerHTML=`
        <div class="card-img">
            <img src="${recipe.image}" alt="">
        </div>
        <div class="text">
        <h2 class="title">
            ${recipe.title}
        </h2>
        <p class="description">
            ${recipe.description}
        </p>
        </div>`
    return card
}

display_recipes=()=>{
    const query=search_input.value.toLowerCase()
    receipt_container.innerHTML=""
    const filtered_recipes=recipes.filter(recipe=>
        recipe.title.toLowerCase().includes(query)||
        recipe.description.toLowerCase().includes(query)
    )
    if(filtered_recipes.length>0){
        filtered_recipes.forEach(recipe=>{
            const card=template_card(recipe)
            receipt_container.appendChild(card)
        })
    }else {
        receipt_container.innerHTML = "<p style='font-size: 24px; color: #FF0000;'>No recipes found</p>";
    }

}
search_button.addEventListener("click",display_recipes)
window.addEventListener("DOMContentLoaded",display_recipes)