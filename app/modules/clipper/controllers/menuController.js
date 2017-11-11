angular
    .module('hash.clipper')
    .controller('menuController', [ '$scope','$location', function ($scope, $location) {
     
    $scope.mudarExibicao = function () {
      //definir se exibição das notícias será com ou sem imagem
      
      if(Object.keys($location.search()).length === 0) {
        //temos que adicionar o parametro de lista na pagina
        location.href = window.location.href + '?exibicao=Lista';
      } else if($location.search().exibicao === undefined) {
                location.href = window.location.href + '&exibicao=Lista';
          } else if ($location.search().exibicao === 'ComImagens') {
            //substituir apenas o modo de exibicao
                location.href = window.location.href.replace('ComImagens','Lista');
              } else {
                  location.href = window.location.href.replace('Lista','ComImagens');
                };
    };

    $scope.atualiza = function (tipo, valor) {

      //tratar data primeiro
      if(tipo === 'data') {
          var inicio = document.getElementById("picker1").value;
          var fim = document.getElementById("picker2").value;

          if((inicio === '')||(fim === ''))
            return;

          //nao ha pesquisa
          if(Object.keys($location.search()).length === 0) {
            //temos que adicionar o parametro de lista na pagina
            location.href = window.location.href + '?'+tipo+'='+inicio+'I'+fim;
            location.reload();
          }

          //existe outra pesquisa
          var query = '?'+ window.location.href.split('?')[1];

          //nao existe aquela pesquisa
          if(query.indexOf(tipo) < 1) {
            query = query.concat('&'+tipo+'='+inicio+'I'+fim);
            //temos que adicionar o parametro de lista na pagina
            location.href = window.location.href.split('?')[0] + query;
            location.reload();
          }
          //existe aquela pesquisa
          else {
            query = query.replace($location.search().data,inicio+'I'+fim);
          }

        location.href = window.location.href.split('?')[0] + query;
        location.reload();
      };



      //primeira pesquisa
      if(Object.keys($location.search()).length === 0) {
        //temos que adicionar o parametro de lista na pagina
        location.href = window.location.href + '?'+tipo+'='+valor.toLowerCase();
        location.reload();
      }

      //existe outra pesquisa
      var query = '?'+ window.location.href.split('?')[1];

      //nao existe aquela pesquisa
      if(query.indexOf(tipo) < 1) {
        query = query.concat('&'+tipo+'='+valor.toLowerCase());
        //temos que adicionar o parametro de lista na pagina
        location.href = window.location.href.split('?')[0] + query;
        location.reload();
      }

      switch(tipo) {
        case 'tagP':
              query = query.replace($location.search().tagP,valor.toLowerCase());
              break;
        case 'tagC1':
              query = query.replace($location.search().tagC1,valor.toLowerCase());
              break;
        case 'tagC2':
              query = query.replace($location.search().tagC2,valor.toLowerCase());
              break;
      }

        location.href = window.location.href.split('?')[0] + query;
        location.reload();

    };

    $scope.categ = [
     {
      label:'Educação Básica'
     },
     {
      label:'Educação Superior'
     },
      {
      label:'Internacional'
     },
      {
      label:'Institucional'
     }
    ];

    $scope.prod = [
      {label:'Educação Básica',value:'educação básica'},
      {label:'SAEB',value:'saeb'},
      {label:'ANEB',value:'aneb'},
      {label:'ANRESC (Prova Brasil)',value:'anresc'},
      {label:'ANA',value:'ana'},
      {label:'IDEB',value:'ideb'},
      {label:'ENEM',value:'enem'},
      {label:'Enceeja',value:'enceeja'},
      {label:'Educação Superior',value:'educação superior'},
      {label:'SINAES',value:'sinaes'},
      {label:'ENADE',value:'enade'},
      {label:'ANASEM',value:'anasem'},
      {label:'Indicadores de Qualidade',value:'indicadores de qualidade'},
      {label:'REVALIDA',value:'revalida'},
      {label:'SAEG',value:'saeg'},
      {label:'Institucional',value:'institucional'},
      {label:'Centro de Informação e Biblioteca em Educação (Cibec)',value:'cibec'},
      {label:'Biblioteca e Arquivo Histórico da Educação Brasileira',value:'biblioteca e arquivo histórico da educação brasileira'},
      {label:'Thesaurus Brasileiro da Educação (Brased)',value:'brased'},
      {label:'Banco de Dados Terminológicos do Mercosul (BDT)',value:'bdt'},
      {label:'Bibliografia Brasileira da Educação (BBE)',value:'bbe'},
      {label:'Serviço de Atendimento ao Pesquisador (SAP)',value:'sap'},
      {label:'Internacional',value:'internacional'},
      {label:'CELPE-BRAS',value:'celpe-bras'},
      {label:'PISA',value:'pisa'},
      {label:'ARCU-SUL',value:'arcu-sul'},
      {label:'EaG',value:'eag'},
      {label:'Pesquisa TALIS',value:'pesquisa talis'},
      {label:'SEM',value:'sem'},
      {label:'Metas Educativas 2021',value:'metas educativas 2021'},
      {label:'Agenda 2030',value:'agenda 2030'},
      {label:'RIACES',value:'riaces'},
      {label:'Estudos Regionais Comparativos ERCE/LLECE',value:'erce/llece'}
    ];

    $scope.tipoMidia = [
     // {
     //  label:'Sites'
     // },
     // {
     //  label:'Impresso'
     // },
      {
      label:'Vídeo',
      value:'video'
     },
      {
      label:'Áudio',
      value:'audio'
     }
    ];

    //função para o menu de filtros chamar a página
    $scope.setValues = function() {
        var query = $location.search();
        //verifica se existe pesquisa
        if(Object.keys(query).length === 0) {
          //não precisa atualizar nenhum valor de filtro
            return;
        };

        if((query.data != undefined)&(query.data != '')) {
            //mostrar valor do produto pesquisado
            document.getElementById("picker1").value = query.data.split('I')[0];
            document.getElementById("picker2").value = query.data.split('I')[1];
        };
        
        // //verifica a pesquisa por produto
        // if((query.tagP != undefined)&(query.tagP != '')) {
        //     //mostrar valor do produto pesquisado
        //     console.log('olá');
        //     document.getElementById("Produto").value = query.tagP;
        // };
        
        // //verifica a pesquisa por categoria
        // if((query.tagC1 != undefined)&(query.tagC1 != '')) {
        //     //mostrar valor do categoria pesquisado
        //     document.getElementById("Categoria").value = query.tagC1;
        // };
       
        // //verifica a pesquisa por conteúdo
        // if((query.tagC2 != undefined)&(query.tagC2 != '')) {
        //     //mostrar valor do conteúdo pesquisado
        //     document.getElementById("TipoMidia").value = query.tagC2;
        // };

    };

    }]);