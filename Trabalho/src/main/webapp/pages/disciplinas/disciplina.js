module = angular.module("Prova", []);

module.controller("DisciplinaController", ["$scope","$http", DisciplinaController]);


function DisciplinaController($scope,$http) {
    
    $scope.iniciar = funcaoIniciar;
    $scope.salvar = funcaoSalvar;
    $scope.excluir = funcaoExcluir;
    $scope.editar = funcaoEditar;
    
    $scope.disciplinas = [];
    $scope.disciplina = {};
    $scope.isNovo = true;
    
    function funcaoEditar(aluno) {
        $http.get("/disciplinas").success(onSuccess).error(onError);
        
        $scope.disciplina = angular.copy(aluno);
        $scope.isNovo = false;
    }

    
    function funcaoExcluir(aluno) {
        $http.delete("/disciplinas" + id ).success(onSuccess).error(onError);
        
        function onSuccess(data, status) {
            funcaoCarregar();
            $scope.disciplinas = data;       
           
        }
        function onError(data, status) {
            alert("Deu erro: " + data);
        }
    }
    
    function funcaoSalvar() {
        if($scope.salvar){
            $http.post("/disciplinas").success(onSuccess).error(onError);
        }else{
            $http.put("/disciplinas").success(onSuccess).error(onError);
        }
        
        function onSuccess(data, status) {
            funcaoCarregar();
            $scope.disciplina = {};
            $scope.isNovo = true;
                  
           
        }
        function onError(data, status) {
            alert("Deu erro: " + data);
        }
    }
    
    function funcaoCarregar() {
        $http.get("/disciplinas").success(onSuccess).error(onError);
        
        function onSuccess(data, status) {
            $scope.disciplinas = data;       
           
        }
        function onError(data, status) {
            alert("Deu erro: " + data);
        }
    }
    
    function funcaoIniciar() {
        funcaoCarregar();
        
    }
        
}


