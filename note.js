
function ajaxcall(){
    // var url = "https://jsonplaceholder.typicode.com/comments";
    var url = "https//www.themealdb.com.api/json/v1/1/categories.php";
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.categories)
    })
    .catch(function(error){
        console.log(err)
    })
}
ajaxcall()




const [categories, setCategories] = useState([]);

useEffect(function(){
    ajaxcall();

} []);

function ajaxcall(){
    // var url = "https://jsonplaceholder.typicode.com/comments";
    var url = "https//www.themealdb.com.api/json/v1/1/categories.php";
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.categories)
    })
    .catch(function(error){
        console.log(err)
    })
}