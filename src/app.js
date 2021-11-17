import './styles.scss'
let error = document.getElementById('error')
document.getElementById('btn').addEventListener('click', () => {
    let reqLength = document.getElementById('length')
    if ((reqLength.value >= 7 && reqLength.value <= 100) || reqLength.value === '') {
        error.innerHTML = ''
        fetch("https://pas-gen.herokuapp.com/password/" + reqLength.value).then(res => res.json()).then(res => {
            document.getElementById('pass').innerHTML = res[0].pass
        })

    }
    else {
        document.getElementById('pass').innerHTML = ''
        error.innerHTML = 'La longitud debe estar entre 7 y 100'
    }
})