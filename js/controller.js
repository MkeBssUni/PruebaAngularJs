app.controller('primerController',['$scope','$http', function($scope,$http){
    
    $scope.persona= {};
    $scope.persona.nombre="Miguel";
    $scope.persona.apellido="Aguario";

    $scope.fechaHoy = new Date();

    $scope.presentate = () =>{
        alert(`Bienvenido  ${$scope.persona.nombre}`)
    }

    $scope.presentateNombre = (name) =>{
        alert(`Bienvenido  ${name}`)
    }

    $scope.valorCambiado="";

    $scope.cambioText = (valorCambiado) =>{
        alert('Algo pasaaaa', valorCambiado)
    }

    $http({
        method: 'GET',
        url: API_URL+'v2/pokemon/ditto'
    }).then(function(response){
        console.log("response: ", response)
    }).catch(error =>{
        console.log("error ",error)
    });
    
    /* $http({
        method: 'POST',
        url: API_URL+'v2/pokemon/ditto',
        data: "data=" + JSON.stringify($scope.persona)
    }).then(function(response){
        console.log("response: ", response)
    }).catch(error =>{
        console.log("error ",error)
    }); */

    }]);