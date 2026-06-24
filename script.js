const input = document.getElementById('inputNome')
const btn = document.getElementById('btnprimary')
const result = document.getElementById('result')

const getInfo = () => JSON.parse(localStorage.getItem('GT-item')) ?? []
const setInfo = (listaArq) => localStorage.setItem("GT-item", JSON.stringify(listaArq))

const carregarInfo = () => {
    const lista = getInfo()
    result.innerHTML = ''

    lista.forEach((item, index) => {
        const tr = document.createElement('tr')

        tr.innerHTML = `
            <td>${item.nome}</td>
            <td>${item.id}</td>
        `
        const btnDelete = document.createElement('button')
        const td = document.createElement('td')

        btnDelete.innerHTML = `X`
        btnDelete.classList.add('btn-del')
        btnDelete.setAttribute('aria-label', 'Excluir crachá de ' + item.nome);
        btnDelete.setAttribute('title', 'Excluir crachá de ' + item.nome);

        btnDelete.addEventListener('click', () => {
            excluirItem(index)
        
        })

        td.appendChild(btnDelete)
        tr.appendChild(td)
        result.appendChild(tr)
    });
    
}

const excluirItem = ((index) => {
    const lista = getInfo()
    lista.splice(index, 1)
    setInfo(lista)

    carregarInfo()
})

btn.addEventListener('click', () => {
    let inputSpace = input.value.trim();

    if(inputSpace === ''){
        alert('Erro! Digite um nome válido')
        input.focus();
        return;
    }

    const geradorId = crypto.randomUUID().substring(0, 12);

    const infos = { nome: inputSpace, id: geradorId }
    
    const lista = getInfo()
    lista.push(infos)
    setInfo(lista)

    input.value = ''
    input.focus()
    
   carregarInfo()
})

window.addEventListener('load', () => carregarInfo())