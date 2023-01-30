
const apiurl = "json/TV_show.json" ; 

async function getdata(url){
    await fetch(url).then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((data)=>{
        console.log(data);

        // card

        let data3 = " ";
        data.map((keys)=>{
            data3 +=
            `
            <div class="card mt-5 ms-4 mb-2 bg-black" style="width: 19rem;">
            <img src="${keys.ShowImage}" class="card-img-top" alt="...">
          
          </div>


            `
        });

        document.getElementById('card3').innerHTML = data3 ; 
    })
    .catch((err)=>{
        console.log(err);
    });
}

getdata (apiurl);