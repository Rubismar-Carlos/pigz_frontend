import styles from './Banner.module.css'

import { useState } from 'react'

// imagens
import imgSanduiche from '../../imagens/banner/Grupo de máscara 2405.png'
import imgLogoBanner from '../../imagens/banner/Grupo 3535.png'

const Banner = () => {
    
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")

    const handleSubmitForm = (e) => {
        e.preventDefault()

        console.log(nome, email, telefone)
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
                <form onSubmit={handleSubmitForm}>
                    <h2>Quero vender no Pigz</h2>
                    <p>Dê o primeiro passo para aumentar suas vendas</p>
                    <label>
                        Nome
                        <input type="text" placeholder="Leonercio Goesfeeld" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </label>
                    <label>
                        E-mail
                        <input type="text" placeholder="leonercio.goesfeeld@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        Telefone
                        <div className={styles.form_input_tel}>
                            <select name="" id="">
                                <option value="Brasil">Brasil +55</option>
                                <option value="Eua">Brasil +56</option>
                                <option value="França">Brasil +57</option>
                                <option value="Inglaterra">Brasil +58</option>
                            </select>
                            <input type="number" placeholder="(95) 99876-5432" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
                        </div>
                    </label>
                    <p>Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</p>
                    <div>
                        <input type="submit" value="Continuar" />
                    </div>
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