const recipes=[
    {
        title:"glazur donut",
        description:"Dissolve yeast in warm water. Mix with sugar, eggs, butter, salt, and flour to form dough. Let rise, roll, cut, and rise again. Fry until golden. Dip in glaze (sugar, vanilla). Serve warm.",
        image:"src/glaze donut.jpg",
        tags:["sugar","no milk"]
    },
    {
        title:"choco donut",
        description:"Mix yeast with warm water. Combine with milk, sugar, butter, cocoa powder, salt, and flour. Knead dough, let rise, roll, cut, and rise again. Fry until golden. Dip in chocolate glaze (melted chocolate, cream). Serve.",
        image:"src/choco donut.jpg",
        tags:["chocolate","no eggs"]
    }, {
        title:"vanilla donut",
        description:"Combine yeast with warm water. Mix with sugar, vanilla extract, butter, salt, and flour. Knead dough, let rise, roll, cut, and rise again. Fry until golden. Coat in sugar while warm. Serve.",
        image:"src/vanilla donut.jpg",
        tags:["sugar","no milk"]
    }, {
        title:"honey donut",
        description:"Mix yeast with warm water. Combine with honey, butter, salt, and flour. Knead dough, let rise, roll, cut, and rise again. Fry until golden. Drizzle with honey glaze (honey and water). Serve.",
        image:"src/honey donut.jpg",
        tags:["sugar","no milk"]
    },
]

const search_input=document.querySelector(".input")
const search_button=document.querySelector(".search img")
const receipt_container=document.querySelector(".receipt")
const apply_button = document.querySelector(".apply-btn");
const form = document.querySelector(".settings form");

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


get_selected_tags = () => {
    const checked_inputs = form.querySelectorAll("input[type='checkbox']:checked, input[type='radio']:checked");
    return Array.from(checked_inputs).map(input => input.className);
};

display_recipes = () => {
    const query = search_input.value.toLowerCase();
    const selected_tags = get_selected_tags();

    receipt_container.innerHTML = "";

    const filtered_recipes = recipes.filter(recipe => {
        const matches_query = recipe.title.toLowerCase().includes(query) || recipe.description.toLowerCase().includes(query);
        const matches_tags = selected_tags.every(tag => recipe.tags.includes(tag));
        return matches_query && matches_tags;
    });

    if (filtered_recipes.length > 0) {
        filtered_recipes.forEach(recipe => {
            const card = template_card(recipe);
            receipt_container.appendChild(card);
        });
    } else {
        receipt_container.innerHTML = "<p style='font-size: 24px; color: #FF0000;'>No recipes found</p>";
    }
};

// Додаємо обробку подій
search_button.addEventListener("click", display_recipes);
apply_button.addEventListener("click", display_recipes);
window.addEventListener("DOMContentLoaded", display_recipes);
