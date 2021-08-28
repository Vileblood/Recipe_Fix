<<<<<<< HEAD
var logoElement = $('footer .logo');

$(window).scroll(function() {
  
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
     
       $(logoElement).addClass('show');
     
   } else if($(logoElement).hasClass('show') && $(window).scrollTop() + $(window).height() > $(document).height() - 150) {
     
      $(logoElement).removeClass('show');
     
   }
});
=======
const { MongoClient } = require("mongodb");

async function main(){



  const uri =
  "db connection string goes here";
  

  const client = new MongoClient(uri);

  try{
    await client.connect();

    await  listDatabases(client);

  } catch (e){
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);



async function findRecipeByName(client, nameOfRecipe){
  const result = await client.db("new_recipe_set").collection("new_recipe_set").findOne({name: nameOfRecipe})

  if (result){
    console.log(`Found Recipe in the collection with the name '${nameOfRecipe}'`);
    console.log(result);
  }else{
    console.log(`No Recipe Found!`)
  }
}

 async function createListing(client, newListing){
  const result = await client.db("new_recipe_set").collection("new_recipe_set").insertOne(newListing);

  console.log(`New Recipe created with thew following id: ${result.insertedId}`);

}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
>>>>>>> 802fa4ef3e9cbfb34a670ec786b4fec6141c3512
