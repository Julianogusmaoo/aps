let dados = [
    {
        titulo : "Carteira de Serviços da Atenção Primária à Saúde (CaSAPS)",
        descricao : "A Carteira de Serviços da Atenção Primária à Saúde (CaSAPS) é um documento fundamental que lista e organiza os serviços oferecidos pelas equipes de Atenção Primária no Brasil.",
        link : "https://www.gov.br/saude/pt-br/composicao/saps/saiba-mais-sobre-a-aps#:~:text=A%20Aten%C3%A7%C3%A3o%20Prim%C3%A1ria%20%C3%A0%20Sa%C3%BAde,manuten%C3%A7%C3%A3o%20da%20sa%C3%BAde%20com%20o",
        tags : "CaSAPS, Atenção Primária, Saúde, Serviços"
    },
    {
        titulo : "e-Gestor AB",
        descricao : "O e-Gestor AB é um sistema de informação que auxilia na gestão das Unidades Básicas de Saúde, facilitando o planejamento, monitoramento e avaliação das ações de saúde.",
        link : "https://egestoraps.saude.gov.br/",
        tags : "e-Gestor AB, Gestão em Saúde, UBS, Atenção Primária"
    },
    {
        titulo : "PROADESS - Metodologia de Avaliação do Desempenho do Sistema de Saúde",
        descricao : "O PROADESS é um programa de apoio ao desenvolvimento institucional do Sistema Único de Saúde (SUS), oferecendo suporte técnico e qualificação para gestores e profissionais de saúde.",
        link : "https://www.proadess.icict.fiocruz.br/",
        tags : "PROADESS, Avaliação, SUS, Gestão em Saúde"
    },
    {
        titulo: "CONASS",
        descricao: "Conselho Nacional de Secretários de Saúde, com publicações e informações sobre políticas de saúde e APS.",
        link: "https://www.conass.org.br/",
        tags : "CONASS, Políticas de Saúde, Atenção Primária, Gestão em Saúde"
      },
      {
        titulo: "Biblioteca Virtual em Saúde - APS",
        descricao: "Acervo de documentos, artigos e recursos sobre Atenção Primária à Saúde.",
        link: "https://aps.bvsalud.org/",
        tags : "Biblioteca Virtual em Saúde, APS, Recursos em Saúde"
      },
      {
        titulo: "OPAS Brasil",
        descricao: "Organização Pan-Americana da Saúde no Brasil, com informações e recursos sobre saúde, incluindo APS.",
        link: "https://www.paho.org/pt/brasil",
        tags : "OPAS, Saúde, Atenção Primária, Américas"
      },
      {
        titulo: "Portal da Saúde",
        descricao: "Portal do Ministério da Saúde com informações sobre saúde, incluindo APS.",
        link: "https://www.saude.gov.br/",
        tags : "Ministério da Saúde, Saúde, APS, Brasil"
      },
      {
        titulo: "UNASUS",
        descricao: "Universidade Aberta do SUS, com cursos e materiais educativos para profissionais de saúde, incluindo APS.",
        link: "https://www.unasus.gov.br/",
        tags : "UNASUS, Educação em Saúde, SUS, APS"
      },
      {
        titulo: "CIAP 2",
        descricao: "Classificação Internacional de Atenção Primária, segunda edição, ferramenta para codificação de motivos de consulta e outros dados em APS.",
        link: "https://ciap2.org/",
        tags : "CIAP 2, Classificação, Atenção Primária, Saúde"

      },
      {
        titulo: "e-SUS APS",
        descricao: "O e-SUS Atenção Primária (e-SUS APS) é uma estratégia para reestruturar as informações da Atenção Primária em nível nacional. Esta ação está alinhada com a proposta mais geral de reestruturação dos Sistemas de Informação em Saúde do Ministério da Saúde, entendendo que a qualificação da gestão da informação é fundamental para ampliar a qualidade no atendimento à população.",
        link: "https://sisaps.saude.gov.br/esus/", 
        tags : "e-SUS APS, Sistemas de Informação, Atenção Primária, Saúde"
      },
      {
        titulo: "Suporte e-SUS APS",
        descricao: "Site de suporte técnico aos usuários do sistema e-SUS APS.",
        link: "https://esusaps.freshdesk.com/support/login",
        tags : "Suporte, e-SUS APS, Atenção Primária, Saúde"
      },
      {
        titulo: "Monitoramento e Avaliação para Ações de Planejamento e Gestão - DEMAS",
        descricao: "Livro sobre monitoramento e avaliação em saúde, com foco na gestão da APS.",
        link: "https://25anos.ead.fiocruz.br/materiaisead/outros-materiais/monitoramento-e-avaliacao-para-acoes-de-planejamento-e-gestao-demas/percurso/index.html",
        tags : "Monitoramento, Avaliação, Gestão, Atenção Primária, Saúde"
      },
      {
        titulo: "DAB - Departamento de Atenção Básica",
        descricao: "Site do Departamento de Atenção Básica do Ministério da Saúde, com informações e recursos sobre APS.",
        link: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/atencao-basica/dab", 
        tags : "DAB, Atenção Básica, Ministério da Saúde, Saúde"
      },
      {
        titulo: "CONASEMS",
        descricao: "Conselho Nacional de Secretarias Municipais de Saúde, com informações e recursos sobre gestão municipal da saúde, incluindo APS.",
        link: "https://www.conasems.org.br/",
        tags : "CONASEMS, Gestão Municipal, Saúde, Atenção Primária"
      },
      {
        titulo: "Polítia Nacional de Atenção Básica - 2017",
        descricao: "PORTARIA Nº 2.436, DE 21 DE SETEMBRO DE 2017 -  Aprova a Política Nacional de Atenção Básica, estabelecendo a revisão de diretrizes para a organização da Atenção Básica, no âmbito do Sistema Único de Saúde (SUS).",
        link: "https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prt2436_22_09_2017.html",
        tags : "Leis, Politica Nacional, PNAB, Lei"
      },
      {
        titulo: "Painéis de Informações do Fundo Nacional de Saúde",
        descricao: "Informações técnicas sobre cada repasse realizado aos Fundos Municipais e Estaduais de Saúde, desde o ano 2000 até a presente data, como bloco de financiamento, datas de repasse, ações e componentes de saúde financiados.",
        link: "https://infoms.saude.gov.br/extensions/CGIN_InvestsusPaineis/CGIN_InvestsusPaineis.html",
        tags : "FNS, Fundo Nacional de Saúde, Fundo, Financiamento"
      },
      {
        titulo: "Cadastro Nacional de Estabelecimentos de Saúde - CNES",
        descricao: "O Cadastro Nacional de Estabelecimentos de Saúde (CNES) é uma base de dados que registra informações sobre todos os estabelecimentos de saúde do Brasil, sejam públicos, privados ou conveniados.",
        link: "https://cnes.datasus.gov.br/",
        tags : "CNES, unidades, posto, postos de saúde, unidade de sáude"
      },
      {
        titulo: "SIGTAP - Sistema de Gerenciamento da Tabela de Procedimentos, Medicamentos e OPM do SUS",
        descricao: "O SIGTAP é um ambiente virtual que permite o acesso à mesas de procedimentos, medicamentos, órteses / próteses e materiais especiais (OPM) do SUS. É isso que possibilita a auditoria do SUS. Descubra quanto o SUS paga por cada procedimento.",
        link: "http://sigtap.datasus.gov.br/tabela-unificada/app/sec/inicio.jsp",
        tags : "paga, preço, tabela SUS, "
      }
];