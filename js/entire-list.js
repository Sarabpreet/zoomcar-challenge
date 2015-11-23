var div=document.createElement('div');
var li = document.createElement('li');
var span=document.createElement('span');
var gmap;

function getjson(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
var dataListParcel=JSON.parse(getjson("https://zoomcar-ui.0x10.info/api/courier?type=json&query=list_parcel"));



for (var i = 0; i < dataListParcel.parcels.length; i++) {
    


var head=document.createElement('div');
head.className="collapsible-header hoverable";
head.innerHTML='';
    headspanicon=document.createElement('span');
    headspanicon.className="icon";
    headspanicon.innerHTML='<i class="material-icons">filter_drama</i>';

    headspantitle=document.createElement('span');
    headspantitle.className="title";
    headspantitle.innerHTML=dataListParcel.parcels[i].name; //insert title here..

    headspanprice=document.createElement('span');
    headspanprice.className="price";
    headspanprice.innerHTML=dataListParcel.parcels[i].price; //insert price info here..

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
    eta.innerHTML='<h5> Estimated Arival Time</h5>  By:  '+dater+''; //insert eta (converted) time here
var msg=document.createElement('div');
    msg.className='msg';
    msg.innerHTML='<p></p>';

var col=document.createElement('div');
    col.className="col l12";
        var like=document.createElement('div');
            like.className="like col l6";

            if(likedItem()==true) {

                like.innerHTML="Y";

            }
            else {
    
             like.innerHTML="N";

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
    productcategory.innerHTML=dataListParcel.parcels[i].type;

    var productweight=document.createElement('div');
    productweight.className="product-weigh";
    productweight.innerHTML=dataListParcel.parcels[i].weight;

    var productphone=document.createElement('div');
    productphone.className="product-phone";
    productphone.innerHTML=dataListParcel.parcels[i].phone;

    col61.appendChild(productcategory);
    col61.appendChild(productweight);
    col61.appendChild(productphone);

var col6=document.createElement('div');
    col6.className="col lg6 right";

    var productprice=document.createElement('div');
    productprice.className="product-price";
    productprice.innerHTML=dataListParcel.parcels[i].price;

    var productquantity=document.createElement('div');
    productquantity.className="product-quantity";
    productquantity.innerHTML=dataListParcel.parcels[i].quantity;

    var productcolor=document.createElement('div');
    productcolor.className="product-color";
    productcolor.innerHTML=dataListParcel.parcels[i].color;

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

li.appendChild(head);
li.appendChild(body);



};











document.querySelector('.datainsert').appendChild(li);

function likedItem(){


return false;

}


$(document).ready(function() {
     gmap = new google.maps.Map(document.getElementById('gmap'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });


     
});



