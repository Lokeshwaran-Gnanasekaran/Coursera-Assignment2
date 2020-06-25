(function(){
    'use strict';
    angular.module("ShoppingListCheckOff",[])
    .controller("ToBuyController",ToBuyController)
    .controller("AlreadyBoughtController",AlreadyBoughtController)
    .service("ShoppingListCheckOffService",ShoppingListCheckOffService);

    ToBuyController.$inject=['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService){
        var tobuy=this;
        tobuy.items=ShoppingListCheckOffService.getbuyitems();
        tobuy.buy=function(){
             ShoppingListCheckOffService.tobuyitem(index);
        }
    }

    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService){
        var tobought=this;
        tobought.items=ShoppingListCheckOffService.getboughtitems();

    }

    function ShoppingListCheckOffService(){
        var service=this;
        var buyitems=[
            {item:"Cookie",quantity:"10 packs"},
            {item:"Biscuits",quantity:"10 packs"},
            {item:"Chips",quantity:"10 packs"},
            {item:"Chocolates",quantity:"10 packs"},
            {item:"IceCream",quantity:"10 packs"},
            {item:"Sweets",quantity:"10 packs"}

        ];
        var boughtitems=[];
        service.tobuyitem=function(index){
             boughtitems.push(buyitems[index]);
             buyitems.splice(index,1);
        }

        service.getbuyitems=function(){
            return buyitems;
        }

        service.getboughtitems=function(){
            return boughtitems;
        }
    }


})();