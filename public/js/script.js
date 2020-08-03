if($("#q-cat")){
    var urlroot=$("#q-cat").attr('data-edit');
    var asset=$("#q-cat").attr('data-asset');
    $("#q-cat").keyup(function () {
        var oldbody=$("#catbody").html();
        var newbody="";
        if($(this).val()!=" "){
            $.get($(this).attr('data-catsearch')+"?q="+$(this).val()).done(function (data) {
                var categories=JSON.parse(data.categories);
                console.log(categories);
                for (const key in categories) {
                    newbody+="<tr>\n" +
                        '                        <td>'+categories[key].id+'</td>'+
                        '                        <td>'+categories[key].nom+'</td>'+
                        '                        <td><img src="'+asset+'/'+categories[key].image+'" style="width: 30px;height: 30px"></td>'+
                        '                        <td>' +
                                                '<a href="'+urlroot+'/'+categories[key].id+'/edit" class="badge badge-success">Modifier</a>' +
                        '                            <form class="d-inline" action="'+urlroot+'/'+categories[key].id+'" method="POST">' +
                        '                          <input type="hidden" name="_token" value=\"5O0vPwLRflEcR1UxKS6nFNl4zm6S8RLhMO7mV3Ey\">'+
                        '                              <input type="hidden" name="_method" value="DELETE">'+
                        '                                <button class="badge badge-danger">Supprimer</button>'+
                        '                            </form>'+
                        '                        </td>'+
                        '                    </tr>'
                }
                $("#catbody").html(newbody);
            })
        }else{
            $("#catbody").html(oldbody);
        }
    })
}


if($("#q-prod")){
    var urlroot=$("#q-prod").attr('data-edit');
    var asset=$("#q-prod").attr('data-asset');
    $("#q-prod").keyup(function () {
        var oldbody=$("#prodbody").html();
        var newbody="";
        if($(this).val()!=""){
            $.get($(this).attr('data-prodsearch')+"?q="+$(this).val()).done(function (data) {
                var produits=JSON.parse(data.produits);
                for (const key in produits) {
                    newbody+='<tr>\n' +
                        '                <td>'+produits[key].id+'</td>\n' +
                        '                <td>'+produits[key].nom+'</td>\n' +
                        '                <td>'+produits[key].prix+'</td>\n' +
                        '                <td>voir detail</td>\n' +
                        '                <td>'+produits[key].description+'</td>\n' +
                        '                <td><img src="" style="width: 30px;height: 30px"></td>\n' +
                        '                <td>\n' +
                        '                    <a href="'+urlroot+'/'+produits[key].id+'/edit" class="badge badge-pill badge-success">Modifier</a>\n' +
                        '                    <form class="d-inline" action="'+urlroot+'/'+produits[key].id+'" method="Post">\n' +
                        '                        <input type="hidden" name="_token" value=\"5O0vPwLRflEcR1UxKS6nFNl4zm6S8RLhMO7mV3Ey\">' +
                        '                        <input type="hidden" name="_method" value="DELETE">' +
                        '                        <button class="badge badge-pill badge-danger">Supprimer</button>\n' +
                        '                    </form>\n' +
                        '                </td>\n' +
                        '            </tr>';
                }
                $("#prodbody").html(newbody);
            })
        }else{
            $("#prodbody").html(oldbody);
        }
    })
}
