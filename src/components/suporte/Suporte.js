import styles from './Suporte.module.css'

import imgWhats from '../../imagens/suporte/Icon awesome-whatsapp.png'

const Suporte = () => {
  return (
    <div className={styles.container_suporte}>
        <div className={styles.box_suporte_titulos}>
            <div className={styles.box_titulo}>
                <h2>E mais: suporte que realmente funciona!</h2>
            </div>
            <div className={styles.box_subtitulo}>
                <p>Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre disponível pra ajudar você e seus clientes.</p>
            </div>
        </div>
        <div className={styles.container_box_suporte}>

            <div className={styles.box_suporte}>
                <div className={styles.box_suporte_interno_titulos}>
                    <h3>Pigz</h3>
                    <p>Tudo o que você precisa</p>
                </div>
                <div className={styles.box_items_list}>
                    <ul>
                        <li>Pigz Marketplace</li>
                        <li>Página exclusiva</li>
                        <li>Pigz Gestão Desktop e Mobile</li>
                        <li>Gestão de entregadores</li>
                        <li>Vias de impressão personalizáveis</li>
                    </ul>
                </div>
                <div className={styles.box_valor}>
                    <h4>R$199/mês</h4>
                </div>
                <div className={styles.box_btn}>
                    <button>Vender no Pigz agora</button>
                </div>
            </div>

            <div className={styles.box_suporte}>
                <div className={styles.box_suporte_interno_titulos}>
                    <h3>Pagamento On-line</h3>
                    <p>Segurança e agilidade</p>
                </div>
                <div className={styles.box_items_list}>
                    <ul>
                        <li>Aceite Pix e Cartão de Crédito</li>
                        <li>Antecipação Pix automática</li>
                        <li>Não dependa de maquininha de cartão</li>
                        <li>Segurança para receber pedidos</li>
                        <li>Agilidade para entrega</li>
                    </ul>
                </div>
                <div className={styles.box_valor_box2}>
                    <h4>2,99% por transação</h4>
                </div>
                <div className={styles.box_btn}>
                    <button>Saiba mais</button>
                </div>
            </div>
        </div>

        <div className={styles.box_whats}>
            <p>Fale com a Pigz</p>
            <div className={styles.box_img_whats}>
                <div>
                    <img src={imgWhats} alt="Imagem Whatsapp" />
                </div>
                <p><span>95</span> 3224-2603</p>
            </div>
        </div>
    </div>
  )
}

export default Suporte