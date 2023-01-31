const addbtn = document.querySelector("#addbtn")
const main = document.querySelector("#main")

 const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    // console.log(data)
    if(data.length === 0){
        localStorage.removeItem("notes")
    }else{

        localStorage.setItem("notes",JSON.stringify(data))
    }
 }

 
 addbtn.addEventListener(
    "click",
    function () {
        addNote()
    }
    
)

/* <div class="tool">
<i class="fas fa-save"></i>
<i class="fas fa-trash"></i>
</div>
<textarea></textarea> */

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    
    <div class="tool">
    <i class="save fas fa-save"></i>
    <i class="trash fas fa-trash"></i>
    </div>
    <textarea>${text}</textarea>
    
    `;
    
    note.querySelector(".trash").addEventListener(
        "click",
        function () {
            note.remove()
            saveNotes()
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function () {
            saveNotes()
        }
        )
        note.querySelector("textarea").addEventListener(
            "focusout",
            function () {
                saveNotes()
            }
        )
        main.appendChild(note);
        
    }
    
    (
       function() {
             const lsNotes = JSON.parse(localStorage.getItem("notes"));
           
          if(lsNotes === null) {
           addNote()
          } else{
                lsNotes.forEach(
                   (lsNote) => {
                    addNote(lsNote)
                   }
                )
          } 

       }
    )()