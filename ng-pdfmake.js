(function(){
    angular
        .module('ng-pdfmake', [])
        .factory('pdfMake', pdfMake);

    function pdfMake($window){
        return $window.pdfMake;
    }
})();
