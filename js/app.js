
document.getElementById('btn-lionel-messi').addEventListener('click', function () {
    setPlayerName('player-list', 'lionel-messi')
    disableButton('btn-lionel-messi')

})
document.getElementById('btn-mbappe').addEventListener('click', function () {
    setPlayerName('player-list', 'mbappe')
    disableButton('btn-mbappe')

})
document.getElementById('btn-dimaria').addEventListener('click', function () {
    setPlayerName('player-list', 'dimaria')
    disableButton('btn-dimaria')

})
document.getElementById('btn-navas').addEventListener('click', function () {
    setPlayerName('player-list', 'navas')
    disableButton('btn-navas')
})
document.getElementById('btn-hakimi').addEventListener('click', function () {
    setPlayerName('player-list', 'hakimi')
    disableButton('btn-hakimi')
})
document.getElementById('btn-dagba').addEventListener('click', function () {
    setPlayerName('player-list', 'dagba')
    disableButton('btn-dagba')
})
document.getElementById('btn-paredes').addEventListener('click', function () {
    setPlayerName('player-list', 'paredes')
    disableButton('btn-paredes')
})
document.getElementById('btn-kehrer').addEventListener('click', function () {
    setPlayerName('player-list', 'kehrer')
    disableButton('btn-kehrer')
})
document.getElementById('btn-ibrahimovic').addEventListener('click', function () {
    setPlayerName('player-list', 'ibrahimovic')
    disableButton('btn-ibrahimovic')
})


// calculate
document.getElementById('btn-calculate').addEventListener('click', function () {
    const playersNumber = getLength('playersClass')

    const playerBudget = getInputValue('player-budget-field')

    const PlayerExpenses = playerBudget * playersNumber;

    setUpdateNumber('player-Expenses', PlayerExpenses)
})

// calculate total 
document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const playersNumber = getLength('playersClass')

    const playerBudget = getInputValue('player-budget-field')

    const PlayerExpenses = playerBudget * playersNumber;
    // 2nd part
    const managerBudget = getInputValue('manager-budget');

    const coachBudget = getInputValue('coach-budget');

    const totalExpenses = managerBudget + coachBudget;

    const finalTotal = totalExpenses + PlayerExpenses;

    setUpdateNumber('total-expenses', finalTotal)
})