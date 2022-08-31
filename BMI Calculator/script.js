class calcultor{
     constructor(height,weight){
         this.height=height
         this.weight=weight
     }
     result1(){
        let result1= this.weight/(3.048*(this.height*this.height))
        return result1
     }
     result2(){
         let result2= (703*this.weight)/(this.height*this.height)
         return result2
      }
 }
 let ht=$('.h1')
 let ht2= document.getElementsByClassName('h1')
 let wt=$('.w1')
 let btn=$('button')
 let formResult=$('.result')
 let pResult=document.createElement('p')
 let pResult2=document.createElement('p')
 btn.click(()=>{
     let result=new calcultor(ht.val(),wt.val())
     let bmi1=result.result1()
     let bmi2=result.result2()
     pResult.textContent='The Metric Result is : ' +bmi1
     pResult2.textContent='The Imperial Result is : ' +bmi2
     console.log(pResult)
     formResult.append(pResult)
     formResult.append(pResult2)
     console.log(ht2.value)
     console.log(typeof(ht.val()))
 
 })
 