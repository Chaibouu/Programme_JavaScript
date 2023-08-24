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
    for (let i = 0; i < datas.works.length; i++) {
        let div1 = document.createElement('div');
        div1.setAttribute('class','col-xl-4 col-lg-4 col-sm-6 col-12 my-2');
        works.append(div1);
        let div2 = document.createElement('div');
        div2.setAttribute('class','card');
        div1.append(div2);
        let imgg = document.createElement('img');
        imgg.setAttribute('class','card-img-top');
        imgg.src = datas.works[i].preview;
        imgg.alt = datas.works[i].name;
        div2.prepend(imgg);
        let div3 = document.createElement('div');
        div3.setAttribute('class','card-body w-100 px-0');
        div2.append(div3);
        let h22 = document.createElement('h2');
        h22.setAttribute('class','card-title mt-0 mb-4 text-center');
        h22.textContent = datas.works[i].name;
        div3.append(h22);
        let ull = document.createElement('ul');
        ull.setAttribute('class','list-unstyled w-100 d-flex justify-content-center flex-wrap')
        let compteur = datas.works[i];
        div3.append(ull);
        for (let j = 0; j < compteur.technology.length; j++) {
            let lii = document.createElement('li');
            ull.append(lii);
            let spann = document.createElement('span');
            spann.setAttribute('class','card-link');
            spann.textContent = compteur.technology[j];
            lii.append(spann);
        }
        let div4 = document.createElement('div');
        div4.setAttribute('class','row w-100');
        div3.append(div4);
        let div5 = document.createElement('div');
        div5.setAttribute('class','d-flex justify-content-center');
        div4.append(div5);
        let aa = document.createElement('a');
        aa.setAttribute('class','text-decoration-none px-4 py-3 mt-2 rounded');
        aa.href = compteur.url;
        aa.textContent = "See Project";
        div5.append(aa);
    }

// 7.
    let experiences = document.querySelector('#experiences');
    for (let i = 0; i < datas.experiences.length; i++) {
        let div11 = document.createElement('div');
        div11.setAttribute('class','col-xl-4 col-lg-4 col-sm-6 col-12 my-2');
        experiences.append(div11);
        let div22 = document.createElement('div');
        div22.setAttribute('class','card h-100');
        div11.append(div22);
        let imggg = document.createElement('img');
        imggg.setAttribute('class','card-img-top');
        imggg.src = datas.experiences[i].link;
        imggg.alt = datas.experiences[i].name;
        div22.append(imggg);
        let div33 = document.createElement('div');
        div33.setAttribute('class','card-body w-100 px-0');
        div22.append(div33);
        let h222 = document.createElement('h2');
        h222.setAttribute('class','card-title mt-0 mb-4 text-center');
        h222.textContent = datas.experiences[i].name;
        div33.append(h222);
        let ulll = document.createElement('ul');
        ulll.setAttribute('class','list-unstyled w-100 d-flex justify-content-center flex-wrap');
        div33.append(ulll);
        let compteurr = datas.experiences[i];
        for (let j = 0; j < compteurr.technology.length; j++) {
            let liii = document.createElement('li');
            ulll.append(liii);
            let spannn = document.createElement('span');
            spannn.setAttribute('class','card-link');
            spannn.textContent = compteurr.technology[j];
            liii.append(spannn);
        }

        
    }
// 8.
    let mail = document.querySelector('#mail');
    mail.textContent = datas.email;
