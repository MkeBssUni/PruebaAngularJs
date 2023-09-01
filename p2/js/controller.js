app.controller('formController',['$scope',function($scope){
    $scope.dataUser={}

    alert("Hola, bienvenido")

    $scope.saveUser= ()=>{
        /* console.log("dataUser: ", $scope.dataUser) */
        alert("Registrando usuario")
    }
}])