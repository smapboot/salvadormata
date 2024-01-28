import React from 'react'
import {LabelsHistoria} from "../locales";
import {useLocale} from "../../../hooks/useLocale";

const AboutMe = () => {
  const {idioma} = useLocale()
  const labels = LabelsHistoria[idioma]
  return (
    <>
      <span className={"SmapTitle"}>{labels.about}</span>
      {
        idioma && idioma === "ca"
          ?
          <>
            <p>
              Les persones que em coneixen, em consideren algú molt disciplinat i exigent amb el treball, així com amb els
              resultats d'aquest. Perfeccionista de mena i sempre en disposició d'ajudar allà on calgui un cop de mà.
              <br />
              M'agrada molt treballar en equip, tot i que, no tinc inconvenient a fer-ho sol, essent capaç de la presa de decisions per a
              la satisfactòria resolució de les tasques que m'han estat assignades.
            </p>
            <p>
              La meva vocació de servei i de contínua millora em porta a invertir temps (sempre que en tinc ocasió) per a, estudiar noves
              tecnologies, investigar i jugar amb noves tendències del sector. És a dir, miro d'estar actualitzat tant en l'àmbit vocacional i
              personal, com en l'àmbit productiu, <b>no vull quedar-me fora del mercat</b>.
            </p>
            <p>
              A banda d'una passió innata per al desenvolupament d'aplicatius, també m'agrada gaudir de les meves persones estimades, passant
              temps amb elles i compartint moments irrepetibles, per la qual cosa, considero de gran importància el fet de poder mantenir un equilibri
              entre el treball i <b>la vida personal</b>.
            </p>

            <h4>PROS i CONTRES</h4>

            <h5 className={"text-success"}>PROS</h5>
            <ul>
              <li>Disciplinat & responsable</li>
              <li>Treballador molt proactiu, lluitador</li>
              <li>Facilitat per a treballar en equip</li>
              <li>Solidari & col·laboratiu</li>
              <li>Ment inquieta</li>
              <li>Gran sentit de l'humor</li>
              <li>Esperit de superació</li>
            </ul>

            <h5 className={"text-danger"}>CONTRES</h5>
            <ul>
              <li>Intransigent amb la desídia</li>
              <li>Excessivament perfeccionista (res mai està prou bé)</li>
              <li>De vegades, m'obsessiono amb algun tema i em costa passar pàgina</li>
            </ul>
          </>
          :
          <>
            <p>
              Las personas que me conocen, me consideran alguien muy disciplinado y exigente con el trabajo, así como con los
              resultados de este. Perfeccionista por naturaleza y siempre en disposición de ayudar allá donde sea necesario echar una mano.
              <br />
              Me gusta mucho trabajar en equipo, no obstante, no tengo inconveniente en hacerlo solo, siendo capaz de tomar decisiones para la
              satisfactoria resolución de las tareas que me han sido asignadas.
            </p>
            <p>
              Mi vocación de servicio y de continua mejora me lleva a invertir tiempo (siempre que tengo ocasión) para, estudiar nuevas
              tecnologías, investigar y jugar con nuevas tendencias del sector. Es decir, intento estar actualizado tanto a nivel vocacional y
              personal, como a nivel productivo, <b>no quiero quedarme fuera del mercado</b>.
            </p>
            <p>
              Aparte de una pasión innata por el desarrollo de aplicaciones, también me gusta disfrutar de mis personas amadas, pasando
              tiempo con ellas y compartiendo momentos irrepetibles, por lo que, le doy una gran importancia al hecho de poder mantener un equilibrio entre
              el trabajo y la <b>vida personal</b>.
            </p>

            <h4>PROS y CONTRAS</h4>

            <h5 className={"text-success"}>PROS</h5>
            <ul>
              <li>Disciplinado & responsable</li>
              <li>Trabajador muy proactivo, luchador</li>
              <li>Facilidad para trabajar en equipo</li>
              <li>Solidario & colaborativo</li>
              <li>Mente inquieta</li>
              <li>Gran sentido del humor</li>
              <li>Espíritu de superación</li>
            </ul>

            <h5 className={"text-danger"}>CONTRAS</h5>
            <ul>
              <li>Intransigente con la desidia</li>
              <li>Excesivamente perfeccionista</li>
              <li>En ocasiones, me obsesiono demasiado con algún tema y me cuesta pasar página</li>
            </ul>
          </>
      }
    </>
  )
}

export default AboutMe
