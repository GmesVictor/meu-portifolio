const button = document.querySelector ("#btn")
const modal = document.querySelector ("dialog")
const buttonClose = document.querySelector ("dialog button")

button.onclick = function () {
    modal.show()
}

buttonClose.onclick = function () {
    modal.close()
}