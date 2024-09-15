var saveMarsheet=document.getElementById("saveMarsheet");

var marsheetCon=document.createElement("div");
    marsheetCon.setAttribute("class","marsheetCon");
var boardTileHdr=document.createElement("div");
boardTileHdr.innerText="Board of InterMediate & Secondry Education  Mirpurkhas Sindh"
boardTileHdr.setAttribute("id","boardTileHdr");


// Picture setion start
var picSec=document.createElement("div");
    picSec.setAttribute("id","picSec")

   var   p1=document.createElement("div")
         p1.innerHTML="pic"
         p1.setAttribute("id","picture")
   var   p2=document.createElement("div");
         p2.innerText="Mirpurkhas Sindh"
   var   logoBoard=document.createElement("div");
         logoBoard.setAttribute("id","logoBoard")
         p2.appendChild(logoBoard)
   var   p3=document.createElement("div");
         p3.innerText="Group: "
   var  seatNo=document.createElement("div")
        seatNo.innerText="Seat No: 34332";
         p3.appendChild(seatNo);

picSec.appendChild(p1)
picSec.appendChild(p2)
picSec.appendChild(p3)



var marksTitle=document.createElement("div")
    marksTitle.innerText="MARKS CERTIFICATE"
    marksTitle.setAttribute("id","marksTitle")
var Part=document.createElement("div")
    Part.innerText="HSC ANUAL EXAMINATION 2023"
    marksTitle.appendChild(Part)


// Picture setion Ended

// Students Information 
var studentsData=document.createElement("div");

var stuname=document.createElement("div");
    stuname.innerText="NAME:"
    stuname.setAttribute("class","studentsbio")
    var UserName=document.createElement("div");
    UserName.innerText="dynamic"
    stuname.appendChild(UserName);

var Fname=document.createElement("div");
    Fname.innerText="FATHER'S NAME:"
    Fname.setAttribute("class","studentsbio")
    var userFName=document.createElement("div")
    userFName.innerText="dynamic"
    Fname.appendChild(userFName);

var surName=document.createElement("div");
     surName.innerText="SURNAME:"
     surName.setAttribute("class","studentsbio");
     var userSurName=document.createElement("div")
     userSurName.innerText="dynamic"
     surName.appendChild(userSurName);


var institute=document.createElement("div");
    var userInstitute=document.createElement("div")
    institute.innerText="INSTITUTE:"
    institute.setAttribute("class","studentsbio")
    var userInstitute=document.createElement("div")
    userInstitute.innerText="dynamic"
    institute.appendChild(userInstitute);


var dist=document.createElement("div");
    dist.innerText="DISTRICT:"
    dist.setAttribute("class","studentsbio")
    userSelectDist=document.createElement("div");
    userSelectDist.innerText="Tharparkar";
    dist.appendChild(userSelectDist);

    
    studentsData.appendChild(stuname)
    studentsData.appendChild(Fname)
    studentsData.appendChild(surName)
    studentsData.appendChild(institute)
    studentsData.appendChild(dist)




marsheetCon.appendChild(boardTileHdr);
saveMarsheet.appendChild(marsheetCon)
marsheetCon.appendChild(picSec);
marsheetCon.appendChild(marksTitle);
marsheetCon.appendChild(studentsData);


