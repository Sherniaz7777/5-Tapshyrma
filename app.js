
const input=document.querySelector('#search')
const btn=document.querySelector('#btn')
const list=document.querySelector('.list')
const btn1=document.querySelector('#btn1')
const btn2=document.querySelector('#btn2')




const drinks=[
    {title:'Maksym', price:85, size:'1 litr', img:'https://magnumopt.kz/upload/iblock/6a6/6a6ea3e9d6e2805c38e49ede8c11f736.png'},
    {title:'Sprite', price:85, size:'1 litr', img:'https://www.bigbasket.com/media/uploads/p/xl/251006_13-sprite-soft-drink-lime-flavoured.jpg'},
    {title:'Sherbet', price:70, size:'1 litr', img:'https://istmarket.cz/wp-content/uploads/2021/11/zogal-kompotu-1.png'},
    {title:'Cocola', price:85, size:'1 litr', img:'https://neman.kg/images/watermarked/detailed/43/%D0%9D%D0%B0%D0%BF%D0%B8%D1%82%D0%BE%D0%BA_COCA-COLA_2_25_%D0%BB_%D0%BF%D0%BB.webp'},
    {title:'Pepsi', price:85, size:'1 litr', img:'https://static.insales-cdn.com/images/products/1/422/447578534/00573808.n_1_600x600.png'},
    {title:'Fanta', price:85, size:'1 litr', img:'https://wasabi.kg/wp-content/uploads/2022/03/media-share-0-02-05-f2e064c2eabe4f7c927b2a645a7707cb1a6f4616870881094e6be3da4b9967a6-picture.jpg'},
    
];
const drink=[
    {title:'Dushes', price:25, size:'1 litr', img:'https://ashlyanfu-msk.ru/wa-data/public/shop/products/31/00/31/images/240/240.970.jpg'},
    {title:'Sultan Chai', price:45, size:'1 litr', img:'https://img.b2b.trade/3caba3e3-1792-4430-933a-e64df9c1bd6f/-/smart_resize/900x900/-/quality/smart/-/format/webp/'},
    {title:'Kvass', price:40, size:'1 litr', img:'https://sun9-73.userapi.com/impg/VFQFQBixACwblOJZGDnFJoEG8XzQKbDcq80eyw/N1sFeIDztYI.jpg?size=0x400&crop=0,0,1,1&quality=95&sign=16db7b707437daf1cec931da36120fa9'},
    {title:'Pialaice', price:45, size:'1 litr', img:'https://vkusmart.vmv.kz/upload/iblock/336/coytcvaf638dqsv0pepnua1eolk47m8a.png'},
    {title:'Tutifruti', price:25, size:'1 litr', img:'https://img.b2b.trade/a0c485d6-2d4a-448c-a594-cd059f5677d2/-/smart_resize/500x500/-/quality/lightest/-/format/webp/'},
    {title:'Buratina', price:40, size:'1 litr', img:'https://vkusmart.vmv.kz/upload/iblock/9a6/9a6c065cae71a76a24fdb89ab94bb722.jpg'},
    
];


const drinksArray = [...drinks, ...drink];



function showall(array) {
     list.innerHTML=''
    for (const all of array) {
        list.innerHTML+=`
        <div class="content">
       
        <img  src='${all.img}' /> 
        <h5>${all.title}</h5>
        <h5>Баасы: ${all.price}сом</h5>
        <h5>${all.size}</h5>
        
        
       </div>
        `
    }
    
}


input.onchange=()=>{
    const drinksFilter=drinksArray.filter(el=>el.title.toLowerCase()===input.value.toLowerCase())
    showall(drinksFilter)
}


btn.onclick=()=>{
    
    showall(drinksArray)
}
btn1.onclick=()=>{
showall(drinks)
}
btn2.onclick=()=>{
showall(drink)
}