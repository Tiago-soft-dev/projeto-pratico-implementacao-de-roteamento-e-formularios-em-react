import './Create.css'

export default function Create(){

    function cadastrarCliente(event){

        event.preventDefault()
        
        const cliente = {
            nome: event.target.nome.value,
            idade: event.target.idade.value,
            email: event.target.email.value,
        }
        
        const clienteJson = JSON.stringify(cliente)
        console.log(cliente);
        
        console.log(clienteJson);
        
        
    }
   

    return (
        <div className='create'>
            <h1>Cadastro de Clientes</h1>
            <form onSubmit={cadastrarCliente} >
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" placeholder="insira o nome" />
                </div>
                <div>
                    <label htmlFor="idade">Idade:</label>
                    <input type="text" id="idade" name="idade" placeholder="insira idade"/>
                </div>
                <div>
                    <label htmlFor="email" id="email" name="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder="insira email"/>
                </div>
                <div>
                    <button type="submit">Exibir</button>
                    <button type="reset">Limpar</button>
                </div>
            </form>
        </div>
    )
}