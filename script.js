const loadingScreen = document.getElementById("loadingScreen");
const hero = document.getElementById("hero");
const book = document.getElementById("book");

const pages = [
    document.getElementById("page1"),
    document.getElementById("page2"),
    document.getElementById("page3"),
    document.getElementById("page4"),
    document.getElementById("page5"),
    document.getElementById("page6")
];

window.addEventListener("load", () => {
    setTimeout(() => {
        loadingScreen.style.opacity = "0";

        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 1000);

    }, 1500);
});

function showPage(number){

    pages.forEach(page => page.classList.add("hidden"));

    pages[number-1].classList.remove("hidden");

}

document.getElementById("openBook").onclick = () =>{

    hero.classList.add("hidden");

    book.classList.remove("hidden");

    showPage(1);

};

document.getElementById("next1").onclick = ()=>showPage(2);

document.getElementById("back2").onclick = ()=>showPage(1);

document.getElementById("next2").onclick = ()=>showPage(3);

document.getElementById("back3").onclick = ()=>showPage(2);

document.getElementById("next3").onclick = ()=>showPage(4);

document.getElementById("back4").onclick = ()=>showPage(3);

document.getElementById("next4").onclick = ()=>showPage(5);

document.getElementById("back5").onclick = ()=>showPage(4);

document.getElementById("next5").onclick = ()=>showPage(6);

document.getElementById("celebrate").onclick = ()=>{

    const container = document.getElementById("confetti");

    for(let i=0;i<180;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";

        piece.style.animationDelay=(Math.random()*2)+"s";

        piece.style.transform=`rotate(${Math.random()*360}deg)`;

        container.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },5000);

    }

    alert("🎉 Happy Birthday! 🎂🤍");

};
