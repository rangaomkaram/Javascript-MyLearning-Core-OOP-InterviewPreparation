 
     // event handlers  -> onClick , and other methods
 
 // document.querySelector('#owl').onclick = function(){
    //     alert("Your click image is owl")
    // }

    // document.getElementById('owl').onclick = function(){
    //     alert("OWL is Clicked!")
    // }

    // Event Listeners 
 //-----------------------------------------------------------------------------------------
    //addEventListener -> ('events',method,default = false)
    // document.getElementById('owl').addEventListener('click',function(){
    //     alert("Owl is CLicked Again!")
    // })

    //-----------------------------------------------------------------------------------------
    //attachEvent() -> internet explorer,
    // jQuery -> onEvent
    // event object 

    //Events 
    // type, timestamp,defaultPreventer, 
    // target,toElement, srcElement, currentTarget
    // clientX, clientY, tiltX, tiltY, offsetX, offsetY, screenX, screeny
    // altkey, shitkey, ctrlkey, keyCode  

    // document.getElementById('owl').addEventListener('click',function(e){
    //     console.log(e)
    // },false)

    //------------------------------------------------------------------------------------

    // Concept of Event Propagation  
    /*
    What is “propagation”? 
         Propagation refers to how events travel through the Document Object Model (DOM) tree. The DOM tree is the structure which contains parent/child/sibling elements in relation to each other. You can think of propagation as electricity running through a wire, until it reaches its destination.
    What does event propagation () do?
        The concept of event propagation describes how events propagate through the DOM tree to reach their destination and what happens to them once they do.

    Phases of JavaScript Event:
    There are three different phases during the lifecycle of a JavaScript event.
        Capturing Phase
        Target Phase
        Bubbling Phase
    They follow the same order as listed above.
     Capturing Phase is when the event goes down to the element. The target phase is when the event reaches the element and the Bubbling phase is when the event bubbles up from the element.
    */
   // event bubbling
    // document.getElementById('images').addEventListener('click',function(e){
    //     console.log("clicked inside ul");
    // },false)

    // document.getElementById('owl').addEventListener('click',function(e){
    //     console.log("clicked owl!");
    // },false)

    //if you click on owl image , event bubling will happen , bottom to top -> output will be clicked owl then clicked inside ul -> will appear in console.

    // event capturing mode

    // document.getElementById('images').addEventListener('click',function(e){
    //     console.log("clicked inside ul")
    // },true)

    // document.getElementById('owl').addEventListener('click',function(e){
    //     console.log("clicked Owl!")
    // },true)

    // if you click owl , -> true  -> event capturing will be done , top to bottom.
    // it depends which scenario your both apporach can be done -> but most often Event bubble used.

    // document.getElementById('images').addEventListener('click',function(e){
    //     console.log("clicked inside ul")
    // },false)
     
    // document.getElementById('owl').addEventListener('click',function(e){
    //     console.log("clicked Owl!")
    //     e.stopPropagation()
    // },false)

    // when u click the on owl event bubbled but stops the top propagation -> id = 'images' -> ul

    //prevent the click by using preventDefault , beware use of preventDefault and defaultPrevented methods
    //The defaultPrevented event property is used for checking whether the preventDefault() method was called for the event or not. Return Values: The defaultPrevented event property returns true if the preventDefault() method was called for the event, else it returns false.

    // document.getElementById('google').addEventListener('click',(e)=>{
    //     console.log("google clicked")
    //     e.preventDefault();
    //     e.stopPropagation(); // event bubbling is also stopped 
    // },false)
    
    // without stopPropagation, if you click on google , you get the -> google clicked and then clicked inside ul
    

    // How to remove the images
    // target, parentNode

    // Approach -1 , the remove the image from child (target) to parent , then remove img(list) -> ul -> the remove

    // document.querySelector('#images').addEventListener('click',function(e){
    //     // e.stopPropagation()
    //     // console.log(e.target) // get the target clicked info like img tags e.t.c
    //     console.log(e.target.parentNode) // get the parent of the target item clicked
    //     let removeimg = e.target.parentNode
    //     // removeimg.remove()
    // },false)
    

    // Apporach -2  -> uisng removeimg(removeIt) method -> goes first parent -> get child and then remove -> ul -> img(list) -> remove
        
    // document.querySelector('#images').addEventListener('click',function(e){
    //     let removeimg = e.target.parentNode
    //     removeimg.parentNode.removeChild(removeimg)
    // },false)
    
    // The apporach when u click the google or list (li then it removes total img and list item) -> method is calling the total parent ul 
    // To avoid above problem -> we have separate which element / tag we are targeting in the webpage(HTML)
    // Here we use strict check of tags 
    // tagName method is used -> we can particular tag target -> like IMG, LI e.t.c...

    document.querySelector('#images').addEventListener('click',(e)=>{
        console.log(e.target.tagName)
        if(e.target.tagName === "IMG"){
            console.log(e.target.id);
            let removeImg = e.target.parentNode;
            removeImg.remove()
        }
    })


