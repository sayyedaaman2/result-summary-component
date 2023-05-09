
async function addItem(){
    const data = await fetch('./data.json');
    const res = await data.json();
    // console.log(res);
    const category = {
        "Reaction" : {
            "BackGroundColor" : "hsla(0, 100%, 67%, 0.052)",
            "TextColor" :   "hsl(0, 100%, 67%)"
        },
        "Memory" : {
            "BackGroundColor" : "hsla(39, 100%, 56%, 0.125)",
            "TextColor" :   "hsl(39, 100%, 56%)"
        },
        "Verbal" : {
            "BackGroundColor" : "hsla(166, 100%, 37%, 0.205)",
            "TextColor" :   "hsl(166, 100%, 37%)"
        },
        "Visual" : {
            "BackGroundColor" : "hsla(234, 85%, 45%, 0.166)",
            "TextColor" :   "hsl(234, 85%, 45%)"
        }
    }

    for (item of res){
        console.log(item);

        const summaryListEle = document.getElementById('summary-list');
        const itemElement = document.createElement('div');
        const svgElement = document.createElement('div');
        const imgElement = document.createElement('img');
        const categoryElement = document.createElement('div');

        const summaryPasentageEle = document.createElement('div');
        const spanElement = document.createElement('span');

        itemElement.classList = 'item'
        itemElement.style.backgroundColor = category[item.category].BackGroundColor;
        svgElement.className = 'svg';
        imgElement.alt = "img";
        categoryElement.className = "category";
        categoryElement.style.color = category[item.category].TextColor;
        summaryPasentageEle.className = "summary-pasentage";


        imgElement.src = item.icon;
        
        svgElement.appendChild(imgElement);

        categoryElement.innerText = item.category;
        spanElement.innerText = item.score;
        summaryPasentageEle.appendChild(spanElement);
        summaryPasentageEle.append(" /100")
        itemElement.appendChild(svgElement);
        itemElement.appendChild(categoryElement);
        itemElement.appendChild(summaryPasentageEle);


        summaryListEle.appendChild(itemElement);

    }
}

addItem();