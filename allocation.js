/*jshint esversion: 6 */
/*jshint globalstrict: true*/
/*globals window: false */
/*globals document: false */
/*globals console: false */
/*globals fetch: false */
/*globals Vue: false */
/*globals $: false */

"use strict";

var app = new Vue({
   el: '#app',
   
   data: {
    dataset:{
    beds:[
       {
       "id": 1,
       "date": "2019-01-01",
       "newPatient" : true,
       "followon": true,
       "type":1,
       "skills":["Skill1","Skill2"],
       "assigned":[null, null, null],
       "published":[false,false,false],
       "locked":true,
       "prevAssigned":["Nicolas Bernie","Tisha Baptist","George Pileggi"]
       },
       {
       "id": 2,
       "date": "2019-01-01",
       "newPatient" : true,
       "followon": true,
       "type":2,
       "skills":["Skill3","Skill4"],
       "assigned": [null,null],
       "published":[false,false],
       "locked":false,
       "prevAssigned":["Krista Milewsk","Carlee Connell"]
        }, 
       {
       "id": 3,
       "date": "2019-01-01",
       "newPatient" : false,
       "followon": true,
       "type":2,
       "skills":["Skill4"],
       "assigned":[null,null],
       "published":[false,false],
       "locked":false,           
       "prevAssigned":["Sterling Maiz","Meredith Grey"]
       },
       {
       "id": 4,
       "date": "2019-01-01",
       "newPatient" : true,
       "followon": true,
       "type":1,
       "skills":["Skill1","Skill2"],
       "assigned":[null,null,null],
       "published":[false, false, false],
       "locked":false,
       "prevAssigned":["Adela Leble","Dixie Adcoc","Jackson Avery"]       
       },
       {
       "id": 5,
       "date": "2019-01-01",
       "newPatient" : true,
       "followon": false,
       "type":1,
       "skills":[],
       "assigned":[null,null,null],
       "published":[false, false, false],
       "locked":false,
       "prevAssigned":[]
       },
       {
       "id": 6,
       "date": "2019-01-01",
       "newPatient" : true,
       "followon": false,
       "type":1,
       "skills":["Skill1","Skill2"],
       "assigned":[null, null, null],
       "published": [false, false, false],
       "locked":true,
       "prevAssigned":[]
        },
       {
       "id": 7,
       "date": "2019-01-01",
       "newPatient" : true,
       "followon": false,
       "type":2,
       "skills":["Skill4"],
       "assigned":[null,null],
       "published":[false,false],
       "locked":false,
       "prevAssigned":[]
       },
       {
       "id": 8,
       "date": "2019-01-01",
       "newPatient" : false,
       "followon": false,
       "type":2,
       "skills":["Skill2","Skill3"],
       "assigned":[null, null],
       "published":[false,false],
       "locked":false,
       "prevAssigned":[]       
       },
       {
       "id": 9,
       "date": "2019-01-01",
       "newPatient" : true,
       "followon": false,
       "type":1,
       "skills":[],
       "assigned":[null,null,null],
       "published":[false, false, false],
       "locked":false,
       "prevAssigned":[]
       },
       {
       "id": 10,
       "date": "2019-01-01",
       "newPatient" : true,
       "followon": false,
       "type":1,
       "skills":[],
       "assigned":[null,null,null],
       "published":[false, false, false],
       "locked":false,
       "prevAssigned":[]
       },
       {
       "id": 11,
        "date": "2019-01-01",
        "newPatient" : true,
        "followon": false,
        "type":1,
        "skills":["Skill2","Skill4"],
        "assigned":[null, null, null],
        "published":[false, false, false],
        "locked":true,
        "prevAssigned":[]
        },
       {
       "id": 12,
       "date": "2019-01-01",
       "newPatient" : true,
       "followon": false,
       "type":2,
       "skills":["Skill1","Skill3"],
       "assigned":[null, null],
       "published":[false, false],
       "locked":false,
       "prevAssigned":[ ]
       },
       {
       "id": 13,
       "date": "2019-01-01",
       "newPatient" : false,
       "followon": false,
       "type":2,
       "skills":["Skill1"],
       "assigned":[null, null],
       "published":[false,false],
       "locked":false,
       "prevAssigned":[]
       },
       {
       "id": 14,
       "date": "2019-01-01",
       "newPatient" : true,
       "followon": false,
       "type":1,
       "skills":[],
       "assigned":[null,null,null],
       "published":[false,false,false],
       "locked":false,
       "prevAssigned":[]
       },
       {
       "id": 15,
       "date": "2019-01-01",
       "newPatient" : true,
       "followon": false,
       "type":1,
       "skills":[],
       "assigned":[null,null,null],
       "published":[false,false,false],
       "locked":false,
       "prevAssigned":[]       
       }
       ],
    nurses:[
    {
      "id": 1,
      "name": "Nicolas Bernie",
      "type": 1,
      "shift": 1,
      "skills":["Skill1","Skill2"]

    },
    {
      "id": 2,
      "name": "Marcella Buf",
      "type": 1,
      "shift": 1,
      "skills":["Skill2","Skill3","Skill4"]

    },
    {
      "id": 3,
      "name": "Miki Koma",
      "type": 1,
      "shift": 1,
      "skills":["Skill1","Skill3"]

    },
    {
      "id": 4,
      "name": "Nakesha Hande",
      "type": 1,
      "shift": 1,
      "skills":["Skill2","Skill4"]
    },
    
    {
      "id": 5,
      "name": "Adela Leble",
      "type": 1,
      "shift": 1,
      "skills":["Skill1","Skill2"]      
    },
    {
      "id": 6,
      "name": "Sterling Maiz",
      "type": 2,
      "shift": 1,
      "skills": ["Skill2","Skill3","Skill4"]
      
    },
    {
      "id": 7,
      "name": "Krista Milewsk",
      "type": 2,
      "shift": 1,
      "skills":["Skill3","Skill4"]
    },
    {
      "id": 8,
      "name": "Sheilah Behren",
      "type": 2,
      "shift": 1,
      "skills":["Skill2","Skill4"]

    },
    {
      "id": 9,
      "name": "Cheree Jaso",
      "type": 2,
      "shift": 1,
      "skills":["Skill1","Skill2"] 

    },
    {
      "id": 10,
      "name": "Sanora Sanlui",
      "type": 2,
      "shift": 1,
      "skills":["Skill2","Skill3","Skill4"]

    },
    {
      "id": 11,
      "name": "Tisha Baptist",
      "type": 1,
      "shift": 2,
      "skills":["Skill1","Skill2"]
    },  
    
    {
      "id": 12,
      "name": "Corliss Endre",
      "type": 1,
      "shift": 1,
      "skills":["Skill1","Skill2"]      
    },
    {
      "id": 13,
      "name": "Elba Trembla",
      "type": 1,
      "shift": 2,
      "skills": ["Skill2","Skill3","Skill4"]
    },
    {
      "id": 14,
      "name": "Georgiana Brzezinsk",
      "type": 1,
      "shift": 2,
      "skills":["Skill1","Skill3"]
    },
    {
      "id": 15,
      "name": "Dixie Adcoc",
      "type": 1,
      "shift": 2,
      "skills":["Skill1","Skill2"]
    },
    {
      "id": 16,
      "name": "Brandie Minot",
      "type": 2,
      "shift": 2,
      "skills":["Skill1","Skill2"]
    },
    {
      "id": 17,
      "name": "Una Kappe",
      "type": 2,
      "shift": 2,
      "skills":["Skill2","Skill3","Skill4"]
    },
    {
      "id": 18,
      "name": "Carlee Connell",
      "type": 2,
      "shift": 2,
      "skills":["Skill3","Skill4"]
    },
    {
      "id": 19,
      "name": "Brittni Gova",
      "type": 2,
      "shift": 2,
      "skills":["Skill1","Skill3"]
    },
    {
      "id": 20,
      "name": "Meredith Grey",
      "type": 2,
      "shift": 2,
      "skills":["Skill3","Skill4"]
    },
    {
      "id": 21,
      "name": "Jackson Avery",
      "type": 1,
      "shift": 3,
      "skills":["Skill2","Skill1","Skill4"]
    },
    {
      "id": 22,
      "name": "Lorenzo Mille",
      "type": 1,
      "shift": 3,
      "skills":["Skill1","Skill3"]
    },
     {
      "id": 23,
      "name": "Miranda Bailey",
      "type": 1,
      "shift": 3,
      "skills":["Skill1","Skill3"]
    },
    {
      "id": 24,
      "name": "George Pileggi",
      "type": 1,
      "shift": 3,
      "skills":["Skill1","Skill2"]
    },
    {
      "id": 25,
      "name": "Lily Caesar",
      "type": 1,
      "shift": 3,
      "skills":["Skill1","Skill4"]
    },
    {
      "id": 26,
      "name": "Maggie Pierce",
      "type": 2,
      "shift": 3,
      "skills":["Skill1","Skill2"]
    },
    {
      "id": 27,
      "name": "Anusha Sharma",
      "type": 2,
      "shift": 1,
      "skills":["Skill3","Skill4"]
    },
    {
      "id": 28,
      "name": "April Kepner",
      "type": 2,
      "shift": 1,
      "skills":["Skill1","Skill3","Skill2"]
    },
    {
      "id": 29,
      "name": "Christina Yang",
      "type": 2,
      "shift": 2,
      "skills":["Skill2","Skill4"]
    },
    {
      "id": 30,
      "name": "Preston Burke",
      "type": 2,
      "shift": 2,
      "skills":["Skill4","Skill1","Skill2"]
    }
    
   ],
   "days": [
    "2018-01-01T00:00:00Z"
  ]
},
assigned: []
   }, //End of data

methods:{

   formatDate : function(day) {
        
      const d = new Date(day);
      const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

      return (weekDay[d.getDay()] +". " + months[d.getMonth()] + ". " + ("0" + d.getDate()).slice(-2));
    },
    
    makeRosterId: function(id) {
      return id;
    }, 

    colspan : function(day) {
       if(day.type == 1){
           return "column";
       }
       return "column2";
        
    },

    getNurseSkills : function(name){
        for(let i=0; i<this.dataset.nurses.length; i++){
            if (name == this.dataset.nurses[i].name){
                return this.dataset.nurses[i].skills;
            }
        }
    },

    createPrefs : function(skillsReq,type,s){
       
       const req = new Set(skillsReq);
       const nurses = this.dataset.nurses;
       let skillDictList =[];
       for(let i=0; i<nurses.length; i++){
          //console.log(this.assigned);
          if (this.assigned.indexOf(nurses[i].name) < 0) {
            let match = 0;
            if (type === nurses[i].type && s==nurses[i].shift) {
              const skills = nurses[i].skills;
              for(let j=0; j<skills.length; j++){
                if(req.has(skills[j])){
                  match+=1;
                } 
              } 
            skillDictList.push({
            key: nurses[i].name,
            value: match
            
            });              
          }
          }          
          
        } 
       //console.log(skillDictList);

       skillDictList.sort(function(p1, p2) { return p2.value - p1.value; });
       return skillDictList;
       //var topThree = skillDictList.slice(0, 3);
       //console.log(topThree);
    },

    makeSkills: function(bed){
        const skills = bed.skills;
        //console.log(skills);
        let a ='';
        a+='<div>';
        for(let i=0; i<skills.length ; i++){
           a+=`<div id="skills">${skills[i]}</div>`; 
        }
        a+='</div>';
        return a;
        
    },
    makePrev: function(bed){
        const prev = bed.prevAssigned;
        //console.log(skills);
        let a ='';
        a+='<div>';
        for(let i=0; i<prev.length ; i++){
           a+=`<div id="skills">${prev[i]}</div>`; 
        }
        a+='</div>';
        return a;
        
    },
    makeRosterCell: function(bed,bedIndex){
        const skills= bed.skills;
        const assigned = bed.assigned;
        const published = bed.published;
        const type = bed.type;
        const prev = bed.prevAssigned;
        //const prefs = this.createPrefs(skills,type);
        let a='';
        a+='<div class="row">';
        if (type == 1){
            
            for(const x of Array(3).keys()){
                const prefs = this.createPrefs(skills,type,x+1);
                const shift = "shift"+x.toString();
                a+=`<div id=\"${shift}\">`;
                if (published[x]==true){
                    if(assigned[x]== null){
                       a+='<div id="content">Empty</div>';
                    }else{
                          a+=`<div id="content" style="background-color:#f9e8b1">${assigned[x]}</div>`;  
                    }
                }else{
                    if (skills.length === 0){
                        a+='<div id="content">Empty</div>';
                    }else{
                       let sortedPref=[];
                       let prevNurse='';
                       for(let i=0; i<prefs.length; i++){
                           if(bed.followon){
                              if(prev.indexOf(prefs[i].key)>=0){
                                sortedPref.push(prefs[i]);
                                prevNurse+=prefs[i].key;
                              } 
                           }
                       }
                       for(let i=0; i<prefs.length; i++){
                           if(prefs[i].key != prevNurse){
                              sortedPref.push(prefs[i]);
                           }                      
                       }
                        //console.log(sortedPref); 
                        for(let i=0; i<sortedPref.length + 1; i++){
                           if(i>0 && i<sortedPref.length){
                              a+=`<div id=\"content\" data-shift=${x} style=\"display:none;`;
                              if (sortedPref[i].value==bed.skills.length){
                               a+=`background-color:#62f92f;`; //green
                              } else if (sortedPref[i].value==0){
                                a+='background-color:#f92f2f;'; //red
                              } else{
                                a+='background-color:#f9d32f;';  //yellow
                              }
                              if(bed.followon){

                              if(prev.indexOf(sortedPref[i].key)>=0){
                                a+=' color:blue;';  
                              }
                                
                            }
                            a+=`\" title="${this.getNurseSkills(sortedPref[i].key)}">${sortedPref[i].key}`+`<br>`+`<span class="close"><i class="fas fa-times"></i></span>`+`<span class="repeat"><i class="fa fa-step-backward" aria-hidden="true"></i></span>`+`<span class="assign"><i class="fas fa-check"></i></span></div>`;
                           } else if(i === sortedPref.length){
                            a+=`<div id=\"content\"  data-shift=${x} style=\"display:none; background-color:#f92f2f\">Return<br>`+`<span class="repeat"><i class="fa fa-step-backward" aria-hidden="true"></i></span>`+`</div>`;
                           } else {
                               a+='<div id=\"content\"';
                               if (sortedPref[i].value==bed.skills.length){
                                 a+=` style=\"background-color:#62f92f;`; //green
                               } else if (sortedPref[i].value==0){
                                 a+=' style=\"background-color:#f92f2f;'; //red
                               } else{
                                 a+=' style=\"background-color:#f9d32f;';  //yellow
                               }
                               if(bed.followon){
                                 if(prev.indexOf(sortedPref[i].key)>=0){
                                   a+=' color:blue;';  
                                 } 
                               }
                               a+=`\" data-shift=${x} title="${this.getNurseSkills(sortedPref[i].key)}">${sortedPref[i].key}`+`<br>`+`<span class="close"><i class="fas fa-times"></i></span>`+`<span class="assign"><i class="fas fa-check"></i></span> </div>`;
                           }
                           
                        }   

                    } 
                }
                a+='</div>';
            }
            
            
        }else{
            for(const x of Array(2).keys()){
                const prefs = this.createPrefs(skills,type,x+1);
                const shift = "long-shift"+x.toString();
                a+=`<div id=\"${shift}\">`;
                if (published[x]==true){
                    if(assigned[x]== null){
                       a+='<div id="content">Empty</div>';
                    }else{
                      a+=`<div id="content" style="background-color:#f9e8b1">${assigned[x]}</div>`;  
                    }
                }else{
                    if (skills.length==0){
                        a+='<div id="content">Empty</div>';
                    }else{
                       let sortedPref=[];
                       let prevNurse='';
                       for(let i=0; i<prefs.length; i++){
                           if(bed.followon){
                              if(prev.indexOf(prefs[i].key)>=0){
                                sortedPref.push(prefs[i]);
                                prevNurse+=prefs[i].key;
                              } 
                           }
                       }
                       for(let i=0; i<prefs.length; i++){
                           if(prefs[i].key != prevNurse){
                              sortedPref.push(prefs[i]);
                           }                      
                       }
                        //console.log(sortedPref); 
                        for(let i=0; i<sortedPref.length + 1; i++){
                           if(i>0 && i<sortedPref.length){
                              a+=`<div id=\"content\" data-shift=${x} style=\"display:none;`;
                              if (sortedPref[i].value==bed.skills.length){
                               a+=`background-color:#62f92f;`; //green
                              } else if (sortedPref[i].value==0){
                                a+='background-color:#f92f2f;'; //red
                              } else{
                                a+='background-color:#f9d32f;';  //yellow
                              }
                              if(bed.followon){

                              if(prev.indexOf(sortedPref[i].key)>=0){
                                a+=' color:blue;';  
                              }
                                
                            }
                            a+=`\" title="${this.getNurseSkills(sortedPref[i].key)}">${sortedPref[i].key}`+`<br>`+`<span class="close"><i class="fas fa-times"></i></span>`+`<span class="repeat"><i class="fa fa-step-backward" aria-hidden="true"></i></span>`+`<span class="assign"><i class="fas fa-check"></i></span></div>`;
                           } else if(i === sortedPref.length){
                            a+=`<div id=\"content\"  data-shift=${x} style=\"display:none; background-color:#f92f2f\">Return<br>`+`<span class="repeat"><i class="fa fa-step-backward" aria-hidden="true"></i></span>`+`</div>`;
                           } else {
                               a+='<div id=\"content\"';
                               if (sortedPref[i].value==bed.skills.length){
                                 a+=` style=\"background-color:#62f92f;`; //green
                               } else if (sortedPref[i].value==0){
                                 a+=' style=\"background-color:#f92f2f;'; //red
                               } else{
                                 a+=' style=\"background-color:#f9d32f;';  //yellow
                               }
                               if(bed.followon){
                                 if(prev.indexOf(sortedPref[i].key)>=0){
                                   a+=' color:blue;';  
                                 } 
                               }
                               a+=`\" data-shift=${x} title="${this.getNurseSkills(sortedPref[i].key)}">${sortedPref[i].key}`+`<br>`+`<span class="close"><i class="fas fa-times"></i></span>`+`<span class="assign"><i class="fas fa-check"></i></span> </div>`;
                           }
                           
                        }
                    }
                }
                a+='</div>';
            }
            
        }
        a+='</div>';
        return a;
    },

    assignNurse: function(t){
       //console.log("AAM");
       //console.log(t.parent().data("shift"));
       const assignedNurse = t.parent().text();
       const bedIndex = t.closest('.rosterCell').data("bedindex");
       const shiftIndex = t.parent().data("shift");
       this.dataset.beds[bedIndex].assigned[shiftIndex] = assignedNurse.trim();
       this.dataset.beds[bedIndex].published[shiftIndex] = true;

       this.assigned.push(assignedNurse.trim());
       //console.log(this.dataset.beds[bedIndex].assigned[shiftIndex]);
       //console.log(this.dataset.beds[bedIndex].published[shiftIndex]);
    }
  }  // End methods.
}); //End of Vue
//var prevObj;

$(document).on('click','.close',function() {
   const curr = $(this).parent();
   curr.next().show();
   $(this).parent().hide();

});

$(document).on('click','.assign',function() {
   $('.ui-tooltip').remove();  // Remove tooltips before re-writing the DOM.
   app.assignNurse($(this));
});

$(document).on('click','.repeat',function(){
  $(this).parent().hide();
  $(this).parent().prev('div').show();

});
 
$(function() {
  $(document).tooltip();
});
