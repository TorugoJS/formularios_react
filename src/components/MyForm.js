import './MyForm.css'

import { useState } from 'react'

const MyForm = () => {

    // 3 - Gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value)
    };

    console.log(name);


    return (
        <div>

            {/* 1 - Criação de form */}
            <form>
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
                    <input type="email" name="email" placeholder="digite o seu e-mail" />
                </label>

                <input type="submit" value="Enviar" />

            </form>

        </div>
    )
}

export default MyForm;