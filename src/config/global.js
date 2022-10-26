export default {
  global: {
    componenteFormativo:
      'Comportamiento emprendedor, innovación y modelo de negocio',
    descripcionCurso:
      'Este componente formativo tiene como objetivo identificar los elementos clave que identifican el comportamiento de un emprendedor, teniendo en cuenta los retos personales y productivos de su entorno, la innovación y las herramientas que le faciliten un modelo de negocio, el cual se proyecte de acuerdo con las necesidades del mercado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal-.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El emprendimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Comportamiento emprendedor',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'La responsabilidad emprendedora',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Vigilancia estratégica e innovación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El emprendimiento',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Abambari, M. J. (s.f.). <em>El emprendimiento y el perfil del emprendedor.</em> ',
      link:
        'https://marioabambari.files.wordpress.com/2015/01/el-emprendimiento-y-el-perfil-del-emprendedor.pdf ',
    },
    {
      referencia: 'Carazo, J.<em> Innovación social.</em> Economipedia.',
      link: 'https://economipedia.com/definiciones/innovacion-social.html',
    },
    {
      referencia:
        'Coca, P., García, A., Santos, D. & Fernández, A. (2010).<em> Guía de vigilancia estratégica. Proyecto Centinela.</em> Fundación PRODINTEC.',
      link:
        'http://www.prodintec.es/attachments/article/270/fichero_13_5034.pdf',
    },
    {
      referencia: 'Concepto Definición. (s.f.). Persistencia. Definición',
      link: 'https://conceptodefinicion.de/persistencia/ ',
    },
    {
      referencia:
        'Gutiérrez, R. N., Martínez, L. F., Gómez, M. P., García, G. A. & Caycedo, M. (2020). <em>Cartilla de comportamiento emprendedor camino al logro.</em>',
      link: 'https://repositorio.sena.edu.co/handle/11404/7061',
    },
    {
      referencia:
        'La Opinión. (2021).<em> Construcción, minería y salud; lo sectores económicos con menos evolución tecnológica en Colombia. </em>La opinión.',
      link:
        'https://www.laopinion.com.co/tecnologia/construccion-mineria-y-salud-sectores-con-menos-evolucion-tecnologica-en-colombia.',
    },
    {
      referencia:
        'Ley 1014 de 2006. De fomento a la cultura del emprendimiento. Enero 26 de 2006. Reglamentada parcialmente por el Decreto 1192 de 2009 y por el Decreto 4463 de 2006.',
    },
    {
      referencia:
        'Luna Martínez, D., Manzano Peña, L. E., Moctezuma Medina, J. N., & Luna Galindo, S. (2020). Intención emprendedora. ',
      link:
        'https://revista.colsan.edu.mx/index.php/COLSAN/article/view/1227/1365',
    },
    {
      referencia:
        'Maldonado, N. & Triana, W. (2019).<em> Metodología de elaboración de proyectos productivos e innovadores.</em> Repositorio.sena.edu.co. ',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/5828/metodologia_elaboracion_proyectos_productivos_innovadores.pdf?sequence=1',
    },
    {
      referencia:
        'Padovan, I. Teorías de la motivación: aplicación práctica. [Trabajo de investigación, licenciatura en administración, Universidad Nacional de Cuyo]. Biblioteca digital/ uncu.',
      link:
        'https://bdigital.uncu.edu.ar/objetos_digitales/15664/teorias-de-la-motivacin.-aplicacin-prctica.pdf',
    },
    {
      referencia:
        'Ramírez, M. (2016). <em>Estado del arte.</em> Universidad de Los Andes.',
      link: 'https://leo.uniandes.edu.co/images/Guias/Estadodelarte.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acotadas',
      significado:
        'tiempo necesario para cumplir las metas, de manera que se pueda verificar.',
    },
    {
      termino: 'Asertividad',
      significado:
        'habilidad social que poseen ciertos individuos de comunicar y defender sus propios derechos e ideas, de manera adecuada y respetando las de los demás.',
    },
    {
      termino: 'Capacidad de aprendizaje',
      significado:
        'habilidad de absorber nueva información fácilmente, y ponerla en práctica de manera efectiva.',
    },
    {
      termino: 'El estado del arte',
      significado:
        'tipo de investigación documental acerca de la forma en que diferentes autores han tratado un tema específico. En otras palabras, es la búsqueda, lectura y análisis de la bibliografía encontrada en relación con un tema que se quiere investigar.',
    },
    {
      termino: 'Emprendedor',
      significado:
        'persona que incursiona en su propio proyecto productivo al identificar una necesidad, problema o oportunidad, en el cual debe asumir todos los riesgos que se puedan presentar.',
    },
    {
      termino: 'Emprendimiento',
      significado:
        'manera de pensar y actuar, orientada hacia la creación de riqueza',
    },
    {
      termino: 'Inteligencia de negocios',
      significado:
        'capacidad que tienen las empresas de adaptarse a las nuevas necesidades tecnológicas de innovación, transformando sus procesos operativos para los nuevos retos de competitividad que exigen el mercado y su entorno.',
    },
    {
      termino: 'Modelo de negocio',
      significado:
        'modelo de negocio es un instrumento que le permite a los emprendedores conocer todo lo que se requiere para incursionar un producto en el mercado; todo esto a partir de unos estudios bien estructurados que le permitirán tomar decisiones para continuar o abandonar la idea.',
    },
    {
      termino: 'Pasión',
      significado:
        'cualidad que nos ayuda a superar las variaciones, los cambios y las distintas barreras que encontramos al llevar adelante un proyecto.',
    },
    {
      termino: 'Persistencia',
      significado:
        'capacidad que tiene una persona para realizar una actividad específica durante el tiempo que sea necesario, hasta lograr cubrir los objetivos o necesidades previstas.',
    },
    {
      termino: 'Punto de equilibrio',
      significado:
        'herramienta financiera que permite saber en qué momento de las ventas, la empresa empieza a tener ganancia.',
    },
    {
      termino: 'Sentido de oportunidad',
      significado:
        'tener la habilidad de tomar decisiones y realizar actividades (o abstenerse) a tiempo y en beneficio. Esta capacidad es determinante para lograr los mejores resultados y conducirse de manera asertiva en diversos aspectos de nuestra vida.',
    },
    {
      termino: 'Trabajo en equipo',
      significado:
        'grupo de personas con habilidades complementarias, comprometidas con un objetivo y un conjunto de metas en común.',
    },
    {
      termino: 'Vigilancia estratégica',
      significado:
        'generación y el tratamiento de ideas aplicables al desarrollo de nuevos productos, servicios o procesos, en la mejora de los ya existentes.',
    },
    {
      termino: 'Visión',
      significado:
        'definir claramente adónde quiere llegar, cómo lo va a lograr; por esto debe establecer estrategias que permitan alcanzar los resultados esperados.',
    },
  ],
  complementario: [
    {
      tema: 'Vigilancia estratégica e innovación',
      referencia:
        'Maldonado, N. P., y Triana, W. A. (2019).<em> Metodología de elaboración de proyectos productivos e innovadores. pdf.</em> Repositorio Sena. https://repositorio.sena.edu.co/bitstream/handle/11404/5828/metodologia_elaboracion_proyectos_productivos_innovadores.pdf?sequence=1&isAllowed=y',
      tipo: 'PDF',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/5828/metodologia_elaboracion_proyectos_productivos_innovadores.pdf?sequence=1&isAllowed=y ',
    },
    {
      tema: 'Vigilancia estratégica e innovación',
      referencia:
        'Emprendetube. (2021).<em> Cómo crear una marca comercial paso a paso</em>(video). YouTube. https://www.youtube.com/watch?v=-1PWX59R_jI ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-1PWX59R_jI',
    },
    {
      tema: 'Modelo de negocio',
      referencia:
        'Gastronomía Rentable. (2016).<em> El punto de equilibrio</em> (video). YouTube. https://www.youtube.com/watch?v=5ZpQ0j5qb4k',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5ZpQ0j5qb4k',
    },
    {
      tema: 'Perfil emprendedor',
      referencia:
        'De la idea a tu negocio. (17 de 12 de 2015).<em> Leccion 4: El perfil de un emprendedor.</em> Obtenido de https://www.youtube.com/watch?v=tKMuV0j9bRA',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5ZpQ0j5qb4k',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
