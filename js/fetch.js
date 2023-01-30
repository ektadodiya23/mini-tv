const api_url = "json/api.json";


async function getdata(url) {
    await fetch(url).then((res) => {
        console.log(res);
        return res.json();

    })
        .then((data) => {
            console.log(data);


            // Card Interpolation

            let data1 = "";
            data.map((values) => {
                data1 +=
                    `

    <div class="card mt-5 ms-4 mb-2 bg-black" style="width: 19rem;">
    <img src="${values.MovieImage}" class="card-img-top" alt="...">
  
  </div>


    `
            });

            document.getElementById('card').innerHTML = data1;
        })
        .catch((err) => {
            console.log(err);
        });
}

getdata(api_url);

