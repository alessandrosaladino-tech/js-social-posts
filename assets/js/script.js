/*


Descrizione
Ricreiamo un feed social aggiungendo al layout dello starter kit di base fornito, il nostro script JS in cui:
Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali







*/

const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10",
        },
        likes: 120,
        created: "2021-09-03"
    },

    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "2021-05-15"
    },

    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 56,
        created: "2021-04-03"
    },

    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        created: "2021-03-05"
    }
];

/* Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.*/

posts.forEach(element => {


    const postMarkup =
        `
    <div class="post" id="post_${element.id}">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src=${element.author.image} alt=${element.author.name}>                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${element.author.name}</div>
                <div class="post-meta__time">${element.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
    <div class="post__image">
        <img src=${element.media} alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="javascript:;" data-postid="${element.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
            </div>
        </div> 
    </div>            
</div>
`

    const postElementDOM = document.querySelector(".posts-list");
    postElementDOM.insertAdjacentHTML("beforeend", postMarkup)


    //Creo variabili per gli elementi della DOM 
    const likeBtn = document.querySelector('#post_'+element.id+' .like-button');
    const numberOfLikesElement = document.querySelector('#post_'+element.id+' .js-likes-counter');

    

    likeBtn.addEventListener('click', (e) => {
        e.preventDefault();

        likeClick(likeBtn,numberOfLikesElement );
    });


})






/* Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.*/


// Creo una funzione per il click del bottone, se cliccato aggiunge classe "like-button--liked" e aggiunge un +1 al numberOfLikes,  se ricliccata la rimuove e decrementa numberOfLikes.
function likeClick(likeBtn, numberOfLikesElement) {

    let isLiked = likeBtn.className.includes('like-button--liked'); // verificare se l'elemento ha gia la classe 'like-button--liked true/false
    
    let numberOfLikes = Number.parseInt(numberOfLikesElement.textContent, 10);
    // Numbers of like qui potrebbe avere un valore diverso da come era durante il ciclo

    if (!isLiked ) {
        likeBtn.classList.add('like-button--liked');
        numberOfLikes++;
        numberOfLikesElement.textContent = numberOfLikes;
        isLiked = !isLiked;
    }

    else {
        likeBtn.classList.remove('like-button--liked');
        numberOfLikes--;
        numberOfLikesElement.textContent = numberOfLikes;
        isLiked = !isLiked;
    }

};

