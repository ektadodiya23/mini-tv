const api_url = "json/movie_name.json";

async function getdata(url){
    await fetch(url).then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((data)=>{
        console.log(data);


        // card

        let data2 = " ";
        data.map((key)=>{
            data2 +=
            `
            
            
            <div class="card mt-5 ms-4 mb-2 bg-black" style="width: 19rem;">
            <img src="${key.MovieImage}" class="card-img-top" alt="...">
          
          </div>
            
            `
        });

        document.getElementById('card1').innerHTML = data2;
    })
    .catch((err)=>{
        console.log(err);
    });

}
getdata(api_url);