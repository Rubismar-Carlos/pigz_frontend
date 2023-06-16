import styles from './Ofertas.module.css'

// imagens 
import imgMarket from '../../imagens/ofertas/storefront_black_24dp.png'
import imgTel from '../../imagens/ofertas/smartphone_black_24dp.png'
import imgPigz from '../../imagens/ofertas/Grupo 3545.png'
import imgImpressao from '../../imagens/ofertas/print_black_24dp.png'

const Ofertas = () => {
  return (
    <div className={styles.container_ofertas}>
        <h2>Você tem um <br /> novo Pigzdido!</h2>

        <div className={styles.container_box_ofertas}>

            <div className={styles.box_oferta}>
                <div className={styles.img_oferta}>
                    <img src={imgMarket} alt="imagem marketplace" />
                </div>
                <h3>Marketplace</h3>
                <p>Pra sua loja vender mais</p>
            </div>

            <div className={styles.box_oferta}>
                <div className={styles.img_oferta}>
                    <img src={imgTel} alt="imagem telefone" />
                </div>
                <h3>É fácil e rápido</h3>
                <p>Fazer um pedido no Pigz</p>
            </div>

            <div className={styles.box_oferta}>
                <div className={styles.img_oferta}>
                    <img src={imgPigz} alt="imagem pigz" />
                </div>
                <h3>Pigz Gestão</h3>
                <p>Você no controle, sempre</p>
            </div>

            <div className={styles.box_oferta}>
                <div className={styles.img_oferta}>
                    <img src={imgImpressao} alt="imagem de impressora" />
                </div>
                <h3>Vias de impressão</h3>
                <p>Personalizáveis</p>
            </div>

        </div>

        <div className={styles.box_anuncio_titulo}>
            <h2>Tudo que você precisa por apenas R$199/mês</h2>
        </div>
        <div className={styles.box_anuncio_subtitulo}>
            <p>Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por cada venda, sem letrinhas miúdas.</p>
        </div>

    </div>
  )
}

export default Ofertas