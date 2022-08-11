import './MyForm.css'

import { useState } from 'react'

const MyForm = ({ user }) => {

    // 6 - controlled inputs

    // 3 - Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');

    const [bio, setBio] = useState(user ? user.bio : '');

    const handleName = (e) => {
        setName(e.target.value)
    };

    // console.log(name);
    // console.log(email);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Enviando dados')
        console.log(name, email, bio);

        //validacao
        //envio

        // 7 - Limpar form
        setName('');
        setEmail('');
        setBio('');
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
                        value={name}
                    />

                </div>

                {/* 2 - Label envolvendo input */}
                <label>

                    <span>E-mail</span>
                    {/* 4 - Simplificação de manipúlção de state */}
                    <input type="email"
                        name="email"
                        placeholder="digite o seu e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                </label>
                {/* 8 - textarea */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio"
                        placeholder="Descrição do usuário"
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}>

                    </textarea>
                </label>
                <input type="submit" value="Enviar" />

            </form>

        </div>
    )
}

export default MyForm;