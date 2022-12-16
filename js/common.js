function setPlayerName(placeList, placeName) {
    const playerList = document.getElementById(placeList);
    const PlayerListUl = document.getElementById('player-list').children;
    if (PlayerListUl.length < 5) {

        const player = document.getElementById(placeName)
        const playerName = player.innerText;
        let li = document.createElement('li');
        li.innerText = playerName;
        li.classList.add("playersClass");
        playerList.appendChild(li);
    }
    else {
        alert('You can not sellect more then five.');
    }

}

function disableButton(buttonId) {
    const buttonElement = document.getElementById(buttonId);
    buttonElement.style.pointerEvents = 'none';
    buttonElement.style.backgroundColor = 'gray';
}

// calculate
function getLength(elementId) {
    const lengthElement = document.getElementsByClassName(elementId);
    const lengthNumber = lengthElement.length;
    return lengthNumber;

}
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

function setUpdateNumber(etElementId, value) {
    const updateNumber = document.getElementById(etElementId)
    updateNumber.innerText = value;
    return updateNumber;
}