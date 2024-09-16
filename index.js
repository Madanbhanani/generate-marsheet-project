

var stu_name=document.getElementById("stu_Name")
var fname=document.getElementById("F_Name")
var instituteName=document.getElementById("instituteName")
var UseSurName=document.getElementById("sur_Name");
var seldist=document.getElementById("dist")
var selGroup=document.getElementById("selGroup");

var URDU_SINDHI_Part1=document.getElementById("URDU_SINDHI_Part1");
var URDU_SINDHI_Part2=document.getElementById("URDU_SINDHI_Part2");

var eng_part1=document.getElementById("englishPart1");
var eng_part2=document.getElementById("englishPart2");

var islamiyatEthics_part1=document.getElementById("islamiyatEthics_part1");

var pakStudies_part1=document.getElementById("pakStudies_part2");

var physics_part1=document.getElementById("physics_part1");
var physics_part2=document.getElementById("physics_part2");

var chem_part1=document.getElementById("chem_part1");
var chem_part2=document.getElementById("chem_part2");

var maths_part1=document.getElementById("maths_part1");
var maths_part2=document.getElementById("maths_part2");

var totalMarks=1100;

var rendomNo=Math.random()*9+6
var practical=Math.floor(rendomNo)


function clicked(){



    if(stu_name.value !== "" && fname.value !== "" && UseSurName.value !== "" && instituteName !== "" &&
        URDU_SINDHI_Part1.value !== "" && URDU_SINDHI_Part2.value !== "" && eng_part1.value !== "" && eng_part2 !== "" &&
        islamiyatEthics_part1.value !== "" && pakStudies_part1.value !== "" && physics_part1.value !== "" && physics_part2 !== "" &&
        chem_part1.value !== "" && chem_part2.value !== "" && maths_part1.value !== "" && maths_part2 !== ""


    ){
       
   
var saveMarsheet=document.getElementById("saveMarsheet");
var marsheetCon=document.createElement("div");
    marsheetCon.setAttribute("class","marsheetCon");
var boardTileHdr=document.createElement("div");
    boardTileHdr.innerText="𝕭𝖔𝖆𝖗𝖉 𝕺𝖋 𝕴𝖓𝖙𝖊𝖗𝖒𝖊𝖉𝖎𝖆𝖙𝖊 & 𝕾𝖊𝖈𝖔𝖓𝖉𝖆𝖗𝖞 𝕰𝖉𝖚𝖈𝖆𝖙𝖎𝖔𝖓 𝕸𝖎𝖗𝖕𝖚𝖗𝖐𝖍𝖆𝖘 𝕾𝖎𝖓𝖉𝖍"
    boardTileHdr.setAttribute("id","boardTileHdr");


// Picture setion start
var picSec=document.createElement("div");
    picSec.setAttribute("id","picSec")

   var   p1=document.createElement("div")
         p1.setAttribute("id","picture")
   var   p2=document.createElement("div");
         
   var   logoBoard=document.createElement("div");
         logoBoard.setAttribute("id","logoBoard")
        //  logoBoard.
         p2.appendChild(logoBoard)

   var   p3=document.createElement("div");
         p3.innerText=`Group: ${selGroup.value}`
         p3.setAttribute("id","groups")

   var  seatNo=document.createElement("div")
        seatNo.innerText="Seat No: 34332";
        seatNo.setAttribute("id","seatNo")
         p3.appendChild(seatNo);

picSec.appendChild(p1)
picSec.appendChild(p2)
picSec.appendChild(p3)



var marksTitle=document.createElement("div")
    marksTitle.innerText="MARKS CERTIFICATE"
    marksTitle.setAttribute("id","marksTitle")
    
var Part=document.createElement("div")
    Part.innerText="HSC ANUAL EXAMINATION 2023"
    Part.setAttribute("id","Part")
    marksTitle.appendChild(Part)


// Picture setion Ended

// Students Information 
var studentsData=document.createElement("div");

var stuname=document.createElement("div");
    stuname.innerText="NAME:"
    stuname.setAttribute("class","studentsbio")
var UserName=document.createElement("div");
    UserName.innerText= stu_name.value;                     
    UserName.setAttribute("id","fullName")
    stuname.appendChild(UserName);

var Fname=document.createElement("div");
    Fname.innerText="FATHER'S NAME:"
    Fname.setAttribute("class","studentsbio")
    var userFName=document.createElement("div")
    userFName.innerText= fname.value;    
    userFName.setAttribute("id","fullFName")
    Fname.appendChild(userFName);

var surName=document.createElement("div");
     surName.innerText="SURNAME:"
     surName.setAttribute("class","studentsbio");
     var userSurName=document.createElement("div")
     userSurName.innerText= UseSurName.value;                    
     userSurName.setAttribute("id","surName")
     surName.appendChild(userSurName);


var institute=document.createElement("div");
    var userInstitute=document.createElement("div")
    institute.innerText="INSTITUTE:"
    institute.setAttribute("class","studentsbio")
    var userInstitute=document.createElement("div")
    userInstitute.innerText= instituteName.value  ;       
    userInstitute.setAttribute("id","institute")
    institute.appendChild(userInstitute);

var dist=document.createElement("div");
    dist.innerText="DISTRICT:"
    dist.setAttribute("class","studentsbio")
    userSelectDist=document.createElement("div");
    userSelectDist.innerText= seldist.value;                  // userSelectDist ***********
    userSelectDist.setAttribute("id","tharParkar")
    dist.appendChild(userSelectDist);


// table formtat data


var table=document.createElement("table");
    table.setAttribute("class","table");


var tr1=document.createElement("tr");
var th1=document.createElement("th");
    th1.innerText="SUBJECT"
    th1.setAttribute("rowspan","2")
var th2=document.createElement("th");
    th2.innerText="MAX. MARKS"
    th2.setAttribute("rowspan","2")
var th3=document.createElement("th");
    th3.innerText="DETAIL MARKS OBTAINED"
    th3.setAttribute("colspan","4")
var th4=document.createElement("th");
    th4.innerText="TOTAL OBTAINED MARKS"
    th4.setAttribute("rowspan","2")
    tr1.appendChild(th1)
    tr1.appendChild(th2)
    tr1.appendChild(th3)
    tr1.appendChild(th4)
  

var tr2=document.createElement("tr");
var tr2_th1=document.createElement("th");
    tr2_th1.innerText="XI (TH)"
var tr2_th2=document.createElement("th");
    tr2_th2.innerText="XI (PR)"
var tr2_th3=document.createElement("th");
    tr2_th3.innerText="XII (TH)"
var tr2_th4=document.createElement("th");
    tr2_th4.innerText="XII (PR)"
    tr2.appendChild(tr2_th1)
    tr2.appendChild(tr2_th2)
    tr2.appendChild(tr2_th3)
    tr2.appendChild(tr2_th4)
 



var tr3=document.createElement("tr");
var tr3_td1=document.createElement("td"); 
    tr3_td1.innerText="URDU / SINDHI (SALEES) I & II"
    tr3_td1.setAttribute("class","subject");
var tr3_td2=document.createElement("td");
    tr3_td2.innerText="200"
var tr3_td3=document.createElement("td");
    tr3_td3.innerText= URDU_SINDHI_Part1;
var tr3_td4=document.createElement("td") 
var tr3_td5=document.createElement("td") 
    tr3_td5.innerText= URDU_SINDHI_Part2;             
var tr3_td6=document.createElement("td")
var tr3_td7=document.createElement("td")
    tr3_td7.innerText= URDU_SINDHI_Part1.value + URDU_SINDHI_Part2.value;
    tr3.appendChild(tr3_td1)
    tr3.appendChild(tr3_td2)
    tr3.appendChild(tr3_td3)
    tr3.appendChild(tr3_td4)
    tr3.appendChild(tr3_td5)
    tr3.appendChild(tr3_td6)
    tr3.appendChild(tr3_td7)

var tr4=document.createElement("tr");
var tr4_td1=document.createElement("td") 
    tr4_td1.innerText="ENGLISH"
    tr4_td1.setAttribute("class","subject");

var tr4_td2=document.createElement("td");
    tr4_td2.innerText="200"
var tr4_td3=document.createElement("td")
    tr4_td3.innerText= eng_part1.value ;
var tr4_td4=document.createElement("td") 
var tr4_td5=document.createElement("td")
    tr4_td5.innerText= eng_part2.value
var tr4_td6=document.createElement("td")
var tr4_td7=document.createElement("td")
    tr4_td7.innerText= "here total"

    tr4.appendChild(tr4_td1)
    tr4.appendChild(tr4_td2)
    tr4.appendChild(tr4_td3)
    tr4.appendChild(tr4_td4)
    tr4.appendChild(tr4_td5)
    tr4.appendChild(tr4_td6)
    tr4.appendChild(tr4_td7)

var  tr5=document.createElement("tr");
var  tr5_td1=document.createElement("td")
     tr5_td1.innerText="ISLAMIYAT / ETHICS"      
     tr5_td1.setAttribute("class","subject");
var  tr5_td2=document.createElement("td");
     tr5_td2.innerText="50"                    
var  tr5_td3=document.createElement("td")
     tr5_td3.innerText= islamiyatEthics_part1.value;
var  tr5_td4=document.createElement("td") 
var  tr5_td5=document.createElement("td") 
var  tr5_td6=document.createElement("td")
var  tr5_td7=document.createElement("td")
     tr5_td7.innerText= islamiyatEthics_part1.value;

    tr5.appendChild(tr5_td1);
    tr5.appendChild(tr5_td2)
    tr5.appendChild(tr5_td3)
    tr5.appendChild(tr5_td4)
    tr5.appendChild(tr5_td5)
    tr5.appendChild(tr5_td6)
    tr5.appendChild(tr5_td7)
    


var tr6=document.createElement("tr");
var tr6_td1=document.createElement("td") 
    tr6_td1.innerText="PAKISTAN STUDIES"                                //+++++++++++++
    tr6_td1.setAttribute("class","subject")     
var tr6_td2=document.createElement("td")
    tr6_td2.innerText="50"
var tr6_td3=document.createElement("td") 
var tr6_td4=document.createElement("td") 
var tr6_td5=document.createElement("td") 
    tr6_td5.innerText= pakStudies_part1.value;
var tr6_td6=document.createElement("td")
var tr6_td7=document.createElement("td")
    tr6_td7.innerText= pakStudies_part1.value;

    tr6.appendChild(tr6_td1)
    tr6.appendChild(tr6_td2)
    tr6.appendChild(tr6_td3)
    tr6.appendChild(tr6_td4)
    tr6.appendChild(tr6_td5)
    tr6.appendChild(tr6_td6)
    tr6.appendChild(tr6_td7)

var tr7=document.createElement("tr");
var tr7_td1=document.createElement("td")
     tr7_td1.innerText="MATHEMATICS I & II"                          //+++++++++++++++++++
     tr7_td1.setAttribute("class","subject")
var tr7_td2=document.createElement("td");
    tr7_td2.innerText="200"
var tr7_td3=document.createElement("td")
    tr7_td3.innerText=maths_part1.value;     
var tr7_td4=document.createElement("td") 
var tr7_td5=document.createElement("td");
    tr7_td5.innerText=maths_part1.value 
var tr7_td6=document.createElement("td")
    tr7_td6.innerText=""
var tr7_td7=document.createElement("td")
    tr7_td7.innerText="total here";

    tr7.appendChild(tr7_td1)
    tr7.appendChild(tr7_td2)
    tr7.appendChild(tr7_td3)
    tr7.appendChild(tr7_td4)
    tr7.appendChild(tr7_td5)
    tr7.appendChild(tr7_td6)
    tr7.appendChild(tr7_td7)

var tr8=document.createElement("tr");
var tr8_td1=document.createElement("td");
    tr8_td1.innerText="PHYSICS I & II"
    tr8_td1.setAttribute("class","subject")
var tr8_td2=document.createElement("td");
    tr8_td2.innerText="200"
var tr8_td3=document.createElement("td") 
     tr8_td3.innerText=physics_part1.value;                        
var tr8_td4=document.createElement("td");
    tr8_td4.innerText=practical
var tr8_td5=document.createElement("td");
    tr8_td5.innerText=physics_part2.value
var tr8_td6=document.createElement("td")
    tr8_td6.innerText=practical
var tr8_td7=document.createElement("td")
    tr8_td7.innerText="here total"

    tr8.appendChild(tr8_td1)
    tr8.appendChild(tr8_td2)
    tr8.appendChild(tr8_td3)
    tr8.appendChild(tr8_td4)
    tr8.appendChild(tr8_td5)
    tr8.appendChild(tr8_td6)
    tr8.appendChild(tr8_td7)


var tr9=document.createElement("tr");
var tr9_td1=document.createElement("td") 
    tr9_td1.innerText="CHEMISTRY I & II"
    tr9_td1.setAttribute("class","subject")
var tr9_td2=document.createElement("td")
    tr9_td2.innerText="200"
var tr9_td3=document.createElement("td") 
    tr9_td3.innerText=chem_part1.value;
var tr9_td4=document.createElement("td");
    tr9_td4.innerText=practical;
var tr9_td5=document.createElement("td");
    tr9_td5.innerText= chem_part2.value;                           
var tr9_td6=document.createElement("td");
    tr9_td6.innerText=practical;
var tr9_td7=document.createElement("td");
    tr9_td7.innerText="total here"

    tr9.appendChild(tr9_td1)
    tr9.appendChild(tr9_td2)
    tr9.appendChild(tr9_td3)
    tr9.appendChild(tr9_td4)
    tr9.appendChild(tr9_td5)
    tr9.appendChild(tr9_td6)
    tr9.appendChild(tr9_td7)

var tr10=document.createElement("tr");
var tr10_td1=document.createElement("td")
    tr10_td1.innerText="TOTAL" 
    tr10_td1.setAttribute("class","subject")
var tr10_td2=document.createElement("td")
    tr10_td2.innerText=totalMarks;
var tr10_td3=document.createElement("td"); 
var tr10_td4=document.createElement("td") 
var tr10_td5=document.createElement("td") 
var tr10_td6=document.createElement("td")
var tr10_td7=document.createElement("td")
    tr10.appendChild(tr10_td1)
    tr10.appendChild(tr10_td2)
    tr10.appendChild(tr10_td3)
    tr10.appendChild(tr10_td4)
    tr10.appendChild(tr10_td5)
    tr10.appendChild(tr10_td6)
    tr10.appendChild(tr10_td7)

var tr11=document.createElement("tr");
var tr11_td1=document.createElement("td")
    tr11_td1.setAttribute("colspan","7") 
    tr11_td1.setAttribute("class","subject")
    tr11.appendChild(tr11_td1)

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

marsheetCon.appendChild(table);
marsheetCon.appendChild(tr1);
marsheetCon.appendChild(tr2);
marsheetCon.appendChild(tr3);
marsheetCon.appendChild(tr4);
marsheetCon.appendChild(tr5);
marsheetCon.appendChild(tr6);
marsheetCon.appendChild(tr8);
marsheetCon.appendChild(tr9);
marsheetCon.appendChild(tr7);
marsheetCon.appendChild(tr10);
marsheetCon.appendChild(tr11);


//______________ Last Selection___________

var scanGradeCon=document.createElement("div");
    scanGradeCon.setAttribute("class","scanGradeCon")

var qrCode=document.createElement("div");
    qrCode.setAttribute("class","qrCode");
var date=document.createElement("p");
    date.innerText="24 / 10 / 2023"
    date.setAttribute("class","date")

var gradeCon=document.createElement("div");
    gradeCon.innerText="GRADE"
    gradeCon.setAttribute("class","gradecon")
var grade=document.createElement("div");
    grade.innerText="A"
    grade.setAttribute("class","grade")
   gradeCon.appendChild(grade);
   scanGradeCon.appendChild(qrCode);
   scanGradeCon.appendChild(gradeCon)
   marsheetCon.appendChild(scanGradeCon);
   marsheetCon.appendChild(date);




var signContainer=document.createElement("div");
signContainer.setAttribute("class","signContainer")

var Last1=document.createElement("div");
var Last2=document.createElement("div");
    Last2.innerText="asasas"
    Last2.setAttribute("class","controllarSign")
var Last3=document.createElement("div");
    Last3.innerText="Received Rs:_______ Challan:______Dated:______ Bank Code /Name:_______"
    Last3.setAttribute("class","Last3")
var Last4=document.createElement("div");
    Last4.innerText="Prepared by___________ Read by______________ Checked by_____________"
    Last1.appendChild(Last4)
var certificateNo=document.createElement("div");
    certificateNo.innerText="Certificate No. 01920"
Last1.appendChild(Last3)
Last1.appendChild(Last4)

signContainer.appendChild(Last1)
signContainer.appendChild(Last2)
marsheetCon.appendChild(signContainer);
marsheetCon.appendChild(certificateNo);



}
else{
   alert("Please Enter Data")

}
}

