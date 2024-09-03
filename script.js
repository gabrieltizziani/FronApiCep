document.getElementById('formEndereco').addEventListener('submit', async (event) =>{
    event.preventDefault();

    const rua = document.getElementById('rua').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const cep = document.getElementById('cep').value;

    const addressData = {
        rua,
        cidade,
        estado,
        cep
    };

    try {
        const response = await fetch ('http://localhost:3000/api/enderecos',{
            method: 'POST',
            headers: {
                'Content-Type' : 'aplication/json'
            },
            body: JSON.stringify(addressData)
        });

        const
    }
})