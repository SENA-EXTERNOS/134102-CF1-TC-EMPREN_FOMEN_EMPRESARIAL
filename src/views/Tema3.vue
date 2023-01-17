<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Modelo de negocio


    .row.justify-content-center.align-items-center.mb-3
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p Un modelo de negocio es un instrumento que le permite a los emprendedores conocer todo lo que se requiere para incursionar un producto en el mercado; todo esto, a partir de unos estudios bien estructurados que le ayudarán a tomar decisiones para concretar si continúa con la idea o la abandona.
    p.mb-5 Principales estudios para un modelo de negocio.

    .row.justify-content-between.align-items-between.mb-5
      .col-lg-4
        figure
          img.img-81(src='@/assets/curso/temas/tema3/img-2.png')  

      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2 t-pur")
          .row(titulo="La planeación estratégica")
              p.pp-l Es un conjunto integrado de tareas que permite al emprendedor, establecer el presente (misión) y el futuro (visión); realizar un diagnóstico de su situación actual, identificar los desafíos a los cuales se tiene que enfrentar y las soluciones estratégicas que se deben implementar para dar cumplimiento a los objetivos trazados.
          .row(titulo="Análisis de productos o servicios que satisfagan las necesidades de los clientes ")
              p.pp-l Identificar las necesidades de los clientes, es una función vital que debe realizar el emprendedor. Para lograrlo, debe llevar a cabo un análisis de los productos que tiene posesionados en el mercado, con el fin de reforzarlos o cambiarlos, según las necesidades de sus consumidores. Para esto, debe crear e innovar productos y/o servicios que satisfagan estas necesidades, convirtiéndolos en más competitivos y con mayor oportunidad de crecimiento en el mercado.          
          .row(titulo="Concepto de servicio al cliente")
              p.pp-l Es la manera o forma como se interrelaciona en una empresa con el cliente, para brindarle toda la información requerida de acuerdo con sus necesidades; este servicio debe ser rápido, oportuno y eficiente, para lograr su permanencia y la fidelidad con el cliente.

          .row(titulo="Concepto de logística y distribución")
              p.pp-l Es la manera como se organiza la distribución y entrega de productos, de forma metódica, al consumidor final o destino indicado, en el tiempo, en la forma y con las condiciones deseadas, y tal cual fueron adquiridos por el cliente. Es tarea del emprendedor que dentro del proceso de distribución, diseñe la logística más apropiada para cumplir con los compromisos de entrega de los productos adquiridos por los clientes, generando credibilidad y confianza.   
          .row(titulo="Estructura de costos")
              p.pp-l La estructura de costos es la forma como se planifican y ordenan los valores dentro de una organización, con el propósito de realizar una adecuada y acertada toma de decisiones. <br><br> Los costos, como herramienta, facilitan al emprendedor el manejo administrativo, que es fundamental en la planeación y control del proceso operativo. Asimismo, son muy importantes porque su principal objetivo es el de maximizar la riqueza.
    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Cómo identificar la inversión y los nuevos socios 
               
    p.mb-5 Por otro lado, al momento de establecer la financiación de un modelo de negocio, hay un aspecto clave para tener en cuenta y es la posibilidad de buscar inversión o establecer sociedades. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4.fnd-6.mb-5
          p Para que los emprendedores identifiquen posibles inversionistas en el emprendimiento que se está ideando, es necesario que la propuesta que ofrece sea atractiva, realizable y rentable.

        .cajon.color-acento-contenido.p-4.mb-3.fnd-8
          p Un inversionista, es la persona natural o jurídica que destina la totalidad de su patrimonio o una parte del mismo, en un proyecto o bolsa, con el fin de obtener rentabilidad.

    p.mb-5 Observe el siguiente video para saber cómo identificar posibles inversionistas:

    .row.mb-5
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black El punto de equilibrio

    p.mb-5 Es una herramienta financiera que permite saber en qué momento de las ventas la empresa empieza a tener ganancia. Para determinar el punto de equilibrio se deben tener en cuenta los costos fijos y los variables; en otras palabras, es cuando los ingresos y los egresos están al mismo nivel, por lo tanto, no hay ganancia, ni pérdida.  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10      

        .tarjeta.color-primario.p-4.mb-5.fnd-9
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-69(src="@/assets/curso/temas/tema2/img-18.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 El punto de equilibrio
                  p.text-small Para ampliar sobre el tema, lo invitamos a ver el video El punto de equilibrio, el cual se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=5ZpQ0j5qb4k')" target="_blank")
                    span Ver video
                    i.fas.fa-play

        .cajon.color-acento-contenido.p-4.mb-3.fnd-8
          .row.justify-content-between.align-items-center.px-4
            .col-lg-2.mb-3   
              figure
                img.img-93(src='@/assets/curso/temas/tema3/img-3.svg')  
            .col-lg-10.mb-3
              p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados.
              








</template>

<script>
export default {
  name: 'Tema3',
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
