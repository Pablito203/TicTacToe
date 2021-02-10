var inicio = ''; // Voltar opções para o padrão ou selecionar a primeira opção da tela
var menuOption = 1;
var player1 = {
    char: 0,
    charSelected: false,
    character: '',
    selection: ''
}
var player2 = {
    char: 16,
    charSelected: false,
    character: '',
    selection: '',
}
var playchar1 = document.createElement('div')
var playchar2 = document.createElement('div')
var tv = "off"; 
var screen = document.querySelector('div#game')
interface("off")
var char = [] // para mostrar os personagens ao lado na tela de seleção
var drawGame = 0
var player1Win = 0
var player2Win = 0
var casas = []
var slot = 0
var turn = 1
var casaSelected = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var elements = 0 //Quantos elementos há na tela para poder apagar quando for trocar de tela
var colors = []
var bdcolor = 0
var audioWin = document.querySelector('audio#win')
audioWin.volume = 0.4
var audioDraw = document.querySelector('audio#draw')
var audioSelect = []
var audioAccept = []
for (var c = 0; c <= 2; c++) {
    audioAccept[c] = document.querySelector(`audio#accept${c}`)
}
for (var c = 0; c <= 4; c++) { 
    audioSelect[c] = document.querySelector(`audio#select${c}`)
}
var chooseAudioSelect = 0 //trocar o áudio, para nao bugar se selecionar muito rápido as opções
var chooseAudioAccept = 0 //trocar o áudio, para nao bugar se mudar muito rápido as opções
if (tv == "play" && player1.charSelected == false) {
    selectCharacter(player1.char)
    inicio = document.querySelector('li#char1')
} else if (tv == "play" && player1.charSelected == true) {
    selectCharacter(player2.char)
    inicio = document.querySelector('li#char16')
}

document.addEventListener('keydown', handleKeydown)
document.addEventListener('keyup', handleKeyup)

function handleKeyup(event) {
    const keyPressed = event.key
    switch (keyPressed) {
        case 'ArrowDown':
            def('Down')
            break 
        case 'ArrowUp':
            def('Up')
            break
        case 'ArrowRight':
            def('Right')
            break
        case 'ArrowLeft':
            def('Left')
            break
        case 'Enter':
            def('Start')
            break
        case 'Shift':
            def('Select')
            break
        case 'a':
            def('A')
            break
        case 's':
            def('B')
            break
        case 'd':
            def('Y')
            break
        case 'w':
            def('X')
            break
    }
}

function handleKeydown(event) {
    const keyPressed = event.key
    switch (keyPressed) {
        case 'ArrowDown':
            buttonPressed('Down')
            break 
        case 'ArrowUp':
            buttonPressed('Up')
            break
        case 'ArrowRight':
            buttonPressed('Right')
            break
        case 'ArrowLeft':
            buttonPressed('Left')
            break
        case 'Enter':
            buttonPressed('Start')
            break
        case 'Shift':
            buttonPressed('Select')
            break
        case 'a':
            buttonPressed('A')
            break
        case 's':
            buttonPressed('B')
            break
        case 'd':
            buttonPressed('Y')
            break
        case 'w':
            buttonPressed('X')
            break
            }
        }

function buttonPressed(button) {
    let buttonAnimation = ''
    switch (button) {
        case "A":
            buttonAnimation = document.querySelector('div#aButton')
            buttonAnimation.style.boxShadow = '-1px 1px 1px black'
            if (tv == "play" && player1.charSelected == false) {
                player1.charSelected = true
                inicio.style.background = 'darkgreen'
                audioAcception()
                switch (player1.character) {
                    case 0:
                        player1.character = '\u{274C}'
                        break
                    case 1:
                        player1.character = '\u{1F9E1}'
                        break
                    case 2:
                        player1.character = '\u{1F409}'
                        break
                    case 4:
                        player1.character = '\u{1F4A9}'
                        break
                    case 5:
                        player1.character = '\u{1F921}'
                        break
                    case 6:
                        player1.character = '\u{1F47B}'
                        break
                    case 7:
                        player1.character = '\u{1F47D}'
                        break
                    case 8:
                        player1.character = '\u{1F525}'
                        break
                    case 9:
                        player1.character = '\u{1F4A6}'
                        break
                    case 10:
                        player1.character = '\u{1F4A8}'
                        break
                    case 11:
                        player1.character = '\u{1F30D}'
                        break
                    case 12:
                        player1.character = '\u{1F4A3}'
                        break
                    case 13:
                        player1.character = '\u{1F340}'
                        break
                    case 14:
                        player1.character = '\u{1F6F9}'
                        break
                    case 15:
                        player1.character = '\u{26BD}'
                        break
                    case 16:
                        player1.character = '\u{2B55}'
                        break
                    case 17:
                        player1.character = '\u{1F49B}'
                        break
                    case 18:
                        player1.character = '\u{1F996}'
                        break
                }
                inicio = document.querySelector('li#default')
                selectCharacter(player2.char)
            } else if (tv == "play" && player1.charSelected == true) {
                player2.charSelected = true
                inicio.style.background = 'darkgreen'
                audioAcception()
                switch (player2.character) {
                    case 0:
                        player2.character = '\u{274C}'
                        break
                    case 1:
                        player2.character = '\u{1F9E1}'
                        break
                    case 2:
                        player2.character = '\u{1F409}'
                        break
                    case 4:
                        player2.character = '\u{1F4A9}'
                        break
                    case 5:
                        player2.character = '\u{1F921}'
                        break
                    case 6:
                        player2.character = '\u{1F47B}'
                        break
                    case 7:
                        player2.character = '\u{1F47D}'
                        break
                    case 8:
                        player2.character = '\u{1F525}'
                        break
                    case 9:
                        player2.character = '\u{1F4A6}'
                        break
                    case 10:
                        player2.character = '\u{1F4A8}'
                        break
                    case 11:
                        player2.character = '\u{1F30D}'
                        break
                    case 12:
                        player2.character = '\u{1F4A3}'
                        break
                    case 13:
                        player2.character = '\u{1F340}'
                        break
                    case 14:
                        player2.character = '\u{1F6F9}'
                        break
                    case 15:
                        player2.character = '\u{26BD}'
                        break
                    case 16:
                        player2.character = '\u{2B55}'
                        break
                    case 17:
                        player2.character = '\u{1F49B}'
                        break
                    case 18:
                        player2.character = '\u{1F996}'
                        break
                }
                if (player2.charSelected == true && tv == "play") {
                    interface("jogoDaVelha")
                    selectCasa(slot)
                }
            } else if (tv == "jogoDaVelha") {
                if (turn == 1) {
                    if (casaSelected[slot] == 0) { 
                        audioAcception()
                        casas[slot].innerText = player1.character
                        casaSelected[slot] = 1
                        turn = 2
                        document.querySelector('div#vez').innerText = `VEZ DE ${player2.character}`
                    }
                } else {
                    if (casaSelected[slot] == 0) {
                        audioAcception()
                        casas[slot].innerText = player2.character
                        casaSelected[slot] = 2
                        turn = 1 
                        document.querySelector('div#vez').innerText = `VEZ DE ${player1.character}`
                    }
                }
                if (casaSelected[0] == 1 && casaSelected[1] == 1 && casaSelected[2] == 1) { //HORIZONTAL
                    audioWin.play()
                    player1Win++
                    turn = 1
                    tv = "reset"
                } else if (casaSelected[0] == 2 && casaSelected[1] == 2 && casaSelected[2] == 2) {
                    audioWin.play()
                    player2Win++
                    turn = 2
                    tv = "reset"
                } else if (casaSelected[3] == 1 && casaSelected[4] == 1 && casaSelected[5] == 1) {
                    audioWin.play()
                    player1Win++
                    turn = 1
                    tv = "reset"
                } else if (casaSelected[3] == 2 && casaSelected[4] == 2 && casaSelected[5] == 2) {
                    audioWin.play()
                    player2Win++
                    turn = 2
                    tv = "reset"
                } else if (casaSelected[6] == 1 && casaSelected[7] == 1 && casaSelected[8] == 1) {
                    audioWin.play()
                    player1Win++
                    turn = 1
                    tv = "reset"
                } else if (casaSelected[6] == 2 && casaSelected[7] == 2 && casaSelected[8] == 2) {
                    audioWin.play()
                    player2Win++
                    turn = 2
                    tv = "reset"
                } else if (casaSelected[0] == 1 && casaSelected[3] == 1 && casaSelected[6] == 1) { //VERTICAL
                    audioWin.play()
                    player1Win++
                    turn = 1
                    tv = "reset"
                } else if (casaSelected[0] == 2 && casaSelected[3] == 2 && casaSelected[6] == 2) {
                    audioWin.play()
                    player2Win++
                    turn = 2
                    tv = "reset"
                } else if (casaSelected[1] == 1 && casaSelected[4] == 1 && casaSelected[7] == 1) { 
                    audioWin.play()
                    player1Win++
                    turn = 1
                    tv = "reset"
                } else if (casaSelected[1] == 2 && casaSelected[4] == 2 && casaSelected[7] == 2) { 
                    audioWin.play()
                    player2Win++
                    turn = 2
                    tv = "reset"
                } else if (casaSelected[2] == 1 && casaSelected[5] == 1 && casaSelected[8] == 1) { 
                    audioWin.play()
                    player1Win++
                    turn = 1
                    tv = "reset"
                } else if (casaSelected[2] == 2 && casaSelected[5] == 2 && casaSelected[8] == 2) { 
                    audioWin.play()
                    player2Win++
                    turn = 2
                    tv = "reset"
                } else if (casaSelected[0] == 1 && casaSelected[4] == 1 && casaSelected[8] == 1) { //DIAGONAL
                    audioWin.play()
                    player1Win++
                    turn = 1
                    tv = "reset"
                } else if (casaSelected[0] == 2 && casaSelected[4] == 2 && casaSelected[8] == 2) { 
                    audioWin.play()
                    player2Win++
                    turn = 2
                    tv = "reset"
                } else if (casaSelected[2] == 1 && casaSelected[4] == 1 && casaSelected[6] == 1) { 
                    audioWin.play()
                    player1Win++
                    turn = 1
                    tv = "reset"
                } else if (casaSelected[2] == 2 && casaSelected[4] == 2 && casaSelected[6] == 2) { 
                    audioWin.play()
                    player2Win++
                    turn = 2
                    tv = "reset"
                } else if (casaSelected.indexOf(0) == -1){
                    audioDraw.play()
                    tv = "reset"
                    drawGame++
                }
                if (tv == "reset") {
                    casaSelected = [0, 0, 0, 0, 0, 0, 0, 0, 0] 
                    interface("jogoDaVelha")
                    slot = 0
                    selectCasa(slot)
                    if (turn == 1) {
                        document.querySelector('div#vez').innerText = `VEZ DE ${player1.character}`
                    } else {
                        document.querySelector('div#vez').innerText = `VEZ DE ${player2.character}`
                    }
                }
            }
            break;
        case "B":
            buttonAnimation = document.querySelector('div#bButton')
            buttonAnimation.style.boxShadow = '0px 1px 1px black'
            break;
        case "X":
            buttonAnimation = document.querySelector('div#xButton')
            buttonAnimation.style.boxShadow = '0px 1px 1px black'
            break;
        case "Y":
            buttonAnimation = document.querySelector('div#yButton')
            buttonAnimation.style.boxShadow = '0px 1px 1px black'
            break;
        case "Start":
            buttonAnimation = document.querySelector('div#startButton')
            buttonAnimation.style.boxShadow = '0.5px 1px 1px'
            if (tv == "off") {
                interface("mainMenu")
            } else if (tv == "mainMenu" && menuOption == 1){
                audioAcception()
                interface("play")
            } else if (tv == "mainMenu" && menuOption == 2) {
                audioAcception()
                interface("howToPlay")
            } else if (tv == "mainMenu" && menuOption == 3) {
                audioAcception()
                interface("info")
            }
            break;
        case "Select":
            buttonAnimation = document.querySelector('div#selectButton')
            buttonAnimation.style.boxShadow = '0.5px 1px 1px'
            if (tv != "off") {
                audioAcception()
            }
            switch (tv) {
                case "mainMenu":
                    interface("off")
                    break
                case "play":
                    interface("mainMenu")
                    break
                case "howToPlay":
                    interface("mainMenu")
                    break
                case "info":
                    interface("mainMenu")
                    break
                case "jogoDaVelha":
                    turn = 1
                    playchar1.innerText = ''
                    playchar2.innerText = ''
                    interface("play")
                    break
            }
            break;
        case "Up":
            buttonAnimation = document.querySelector('div#upButton')
            buttonAnimation.style.border = '3.9px solid black'
            buttonAnimation.style.left = '46px'
            buttonAnimation.style.margin = '1px'
            buttonAnimation.style.marginBottom = '2px'
            if (tv == "mainMenu" && menuOption != 1) {
                menu((menuOption - 1))
            } else if (tv == "play"){
                if (player1.charSelected == false) {
                    if (player1.char != 0 && player1.char != 4 && player1.char != 8 && player1.char != 12 && player1.char != 16) {
                        player1.char--
                        audioSelection()
                        selectCharacter(player1.char)
                    }
                } else {
                    if (player2.char != 0 && player2.char != 4 && player2.char != 8 && player2.char != 12 && player2.char != 16) {
                        if (player1.selection + 1 != player2.char) {
                            player2.char--
                            audioSelection()
                            selectCharacter(player2.char)
                        }
                    }   
                }
            } else if (tv == "jogoDaVelha") {
                if (slot != 0 && slot != 1 && slot != 2 ) {
                    slot -= 3
                    audioSelection()
                    selectCasa(slot)     
                }
            }
            break;
        case "Right":
            buttonAnimation = document.querySelector('div#rightButton')
            buttonAnimation.style.border = '3.9px solid black'
            buttonAnimation.style.top = '-47.9px'
            buttonAnimation.style.margin = '1px'
            if (tv == "play"){
                if (player1.charSelected == false) {
                    if (player1.char != 16 && player1.char != 17 && player1.char != 18 && player1.char != 15 && player1.char != 16) {
                        player1.char += 4
                        audioSelection()
                        selectCharacter(player1.char)
                    }
                } else {
                    if (player2.char != 16 && player2.char != 17 && player2.char != 18 && player2.char != 15 && player2.char != 16) {
                        if (player1.selection - 4 != player2.char) {
                            player2.char += 4
                            audioSelection()
                            selectCharacter(player2.char)
                        }
                    }  
                }
            } else if (tv == "jogoDaVelha") {
                if (slot != 2 && slot != 5 && slot != 8 ) {
                    slot++
                    audioSelection()
                    selectCasa(slot)     
                }
            }
            break;
        case "Down":
            buttonAnimation = document.querySelector('div#downButton')
            buttonAnimation.style.border = '3.9px solid black'
            buttonAnimation.style.top = '-67px'
            buttonAnimation.style.left = '46.9px'
            buttonAnimation.style.marginTop = '2px'
            if (tv == "mainMenu" && menuOption != 3) {
                menu((menuOption + 1))
            } else if (tv == "play"){
                if (player1.charSelected == false) {
                    if (player1.char != 2 && player1.char != 7 && player1.char != 11 && player1.char != 15 && player1.char != 18) {
                        player1.char++
                        audioSelection()
                        selectCharacter(player1.char)
                    } 
                } else {
                    if (player2.char != 2 && player2.char != 7 && player2.char != 11 && player2.char != 15 && player2.char != 18) {
                        if (player1.selection - 1 != player2.char) {
                            player2.char++
                            audioSelection()
                            selectCharacter(player2.char)
                        }
                    }   
                }
            } else if (tv == "jogoDaVelha") {
                if (slot != 6 && slot != 7 && slot != 8 ) {
                    slot += 3
                    audioSelection()
                    selectCasa(slot)
                }
            }
            break;
        case "Left":
            buttonAnimation = document.querySelector('div#leftButton')
            buttonAnimation.style.border = '3.9px solid black'
            buttonAnimation.style.top = '-133px'
            buttonAnimation.style.left = '29px'
            buttonAnimation.style.margin = '1px'
            if (tv == "play"){
                if (player1.charSelected == false) {
                    if (player1.char != 0 && player1.char != 1 && player1.char != 2 && player1.char != 7) {
                        player1.char -= 4
                        audioSelection()
                        selectCharacter(player1.char)
                    }
                } else {
                    if (player2.char != 0 && player2.char != 1 && player2.char != 2 && player2.char != 7) {
                        if (player1.selection + 4 != player2.char) {
                            player2.char -= 4
                            audioSelection()
                            selectCharacter(player2.char)
                            }
                    }
                }
            } else if (tv == "jogoDaVelha") {
                if (slot != 0 && slot != 3 && slot != 6 ) {
                    slot--
                    audioSelection()
                    selectCasa(slot)  
                } 
            }
            break;
    }
}

function def(button) { // voltar os botões do controle para o padrão durante a animação
    switch (button) {
        case "A":
            buttonAnimation = document.querySelector('div#aButton')
            buttonAnimation.style.boxShadow = '-2px 1.5px 3px black'
            break;
        case "B":
            buttonAnimation = document.querySelector('div#bButton')
            buttonAnimation.style.boxShadow = '0.5px 2px 2px black'
            break;
        case "X":
            buttonAnimation = document.querySelector('div#xButton')
            buttonAnimation.style.boxShadow = '-1px 2px 2px rgb(41, 40, 46)'
            break;
        case "Y":
            buttonAnimation = document.querySelector('div#yButton')
            buttonAnimation.style.boxShadow = '0.5px 2px 2px black'
            break;
        case "Start":
            buttonAnimation = document.querySelector('div#startButton')
            buttonAnimation.style.boxShadow = '1px 1.5px 1px'
            break;
        case "Select":
            buttonAnimation = document.querySelector('div#selectButton')
            buttonAnimation.style.boxShadow = '1px 1.5px 1px'
            break;
        case "Up":
            buttonAnimation = document.querySelector('div#upButton')
            buttonAnimation.style.border = '4px solid black'
            buttonAnimation.style.left = '46px'
            buttonAnimation.style.margin = '0px'
            break;
        case "Right":
            buttonAnimation = document.querySelector('div#rightButton')
            buttonAnimation.style.border = '4px solid black'
            buttonAnimation.style.top = '-47px'
            buttonAnimation.style.margin = '0px'
            break;
        case "Down":
            buttonAnimation = document.querySelector('div#downButton')
            buttonAnimation.style.border = '4px solid black'
            buttonAnimation.style.top = '-69px'
            buttonAnimation.style.left = '46px'
            buttonAnimation.style.marginTop = '0px'
            break;
        case "Left":
            buttonAnimation = document.querySelector('div#leftButton')
            buttonAnimation.style.border = '4px solid black'
            buttonAnimation.style.top = '-133px'
            buttonAnimation.style.left = '29px'
            buttonAnimation.style.margin = '0px'
            break;
    }
}

function selectCharacter(personagem) {
    inicio.style.background = 'rgb(0, 20, 134)'
    if (player1.charSelected == false) {
        char[personagem].style.background = 'greenyellow' 
        switch (personagem) {
            case 0:
                inicio = document.querySelector('li#char0')
                playchar1.innerText = '\u{274C}'
                break
            case 1:
                inicio = document.querySelector('li#char1')
                playchar1.innerText = '\u{1F9E1}'
                break
            case 2:
                inicio = document.querySelector('li#char2')
                playchar1.innerText = '\u{1F409}'
                break
            case 4:
                inicio = document.querySelector('li#char4')
                playchar1.innerText = '\u{1F4A9}'
                break
            case 5:
                inicio = document.querySelector('li#char5')
                playchar1.innerText = '\u{1F921}'
                break
            case 6:
                inicio = document.querySelector('li#char6')
                playchar1.innerText = '\u{1F47B}'
                break
            case 7:
                inicio = document.querySelector('li#char7')
                playchar1.innerText = '\u{1F47D}'
                break
            case 8:
                inicio = document.querySelector('li#char8')
                playchar1.innerText = '\u{1F525}'
                break
            case 9:
                inicio = document.querySelector('li#char9')
                playchar1.innerText = '\u{1F4A6}'
                break
            case 10:
                inicio = document.querySelector('li#char10')
                playchar1.innerText = '\u{1F4A8}'
                break
            case 11:
                inicio = document.querySelector('li#char11')
                playchar1.innerText = '\u{1F30D}'
                break
            case 12:
                inicio = document.querySelector('li#char12')
                playchar1.innerText = '\u{1F4A3}'
                break
            case 13:
                inicio = document.querySelector('li#char13')
                playchar1.innerText = '\u{1F340}'
                break
            case 14:
                inicio = document.querySelector('li#char14')
                playchar1.innerText = '\u{1F6F9}'
                break
            case 15:
                inicio = document.querySelector('li#char15')
                playchar1.innerText = '\u{26BD}'
                break
            case 16:
                inicio = document.querySelector('li#char16')
                playchar1.innerText = '\u{2B55}'
                break
            case 17:
                inicio = document.querySelector('li#char17')
                playchar1.innerText = '\u{1F49B}'
                break
            case 18:
                inicio = document.querySelector('li#char18')
                playchar1.innerText = '\u{1F996}'
                break
        }
        player1.character = char[player1.char].value
        player1.selection = personagem
    } else {
        char[personagem].style.background = 'red' 
        switch (personagem) {
            case 0:
                inicio = document.querySelector('li#char0')
                playchar2.innerText = '\u{274C}'
                break
            case 1:
                inicio = document.querySelector('li#char1')
                playchar2.innerText = '\u{1F9E1}'
                break
            case 2:
                inicio = document.querySelector('li#char2')
                playchar2.innerText = '\u{1F409}'
                break
            case 4:
                inicio = document.querySelector('li#char4')
                playchar2.innerText = '\u{1F4A9}'
                break
            case 5:
                inicio = document.querySelector('li#char5')
                playchar2.innerText = '\u{1F921}'
                break
            case 6:
                inicio = document.querySelector('li#char6')
                playchar2.innerText = '\u{1F47B}'
                break
            case 7:
                inicio = document.querySelector('li#char7')
                playchar2.innerText = '\u{1F47D}'
                break
            case 8:
                inicio = document.querySelector('li#char8')
                playchar2.innerText = '\u{1F525}'
                break
            case 9:
                inicio = document.querySelector('li#char9')
                playchar2.innerText = '\u{1F4A6}'
                break
            case 10:
                inicio = document.querySelector('li#char10')
                playchar2.innerText = '\u{1F4A8}'
                break
            case 11:
                inicio = document.querySelector('li#char11')
                playchar2.innerText = '\u{1F30D}'
                break
            case 12:
                inicio = document.querySelector('li#char12')
                playchar2.innerText = '\u{1F4A3}'
                break
            case 13:
                inicio = document.querySelector('li#char13')
                playchar2.innerText = '\u{1F340}'
                break
            case 14:
                inicio = document.querySelector('li#char14')
                playchar2.innerText = '\u{1F6F9}'
                break
            case 15:
                inicio = document.querySelector('li#char15')
                playchar2.innerText = '\u{26BD}'
                break
            case 16:
                inicio = document.querySelector('li#char16')
                playchar2.innerText = '\u{2B55}'
                break
            case 17:
                inicio = document.querySelector('li#char17')
                playchar2.innerText = '\u{1F49B}'
                break
            case 18:
                inicio = document.querySelector('li#char18')
                playchar2.innerText = '\u{1F996}'
                break
        }
        player2.character = char[player2.char].value
        player2.selection = personagem
    }
}
function selectCasa(casa) {
    casas[casa].style.background = 'rgb(37, 250, 255)'
    inicio.style.background = 'white'
    inicio = casas[casa]
}

function interface(tela) {
    for (var c = 0; c <= elements; c++){
        screen.removeChild(screen.children[0])
    }
    switch (tela) {
        case 'off': // Tela inicial
            screen.style.background = 'black'
            var p = document.createElement('p')
            p.innerHTML = "Pressione START para jogar"
            p.setAttribute('id', 'start')
            screen.appendChild(p)
            tv = "off"
            elements = 0
            break
        case 'mainMenu': // Menu Principal
            menuOption = 1
            if (tv != "mainMenu" ) {
                let play = document.createElement('div')
                play.setAttribute('id', 'playButton')
                play.innerText ='JOGAR'
                //<div id="playButton">JOGAR</div>
                let how = document.createElement('div')
                how.setAttribute('id', 'howButton')
                how.innerText = 'COMO JOGAR'
                //<div id="howButton">COMO JOGAR</div>
                let info = document.createElement('div')
                info.setAttribute('id', 'infoButton')
                info.innerText = 'SOBRE'
                //<div id="infoButton">SOBRE</div>
                var back = document.createElement('p')
                back.setAttribute('id', 'back')
                back.innerText = "\u{1F448} SELECT"
                var next = document.createElement('p')
                next.setAttribute('id', 'next')
                next.innerText = "START \u{1F449}"
                back.style.left = "10px"
                back.style.top = "265px"
                next.style.left = "335px"
                next.style.top = "240px"
                var logo = document.createElement('h1')
                logo.setAttribute('id','logo')
                logo.innerHTML = "<span style='color: green;'>X</span><span>vs</span><span style='color: red;'>O</span>"
                var backgroundColors = document.createElement('div')
                backgroundColors.setAttribute('id', 'backgroundColors')
                for (var c = 0; c <= 4; c++) {
                    colors[c] = document.createElement('div')
                    colors[c].setAttribute('id', `color${c}`)
                    colors[c].setAttribute('class', 'colors')
                    backgroundColors.appendChild(colors[c])
                    colors[c].setAttribute('onclick', `backgroundColor(${c})`)
                }
                screen.appendChild(play)
                screen.appendChild(how)
                screen.appendChild(info)
                screen.appendChild(back)
                screen.appendChild(next)
                screen.appendChild(logo)
                screen.appendChild(backgroundColors)
                inicio = document.querySelector('div#playButton')
            }
            elements = 6
            tv = "mainMenu"
            backgroundColor(bdcolor)
            break
        case "howToPlay": // Como jogar
            var how = document.createElement('h1')
            how.innerText = 'COMO JOGAR'
            how.style.textAlign = 'center'
            var pHow = document.createElement('p')
            pHow.innerHTML = "&nbsp; pressione os botões direcionais para selecionar as opções do jogo. <br>"
            pHow.innerHTML += "&nbsp; pressione START para selecionar as opções no menu inicial. <br>"
            pHow.innerHTML += "&nbsp; pressione A para selecionar personagens e casas dentro do jogo. <br>"
            pHow.innerHTML += "&nbsp; pressione Select caso queira voltar. <br>"
            pHow.style.lineHeight = "40px"
            pHow.style.fontSize = "10pt"
            pHow.style.color = 'white'
            pHow.style.textShadow = '1px 1px 1px black'
            how.style.color = 'white'
            how.style.textShadow = '1px 1px 1px black'
            var back = document.createElement('p')
            back.setAttribute('id', 'back')
            back.innerText = "\u{1F448} SELECT"
            back.style.left = "10px"
            back.style.top = "137px"
            screen.appendChild(how)
            screen.appendChild(pHow)
            screen.appendChild(back)
            elements = 2
            tv = "howToPlay"
            break
        case "info": // Informações sobre o jogo
            var info = document.createElement('h1')
            info.innerHTML = "SOBRE O JOGO <br><br>"
            info.style.textAlign = 'center'
            info.style.color = 'white'
            info.style.textShadow = '1px 1px 1px black'
            var pInfo = document.createElement('p')
            var p2Info = document.createElement('p')
            pInfo.innerHTML = "Este Jogo foi criado inteiramente por <strong>Pablo Martins</strong> com objetivo de ampliar conhecimentos em JavaScript. <br>"
            p2Info.innerHTML += "Ferramentas usadas: HTML5, CSS3, JavaScript. <br>"
            pInfo.style.fontSize = "10pt"
            pInfo.style.color = 'white'
            pInfo.style.textShadow = '1px 1px 1px black'
            pInfo.style.textIndent = "10px"
            p2Info.style.fontSize = "10pt"
            p2Info.style.color = 'white'
            p2Info.style.textShadow = '1px 1px 1px black'
            p2Info.style.textIndent = "10px"
            var back = document.createElement('p')
            back.setAttribute('id', 'back')
            back.innerText = "\u{1F448} SELECT"
            back.style.left = "10px"
            back.style.top = "207px"
            screen.appendChild(info)
            screen.appendChild(pInfo)
            screen.appendChild(p2Info)
            screen.appendChild(back)
            tv = "info"
            elements = 3
            break
        case "play": // Seleção de personagens
            player1.char = 0
            player1.charSelected = false
            player1.character = ''
            player1.selection = ''
            player2.char = 16
            player2.charSelected = false
            player2.character = ''
            player2.selection = ''
            player1Win = 0
            drawGame = 0
            player2Win = 0
            if (tv != "play" ) {
                var characters1 = document.createElement('ul')
                characters1.setAttribute('id', 'um')
                var characters2 = document.createElement('ul')
                characters2.setAttribute('id', 'dois')
                var characters3 = document.createElement('ul')
                characters3.setAttribute('id', 'tres')
                var characters4 = document.createElement('ul')
                characters4.setAttribute('id', 'quatro')
                var characters5 = document.createElement('ul')
                characters5.setAttribute('id', 'cinco')
                playchar1.setAttribute('id', 'charUm')
                playchar2.setAttribute('id', 'charDois')
                for (var c = 0; c <= 2; c++) {
                    char[c] = document.createElement('li')
                    char[c].setAttribute('id', `char${c}`)
                    char[c].setAttribute('value', `${c}`)
                    char[c].setAttribute('class', 'select')
                    char[c].style.background = 'rgb(0, 20, 134)'
                    characters1.appendChild(char[c])
                    switch (c) {
                        case 0:
                            char[0].innerText = '\u{274C}'
                            break
                        case 1:
                            char[1].innerText = '\u{1F9E1}'
                            break
                        case 2:
                            char[2].innerText = '\u{1F409}'
                            break
                    }
                }
                for (var c = 4; c <= 7; c++) {
                    char[c] = document.createElement('li')
                    char[c].setAttribute('id', `char${c}`)
                    char[c].setAttribute('value', `${c}`)
                    char[c].setAttribute('class', 'select')
                    char[c].style.background = 'rgb(0, 20, 134)'
                    characters2.appendChild(char[c])
                    switch (c) {
                        case 4:
                            char[4].innerText = '\u{1F4A9}'
                            break
                        case 5:
                            char[5].innerText = '\u{1F921}'
                            break
                        case 6:
                            char[6].innerText = '\u{1F47B}'
                            break
                        case 7:
                            char[7].innerText = '\u{1F47D}'
                            break
                    }
                }
                for (var c = 8; c <= 11; c++) {
                    char[c] = document.createElement('li')
                    char[c].setAttribute('id', `char${c}`)
                    char[c].setAttribute('value', `${c}`)
                    char[c].setAttribute('class', 'select')
                    char[c].style.background = 'rgb(0, 20, 134)'
                    characters3.appendChild(char[c])
                    switch (c) {
                        case 8:
                            char[8].innerText = '\u{1F525}'
                            break
                        case 9:
                            char[9].innerText = '\u{1F4A6}'
                            break
                        case 10:
                            char[10].innerText = '\u{1F4A8}'
                            break
                        case 11:
                            char[11].innerText = '\u{1F30D}'
                            break
                    }
                }
                for (var c = 12; c <= 15; c++) {
                    char[c] = document.createElement('li')
                    char[c].setAttribute('id', `char${c}`)
                    char[c].setAttribute('value', `${c}`)
                    char[c].setAttribute('class', 'select')
                    char[c].style.background = 'rgb(0, 20, 134)'
                    characters4.appendChild(char[c])
                    switch (c) {
                        case 12:
                            char[12].innerText = '\u{1F4A3}'
                            break
                        case 13:
                            char[13].innerText = '\u{1F340}'
                            break
                        case 14:
                            char[14].innerText = '\u{1F6F9}'
                            break
                        case 15:
                            char[15].innerText = '\u{26BD}'
                            break
                            
                    }
                }
                for (var c = 16; c <= 18; c++) {
                    char[c] = document.createElement('li')
                    char[c].setAttribute('id', `char${c}`)
                    char[c].setAttribute('value', `${c}`)
                    char[c].setAttribute('class', 'select')
                    char[c].style.background = 'rgb(0, 20, 134)'
                    characters5.appendChild(char[c])
                    switch (c) {
                        case 16:
                            char[16].innerText = '\u{2B55}'
                            break
                        case 17:
                            char[17].innerText = '\u{1F49B}'
                            break
                        case 18:
                            char[18].innerText = '\u{1F996}'
                            break
                    }
                }
                var back = document.createElement('p')
                back.setAttribute('id', 'back')
                back.innerText = "\u{1F448} SELECT"
                back.style.left = "10px"
                back.style.top = "-817px"
                screen.appendChild(characters1)
                screen.appendChild(characters2)
                screen.appendChild(characters3)
                screen.appendChild(characters4)
                screen.appendChild(characters5)
                screen.appendChild(playchar1)
                screen.appendChild(playchar2)
                screen.appendChild(back)
            }
            selectCharacter(player1.char)
            elements = 7
            tv = "play"
            break
        case "jogoDaVelha": // Jogo
            slot = 0
            for (var c = 0; c <= 8; c++) {
                casaSelected[c] = 0 
            }
            if (tv != "jogoDaVelha") {
                var win1 = document.createElement('div')
                win1.setAttribute('id', 'winsUm')
                var win2 = document.createElement('div')
                win2.setAttribute('id', 'winsDois')
                var draw = document.createElement('div')
                draw.setAttribute('id', 'draw')
                win1.innerHTML = `${playchar1.textContent}  Vitórias: ${player1Win}`
                win2.innerHTML = `${playchar2.textContent}  Vitórias: ${player2Win}`
                draw.innerHTML = `Empates: ${drawGame}`
                var jogo1 = document.createElement('ul')
                jogo1.setAttribute('class','jogoDaVelha')
                var jogo2 = document.createElement('ul')
                jogo2.setAttribute('class','jogoDaVelha')
                var jogo3 = document.createElement('ul')
                jogo3.setAttribute('class','jogoDaVelha')
                for (var c = 0; c <= 8; c++) {
                    casas[c] = document.createElement('li')
                    casas[c].setAttribute('id', `casa${c}`)
                    casas[c].setAttribute('class', 'casas')
                    casas[c].innerHTML = '&nbsp;'
                    if (c <= 2) {
                        jogo1.appendChild(casas[c])
                    } else if (c <= 5) {
                        jogo2.appendChild(casas[c])    
                    } else if (c <= 8) {
                        jogo3.appendChild(casas[c])    
                    }
                }
                var vez = document.createElement('div')
                vez.setAttribute('id', 'vez')
                vez.innerText = `VEZ DE ${player1.character}`
                var back = document.createElement('p')
                back.setAttribute('id', 'back')
                back.innerText = "\u{1F448} SELECT"
                back.style.left = "10px"
                back.style.top = "-26px"
                screen.appendChild(win1)
                screen.appendChild(win2)
                screen.appendChild(draw)
                screen.appendChild(jogo1)
                screen.appendChild(jogo2)
                screen.appendChild(jogo3)
                screen.appendChild(vez)
                screen.appendChild(back)
            }
            elements = 7
            tv = "jogoDaVelha"
            break
    }
}

function audioSelection() {
    if (chooseAudioSelect < 4) { //trocar o áudio, para nao bugar se mudar muito rápido as opções
        chooseAudioSelect++
    } else {
        chooseAudioSelect = 0
    }
    audioSelect[chooseAudioSelect].play()
}
function audioAcception() {
    if (chooseAudioAccept < 2) { //trocar o áudio, para nao bugar se selecionar muito rápido as opções
        chooseAudioAccept++
    } else {
        chooseAudioAccept = 0
    }
    audioAccept[chooseAudioAccept].play()
}

function menu(option) {
    let button = document.querySelector('div#playButton')
    audioSelection()
    inicio.style.background = 'rgb(168, 167, 167)'
    switch (option) {
        case 1:
            button = document.querySelector('div#playButton')
            button.style.background = 'rgb(238, 255, 0)'
            inicio = document.querySelector('div#playButton')
            menuOption = 1
            break
        case 2:
            button = document.querySelector('div#howButton')
            button.style.background = 'rgb(238, 255, 0)'
            inicio = document.querySelector('div#howButton')
            menuOption = 2
            break
        case 3:
            button = document.querySelector('div#infoButton')
            button.style.background = 'rgb(238, 255, 0)'
            inicio = document.querySelector('div#infoButton')
            menuOption = 3
            break
    }
}

function backgroundColor(color) {
    colors[bdcolor].style.border = "2px solid black"
    colors[color].style.border = "2px solid green"
    switch (color) {
        case 0:
            screen.style.background = "rgb(0, 0, 0)"
            bdcolor = 0
            break
        case 1:
            screen.style.background = "rgb(33, 33, 33)"
            bdcolor = 1
            break
        case 2:
            screen.style.background = "rgb(129, 227, 139)"
            bdcolor = 2
            break
        case 3:
            screen.style.background = "rgb(133, 129, 227)"
            bdcolor = 3
            break
        case 4:
            screen.style.background = "rgb(31, 55, 125)"
            bdcolor= 4
            break
    }
}