// -console.log(datas);
// Structure de datas:
// - fullname: string
// - profil: string
// - email : string
// - description : string
// - socials : [Social, Social, ...]
// - works : [Work, Work, ...]
// - experience : [Experience, Experience, ...]

// Structure de Social:
// name : string
// url : string
// link : string

// Structure de Work:
// name: string,
// url: string,
// technology: [Techo, Techno, ...],
// preview: string

// Structure de Experience:
// name: string,
// link: string,
// technology: [Techo, Techno, ...]

// 1.                               
    let fullname = document.querySelector('#fullName');
    fullname.textContent = datas.fullname;

// 2.   
    let profil = document.querySelector('#profil');
    profil.textContent = datas.profil;
// 3.
    let description = document.querySelector('#description');
    description.textContent = datas.description;
// 4.
    let picture = document.querySelector('#picture');
    picture.src = datas.picture;

// 5.
    let socials = document.querySelectorAll('.socials');
    socials.forEach(Element=>{
        let fils = Element.children;
        for (let i = 0; i < datas.socials.length; i++) {
            let data = datas.socials[i];
            fils[i].innerHTML = `<a href="${data.url}"><img src="${data.link}" alt="${data.name}"></a>`;
        }
    })


// 6.
    let works = document.querySelector('#works');
    console.log(works);
    

// 7.

// 8.
