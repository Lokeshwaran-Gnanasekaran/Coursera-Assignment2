(function(){
    'use strict';
    angular.module("ShoppingListCheckOff",[])
    .controller("ToBuyController",ToBuyController)
    .controller("AlreadyBoughtController",AlreadyBoughtController)
    .service("ShoppingListCheckOffService",ShoppingListCheckOffService)

    ToBuyController.$inject=['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService){
        var tobuy=this;
        tobuy.items=ShoppingListCheckOffService.getbuyitems();
        tobuy.buy=function(index){
             ShoppingListCheckOffService.tobuyitem(index);
        };
    }

    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService){
        var tobought=this;
        tobought.items=ShoppingListCheckOffService.getboughtitems();

    }

    function ShoppingListCheckOffService(){
        var service=this;
        var buyitems=[
            {name:"Cookie",quantity:"10 packs"},
            {name:"Biscuits",quantity:"10 packs"},
            {name:"Chips",quantity:"10 packs"},
            {name:"Chocolates",quantity:"10 packs"},
            {name:"IceCream",quantity:"10 packs"},
            {name:"Sweets",quantity:"10 packs"}

        ];
        var boughtitems=[];
        service.tobuyitem=function(index){
             boughtitems.push(buyitems[index]);
             buyitems.splice(index,1);
        };

        service.getbuyitems=function(){
            return buyitems;
        };

        service.getboughtitems=function(){
            return boughtitems;
        };
    }


})();