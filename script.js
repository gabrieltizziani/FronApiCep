document.getElementById('formEndereco').addEventListener('submit', async (event) => {
    event.preventDefault();

    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const cep = document.getElementById('cep').value;
    const logradouro = document.getElementById('logradouro').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const bairro = document.getElementById('bairro').value;
    const municipioIBGE = document.getElementById('municipioIBGE').value;

    const addressData = {
        Cidade: cidade,
        Estado: estado,
        Cep: cep,
        Logradouro: logradouro,
        Numero: numero,
        Complemento: complemento,
        Bairro: bairro,
        MunicipioIBGE: municipioIBGE
    };

    try {
        const response = await fetch('http://localhost:3000/api/enderecos/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addressData)
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('message').innerText = 'Endereço enviado com sucesso!';
            document.getElementById('formEndereco').reset();
        } else {
            document.getElementById('message').innerText = `Erro: ${result.message}`;
        }
    } catch (error) {
        document.getElementById('message').innerText = 'Erro na comunicação com o servidor.';
    }
});
