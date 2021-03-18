var securityQuestions = [
    {
    question: 'What was your first pet’s name?',
    expectedAnswer: 'FlufferNutter'
    },
    {
    question: 'What was the model year of your first car?',
    expectedAnswer: '1985'
    },
    {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC'
    }
   ]

   var ques = 'What was your first pet’s name?';
var ans  =  'DufferNutter';
   function chksecurityQuestions(securityQuestions,Question,Answer) {
   for(var i in securityQuestions){
       if(securityQuestions[i].question===Question){
           if(securityQuestions[i].expectedAnswer===Answer){return true;}
           
       }else{ return false;}
       
   }

    return true ; 
   }
  var status=chksecurityQuestions(securityQuestions,ques,ans);
  console.log(status)