import styles from './Footer.module.css'

import { Link } from 'react-router-dom'

// imagens
import logoFooter from '../../imagens/footer/logo-footer.png'
import logoAppApple from '../../imagens/footer/selo-app-store.png'
import logoAppGoogle from '../../imagens/footer/selo-google-play.png'
import logoFaleConosco from '../../imagens/footer/icone-fale-conosco.png'
import logoRedeFacebook from '../../imagens/footer/facebook-with-circle.png'
import logoRedeLinkedin from '../../imagens/footer/linkedin-with-circle.png'
import logoRedeInstagram from '../../imagens/footer/instagram-with-circle.png'
import logoRedeYoutube from '../../imagens/footer/youtube-with-circle.png'
import logoOrange from '../../imagens/footer/logo-orange-horizontal-branco.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container_footer}>

        <div className={styles.box_logo_footer}>
          <img src={logoFooter} alt="Logo piggz no footer" />
          <p>Tudo que você precisa.</p>
        </div>

        <div className={styles.box_app}>
          <p>Baixe o APP</p>
          <div className={styles.box_logo_app}>
            <Link to={'/'} target={'_blank'}>
              <img src={logoAppApple} alt="Imagem da logo da apple store" />
            </Link>
            <Link to={'/'} target={'_blank'}>
              <img src={logoAppGoogle} alt="Imagem da logo da google store" />
            </Link>
          </div>
        </div>

        <div className={styles.box_pigz}>
          <p>Pigz</p>
          <div className={styles.box_pigz_link}>
              <ul>
                <li>
                  <Link to={'/'} target={'_self'}>
                    Sobre o Pigz
                  </Link>
                </li>
                <li>
                  <Link to={'/'} target={'_self'}>
                    Portal do Parceiro
                  </Link>
                </li>
                <li>
                  <Link to={'/'} target={'_self'}>
                    Quero ser um Pigz Partner
                  </Link>
                </li>
              </ul>
          </div>
        </div>

        <div className={styles.box_contato}>
          <div className={styles.box_titulo_contato}>
            <img src={logoFaleConosco} alt="Imagem do fale conosco" />
            <p>Fale conosco</p>
          </div>
          <div>
            <ul>
              <li>
                <Link to={'/'} target={'_blank'}>
                  falecom@pigz.com.br
                </Link>
              </li>
              <li>
                <Link to={'/'} target={'_blank'}>
                  (95) 3224-2603
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className={styles.box_redes}>
        <p>Pigz nas redes</p>
        <div className={styles.box_logo_redes}>
            <Link to={'/'} target={'_blank'}>
              <img src={logoRedeLinkedin} alt="logo linkedin" />
            </Link>
            <Link to={'/'} target={'_blank'}>
              <img src={logoRedeInstagram} alt="logo instagram" />
            </Link>
            <Link to={'/'} target={'_blank'}>
              <img src={logoRedeFacebook} alt="logo facebook" />
            </Link>
            <Link to={'/'} target={'_blank'}>
              <img src={logoRedeYoutube} alt="logo youtube" />
            </Link>
        </div>
      </div>

      <div className={styles.box_end}>
        <div className={styles.end_links}>
          <ul>
            <li>
              <Link to={'/'} target={'_self'}>
                Nossos termos
              </Link>
            </li>
            <li>
              <Link to={'/'} target={'_self'}>
                Privacidade
              </Link>
            </li>
            <li>
              <Link to={'/'} target={'_self'}>
                Ajuda
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.end_logo_orange}>
          <p>© Copyright 2021 • Pigz • Todos os direitos reservados Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85</p>
          <div>
             <img src={logoOrange} alt="imagem logo órange" />
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer