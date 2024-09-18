

var stu_name=document.getElementById("stu_Name")
var fname=document.getElementById("F_Name")
var instituteName=document.getElementById("instituteName")
var UseSurName=document.getElementById("sur_Name");
var seldist=document.getElementById("dist")
var selGroup=document.getElementById("selGroup");


var URDU_SINDHI_Part1=document.getElementById("URDU_SINDHI_Part1");
var URDU_SINDHI_Part2=document.getElementById("URDU_SINDHI_Part2");

var Eng_1=document.getElementById("english_1");
var Eng_2=document.getElementById("english_2");

var islamiyatEthics=document.getElementById("islamiyatEthics");

var pakStudies=document.getElementById("pakStudies");

var phy_1=document.getElementById("physics_1");
var phy_2=document.getElementById("physics_2");

var chem_1=document.getElementById("chem_1");
var chem_2=document.getElementById("chem_2");

var math_1=document.getElementById("maths_1");
var math_2=document.getElementById("maths_2");

var totalMarks=1100;

var rendomNo=Math.random()*9+6
var practical=Math.floor(rendomNo)

var seatNoInput=document.getElementById("seatNoInput");




// HSC PART 01 GET DETA__________________________

 function hello(){
    if(URDU_SINDHI_Part1.value > 100){
        alert("Urdu / Sindhi (XI) Total Marks 100 please Correct Enter Marks");
        URDU_SINDHI_Part1.value=""
    }
    else if(URDU_SINDHI_Part2.value > 100){
        alert("Urdu / Sindhi (XII) Total Marks 100 please Correct Enter Marks");
        URDU_SINDHI_Part2.value=""
    }
    else if(Eng_1.value > 100){
        alert("English (XI) 100 please Correct Enter Marks");
        Eng_1.value=""
    }
    else if(Eng_2.value > 100){
        alert("English (XII) 100 please Correct Enter Marks");
        Eng_2.value=""
    }
    else if(islamiyatEthics.value > 50){
        alert("Islamiyat / Ethics (XI) Total Marks 50 please Correct Enter Marks");
        islamiyatEthics.value=""
    }
    else if(pakStudies.value > 50){
        alert("pakistan Studies (XII) Total Marks 50 please Correct Enter Marks");
        pakStudies.value=""
    }
    else if(phy_1.value > 85){
        alert("Physics (XI) Total Marks 85 please Correct Enter Marks");
        phy_1.value=""
    }
    else if(phy_2.value > 85){
        alert("Physics (XII) Total Marks 85 please Correct Enter Marks");
        phy_2.value=""
    }
    else if(chem_1.value > 85){
        alert("Chemistry (XI) Total Marks 85 please Correct Enter Marks");
        chem_1.value=""
    }
    else if(chem_2.value > 85){
        alert("Chemistry (XII) Total Marks 85 please Correct Enter Marks");
        chem_2.value=""
    }
    else if(seatNoInput.value > 10000 ){
        alert(" SEAT NO: 01 to 10000 please Correct SEAT NO Enter.");
        seatNoInput.value=""
    }
}

var x=document.getElementById("selGroup");

 function selectedGroup(){

     if(x.value === "PRE-MEDICAL"){
       document.getElementById("maths_1Lebal").innerText="Biology (I)"
       document.getElementById("maths_2Lebal").innerText="Biology (II)"

          if(math_1.value > 85){
             alert("Biology (I) Total Marks 85 please Correct Enter Marks");
             math_1.value=""
        }
        if(math_2.value > 85){
            alert("Biology (II) Total Marks 85 please Correct Enter Marks");
            math_2.value=""
        }
       
      }
    else{
      document.getElementById("maths_1Lebal").innerText="MATHEMATICS (I)"
      document.getElementById("maths_2Lebal").innerText="MATHEMATICS (II)"
    
      if(math_1.value > 100){
        alert("Mathematics (I) Total Marks 100 please Correct Enter Marks");
        math_1.value=""
      }
      if(math_2.value > 100){
        alert("Mathematics (II) Total Marks 100 please Correct Enter Marks");
        math_2.value=""
      }
     }

    }




function clicked(){
   
  
    var UrduSindhi_1=parseInt(URDU_SINDHI_Part1.value);
    var UrduSindhi_2=parseInt(URDU_SINDHI_Part2.value);
    var English_1=parseInt(Eng_1.value);
    var English_2=parseInt(Eng_2.value);
    var islamiyatEthics_1=parseInt(islamiyatEthics.value);
    var pakistanStudies_2=parseInt(pakStudies.value);
    var physics_1=parseInt(phy_1.value)
    var physics_2=parseInt(phy_2.value);
    var chemistry_1=parseInt(chem_1.value);
    var chemistry_2=parseInt(chem_2.value);
    var Mathematics_1=parseInt(math_1.value);
    var Mathematics_2=parseInt(math_2.value);

    var total_ObtMarks= 
         (UrduSindhi_1 + UrduSindhi_2)+
         (English_1 + English_2)+
         (islamiyatEthics_1 + pakistanStudies_2)+
         (physics_1 + physics_2 + practical + practical)+
         (chemistry_1 + chemistry_2 + practical + practical)+
         (Mathematics_1 + Mathematics_2);
    var persentage= (total_ObtMarks / totalMarks)*100;

    if( stu_name.value !== "" && fname.value !== "" && instituteName.value !== "" && UseSurName.value !== "" &&
        URDU_SINDHI_Part1.value !== "" && URDU_SINDHI_Part2.value !== "" && Eng_1.value !== "" && Eng_2.value !== "" &&
        islamiyatEthics.value !== "" && pakStudies.value !== "" && phy_1.value !== "" && phy_2.value !== "" &&
        chem_1.value !== "" && chem_2.value !== "" && math_1.value !== "" && math_2.value !== "" && seatNoInput.value !==""
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

var p1=document.createElement("div")
    p1.setAttribute("id","picture")
var p2=document.createElement("div");
         
var logoBoard=document.createElement("div");
    logoBoard.setAttribute("id","logoBoard")
    p2.appendChild(logoBoard);
var p3=document.createElement("div");
    p3.innerText=`Group: ${selGroup.value}`
    p3.setAttribute("id","groups")

var seatNo=document.createElement("div");
    seatNo.innerText=`SEAT NO: ${seatNoInput.value}`
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

// Students Information :---------------------------------------------------------
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
    userSelectDist.innerText= seldist.value;                 
    userSelectDist.setAttribute("id","tharParkar")
    dist.appendChild(userSelectDist);


// Generate Marsheet Start :----------------------------------------


var table=document.createElement("table");
    table.setAttribute("class","table");


var tr1=document.createElement("tr");
var th1=document.createElement("th");
    th1.innerText="SUBJECTS"
    th1.setAttribute("id","titleSubj")
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
    tr3_td3.innerText= UrduSindhi_1;
var tr3_td4=document.createElement("td") 
var tr3_td5=document.createElement("td") 
    tr3_td5.innerText= UrduSindhi_2;            
var tr3_td6=document.createElement("td")
var tr3_td7=document.createElement("td")
    tr3_td7.innerText= (UrduSindhi_1 + UrduSindhi_2) ;
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
    tr4_td3.innerText= English_1;
var tr4_td4=document.createElement("td") 
var tr4_td5=document.createElement("td")
    tr4_td5.innerText= English_2;
var tr4_td6=document.createElement("td")
var tr4_td7=document.createElement("td")
    tr4_td7.innerText= (English_1 + English_2)

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
     tr5_td3.innerText= islamiyatEthics_1;
var  tr5_td4=document.createElement("td") 
var  tr5_td5=document.createElement("td") 
var  tr5_td6=document.createElement("td")
var  tr5_td7=document.createElement("td")
     tr5_td7.innerText= islamiyatEthics_1;

    tr5.appendChild(tr5_td1);
    tr5.appendChild(tr5_td2)
    tr5.appendChild(tr5_td3)
    tr5.appendChild(tr5_td4)
    tr5.appendChild(tr5_td5)
    tr5.appendChild(tr5_td6)
    tr5.appendChild(tr5_td7)
    
var tr6=document.createElement("tr");
var tr6_td1=document.createElement("td") 
    tr6_td1.innerText="PAKISTAN STUDIES"                          
    tr6_td1.setAttribute("class","subject")     
var tr6_td2=document.createElement("td")
    tr6_td2.innerText="50"
var tr6_td3=document.createElement("td") 
var tr6_td4=document.createElement("td") 
var tr6_td5=document.createElement("td") 
    tr6_td5.innerText= pakistanStudies_2
var tr6_td6=document.createElement("td")
var tr6_td7=document.createElement("td")
    tr6_td7.innerText= pakistanStudies_2

    tr6.appendChild(tr6_td1)
    tr6.appendChild(tr6_td2)
    tr6.appendChild(tr6_td3)
    tr6.appendChild(tr6_td4)
    tr6.appendChild(tr6_td5)
    tr6.appendChild(tr6_td6)
    tr6.appendChild(tr6_td7)

var tr7=document.createElement("tr");
var tr7_td1=document.createElement("td")
     tr7_td1.innerText="MATHEMATICS I & II"                  
     tr7_td1.setAttribute("class","subject");
     if(x.value === "PRE-MEDICAL"){
        tr7_td1.innerText="Biology I & II"; 
        var prac= practical;                 
      }
      else{
        tr7_td1.innerText="MATHEMATICS I & II"
        var prac= "";                 
                  
    }

var tr7_td2=document.createElement("td");
    tr7_td2.innerText="200"
var tr7_td3=document.createElement("td")
    tr7_td3.innerText= Mathematics_1;     
var tr7_td4=document.createElement("td")
    tr7_td4.innerText= prac;
var tr7_td5=document.createElement("td");
    tr7_td5.innerText= Mathematics_2
var tr7_td6=document.createElement("td")
    tr7_td6.innerText= prac;
var tr7_td7=document.createElement("td")
    tr7_td7.innerText= Mathematics_1 + Mathematics_2 + prac + prac;

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
    tr8_td1.setAttribute("class","subject");
var tr8_td2=document.createElement("td");
    tr8_td2.innerText="200"
var tr8_td3=document.createElement("td"); 
     tr8_td3.innerText= physics_1;                        
var tr8_td4=document.createElement("td");
    tr8_td4.innerText=practical
var tr8_td5=document.createElement("td");
    tr8_td5.innerText= physics_2;
var tr8_td6=document.createElement("td");
    tr8_td6.innerText=practical
var tr8_td7=document.createElement("td");
    tr8_td7.innerText= (physics_1 + physics_2 + practical + practical);

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
    tr9_td3.innerText= chemistry_1;
var tr9_td4=document.createElement("td");
    tr9_td4.innerText=practical;
var tr9_td5=document.createElement("td");
    tr9_td5.innerText= chemistry_2;                     
var tr9_td6=document.createElement("td");
    tr9_td6.innerText=practical;
var tr9_td7=document.createElement("td");
    tr9_td7.innerText= chemistry_1 + chemistry_2 + practical + practical;

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
    tr10_td7.innerText=total_ObtMarks
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
    grade.setAttribute("class","grade");

    if(total_ObtMarks > 880){
        grade.innerText="A-1"
    }
    else if(total_ObtMarks > 770 && total_ObtMarks < 879) {
        grade.innerText="A"
    } 
    else if(total_ObtMarks > 660 && total_ObtMarks < 769){
        grade.innerText="B"
    }
    else if(total_ObtMarks > 550 && total_ObtMarks < 659){
        grade.innerText="C"
    }
    else if(total_ObtMarks > 440 && total_ObtMarks < 549){
        grade.innerText="D"
    }
    else {
        grade.innerText="E"
    }

    gradeCon.appendChild(grade);
    scanGradeCon.appendChild(qrCode);
    scanGradeCon.appendChild(gradeCon)
    marsheetCon.appendChild(scanGradeCon);
    marsheetCon.appendChild(date);

var signContainer=document.createElement("div");
    signContainer.setAttribute("class","signContainer")

var Last1=document.createElement("div");
var Last2=document.createElement("div");
    Last2.setAttribute("class","controllarSign")
var Last3=document.createElement("div");
    Last3.innerText="Received Rs:_______ Challan:______Dated:______ Bank Code /Name:_______"
    Last3.setAttribute("class","Last3")
var Last4=document.createElement("div");
    Last4.innerText="Prepared by_________ Read by_________ Checked by________"
    Last1.appendChild(Last4)
var certificateNo=document.createElement("div");
    certificateNo.innerText="Certificate No. 01920"
    Last1.appendChild(Last3)
    Last1.appendChild(Last4)

   signContainer.appendChild(Last1)
   signContainer.appendChild(Last2)
   marsheetCon.appendChild(signContainer);
   marsheetCon.appendChild(certificateNo);

 // clicked on button input value is empty
    stu_name.value = "" 
    fname.value = "" 
    instituteName.value = ""
    UseSurName.value = ""
    URDU_SINDHI_Part1.value = "" 
    URDU_SINDHI_Part2.value = "" 
    Eng_1.value = "" 
    Eng_2.value = ""
    islamiyatEthics.value = ""
    pakStudies.value = "" 
    phy_1.value = "" 
    phy_2.value = "" 
    chem_1.value = ""  
    chem_2.value = "" 
    math_1.value = "" 
    math_2.value = "" 

}
else{
   alert("Please Enter Data")
}
}



