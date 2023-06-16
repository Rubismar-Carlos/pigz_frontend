import styles from './Banner.module.css'

import { useState } from 'react'

// imagens
import imgSanduiche from '../../imagens/banner/Grupo de máscara 2405.png'
import imgLogoBanner from '../../imagens/banner/Grupo 3535.png'

const Banner = () => {

    // url das imagens bandeira dos paises em número
    
    
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [pais, setPais] = useState("")
    const [telefone, setTelefone] = useState("")
    const [cep, setCep] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [endereco, setEndereco] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")
    const [nomeLoja, setNomeLoja] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [tipoLoja, setTipoLoja] = useState("")

    const [formAtual, setFormAtual] = useState(1)

    const nextForm = () => {
        setFormAtual(formAtual + 1)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()

        console.log(nome, email, pais, telefone, cep, estado, cidade, endereco, numero, complemento, nomeLoja, cnpj, tipoLoja)

        setTimeout(() => {
            setNome("")
            setEmail("")
            setTelefone("")
            setFormAtual(1)
        }, 1000)
    }


  return (
    <div className={styles.container_banner}>
        <div className={styles.box_banner}>
            <div className={styles.text_img_banner}>
                <div className={styles.text_banner}>
                    <h1>
                        Pigz: tudo que você precisa pra vender ainda mais!
                    </h1>
                </div>
                <div className={styles.img_banner}>
                    <img src={imgSanduiche} alt="imagem sanduíche" />
                </div>
            </div>
        </div>

        <div className={styles.box_mensagem}>
            <p>Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.</p>
        </div>

        <div className={styles.box_form}>
            <div className={styles.form}>
                <form>

                    {/* Formulário um */}
                   {formAtual === 1 && (
                        <div className={styles.form1}>
                            <h2>Quero vender no Pigz</h2>
                            <p>Dê o primeiro passo para aumentar suas vendas</p>
                            <label>
                                Nome
                                <input 
                                    type="text" 
                                    placeholder="Leonercio Goesfeeld"
                                    value={nome} 
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                E-mail
                                <input 
                                    type="text" 
                                    placeholder="leonercio.goesfeeld@email.com" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Telefone
                                <div className={styles.form_input_tel}>
                                    <select name="pais" id="pais" required value={pais} onChange={(e) => setPais(e.target.value)}>
                                        <option value="Brasil">Brasil +55</option>
                                        <option value="Eua">EUA +1</option>
                                        <option value="França">França +33</option>
                                    </select>
                                    <input 
                                        type="tel" 
                                        placeholder="(95) 99876-5432" 
                                        maxLength={11}
                                        value={telefone} 
                                        onChange={(e) => setTelefone(e.target.value)}
                                        required    
                                    />
                                </div>
                            </label>
                            <p>Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</p>
                            <div>
                                <input 
                                    type="submit" 
                                    value="Continuar" 
                                    disabled={nome === "" || email === "" || pais === "" || telefone === ""}
                                    onClick={nextForm}/>
                            </div>    
                        </div>
                   )} 

                    {/* Formulário dois */}
                   {formAtual === 2 && (
                        <div className={styles.form2}>
                            <h2>Onde fica a sua loja?</h2>
                            <label>
                                CEP
                                <input 
                                    type="tel" 
                                    placeholder="00000-00"
                                    maxLength={8}
                                    value={cep} 
                                    onChange={(e) => setCep(e.target.value)}
                                    required
                                />
                            </label>
                            <div className={styles.form_select_cep}>
                                <label>
                                    Estado
                                    <select name="estado" id="estado" className={styles.form_estado} value={estado} required onChange={(e) => setEstado(e.target.value)}>
                                        <option value="Estado">UF</option>
                                        <option value="PR">PR</option>
                                        <option value="SP">SP</option>
                                        <option value="GO">GO</option>
                                    </select>
                                </label>
                                <label>
                                    Cidade
                                    <select name="cidade" id="cidade" placeholder='Cidade' className={styles.form_cidade} value={cidade} required onChange={(e) => setCidade(e.target.value)}>
                                        <option value="Selecione">Selecione</option>
                                        <option value="Curitiba">Curitiba</option>
                                        <option value="São Paulo">São Paulo</option>
                                        <option value="Goiânia">Goiânia</option>
                                    </select>
                                </label>
                            </div>
                            <label>
                                Endereço
                                <input 
                                    type="text" 
                                    placeholder="Avenida Brasil" 
                                    value={endereco} 
                                    onChange={(e) => setEndereco(e.target.value)}
                                    required
                                />
                            </label>
                            <div className={styles.form_endereco}>
                                <label>
                                    Número
                                    <input 
                                        type="tel" 
                                        placeholder='123'
                                        maxLength={3}
                                        value={numero}
                                        onChange={(e) => setNumero(e.target.value)}
                                        required
                                    />
                                </label>
                                <label>
                                    Complemento
                                    <input 
                                        type="text" 
                                        placeholder='Sala 1' 
                                        value={complemento}
                                        onChange={(e) => setComplemento(e.target.value)}  
                                        required  
                                    />    
                                </label>
                            </div>
                            <div>
                                <input 
                                    type="submit" 
                                    value="Próximo" 
                                    disabled={cep === "" || estado === "" || cidade === "" || endereco === "" || numero === "" || complemento === ""}
                                    onClick={nextForm}
                                />
                            </div>    
                        </div>
                   )}

                    {/* Formulário tres */}
                   {formAtual === 3 && (
                        <div className={styles.form3}>
                            <h2>Me conta um pouco sobre a sua loja</h2>
                            <label>
                                Nome da Loja
                                <input 
                                    type="text" 
                                    placeholder="Restaurante Todo Mundo Gosta"
                                    value={nomeLoja} 
                                    onChange={(e) => setNomeLoja(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                CNPJ da loja
                                <input 
                                    type="tel" 
                                    placeholder="12.345.678/0001-99" 
                                    value={cnpj} 
                                    onChange={(e) => setCnpj(e.target.value)}
                                    maxLength={14}
                                    required
                                />
                            </label>
                            <label>
                                Tipe de loja
                                <select name="loja" id="loja" value={tipoLoja} onChange={(e) => setTipoLoja(e.target.value)}>
                                    <option value="FastFood">FastFood</option>
                                    <option value="FastFood">FastFood</option>
                                </select>
                            </label>
                            <div>
                                <input 
                                    type="submit" 
                                    value="Concluir" 
                                    disabled={nomeLoja === "" || cnpj === "" || tipoLoja === ""}
                                    onClick={handleSubmitForm}/>
                            </div>    
                        </div>
                   )}
                </form>
            </div>
        </div>
        <div className={styles.logo_banner}>
            <img src={imgLogoBanner} alt="Logo da empresa pigz" />
        </div>
    </div>
  )
}

export default Banner