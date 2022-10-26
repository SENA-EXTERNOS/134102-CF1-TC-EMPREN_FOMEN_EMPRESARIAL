<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/img-intro.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p Estimado aprendiz, en este componente formativo se abordarán de manera didáctica, los conceptos básicos de emprendedor, fundamentos para la creación de un proyecto productivo, análisis e innovación de mercado, creación de marca, modelo de negocios, entre otros temas que son muy importantes a la hora de emprender. 

      p.mb-5 Para conocer más sobre el componente que desarrollaremos, lo invitamos a ver el siguiente video:
  
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
