
function callingforgrade(name,symbolno,dofb,grade,optsub,engt,engp,nept,nepp,matt,matp,phyt,phyp,chet,chep,comt,comp){


    // JS For inputed item like name,symbol,class..

    // #name

const namee=name;
document.getElementById('name1').innerHTML=namee;

// class

const class1=grade;
document.getElementById("cls1").innerHTML=class1;

// #symbolno:
const sym=symbolno;
document.getElementById('sym1').innerHTML=sym;

// #dateofbirth
const dob=dofb;
document.getElementById('dob1').innerHTML=dob;


// for change of optional subject

const sub=optsub;
if(sub=="biology"){
    document.getElementById('change').innerHTML="BIOLOGY";
    document.getElementById("change1").innerHTML="3.75(TH)<br>1.25(IN)"
}
else if(sub=="computer"){
    document.getElementById('change').innerHTML="COMPUTER SCIENCE";
    document.getElementById("change1").innerHTML="2.50(TH)<br>2.50(IN)"
}else{
   
   document.getElementById('change').innerHTML="FINANCE";
   document.getElementById("change1").innerHTML="3.75(TH)<br>1.25(IN)"
}

// for gpa

// const gp=document.getElementById('getgpa').value;
// document.getElementById('gpatotal').innerHTML=gp;





    // marks of english subject
  
   const ength=engt;
   const engpr=engp;
   
   // document.getElementById('engthpr').innerHTML=`${ength}<br> ${engpr}`;

//    for grade i.e A,B+...arguments.  

//   for theory of english .....
if(ength>67 && ength<76)
{
   theng='4.0';
}else if(ength>59 && ength<68){
   theng='3.6';
}else if(ength>52 && ength<60){
   theng='3.2';
}else if(ength>44 && ength<53){
   theng='2.8';
}else if(ength>37 && ength<45){
   theng='2.4';
}else if(ength>29 && ength<38){
   theng='2.0';
}else if(ength>26 && ength<30){
   theng="1.6"
}else{
   theng="NG"
}




// for practical  marks check of marksout of 25
if(engpr>22 && engpr<26)
{
   preng='4.0';
}else if(engpr>19 && engpr<23){
   preng='3.6';
}else if(engpr>17 && engpr<20){
   preng='3.2';
}else if(engpr>14 && engpr<18){
   preng='2.8';
}else if(engpr>12 && engpr<15){
   preng='2.4';
}else if(engpr>9 && engpr<13){
   preng='2.0';
}else{
   preng="NG"
}

    document.getElementById('engthpr').innerHTML=`${theng}<br> ${preng}`;

    if(theng==4.0){
      gnt="A+"
      }
      else if(theng==3.6){
       gnt="A" 
      } 
      else if(theng==3.2){
          gnt="B+"
      }else if(theng==2.8){
      gnt="B"    
      }else if(theng==2.4){
      gnt="C+"
      }
      else if(theng==2.0){
          gnt="C"
      }else if(theng==1.6){
          gnt="D"
      }else{
          gnt="NG"
      }
      
if(preng==4.0){
    document.getElementById('gr1').innerHTML=`${gnt}<br>A+`;
}else if(preng==3.6){
    document.getElementById('gr1').innerHTML=`${gnt}<br>A`;
}else if(preng==3.2){
    document.getElementById('gr1').innerHTML=`${gnt}<br>B+`;
}else if(preng==2.8){
    document.getElementById('gr1').innerHTML=`${gnt}<br>B`;
}else if(preng==2.4){
    document.getElementById('gr1').innerHTML=`${gnt}<br>C+`;
}else if(preng==2.0){
    document.getElementById('gr1').innerHTML=`${gnt}<br>C`;
}else if(preng==1.6){
    document.getElementById('gr1').innerHTML=`${gnt}<br>D`;
}else{
    document.getElementById('gr1').innerHTML=`${gnt}<br>NG`;
}

// for grade point.....i.e 4.0, 3.6 , 3.2  .....


//   for final grade

  
 const gpath =theng;
 const gpapr=preng;
 
 const finalgpa=(gpath*3+gpapr*1)/4;
//  console.log(finalgpa);
 
if(finalgpa>3.6 && finalgpa<4.1){
  fingr="A+"
}else if(finalgpa>3.2 && finalgpa<3.61){
   fingr="A"
}else if(finalgpa>2.8 && finalgpa<3.21){
   fingr="B+"
}else if(finalgpa>2.4 && finalgpa<2.81){
   fingr="B"
}else if(finalgpa>2.0 && finalgpa<2.41){
   fingr="C+"
}else if(finalgpa>1.6 && finalgpa<2.01){
   fingr="C"
}else if(finalgpa=="1.6"){
   fingr="D"
}else{
   fingr="NG"
}



  document.getElementById('mark1').innerHTML=fingr;

  switch(fingr){
    case"A+":
    document.getElementById('remarkeng').innerHTML="Outstanding";
    break;
    case"A":
    document.getElementById('remarkeng').innerHTML="Excellent";
    break;
    case"B+":
    document.getElementById('remarkeng').innerHTML="Very Good";
    break;
    case"B":
    document.getElementById('remarkeng').innerHTML="Good";
    break;
    case"C+":
    document.getElementById('remarkeng').innerHTML="Satisfactory";
    break;
    case"C":
    document.getElementById('remarkeng').innerHTML="Acceptable";
    break;
    case"D":
    document.getElementById('remarkeng').innerHTML="Basic";
    break;
    default:
    document.getElementById('remarkeng').innerHTML="Not Graded";
  }







    // marks of nepali subject
  
    const nepth=nept;
    const neppr=nepp;
    
 
   //  check of theory marks...
   if(nepth>67 && nepth<76)
   {
      thnep='4.0';
   }else if(nepth>59 && nepth<68){
      thnep='3.6';
   }else if(nepth>52 && nepth<60){
      thnep='3.2';
   }else if(nepth>44 && nepth<53){
      thnep='2.8';
   }else if(nepth>37 && nepth<45){
      thnep='2.4';
   }else if(nepth>29 && nepth<38){
      thnep='2.0';
   }else if(nepth>26 && nepth<30){
      thnep="1.6";
   }else{
      thnep='NG';
   }


   // check of practical marks..

   if(neppr>22 && neppr<26)
   {
      prnep='4.0';
   }else if(neppr>19 && neppr<23){
      prnep='3.6';
   }else if(neppr>17 && neppr<20){
      prnep='3.2';
   }else if(neppr>14 && neppr<18){
      prnep='2.8';
   }else if(neppr>12 && neppr<15){
      prnep='2.4';
   }else if(neppr>9 && neppr<13){
      prnep='2.0';
   }else{
      prnep="NG";
   }

   document.getElementById('nepthpr').innerHTML=`${thnep}<br> ${prnep}`;


 //    for grade i.e A,B+...arguments.  
    if(thnep==4.0){
 gnt="A+"
 }
 else if(thnep==3.6){
  gnt="A" 
 } 
 else if(thnep==3.2){
     gnt="B+"
 }else if(thnep==2.8){
 gnt="B"    
 }else if(thnep==2.4){
 gnt="C+"
 }
 else if(thnep==2.0){
     gnt="C"
 }else if(thnep==1.6){
     gnt="D"
 }else{
     gnt="NG"
 }
 
 
 if(prnep==4.0){
     document.getElementById('gr2').innerHTML=`${gnt}<br>A+`;
 }else if(prnep==3.6){
     document.getElementById('gr2').innerHTML=`${gnt}<br>A`;
 }else if(prnep==3.2){
     document.getElementById('gr2').innerHTML=`${gnt}<br>B+`;
 }else if(prnep==2.8){
     document.getElementById('gr2').innerHTML=`${gnt}<br>B`;
 }else if(prnep==2.4){
     document.getElementById('gr2').innerHTML=`${gnt}<br>C+`;
 }else if(prnep==2.0){
     document.getElementById('gr2').innerHTML=`${gnt}<br>C`;
 }else if(prnep==1.6){
     document.getElementById('gr2').innerHTML=`${gnt}<br>D`;
 }else{
     document.getElementById('gr2').innerHTML=`${gnt}<br>NG`;
 }
 
 //   for final grade + remark
 
   // const fingr2=document.getElementById("nepgr").value;
     
 const gpath1 =thnep;
 const gpapr1=prnep;
 
 const finalgpa1=(gpath1*2.25+gpapr1*0.75)/3;
//  console.log(finalgpa1);

 
if(finalgpa1>3.6 && finalgpa1<4.1){
   fingr2="A+"
}else if(finalgpa1>3.2 && finalgpa1<3.61){
   fingr2="A"
}else if(finalgpa1>2.8 && finalgpa1<3.21){
   fingr2="B+"
}else if(finalgpa1>2.4 && finalgpa1<2.81){
   fingr2="B"
}else if(finalgpa1>2.0 && finalgpa1<2.41){
   fingr2="C+"
}else if(finalgpa1>1.6 && finalgpa1<2.01){
   fingr2="C"
}else if(finalgpa1=="1.6"){
   fingr2="D"
}else{
   fingr2="NG"
}

   document.getElementById('mark2').innerHTML=fingr2;
   switch(fingr2){
     case"A+":
     document.getElementById('remarknep').innerHTML="Outstanding";
     break;
     case"A":
     document.getElementById('remarknep').innerHTML="Excellent";
     break;
     case"B+":
     document.getElementById('remarknep').innerHTML="Very Good";
     break;
     case"B":
     document.getElementById('remarknep').innerHTML="Good";
     break;
     case"C+":
     document.getElementById('remarknep').innerHTML="Satisfactory";
     break;
     case"C":
     document.getElementById('remarknep').innerHTML="Acceptable";
     break;
     case"D":
     document.getElementById('remarknep').innerHTML="Basic";
     break;
     default:
     document.getElementById('remarknep').innerHTML="Not graded";
   }
   

   





  // marks of mathematics subject
  

  const mathth=matt;
  const mathpr=matp;
  
//   document.getElementById('maththpr').innerHTML=`${mathth}<br> ${mathpr}`;


// check of theory marks ..
if(mathth>67 && mathth<76)
{
   thmath='4.0';
}else if(mathth>59 && mathth<68){
   thmath='3.6';
}else if(mathth>52 && mathth<60){
   thmath='3.2';
}else if(mathth>44 && mathth<53){
   thmath='2.8';
}else if(mathth>37 && mathth<45){
   thmath='2.4';
}else if(mathth>29 && mathth<38){
   thmath='2.0';
}else if(mathth>26 && mathth<30){
   thmath="1.6";
}else{
   thmath='NG';
}


// check of practical marks..
if(mathpr>22 && mathpr<26)
{
   prmath='4.0';
}else if(mathpr>19 && mathpr<23){
   prmath='3.6';
}else if(mathpr>17 && mathpr<20){
   prmath='3.2';
}else if(mathpr>14 && mathpr<18){
   prmath='2.8';
}else if(mathpr>12 && mathpr<15){
   prmath='2.4';
}else if(mathpr>9 && mathpr<13){
   prmath='2.0';
}else{
   prmath="NG";
}


   document.getElementById('maththpr').innerHTML=`${thmath}<br> ${prmath}`;


//    for grade i.e A,B+...arguments.  
  if(thmath==4.0){
gnt="A+"
}
else if(thmath==3.6){
gnt="A" 
} 
else if(thmath==3.2){
   gnt="B+"
}else if(thmath==2.8){
gnt="B"    
}else if(thmath==2.4){
gnt="C+"
}
else if(thmath==2.0){
   gnt="C"
}else if(thmath==1.6){
   gnt="D"
}else{
   gnt="NG"
}


if(prmath==4.0){
   document.getElementById('gr3').innerHTML=`${gnt}<br>A+`;
}else if(prmath==3.6){
   document.getElementById('gr3').innerHTML=`${gnt}<br>A`;
}else if(prmath==3.2){
   document.getElementById('gr3').innerHTML=`${gnt}<br>B+`;
}else if(prmath==2.8){
   document.getElementById('gr3').innerHTML=`${gnt}<br>B`;
}else if(prmath==2.4){
   document.getElementById('gr3').innerHTML=`${gnt}<br>C+`;
}else if(prmath==2.0){
   document.getElementById('gr3').innerHTML=`${gnt}<br>C`;
}else if(prmath==1.6){
   document.getElementById('gr3').innerHTML=`${gnt}<br>D`;
}else{
   document.getElementById('gr3').innerHTML=`${gnt}<br>NG`;
}

//   for final grade
const gpath3 =thmath;
 const gpapr3=prmath;
 
 const finalgpa3=(gpath3*3.75+gpapr3*1.25)/5;
//  console.log(finalgpa3);

 
if(finalgpa3>3.6 && finalgpa3<4.1){
   fingr3="A+"
}else if(finalgpa3>3.2 && finalgpa3<3.61){
   fingr3="A"
}else if(finalgpa3>2.8 && finalgpa3<3.21){
   fingr3="B+"
}else if(finalgpa3>2.4 && finalgpa3<2.81){
   fingr3="B"
}else if(finalgpa3>2.0 && finalgpa3<2.41){
   fingr3="C+"
}else if(finalgpa3>1.6 && finalgpa3<2.01){
   fingr3="C"
}else if(finalgpa3=="1.6"){
   fingr3="D"
}else{
   fingr3="NG"
}

//  const fingr3=document.getElementById("mathgr").value;
 document.getElementById('mark3').innerHTML=fingr3;
 switch(fingr3){
   case"A+":
   document.getElementById('remarkmath').innerHTML="Outstanding";
   break;
   case"A":
   document.getElementById('remarkmath').innerHTML="Excellent";
   break;
   case"B+":
   document.getElementById('remarkmath').innerHTML="Very Good";
   break;
   case"B":
   document.getElementById('remarkmath').innerHTML="Good";
   break;
   case"C+":
   document.getElementById('remarkmath').innerHTML="Satisfactory";
   break;
   case"C":
   document.getElementById('remarkmath').innerHTML="Acceptable";
   break;
   case"D":
   document.getElementById('remarkmath').innerHTML="Basic";
   break;
   default:
   document.getElementById('remarkmath').innerHTML="Not Graded";
 }
 





  // marks of physics subject
  
  
  const phyth=phyt;
  const phypr=phyp;
  
//   document.getElementById('phythpr').innerHTML=`${phyth}<br> ${phypr}`;


// check of theory marks...
if(phyth>67 && phyth<76)
{
   thphy='4.0';
}else if(phyth>59 && phyth<68){
   thphy='3.6';
}else if(phyth>52 && phyth<60){
   thphy='3.2';
}else if(phyth>44 && phyth<53){
   thphy='2.8';
}else if(phyth>37 && phyth<45){
   thphy='2.4';
}else if(phyth>29 && phyth<38){
   thphy='2.0';
}else if(phyth>26 && phyth<30){
   thphy="1.6";
}else{
   thphy='NG';
}

// check of practical marks..
if(phypr>22 && phypr<26)
{
   prphy='4.0';
}else if(phypr>19 && phypr<23){
   prphy='3.6';
}else if(phypr>17 && phypr<20){
   prphy='3.2';
}else if(phypr>14 && phypr<18){
   prphy='2.8';
}else if(phypr>12 && phypr<15){
   prphy='2.4';
}else if(phypr>9 && phypr<13){
   prphy='2.0';
}else{
   prphy="NG";
}

  document.getElementById('phythpr').innerHTML=`${thphy}<br> ${prphy}`;


//    for grade i.e A,B+...arguments.  
  if(thphy==4.0){
gnt="A+"
}
else if(thphy==3.6){
gnt="A" 
} 
else if(thphy==3.2){
   gnt="B+"
}else if(thphy==2.8){
gnt="B"    
}else if(thphy==2.4){
gnt="C+"
}
else if(thphy==2.0){
   gnt="C"
}else if(thphy==1.6){
   gnt="D"
}else{
   gnt="NG"
}


if(prphy==4.0){
   document.getElementById('gr4').innerHTML=`${gnt}<br>A+`;
}else if(prphy==3.6){
   document.getElementById('gr4').innerHTML=`${gnt}<br>A`;
}else if(prphy==3.2){
   document.getElementById('gr4').innerHTML=`${gnt}<br>B+`;
}else if(prphy==2.8){
   document.getElementById('gr4').innerHTML=`${gnt}<br>B`;
}else if(prphy==2.4){
   document.getElementById('gr4').innerHTML=`${gnt}<br>C+`;
}else if(prphy==2.0){
   document.getElementById('gr4').innerHTML=`${gnt}<br>C`;
}else if(prphy==1.6){
   document.getElementById('gr4').innerHTML=`${gnt}<br>D`;
}else{
   document.getElementById('gr4').innerHTML=`${gnt}<br>NG`;
}

//   for final grade

const gpath4 =thphy;
 const gpapr4=prphy;
 
 const finalgpa4=(gpath4*3.75+gpapr4*1.25)/5;
//  console.log(finalgpa4);

 
if(finalgpa4>3.6 && finalgpa4<4.1){
   fingr4="A+"
}else if(finalgpa4>3.2 && finalgpa4<3.61){
   fingr4="A"
}else if(finalgpa4>2.8 && finalgpa4<3.21){
   fingr4="B+"
}else if(finalgpa4>2.4 && finalgpa4<2.81){
   fingr4="B"
}else if(finalgpa4>2.0 && finalgpa4<2.41){
   fingr4="C+"
}else if(finalgpa4>1.6 && finalgpa4<2.01){
   fingr4="C"
}else if(finalgpa4=="1.6"){
   fingr4="D"
}else{
   fingr4="NG"
}


//  const fingr4=document.getElementById("phygr").value;
 document.getElementById('mark4').innerHTML=fingr4;
 switch(fingr4){
   case"A+":
   document.getElementById('remarkphy').innerHTML="Outstanding";
   break;
   case"A":
   document.getElementById('remarkphy').innerHTML="Excellent";
   break;
   case"B+":
   document.getElementById('remarkphy').innerHTML="Very Good";
   break;
   case"B":
   document.getElementById('remarkphy').innerHTML="Good";
   break;
   case"C+":
   document.getElementById('remarkphy').innerHTML="Satisfactory";
   break;
   case"C":
   document.getElementById('remarkphy').innerHTML="Acceptable";
   break;
   case"D":
   document.getElementById('remarkphy').innerHTML="Basic";
   break;
   default:
   document.getElementById('remarkphy').innerHTML="Not Graded";
 }
 

 




  // marks of chemistry subject
  
  
  const chemisth=chet;
  const chemispr=chep;

//   document.getElementById('chethpr').innerHTML=`${chemisth}<br> ${chemispr}`;

// check of theory marks..
if(chemisth>67 && chemisth<76)
{
   thche='4.0';
}else if(chemisth>59 && chemisth<68){
   thche='3.6';
}else if(chemisth>52 && chemisth<60){
   thche='3.2';
}else if(chemisth>44 && chemisth<53){
   thche='2.8';
}else if(chemisth>37 && chemisth<45){
   thche='2.4';
}else if(chemisth>29 && chemisth<38){
   thche='2.0';
}else if(chemisth>26 && chemisth<30){
   thche="1.6";
}else{
   thche='NG';
}

// check of practical marks...
if(chemispr>22 && chemispr<26)
{
   prche='4.0';
}else if(chemispr>19 && chemispr<23){
   prche='3.6';
}else if(chemispr>17 && chemispr<20){
   prche='3.2';
}else if(chemispr>14 && chemispr<18){
   prche='2.8';
}else if(chemispr>12 && chemispr<15){
   prche='2.4';
}else if(chemispr>9 && chemispr<13){
   prche='2.0';
}else{
   prche="NG";
}

   document.getElementById('chethpr').innerHTML=`${thche}<br> ${prche}`;


//    for grade i.e A,B+...arguments.

  if(thche==4.0){
gnt="A+"
}
else if(thche==3.6){
gnt="A" 
} 
else if(thche==3.2){
   gnt="B+"
}else if(thche==2.8){
gnt="B"    
}else if(thche==2.4){
gnt="C+"
}
else if(thche==2.0){
   gnt="C"
}else if(thche==1.6){
   gnt="D"
}else{
   gnt="NG"
}


if(prche==4.0){
   document.getElementById('gr5').innerHTML=`${gnt}<br>A+`;
}else if(prche==3.6){
   document.getElementById('gr5').innerHTML=`${gnt}<br>A`;
}else if(prche==3.2){
   document.getElementById('gr5').innerHTML=`${gnt}<br>B+`;
}else if(prche==2.8){
   document.getElementById('gr5').innerHTML=`${gnt}<br>B`;
}else if(prche==2.4){
   document.getElementById('gr5').innerHTML=`${gnt}<br>C+`;
}else if(prche==2.0){
   document.getElementById('gr5').innerHTML=`${gnt}<br>C`;
}else if(prche==1.6){
   document.getElementById('gr5').innerHTML=`${gnt}<br>D`;
}else{
   document.getElementById('gr5').innerHTML=`${gnt}<br>NG`;
}

//   for final grade


const gpath5 =thche;
 const gpapr5=prche;
 
 const finalgpa5=(gpath5*3.75+gpapr5*1.25)/5;
//  console.log(finalgpa5);

 
if(finalgpa5>3.6 && finalgpa5<4.1){
   fingr5="A+"
}else if(finalgpa5>3.2 && finalgpa5<3.61){
   fingr5="A"
}else if(finalgpa5>2.8 && finalgpa5<3.21){
   fingr5="B+"
}else if(finalgpa5>2.4 && finalgpa5<2.81){
   fingr5="B"
}else if(finalgpa5>2.0 && finalgpa5<2.41){
   fingr5="C+"
}else if(finalgpa5>1.6 && finalgpa5<2.01){
   fingr5="C"
}else if(finalgpa5=="1.6"){
   fingr5="D"
}else{
   fingr5="NG"
}

//  const fingr5=document.getElementById("chemisgr").value;

 document.getElementById('mark5').innerHTML=fingr5;
 switch(fingr5){
   case"A+":
   document.getElementById('remarkche').innerHTML="Outstanding";
   break;
   case"A":
   document.getElementById('remarkche').innerHTML="Excellent";
   break;
   case"B+":
   document.getElementById('remarkche').innerHTML="Very Good";
   break;
   case"B":
   document.getElementById('remarkche').innerHTML="Good";
   break;
   case"C+":
   document.getElementById('remarkche').innerHTML="Satisfactory";
   break;
   case"C":
   document.getElementById('remarkche').innerHTML="Acceptable";
   break;
   case"D":
   document.getElementById('remarkche').innerHTML="Basic";
   break;
   default:
   document.getElementById('remarkche').innerHTML="Not Graded";
 }
 






  // marks of computer or biology,finance subject
  const rqsub=optsub;
  if(rqsub=="computer"){
  
  const cbth=comt;
  const cbpr=comp;
  
//   document.getElementById('comthpr').innerHTML=`${cbth}<br> ${cbpr}`;

// check of theory marks of computer.
if(cbth>44 && cbth<51)
{
   thcb='4.0';
}else if(cbth>39 && cbth<45){
   thcb='3.6';
}else if(cbth>34 && cbth<40){
   thcb='3.2';
}else if(cbth>29 && cbth<35){
   thcb='2.8';
}else if(cbth>24 && cbth<30){
   thcb='2.4';
}else if(cbth>19 && cbth<25){
   thcb='2.0';
}else if(cbth>17 && cbth<20){
   thcb="1.6";
}else{
   thcb='NG';
}


// check of practical marks..
if(cbpr>44 && cbpr<51)
{
   prcb='4.0';
}else if(cbpr>39 && cbpr<45){
   prcb='3.6';
}else if(cbpr>34 && cbpr<40){
   prcb='3.2';
}else if(cbpr>29 && cbpr<35){
   prcb='2.8';
}else if(cbpr>24 && cbpr<30){
   prcb='2.4';
}else if(cbpr>19 && cbpr<25){
   prcb='2.0';
}else if(cbpr>17 && cbpr<20){
   prcb="1.6";
}else{
   prcb='NG';
}

   document.getElementById('comthpr').innerHTML=`${thcb}<br> ${prcb}`;


//    for grade i.e A,B+...arguments.  
  if(thcb==4.0){
gnt="A+"
}
else if(thcb==3.6){
gnt="A" 
} 
else if(thcb==3.2){
   gnt="B+"
}else if(thcb==2.8){
gnt="B"    
}else if(thcb==2.4){
gnt="C+"
}
else if(thcb==2.0){
   gnt="C"
}else if(thcb==1.6){
   gnt="D"
}else{
   gnt="NG"
}


if(prcb==4.0){
   document.getElementById('gr6').innerHTML=`${gnt}<br>A+`;
}else if(prcb==3.6){
   document.getElementById('gr6').innerHTML=`${gnt}<br>A`;
}else if(prcb==3.2){
   document.getElementById('gr6').innerHTML=`${gnt}<br>B+`;
}else if(prcb==2.8){
   document.getElementById('gr6').innerHTML=`${gnt}<br>B`;
}else if(prcb==2.4){
   document.getElementById('gr6').innerHTML=`${gnt}<br>C+`;
}else if(prcb==2.0){
   document.getElementById('gr6').innerHTML=`${gnt}<br>C`;
}else if(prcb==1.6){
   document.getElementById('gr6').innerHTML=`${gnt}<br>D`;
}else{
   document.getElementById('gr6').innerHTML=`${gnt}<br>NG`;
}

//   for final grade
const gpath6 =thcb;
 const gpapr6=prcb;
 
 const finalgpa6=(gpath6*2.50+gpapr6*2.50)/5;
//  console.log(finalgpa6);

 function accesval1(){
   return finalgpa6;
 }
 
if(finalgpa6>3.6 && finalgpa6<4.1){
   fingr6="A+"
}else if(finalgpa6>3.2 && finalgpa6<3.61){
   fingr6="A"
}else if(finalgpa6>2.8 && finalgpa6<3.21){
   fingr6="B+"
}else if(finalgpa6>2.4 && finalgpa6<2.81){
   fingr6="B"
}else if(finalgpa6>2.0 && finalgpa6<2.41){
   fingr6="C+"
}else if(finalgpa6>1.6 && finalgpa6<2.01){
   fingr6="C"
}else if(finalgpa6=="1.6"){
   fingr6="D"
}else{
   fingr6="NG"
}

//  const fingr6=document.getElementById("cbgr").value;
 document.getElementById('mark6').innerHTML=fingr6;
 switch(fingr6){
   case"A+":
   document.getElementById('remarkcom').innerHTML="Outstanding";
   break;
   case"A":
   document.getElementById('remarkcom').innerHTML="Excellent";
   break;
   case"B+":
   document.getElementById('remarkcom').innerHTML="Very Good";
   break;
   case"B":
   document.getElementById('remarkcom').innerHTML="Good";
   break;
   case"C+":
   document.getElementById('remarkcom').innerHTML="Satisfactory";
   break;
   case"C":
   document.getElementById('remarkcom').innerHTML="Acceptable";
   break;
   case"D":
   document.getElementById('remarkcom').innerHTML="Basic";
   break;
   default:
   document.getElementById('remarkcom').innerHTML="Not Graded";
 }
  } 
  
  
  
  
  else
  
  {
   const cbth=comt;
  const cbpr=comp;

//   check of theory marks...
if(cbth>67 && cbth<76)
{
   thcb1='4.0';
}else if(cbth>59 && cbth<68){
   thcb1='3.6';
}else if(cbth>52 && cbth<60){
   thcb1='3.2';
}else if(cbth>44 && cbth<53){
   thcb1='2.8';
}else if(cbth>37 && cbth<45){
   thcb1='2.4';
}else if(cbth>29 && cbth<38){
   thcb1='2.0';
}else if(cbth>26 && cbth<30){
   thcb1="1.6";
}else{
   thcb1='NG';
}

// check of practical marks..

if(cbpr>22 && cbpr<26)
{
   prcb1='4.0';
}else if(cbpr>19 && cbpr<23){
   prcb1='3.6';
}else if(cbpr>17 && cbpr<20){
   prcb1='3.2';
}else if(cbpr>14 && cbpr<18){
   prcb1='2.8';
}else if(cbpr>12 && cbpr<15){
   prcb1='2.4';
}else if(cbpr>9 && cbpr<13){
   prcb1='2.0';
}else{
   prcb1="NG";
}

document.getElementById('comthpr').innerHTML=`${thcb1}<br> ${prcb1}`;




//    for grade i.e A,B+...arguments.  
if(thcb1==4.0){
   gnt="A+"
   }
   else if(thcb1==3.6){
   gnt="A" 
   } 
   else if(thcb1==3.2){
      gnt="B+"
   }else if(thcb1==2.8){
   gnt="B"    
   }else if(thcb1==2.4){
   gnt="C+"
   }
   else if(thcb1==2.0){
      gnt="C"
   }else if(thcb1==1.6){
      gnt="D"
   }else{
      gnt="NG"
   }
   
   
   if(prcb1==4.0){
      document.getElementById('gr6').innerHTML=`${gnt}<br>A+`;
   }else if(prcb1==3.6){
      document.getElementById('gr6').innerHTML=`${gnt}<br>A`;
   }else if(prcb1==3.2){
      document.getElementById('gr6').innerHTML=`${gnt}<br>B+`;
   }else if(prcb1==2.8){
      document.getElementById('gr6').innerHTML=`${gnt}<br>B`;
   }else if(prcb1==2.4){
      document.getElementById('gr6').innerHTML=`${gnt}<br>C+`;
   }else if(prcb1==2.0){
      document.getElementById('gr6').innerHTML=`${gnt}<br>C`;
   }else if(prcb1==1.6){
      document.getElementById('gr6').innerHTML=`${gnt}<br>D`;
   }else{
      document.getElementById('gr6').innerHTML=`${gnt}<br>NG`;
   }
   
   //   for final grade
   const gpath6 =thcb1;
    const gpapr6=prcb1;
    
    const finalgpa6=(gpath6*3.75+gpapr6*1.25)/5;
    function accesval(){
      return finalgpa6;
    }
    
   if(finalgpa6>3.6 && finalgpa6<4.1){
      fingr6="A+"
   }else if(finalgpa6>3.2 && finalgpa6<3.61){
      fingr6="A"
   }else if(finalgpa6>2.8 && finalgpa6<3.21){
      fingr6="B+"
   }else if(finalgpa6>2.4 && finalgpa6<2.81){
      fingr6="B"
   }else if(finalgpa6>2.0 && finalgpa6<2.41){
      fingr6="C+"
   }else if(finalgpa6>1.6 && finalgpa6<2.01){
      fingr6="C"
   }else if(finalgpa6=="1.6"){
      fingr6="D"
   }else{
      fingr6="NG"
   }
   
   //  const fingr6=document.getElementById("cbgr").value;
    document.getElementById('mark6').innerHTML=fingr6;
    switch(fingr6){
      case"A+":
      document.getElementById('remarkcom').innerHTML="Outstanding";
      break;
      case"A":
      document.getElementById('remarkcom').innerHTML="Excellent";
      break;
      case"B+":
      document.getElementById('remarkcom').innerHTML="Very Good";
      break;
      case"B":
      document.getElementById('remarkcom').innerHTML="Good";
      break;
      case"C+":
      document.getElementById('remarkcom').innerHTML="Satisfactory";
      break;
      case"C":
      document.getElementById('remarkcom').innerHTML="Acceptable";
      break;
      case"D":
      document.getElementById('remarkcom').innerHTML="Basic";
      break;
      default:
      document.getElementById('remarkcom').innerHTML="Not Graded";
    
   }

     } 
     
   //   for final gpa or average gpa...
  const rqsub1=optsub;
if(rqsub1=="computer"){
   const func=accesval1();

   const fixedgpa=(finalgpa*4+finalgpa1*3+finalgpa3*5+finalgpa4*5+finalgpa5*5+func*5)/27;
   const needvalue=fixedgpa.toFixed(2);
   // console.log(fixedgpa);
   if(needvalue=="NaN"){
   document.getElementById('gpatotal').innerHTML="NG"; 
}
   else{
      document.getElementById('gpatotal').innerHTML=needvalue; 

   }
}
   else{
      const newfuc=accesval();
      
   const fixedgpa=(finalgpa*4+finalgpa1*3+finalgpa3*5+finalgpa4*5+finalgpa5*5+newfuc*5)/27;
   // console.log(fixedgpa);
   // const needvalue1=fixedgpa;
   const needvalue1=fixedgpa.toFixed(2);

   // console.log(needvalue1);
   if(needvalue1=="NaN"){
      document.getElementById('gpatotal').innerHTML="NG"; 
   }
      else{
         document.getElementById('gpatotal').innerHTML=needvalue1; 
   
      }
   
   }
   document.getElementById("main-contain").style.opacity="1";

   
  }

  
  









const class11=()=>{
    //    
    //     let guess=prompt("Enter your name only in small letter");
    //     if (check===true){
            let symbol=prompt("\nEnter your symbol no:");
            document.getElementById("decor2").style.display="none";
    document.getElementById("main-contain").style.display= 'block';
    document.getElementById("decor1").style.display= 'block';
    document.getElementById("resulting").style.display="none";
           
    switch(symbol){
    
            case "11401":
                callingforgrade("AARATI TIMILSINA",11401,"2064-01-05","ELEVEN","biology",60,25,59,25,35,25,27,25,68,25,50,25);
                break;
                
                case "11402":
callingforgrade("DIPAN RAJ NEUPANE",11402,"2064/05/13","ELEVEN","computer",50,25,50,25,22,25,24,25,27,25,40,50);                            
    break;

 case "11403":
callingforgrade("BASANTA PRASAD TIWARI",11403,"2064/02/11","ELEVEN","computer",45,25,50,25,45,25,45,25,27,25,45,50);                            
    break;
            
    case "11404":
      callingforgrade("ADITI POUDEL",11404,"2064/12/15","ELEVEN","biology",58,25,52,25,52,25,52,25,60,25,60,25);
      break;
    
    
              default:
            alert("Plz Enter your valid symbol no:"); 
    document.getElementById("main-contain").style.display= 'none';
   //  document.getElementById("decor2").style.display="none";
    
        
        }
    
    
    
        // }else{
        //     alert("you are not student of this class..Plz enter again");
        // }
        
        }
        
    
    
    
    
    
    
    
   //      const class12=()=>{
            
   //          let symnum=prompt("\nEnter your symbol no:");
   //  document.getElementById("main-contain").style.opacity="5";
    
   //          switch(symnum){
    
    
             
            
   //          }}
    
    
    
            
        function callinghim(){
        
        const clname=document.getElementById("class").value;
        if (clname==="11"){
            class11();
            
    
        }
        else if(clname==="12"){
            class12();
    
        }
        else{
         // document.getElementById("decor2").innerHTML="Wrong Class name"
         //    document.getElementById("decor2").style.color="aliceblue";
         //    document.getElementById("decor2").style.background="red";
            alert("Invalid Class Name..PLz Enter valid Class");
            document.getElementById("decor2").style.display="none";
            
        }}
        
        function recalling(){
         document.getElementById("decor2").style.display="block";
         setTimeout(()=>{
            callinghim();
         }
         ,1000)
        }
        


