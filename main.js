// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

  //console.log(mockUpStrand());

  function pAequorFactory(num, arr){
      return {
          specimenNum: num,
          dna: arr,
          mutate: function(){
            //choosing the index of DNA Base  
            let index = Math.floor(Math.random()* this.dna.length);
              let base = this.dna[index];
              //making arr without our Base
              let arrOfBases = ['A', 'T', 'C', 'G'].filter(function(item){
                  return item !== base;
              });
              console.log(`Base ${this.dna[index]} with index ${index} mutate to:`);
              base = arrOfBases[Math.floor(Math.random()*arrOfBases.length)]
              console.log(base);
              //changing DNA
              this.dna[index] = base;
              return this.dna;
          },
          compareDNA: function(obj){
              let count = 0;
              for(let i = 0; i < this.dna.length; i++){
                if(this.dna[i] === obj.dna[i]){
                  count++
                }
              }
              console.log(`Current pAequor organisms have ${Math.round(count*100/15)}% of their DNA in common.`)          
          },
          willLikelySurvive: function(){
            let count = 0;
            for(let elem of this.dna){
              if(elem === 'C' || elem === 'G'){
                count++
              }
            }
            return Math.round(count*100/15) >= 60;
          },
          //TASK 9 (1)----------------->
          complementStrand: function(){
            let complemetStrand = [];
            for(let elem of this.dna){
              if(elem === 'A'){
                complemetStrand.push('T');
              }else if(elem === 'T'){
                complemetStrand.push('A');
              }else if(elem === 'C'){
                complemetStrand.push('G');
              }else{
                complemetStrand.push('C');
              }
             }
             return complemetStrand;
          }
      }
  }

  /*Function create an Arr of instances of pAequor that have a likelier chance of survival. 
  It will make the quantity passed into parameter.*/
  
  function pAequorCreate(quantity){
    let arrOfPAequor = [];
    let count = 1;
    while(arrOfPAequor.length < quantity){
      let pAequor = pAequorFactory(count, mockUpStrand());
      if (pAequor.willLikelySurvive()){
        arrOfPAequor.push(pAequor)
        count++;
      }
    }
    return arrOfPAequor;
  }


  let pAequor1 = pAequorFactory(1, mockUpStrand())
  console.log(pAequor1);
  console.log(pAequor1.complementStrand());
  

