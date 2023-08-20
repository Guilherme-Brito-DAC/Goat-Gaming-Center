import React, { useState } from 'react'
import './Cadastro.css'

const Cadastro = () => {
    const [Formulario, setFormulario] = useState({});

    const onChangeCampo = (e: any) => {
        const nome = e.target.name;
        const valor = e.target.value;

        setFormulario((valores: any) => ({ ...valores, [nome]: valor }))
    }

    const onSubmitFormulario = () => {
        console.log(Formulario)

    }

    return (
        <form onSubmit={onSubmitFormulario}>
            <div className='campos'>
                <div className='input'>
                    <label>Nome Completo <span style={{ color: "red" }}>*</span></label>
                    <input type="text" name="nome" onChange={onChangeCampo} />
                </div>
                <div className='input'>
                    <label>Usuário (Para logar no sistema) <span style={{ color: "red" }}>*</span></label>
                    <input type="text" name="usuario" onChange={onChangeCampo} />
                </div>
                <div className='input'>
                    <label>Email <span style={{ color: "red" }}>*</span></label>
                    <input type="text" name="email" onChange={onChangeCampo} />
                </div>
                <div className='input'>
                    <label>Confirmar Email</label>
                    <input type="text" name="confirmar-email" onChange={onChangeCampo} />
                </div>
                <div className='input'>
                    <label>Data de Nascimento <span style={{ color: "red" }}>*</span></label>
                    <input type="text" name="data-de-nascimento" onChange={onChangeCampo} />
                </div>
                <div className='input'>
                    <label>Celular (WhatsApp) <span style={{ color: "red" }}>*</span></label>
                    <input type="text" name="celular" onChange={onChangeCampo} />
                </div>
                <div className='input'>
                    <label>Documento (Se menor de 18 anos) (CPF ou RG)</label>
                    <input type="text" name="documento" onChange={onChangeCampo} />
                </div>
                <div className='input'>
                    <label>Bairro <span style={{ color: "red" }}>*</span></label>
                    <input type="text" name="bairro" onChange={onChangeCampo} />
                </div>
                <div className='input'>
                    <label>Cidade <span style={{ color: "red" }}>*</span></label>
                    <input type="text" name="cidade" onChange={onChangeCampo} />
                </div>
                <div className='input'>
                    <label>Quais jogos deseja?</label>
                    <textarea name="jogos" onChange={onChangeCampo} />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className='botao'>
                    Enviar
                </button>
            </div>
        </form>
    )
}

export default Cadastro