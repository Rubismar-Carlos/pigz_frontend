import styles from './Slider.module.css'

import { useState, useEffect } from 'react'

// imagem
import imgSlide1 from '../../imagens/slide/Grupo de máscara 2417.png'
import imgSlide2 from '../../imagens/slide/Grupo de máscara 2418.png'
import imgSlide3 from '../../imagens/slide/Grupo de máscara 2420.png'
import imgSlide4 from '../../imagens/slide/mobile.png'

const Slider = () => {

    const [slide, setSlide] = useState(1)

    const nextSlide = (slide) => {
        setSlide(slide)
    }

    useEffect(() => {

        const interval = setInterval(() => {

            const proximoSlide = slide === 4 ? 1 : slide + 1;
            nextSlide(proximoSlide)

        }, 3000)

        return () => {
            clearInterval(interval)
        };

    }, [slide])

  return (
    <div className={styles.container_slide}>
        <div className={styles.box_checkbox}>
            <button className={`${slide === 1 ? `${styles.slide_ativado}` : ""}`} onClick={() => nextSlide(1)}></button>
            <button className={`${slide === 2 ? `${styles.slide_ativado}` : ""}`} onClick={() => nextSlide(2)}></button>
            <button className={`${slide === 3 ? `${styles.slide_ativado}` : ""}`} onClick={() => nextSlide(3)}></button>
            <button className={`${slide === 4 ? `${styles.slide_ativado}` : ""}`} onClick={() => nextSlide(4)}></button>
        </div>
        <div className={styles.container_box_slide}>
            {slide === 1 && (
                <div className={styles.box_slide}>
                    <h3>Pigz Marketplace</h3>
                    <div className={styles.box_interno_slide}>
                        <div className={styles.box_interno_p}>
                            <p>Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.</p>
                        </div>
                        <div className={styles.box_interno_img}>
                            <img src={imgSlide1} alt="imagem telefone slide" />
                        </div>
                    </div>
                </div>
            )}

            {slide === 2 && (
                <div className={styles.box_slide}>
                    <h3>Pigz Gestão</h3>
                    <div className={styles.box_interno_slide}>
                        <div className={styles.box_interno_p}>
                            <p>Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser.</p>
                        </div>
                        <div className={styles.box_interno_img}>
                            <img src={imgSlide2} alt="imagem telefone slide" />
                        </div>
                    </div>
                </div>
            )}

            {slide === 3 && (
                <div className={styles.box_slide}>
                    <h3>Gestão de entregadores</h3>
                    <div className={styles.box_interno_slide}>
                        <div className={styles.box_interno_p}>
                            <p>A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente.</p>
                        </div>
                        <div className={styles.box_interno_img}>
                            <img src={imgSlide3} alt="imagem telefone slide" />
                        </div>
                    </div>
                </div>
            )}

            {slide === 4 && (
                <div className={styles.box_slide}>
                    <h3>Pagamento on-line</h3>
                    <div className={styles.box_interno_slide}>
                        <div className={styles.box_interno_p}>
                            <p>Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão.</p>
                        </div>
                        <div className={styles.box_interno_img}>
                            <img src={imgSlide4} alt="imagem telefone slide" />
                        </div>
                    </div>
                </div>
            )}

        </div>
    </div>
  )
}

export default Slider