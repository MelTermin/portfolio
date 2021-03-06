//Project part//

const projectDetails = [
  {
    id: 1,
    name: 'Todo list in React',
    image: './Pictures/Todo-react.png',
    atag:'https://meltermin-todoapp.netlify.app/',
    category:"react"
  },
  {
    id: 2,
    name: 'Twitter Blog in React',
    image: './Pictures/Twitter-blog.png',
    atag:'https://twitter-blog-react.herokuapp.com/',
    category:"react",
  },
  {
    id: 3,
    name: 'Stock Exhange in Javascript',
    image: './Pictures/StockExchangejs.png',
    atag:'https://github.com/MelTermin/stockexchange-js',
    category:"javascript"
  },
  {
    id: 4,
    name: 'Coloring Game in Javascript',
    image: './Pictures/Coloring-game.png',
    atag:'https://relaxed-bose-802727.netlify.app/',
    category:"javascript"
  },

  {
    id: 5,
    name: 'Todo-List in Javascript',
    image: './Pictures/Todo-Javascript.png',
    atag:'https://youthful-yonath-910d43.netlify.app/',
    category:"javascript"
  },

  {
    id: 6,
    name: 'Music PlayList in Javascript',
    image: './Pictures/Playlist.png',
    atag:'https://suspicious-shirley-294fbe.netlify.app/',
    category:"javascript"
  },
  ];

  const buttonsDetails= ["All", "React", "Javascript"]
  

const projectSection=document.getElementById("projects");
console.log(projectSection)






// filter part//




  const filterArea= document.getElementById("filter-area")
  console.log(filterArea)
 
  filterArea.addEventListener("keyup", filterProjects);

  function filterProjects () {
    let filterValues= filterArea.value.toLowerCase()
    console.log(filterValues)
    let data=searchProjects (filterValues,projectDetails)
    ShowProjects(data)
  }

  function searchProjects (filterValues,data) {
    let filteredProjects= [];
    for(let i=0; i<data.length; i++) {
    let projectName= data[i].name.toLowerCase()
    if (projectName.includes(filterValues)) {
      filteredProjects.push(data[i])
    console.log(filteredProjects)
    }
    }

    return filteredProjects
  }

  ShowProjects(projectDetails)

  function ShowProjects  (data) {
    projectSection.innerHTML=""
    
    for (let i=0; i<data.length; i++) {
      // console.log(projectDetails[i])
    
      const boxDiv=document.createElement("div")
      boxDiv.classList.add("box");
      
    
    
      const imageDiv=document.createElement("div")
      imageDiv.classList.add("slide-img")
      const projectPic=document.createElement("img")
      projectPic.src=data[i]["image"];
      projectPic.setAttribute("data-filter",  projectDetails[i]["category"])
    
    
    
    
      const detailBox=document.createElement("div")
      detailBox.classList.add("detail-box");
      const title=document.createElement("p");
      title.innerHTML=data[i]["name"];
    
      const link=document.createElement("a");
      link.classList.add("btn-project");
      link.href=data[i]["atag"];
      link.target="_blank";
      link.innerHTML="Click here to view"
    
      boxDiv.append(imageDiv);
      imageDiv.append(projectPic)
      boxDiv.append(detailBox)
      detailBox.append(title,link)
     
      projectSection.append(boxDiv)
      
     
      
      
    }
    }

//Education part//


const educationDetails = [
  {
    id: 1,
    date: 'June 2021-September 2021',
    education_place: 'Developers Institute-Fullstack Development',
    details:'In June 27th, I started my second bootcamp to further my knowledge in backend part of Web Development'
  },

  {
    id: 2,
    date: 'April 2021-June 2021',
    education_place: 'ITC Frontend Web Development',
    details:'In April 2021, I started my first bootcamp, where I specialized learning frontend development.'
  },

  {
    id: 3,
    date: 'October 2018-September 2019',
    education_place: 'MA in National Security Haifa University',
    details:'I speacialized in Middle East politics and history.'
  },

  {
    id: 4,
    date: 'October 2011-October2015',
    education_place: 'BA in International Relations and Political Science in Yeditepe University',
    details:'In my first degree I specialized in Turkish and Middle Eastern politics and economy'
  },
  ];

const educationDiv=document.getElementById("education");

const educationSection=document.getElementsByClassName("timeline")[0];
console.log(educationSection)

const ulTags=document.getElementsByTagName("ul")[2];
console.log(ulTags)

for (let i=0; i<educationDetails.length; i++) {
  // console.log(educationDetails[i])

  const liTags=document.createElement("li");

  const timelineContent=document.createElement("div");
  timelineContent.classList.add("timeline-content");

  const datePart=document.createElement("h3");
  datePart.classList.add("date");
  datePart.innerHTML=educationDetails[i]["date"];

  const educationPlace=document.createElement("h1");
  educationPlace.innerHTML=educationDetails[i]["education_place"];

  const details=document.createElement("p");
  details.innerHTML=educationDetails[i]["details"]

  timelineContent.append(datePart,educationPlace,details)
 liTags.append(timelineContent)

 ulTags.append(liTags)
 console.log(ulTags)
}