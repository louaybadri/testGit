function musica(spacedName) {
    esmou = spacedName.replaceAll(' ', '');

    tab = []
    for (let i = 0; i < esmou.length; i++) {
        c = (esmou.toLowerCase()[i].codePointAt(0) - 65 + 1) % 7;
        switch (c) {
            case 0:
                tab.push('DO');
                break;
            case 1:
                tab.push('RE');
                break;
            case 2:
                tab.push('MI');
                break;
            case 3:
                tab.push('FA');
                break;
            case 4:
                tab.push('SOL');
                break;
            case 5:
                tab.push('LA');
                break;
            case 6:
                tab.push('SI');
                break;
        }
    }
    return tab;
}


function doIt() {
    console.log(musica(document.querySelector("input").value));
    document.querySelector("#result").innerHTML = ""
    for (let i = 0; i < musica(document.querySelector("input").value).length; i++) {
        childrens = document.querySelector("#result").children
        setTimeout(() => {
            document.querySelector("#result").innerHTML += `<div class="col">
                <div class="p-5  bg-light" style="text-align: center;margin: 30px "> ${musica(document.querySelector("input").value)[i]}</div>
            </div>`;

            for (let j = 0; j < childrens.length; j++) {
                childrens[j].addEventListener("click", function (e) {
                    playSound(childrens[j].innerText)
                })
            }
            // newButton =  document.createElement('button');
            // newButton.
            if (i === (musica(document.querySelector("input").value).length - 1)) {
                setTimeout(() => {
                    document.querySelector("#result").innerHTML += `
                    <button class="btn btn-primary me-md-2" type="button" onclick="playAll()">PLAY ALL</button>
                     `;
                }, 1000)

            }

        }, 1000 * i);

    }
}

playAll = () => {
    for (let j = 0; j < childrens.length; j++) {
        setTimeout(() => {
            playSound(childrens[j].innerText)
        }, 500 * j)


    }
}

document.querySelector("input").addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        if (document.querySelector("input").value.length == 0) {
            alert("EMPTY NAME CAN'T BE CONVERTED TO NOTES")
        } else {

            doIt();
        }
    }
})


document.querySelector("#submit").addEventListener("click", function (e) {
    if (document.querySelector("input").value.length == 0) {
        alert("EMPTY NAME CAN'T BE CONVERTED TO NOTES")
    } else {
        doIt()
    }
})
music = (note) => new Audio(`src/${note}.wav`);
playSound = (note) => music(note).play();


// console.log("test")
// function (){
//     playSound(document.querySelector("#result").children[i].innerText)
// }
document.querySelector("body").children