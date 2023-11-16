import React from 'react'
import style from './style.module.css'
import Image from 'next/image'

import imgVoluntario from '../../../public/voluntario.png'
import logo from '../../../public/logo1.svg'

export const Depoiments = () => {
  return (
    <section className={`${style.depoiments}`}>
      <div className="container">
        <h1 className={`title ${style.title}`}>Depoimentos</h1>
        <div className={style.grid}>
          <div className={style.card}>
            <p className="regular-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              provident esse sunt id impedit tempore, quam, quia perferendis ab,
              animi magnam sed maxime iure quibusdam architecto voluptatibus
              neque hic ratione!
            </p>
            <div>
              <Image src={imgVoluntario} alt="imagem do voluntario" />
              <div>
                <h2>Nome</h2>
                <h3>cargo</h3>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <p className="regular-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              provident esse sunt id impedit tempore, quam, quia perferendis ab,
              animi magnam sed maxime iure quibusdam architecto voluptatibus
              neque hic ratione!
            </p>
            <div>
              <Image src={imgVoluntario} alt="imagem do voluntario" />
              <div>
                <h2>Nome</h2>
                <h3>cargo</h3>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <p className="regular-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              provident esse sunt id impedit tempore, quam, quia perferendis ab,
              animi magnam sed maxime iure quibusdam architecto voluptatibus
              neque hic ratione!
            </p>
            <div>
              <Image src={imgVoluntario} alt="imagem do voluntario" />
              <div>
                <h2>Nome</h2>
                <h3>cargo</h3>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <p className="regular-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              provident esse sunt id impedit tempore, quam, quia perferendis ab,
              animi magnam sed maxime iure quibusdam architecto voluptatibus
              neque hic ratione!
            </p>
            <div>
              <div className={style.filtro}>
                <Image src={imgVoluntario} alt="imagem do voluntario" />
                <div className={style.overlay}></div>
              </div>

              <div>
                <h2>Nome</h2>
                <h3>cargo</h3>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <Image src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  )
}
