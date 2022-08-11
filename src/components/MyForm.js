import './MyForm.css'

import { useState } from 'react'

const MyForm = () => {

    // 3 - Gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value)
    };

    // console.log(name);
    // console.log(email);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Enviando dados')
        console.log(name, email);
    }


    return (
        <div>
            {/* 5 - Envio de form */}
            {/* 1 - Criação de form */}
            <form onSubmit={handleSubmit}>

                <div>

                    <label htmlFor="name">Nome:</label>

                    <input type="text"
                        name="name"
                        placeholder="Insira seu nome"
                        onChange={handleName}
                    />

                </div>

                {/* Label envolvendo input */}
                <label>

                    <span>E-mail</span>
                    {/* Simplificação de manipúlção de state */}
                    <input type="email"
                        name="email"
                        placeholder="digite o seu e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </label>

                <input type="submit" value="Enviar" />

            </form>

        </div>
    )
}

export default MyForm;