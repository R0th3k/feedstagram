var feed = new Instafeed({
    // get: 'tagged',
    // tagName: 'awesome',
    get: "user",
    //Obtener el id de la cuenta:
    //https://www.bufa.es/instagram-obtener-id-usuario/
    userId: 8636519331,
    //Instagram acces Token generator:
    //http://instagram.pixelunion.net/
    accessToken: "8636519331.1677ed0.f095d3f928414041bcfe639937cf9851",
    limit: 7,
    resolution: "standard_resolution",
    useHttp: "true",
    template: '<a class="feedstagram-item" href="{{link}}" target="_blank" style="background:url({{image}}) no-repeat center center;"><div class="feedstagram-item__info"> <p>{{caption}}</p> <p><i class="fas fa-heart"></i> {{likes}}</p> <p><i class="fas fa-comments"></i> {{comments}}</p>  </div></a>'
});
feed.run();

var btnInstafeedLoad = document.getElementById("btn-feedstagram-load");
btnInstafeedLoad.addEventListener("click", function() {
  feed.next()
});