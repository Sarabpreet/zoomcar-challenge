var div=document.createElement('div');
var span=document.createElement('span');
var gmap;
var dataListParcel;

function getjson(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
var dataListParcel=JSON.parse(getjson("https://zoomcar-ui.0x10.info/api/courier?type=json&query=list_parcel"));


function apihit(){  

   var apiHit=JSON.parse(getjson("https://zoomcar-ui.0x10.info/api/courier?type=json&query=api_hits"));
   var no= parseInt(apiHit.api_hits);
   document.querySelector('.apihit').innerHTML="API Hit : "+no;
    document.querySelector('.total').innerHTML="Total Parcel : "+dataListParcel.parcels.length;

}

setInterval(apihit, 5000);






for (var i = 0; i < dataListParcel.parcels.length; i++) {
    





var head=document.createElement('div');
head.className="collapsible-header hoverable";
head.innerHTML='';
    headspanicon=document.createElement('span');
    headspanicon.className="icon";
    headspanicon.innerHTML='<i class="material-icons">done</i>';

    headspantitle=document.createElement('span');
    headspantitle.className="title";
    headspantitle.innerHTML=dataListParcel.parcels[i].name; //insert title here..

    headspanprice=document.createElement('span');
    headspanprice.className="price";
    headspanprice.innerHTML="&#8377; "+dataListParcel.parcels[i].price; //insert price info here..

head.appendChild(headspanicon); //the head node list
head.appendChild(headspantitle);
head.appendChild(headspanprice);


var body=document.createElement('div');
    body.className="collapsible-body ";
var element=document.createElement('div');
    element.className="element col l12 ";
var elementd=document.createElement('div');
    elementd.className="elementd row";
var col5=document.createElement('div');
    col5.className="col l5";
var productimg=document.createElement('div');
    productimg.className="product";
    productimg.innerHTML="<h5> Product Image</h5> <img src='"+dataListParcel.parcels[i].image+"''>"; //insert image here..........
var eta=document.createElement('div');
    eta.className="eta";

    var date = new Date(parseInt(dataListParcel.parcels[i].date));
    var dater=date.toString("MMM dd yyyy "); // "Dec 20"
    eta.innerHTML='<h5> Estimated Arival Time</h5>  <i class=" tiny material-icons">query_builder</i> '+dater+''; //insert eta (converted) time here
var msg=document.createElement('div');
    msg.className='msg';
    msg.innerHTML='<p></p>';

var col=document.createElement('div');
    col.className="col l12";
        var like=document.createElement('div');
            like.className="like col l6";

            if(likedItem()==true) {

                like.innerHTML='<i class=" medium material-icons">thumb_up</i>';

            }
            else {
    
             like.innerHTML='<i class=" medium material-icons">thumb_down</i>';

            }

        var share=document.createElement('div');
            share.className="share col l6";
            share.innerHTML='<div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button"></div>';


    col.appendChild(like);
    col.appendChild(share);


col5.appendChild(productimg);
col5.appendChild(eta);
col5.appendChild(msg);
col5.appendChild(col);
// column one appended.

var col7=document.createElement('div');
col7.className="col l7";


var loc=document.createElement('div');
loc.className="location";

var map=document.createElement('div');
map.id="gmap";

loc.appendChild(map);

var product=document.createElement('div');
product.className="product row";

var productTitle=document.createElement('div');
productTitle.className="product-title col l12";

var col61=document.createElement('div');
    col61.className="col lg6 left";

    var productcategory=document.createElement('div');
    productcategory.className="product-category";
    productcategory.innerHTML=' <i class=" tiny material-icons">shopping_cart</i> '+dataListParcel.parcels[i].type;

    var productweight=document.createElement('div');
    productweight.className="product-weigh";
    productweight.innerHTML='<i class=" tiny material-icons">info</i> '+dataListParcel.parcels[i].weight;

    var productphone=document.createElement('div');
    productphone.className="product-phone";
    productphone.innerHTML='<i class=" tiny material-icons"> phone  </i>'+dataListParcel.parcels[i].phone;

    col61.appendChild(productcategory);
    col61.appendChild(productweight);
    col61.appendChild(productphone);

var col6=document.createElement('div');
    col6.className="col lg6 right";

    var productprice=document.createElement('div');
    productprice.className="product-price";
    productprice.innerHTML="&#8377; "+dataListParcel.parcels[i].price;

    var productquantity=document.createElement('div');
    productquantity.className="product-quantity";
    productquantity.innerHTML='<i class="tiny material-icons">info</i> '+dataListParcel.parcels[i].quantity;

    var productcolor=document.createElement('div');
    productcolor.className="product-color";
    productcolor.innerHTML='<i class="tiny material-icons">info</i> '+dataListParcel.parcels[i].color;

    col6.appendChild(productprice);
    col6.appendChild(productquantity);
    col6.appendChild(productcolor);


product.appendChild(col6);
product.appendChild(col61);

col7.appendChild(loc);
col7.appendChild(product);


elementd.appendChild(col5);
elementd.appendChild(col7);
element.appendChild(elementd);
body.appendChild(element);

var li = document.createElement('li');
li.appendChild(head);
li.appendChild(body);
li.className='list';


document.querySelector('ul.collapsible.datainsert').appendChild(li);


};



// testing js starts here... 











function likedItem(){




var chosenValue = Math.random() < 0.5 ? true : false;

return chosenValue;


}


$(document).ready(function() {
     gmap = new google.maps.Map(document.getElementById('gmap'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });


     
});



var options = {
    valueNames: [ 'title', 'product-weigh','product-price' ]
};

var hackerList = new List('sort-list', options);