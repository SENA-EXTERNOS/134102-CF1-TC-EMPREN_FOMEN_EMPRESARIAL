<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 El emprendimiento

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-e.p-4.mb-4
          .bloque-texto-e__texto.mb-3
            i.fas.fa-quote-left
            h2.text-regular El emprendimiento es una manera de pensar y actuar orientada hacia la creación de riqueza. Es una forma de pensar, razonar y actuar centrada en oportunidades, planteada con visión global y llevada a cabo mediante un liderazgo equilibrado y la gestión de un riesgo calculado, su resultado es la creación de valor que beneficia a la empresa, la economía y la sociedad
            i.fas.fa-quote-right
          .row.align-items-end
            .col
              .bloque-texto-e__autor 
                .h3.mb-0 Ley 1014 de 2006. De fomento a la cultura del emprendimiento. 26 de enero de 2006. D.O. No. 46164


        .row.justify-content-center.align-items-center.mb-3
          .col-lg-10
            .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-1.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                p La palabra emprendimiento proviene del francés entrepreneur (pionero), y se refiere a la capacidad de una persona para hacer un esfuerzo adicional por alcanzar una meta u objetivo, siendo utilizada también para referirse a la persona que inicia una nueva empresa o proyecto, término que después fue aplicado a empresarios que fueron innovadores o agregaban valor a un producto, servicio o proceso ya existente. 


    p.mb-5 Es importante ahondar acerca del emprendimiento y qué abarca, es así como a continuación se explica su algunos conceptos y sus características:

    .row.justify-content-center.align-items-center.mb-3
      .tarjeta.tarjeta--azul.p-4.mb-5.fnd-1.p-5
          SlyderA(tipo="b")
            .row
              .col-md-6.mb-4.mb-md-0.p-5
                p “La verdad es que ser emprendedor no es un puesto de trabajo. Es la actitud mental de la gente que quiere alterar el futuro” (Kawasaky, G., 2007, p.2).
            
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-2.png')
            .row
              .col-md-6.mb-4.mb-md-0.p-5
                p “Es una persona con capacidad de innovar; entendida esta como la capacidad de generar bienes y servicios de una forma creativa, metódica, ética, responsable y efectiva” (El congreso de Colombia, 2006, p.1).
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-3.png')


    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Características de un emprendedor

    p Son varios los autores que definen las características que debe tener un emprendedor. 

    p Las características que debe tener un emprendedor son indispensables para garantizar los procesos exitosos que se buscan (Abambari, M. J., 2016, p.8):

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
      TabsA.color-acento-contenido.mb-5
        .tarjeta.color-acento-botones.fnd-2.p-4(titulo="Pasión")
          .row
            .col-xl-6.mb-4
              p Todo emprendedor debe y tiene que tener entusiasmo por lo que le gusta y lo que quiere hacer; debe ser capaz de generar, consigo mismo, un empoderamiento por alcanzar sus objetivos y metas trazadas. Esta actitud que tiene frente a la pasión, lo hace ser una persona capaz de superar todos los obstáculos que se le puedan presentar durante el desarrollo de un proyecto.
            .col-xl-6
              figure
                img(src='@/assets/curso/temas/tema1/img-4.png')              
        .tarjeta.color-acento-botones.fnd-2.p-4(titulo="Visión")
          .row
            .col-xl-6.mb-4
              p El trabajo que tiene el emprendedor es el de definir claramente a dónde quiere llegar y cómo lo va a lograr; para esto debe establecer estrategias que le permitan alcanzar los resultados esperados. Abambari, M. (2016) citando a Syrett (2010), indica que para alcanzar el éxito cada emprendedor necesita un plan y la visualización de los objetivos finales, Sin embargo, la visión sin ejecución no significa nada (p. 8).

            .col-xl-6
              figure
                img(src='@/assets/curso/temas/tema1/img-5.png')     
        .tarjeta.color-acento-botones.fnd-2.p-4(titulo="Capacidad de aprendizaje")
          .row
            .col-xl-6.mb-4
              p El emprendedor debe proceder siempre con una buena actitud para escuchar y aprender todos los días, de la nueva información que está emanando, lo mismo que aprender de las personas expertas en determinados temas, para aprovechar todas las oportunidades que se le puedan presentar.

            .col-xl-6
              figure
                img(src='@/assets/curso/temas/tema1/img-6.png')              
        .tarjeta.color-acento-botones.fnd-2.p-4(titulo="Determinación y coraje")
          .row
            .col-xl-6.mb-4
              p Un buen emprendedor, es el que es capaz de anticiparse a las dificultades que se presenten en el proyecto, así como también poseer el coraje para aceptar y enfrentar los problemas, tomando decisiones asertivas para dar soluciones.
 
            .col-xl-6
              figure
                img(src='@/assets/curso/temas/tema1/img-7.png')     
        .tarjeta.color-acento-botones.fnd-2.p-4(titulo="Creatividad e innovación")
          .row
            .col-xl-6.mb-4
              p Esta característica del emprendedor es muy importante, porque es con esta propiedad que demuestra su capacidad creativa e innovadora de acuerdo con la visión que tiene del negocio, siendo competitivo en el mercado y aprovechando todas las oportunidades de su entorno y lo que el mercado necesita, implementando nueva tecnología y ofreciendo un valor agregado a sus productos con un toque diferenciador.

            .col-xl-6
              figure
                img(src='@/assets/curso/temas/tema1/img-8.png')              
        .tarjeta.color-acento-botones.fnd-2.p-4(titulo="Sentido de oportunidad")
          .row
            .col-xl-6.mb-4
              p El emprendedor exitoso es aquel que, en su entorno, identifica problemas, necesidades, oportunidades del mercado y busca alternativas creativas e innovadoras, demostrando todas sus capacidades y habilidades para ofrecer un producto que satisfaga una necesidad, un problema, y/o una oportunidad real existente.

              p En este punto, el emprendedor debe tener la capacidad de insistir en que su idea se materialice ante los posibles inconvenientes que se le puedan presentar y buscar la manera para que los resultados esperados se logren. 

              p Tener en cuenta la frase de Abambari, M. (s.f.), que dice: “la persistencia debe ir de la mano con la sensatez” (p.8).

            .col-xl-6
              figure
                img(src='@/assets/curso/temas/tema1/img-9.png')     
        .tarjeta.color-acento-botones.fnd-2.p-4(titulo="Trabajo en equipo")
          .row
            .col-xl-6.mb-4
              p El trabajo en equipo es fundamental para que se logren los objetivos formulados en el emprendimiento. Es importante, que el emprendedor se convierta en un líder capaz de guiar, orientar y llegar a un consenso con su grupo de trabajo cuando se presenten problemas y, de esta manera, empoderarse de sus distintas actividades para que todo funcione en armonía.

            .col-xl-6
              figure
                img(src='@/assets/curso/temas/tema1/img-10.png')              
        .tarjeta.color-acento-botones.fnd-2.p-4(titulo="Autoestima y confianza")
          .row
            .col-xl-6.mb-4
              p El emprendedor debe conservar una gran confianza en sí mismo demostrando, con entereza, sus capacidades y habilidades, para que lo que proyecte, se realice.
 
            .col-xl-6
              figure
                img(src='@/assets/curso/temas/tema1/img-11.png')     
        .tarjeta.color-acento-botones.fnd-2.p-4(titulo="Asertividad ")
          .row
            .col-xl-6.mb-4
              p El emprendedor asertivo debe tener la capacidad de expresar sus ideas, manteniendo buenas habilidades comunicativas con los demás y sin perjudicar a nadie, con el fin de lograr los objetivos propuestos.


            .col-xl-6
              figure
                img(src='@/assets/curso/temas/tema1/img-12.png')              
        .tarjeta.color-acento-botones.fnd-2.p-4(titulo="Planificación estratégica a largo plazo")
          .row
            .col-xl-6.mb-4
              p Un emprendedor no debe ser reactivo; debe ser previsivo, no solo para los cambios del mercado y el entorno, sino anticiparse al futuro, tomando las decisiones apropiadas y oportunas; de la anticipación y la oportunidad, dependerán, en buena medida, el éxito y la supervivencia. 
 
            .col-xl-6
              figure
                img(src='@/assets/curso/temas/tema1/img-13.png')     


    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Comportamiento emprendedor

    p.mb-5 El comportamiento emprendedor se refiere a la capacidad de identificar fácilmente una oportunidad de negocio que posiblemente, otros no logran ver. Es aprovechar cada oportunidad que el entorno le ofrece, para satisfacer una necesidad o solucionar un problema.

    p.mb-5 El comportamiento del emprendedor debe ser diferente, autentico y cautivante, es así como se presentan, algunos planteamientos relacionados con su comportamiento:

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta--azul.p-4.mb-5.fnd-1.p-5
          SlyderA(tipo="b")
            .row
              .col-md-6.mb-4.mb-md-0.p-5
                p Los primeros científicos sociales que estudiaron el emprendimiento, observaron sus enormes beneficios a través de las empresas que eran creadas por personas con cualidades aparentemente especiales. Sin embargo, a medida que conocían más sobre el emprendimiento, los científicos dejaron de lado las habilidades empresariales de las personas que estaban detrás de esas ideas de negocio, y se concentraron en estudiar más de cerca las motivaciones que impulsaron, en algún momento, a esas personas a transformar en realidad sus ideas. 

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-14.png')
            .row
              .col-md-6.mb-4.mb-md-0.p-5
                p Luego de observar varios casos de fundadores de empresas, McClelland llegó a la conclusión de que la motivación que orientó las acciones de esos empresarios, nació de una enorme necesidad que estos tuvieron para lograr aquello que se habían propuesto. Y esa necesidad, definió la manera como esos empresarios se condujeron ante las diversas situaciones que fueron presentadas en su camino. <br><br>Esa manera de actuar, es lo que se llamó comportamiento emprendedor (Gutiérrez, Martínez, Gómez, García & Caycedo, 2020, p.20).
 
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-15.png')

      p.mb-5 Sobre el comportamiento emprendedor, es importante mencionar también aquellas características que más se destacan en las personas emprendedoras.

      p.mb-5 A continuación, se puede observar, claramente, algunas de esas características emprendedoras personales (C.E.P):

      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          figure
            img(src='@/assets/curso/temas/tema1/img-16-.png')  
            figcaption.align-leyenda Nota. Tomada y adaptada de Gutiérrez, A. N., Martínez, L.F., Gómez, M. P., García, G.A., Caycedo, M. (2020). 


    p.mb-3 Las características, juegan un papel importante en el emprendedor porque con ellas, la gestión que realiza con sus colaboradores se refleja en alcanzar los objetivos trazados. 

    LineaTiempoD.color-acento-contenido.mb-5
        .row.align-items-center.py-2(numero="1" titulo="Planificar sistemáticamente")
          .col-md-2.pt-0
            figure
              img(src='@/assets/curso/temas/tema1/img-17.svg')
          
          .col-md-10.mb-4.mb-md-0
            p.text-small El emprendedor debe planificar continuamente sus tareas de manera organizada y sistemática, realizando seguimiento y control de los procesos que se van a desarrollar en la organización, con el fin de realizar los ajustes necesarios para el cumplimiento de las metas y objetivos planteados.
              br 
              p.text-small La planificación es necesaria, porque de ella depende la estimación de los recursos humanos, financieros y operativos, que se requieren hoy y en el futuro, para determinar indicadores que puedan medir el nivel de cumplimiento de los objetivos y metas propuestas y, si es necesario, hacer los ajuste para que estos se cumplan de manera eficiente.

          
        .row(numero="2" titulo="Fijar metas")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema1/img-18.svg')
          
          .col-md-10.mb-4.mb-md-0.py-3
            p.text-small Es importante que antes de iniciar cualquier proceso el emprendedor debe fijar metas, porque con ello define qué es lo que quiere alcanzar a corto, mediano y largo plazo. Esta característica es un insumo para que pueda estimar qué recursos requiere cuando planifique su idea de negocio.

          
        
        .row(numero="3" titulo="Estas características se pueden agrupar, en una palabra:<b> MAREAR.</b>")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema1/img-19.svg')
          
          .col-md-10.mb-4.mb-md-0
 
            ul.lista-ul--color.py-3.pb-0
              li 
                i.fas.fa-angle-right
                p.mb-0 
                  b Medibles: 
                  | definen elementos medibles que permitan evaluar el cumplimiento de las metas (tiempos, cantidades, distancias, etc.).
              li 
                i.fas.fa-angle-right
                p.mb-0 
                  b Alcanzables: 
                  | analizan el contexto (lugar) para cumplir las metas.
              li 
                i.fas.fa-angle-right
                p.mb-0 
                  b Realista:
                  | analiza los recursos que se requieren para cumplir las metas (recursos económicos, productivos, humanos, tecnológicos).
              li 
                i.fas.fa-angle-right
                p.mb-0 
                  b Específicas:
                  | se deben escribir las metas de manera clara, para evitar que otras personas las entiendan de forma equivocada.
              li 
                i.fas.fa-angle-right
                p.mb-0 
                  b Acotadas:
                  | determinan el tiempo necesario para cumplir las metas, de manera que se pueda verificar su cumplimiento.
              li 
                i.fas.fa-angle-right
                p.mb-0 
                  b Realista:
                  | analiza los recursos que se requieren para cumplir las metas (recursos económicos, productivos, humanos, tecnológicos).
            p (Gutiérrez et al., 2020, p.24)
          
        .row(numero="4" titulo="Crear redes de apoyo")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema1/img-20.svg')
          
          .col-md-10.mb-4.mb-md-0
            p.text-small El emprendedor por sí solo no logra los objetivos; debe realizarse un autodiagnóstico para identificar cuáles son las fortalezas y debilidades, para buscar ayuda o apoyo de personas que le puedan fortalecer esa debilidad y que, conjuntamente, uniendo esfuerzos, logren los objetivos y las metas propuestas.
            p.text-small Crear y conformar redes de apoyo es una buena estrategia que el emprendedor debe realizar, con el fin de establecer buenas relaciones y conformar un equipo que le permita aprender nuevas ideas y generar cambios en su emprendimiento.
          
        .row(numero="5" titulo="Buscar oportunidades y tener iniciativa")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema1/img-21.svg')
          
          .col-md-10.mb-4.mb-md-0
            p.text-small Esta característica, como la demás, es muy importante porque el emprendedor debe salir de su zona de confort y buscar nuevas oportunidades que el entorno le ofrece, generando ideas creativas e innovadoras que impacten el mercado al cual está dirigido y satisfaciendo las necesidades existentes.

          
        .row(numero="6" titulo="Exige eficiencia y calidad")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema1/img-22.svg')
          
          .col-md-10.mb-4.mb-md-0
            p.text-small Todo emprendedor debe realizar sus actividades con eficiencia y calidad, optimizando los recursos, para que la productividad proyectada se vea reflejada en cifras y beneficios de crecimiento en el mercado y en la estructura.

          
        .row(numero="7" titulo="Ser persistente")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema1/img-23.svg')
          
          .col-md-10.mb-4.mb-md-0
            p.text-small Cuando un emprendedor es persistente, puede alcanzar el éxito prontamente, porque es una persona que no le tiene miedo a caer y levantarse hasta que logra su objetivo final. No tiene miedo de los riesgos, los asume y si fracasa inicia nuevamente hasta lograr lo que quiere.

          
        .row(numero="8" titulo="Buscar información")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema1/img-24.svg')
          
          .col-md-10.mb-4.mb-md-0
            p.text-small La información es un elemento importante en la cual debe apoyarse el emprendedor, para tomar decisiones documentadas y estructuradas, para mitigar los riesgos que se puedan presentar en el proyecto. Cuando el emprendedor no se informa, no tiene el sustento documental que le permita tomar decisiones acertadas y esto lo lleva al fracaso.
          
        .row(numero="9" titulo="Cumplir compromisos")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema1/img-25.svg')
          
          .col-md-10.mb-4.mb-md-0
            p.text-small Una característica que debe demostrar a las personas con las cuales tiene relaciones comerciales y personales, es que es una persona seria, responsable y, lo más importante, que cumple con los compromisos que adquiere; esto genera confianza y seguridad de sí mismo y a los demás les genera respeto.
          
        .row(numero="10" titulo="Correr riesgos moderados")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema1/img-26.svg')
          
          .col-md-10.mb-4.mb-md-0
            p.text-small Una persona exitosa es aquella que, en un momento de su vida, asumió y se dio cuenta de los riesgos que se pueden presentar durante el emprendimiento, pero fue capaz de superar la dificultad tomando una decisión acertada y demostrando dos características importantes: la autoconfianza y la perseverancia para alcanzar sus metas.

          



    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 La responsabilidad emprendedora

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4.fnd-4
          p El comportamiento emprendedor es tener la capacidad de identificar una necesidad en el entorno, generar y explorar la creatividad en ideas exitosas y convertir esas ideas en una oportunidad de negocio, que satisfaga la necesidad encontrada y que esta sea rentable y se mantenga en el tiempo.
    p.mb-5 Como referente científico en el estudio del comportamiento emprendedor se da la teoría de las necesidades adquiridas, citada por Padovan, I. (2020) en Teorías de la motivación. Aplicación práctica, quien, citando a McClelland y a sus socios, explica que “las personas poseen tres necesidades que operan a nivel inconsciente y son adquiridas a lo largo de la vida mediante el aprendizaje. Además, intervienen en simultáneo y generalmente se posee una tendencia hacia una por sobre las demás. Estas necesidades son: necesidad de logro o realización, necesidad de poder y necesidad de afiliación o social” (p.17).


    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Los clientes")
        .row
          .col-md-6.mb-4.mb-md-0
            p El cliente es la persona más importante en una empresa, tanto el interno como el externo; es al cliente, hacia donde van enfocados todos los esfuerzos, creando e innovando nuevos productos. Por eso es importante diseñar estrategias para que el producto o servicio que se ofrece, cumpla con los requerimientos solicitados, buscando satisfacer las necesidades de los compradores.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-27.png')
      .py-3.py-md-4(titulo="Los empleados")
        .row
          .col-md-6.mb-4.mb-md-0
            p Para ellos debe crearse un ambiente laboral que cumpla con las expectativas deseadas, dándoles empoderamiento para generar confianza y seguridad, así como también, bienestar y participación en la toma de decisiones de la organización, beneficiando a la empresa con una mayor productividad y rentabilidad económica.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-28.png')
      .py-3.py-md-4(titulo="La sociedad")
        .row
          .col-md-6.mb-4.mb-md-0
            p La responsabilidad social que tienen los emprendedores frente a la sociedad, es la de satisfacer las necesidades individuales y colectivas, creando e innovando productos o servicios que cumplan las expectativas esperadas. 
            p Como contraprestación, el emprendedor tiene el compromiso de generar fuentes de empleo que le permitan tener ingresos, mejorando la calidad de vida de la sociedad. 
            p Esta responsabilidad no es solamente con la sociedad; el Estado tiene un compromiso de legalidad, para cumplir con todas las leyes y normas que se deben tener en cuenta en la formalización de la empresa constituida por el emprendimiento.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-29.png')
      .py-3.py-md-4(titulo="El medio ambiente ")
        .row
          .col-md-6.mb-4.mb-md-0
            p Este tema es muy importante porque el emprendedor lo debe examinar cuando está creando su emprendimiento, elaborando productos que sean “amigables” con el medio ambiente y evitando aumentar el calentamiento global que afecta al planeta. Esto lo hace implementando campañas que apunten al reciclaje y a reutilizar los componentes sobrantes de su proceso productivo.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-30.png')
      .py-3.py-md-4(titulo="Consigo mismo")
        .row
          .col-md-6.mb-4.mb-md-0
            p Para el emprendedor, es una satisfacción muy grande, saber que lo que nació de su idea, satisface una necesidad en la sociedad; todo esto, como resultado de su comportamiento emprendedor y de las habilidades y destrezas que posicionó en el producto creado.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-31.png')
    br

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-32.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Se debe tener en cuenta que, aparte de ciertas características, un emprendedor debe contar con un aspecto fundamental: la innovación social. Esta se define como todas aquellas ideas nuevas sobre productos, servicios y modelos que solucionan un problema social o cubren una necesidad, de forma más eficaz y eficiente que las alternativas actuales y al mismo tiempo establecen nuevas relaciones sociales y sinergias, según lo expresado por Carazo (2018).

    ul.lista-ul--color.mor.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Proyectos productivos y cambio sistémico

    p Existen otros conceptos fundamentales al momento de hablar de emprendimiento: proyecto productivo y cambio sistémico.

    p.mb-5 Las definiciones de estos dos conceptos se desarrollan a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta--azul.p-4.mb-5.fnd-1.p-5
          SlyderA(tipo="b")
            .row
              .col-md-6.mb-4.mb-md-0.p-5
                p <b>Un proyecto productivo</b> es un conjunto de actividades y recursos que debe determinar un emprendedor, con el fin de crear y producir un bien o servicio, para satisfacer necesidades, solucionar un problema o beneficiarse de una oportunidad del entorno o del mercado.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-33.png')

            .row
              .col-md-6.mb-4.mb-md-0.p-5
                p.mb0 
                  b El cambio sistémico 
                  | influye en el emprendimiento, porque permite diseñar y comercializar productos y servicios amigables en lo social, económico y ambiental, contribuyendo significativamente para mejorar la calidad de vida de las personas y del entorno.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-34.png')

            .row
              .col-md-6.mb-4.mb-md-0.p-5
                p Las personas que han incursionado en el emprendimiento, tienen la gran responsabilidad de evaluar en qué condiciones se encuentra el sistema en el que están incursionando; identificar qué problemas se están presentando a nivel social, para buscar una alternativa con su emprendimiento y que le permita crear un nuevo equilibrio y cambiar lo anticuado, buscando satisfacer una necesidad.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-35.png')








</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
