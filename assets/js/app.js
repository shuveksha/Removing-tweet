//variables
//variablelis
const tweetlist = document.getElementById('tweet-list')



//eventListners
eventListners();


function eventListners(){
    document.querySelector('#form').addEventListener('submit',newTweet);

    //remove tweet from the list
    tweetlist.addEventListener('click',removeTweet);

}







//functions
function newTweet(e){
    e.preventDefault();
    console.log('form submitted');

    //read the textarea value
    const Tweet =document.getElementById('tweet').value;
    console.log(Tweet);

    //create remove button
    const removeButton = document.createElement('a');
    removeButton.classList ='remove-tweet';
    removeButton.textContent ='x';

    

    //create <li> elements using javascript

    const li = document.createElement('li');
    li.textContent = Tweet;
   


    //add remove button
    li.appendChild(removeButton);

    //add to list
    tweetlist.appendChild(li);
}


//remove tweet from the dom
function removeTweet(e){

if(e.target.classList.contains('remove-tweet')){
    e.target.parentElement.remove();

}
}
