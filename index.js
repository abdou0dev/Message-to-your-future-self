import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://testproject-c2a67-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const messagesInDB = ref(database, "messages")
const spyInDB = ref(database, "spy")

const nameField = document.getElementById("name-field")
const emailField = document.getElementById("email-field")
const messageField = document.getElementById("message-field")
const sendBtn = document.getElementById("send-btn")
const errorEl = document.getElementById("error")
const deleteBtnDiv = document.getElementById("delete")
const deleteBtn = document.getElementById("deletebtn")
const sentMsg = document.getElementById("sent-msg")

sendBtn.addEventListener("click", function(){
    if (nameField.value && emailField.value) {
        push(messagesInDB, `message: ${messageField.value} //name: ${nameField.value} //email: ${emailField.value}`)

        clearFields()

        deleteBtnDiv.innerHTML = `<button id="deletebtn"><img src="img/X.png"> <strong>DELETE MY MESSAGE</strong></button>`
        deleteSendBtn()
        
    } else {
        errorEl.textContent = "*Please write your name and email adress to continue"
        push(spyInDB, messageField.value)
    }
})



deleteBtnDiv.addEventListener("click", function(){
        
    deleteBtnDiv.innerHTML = `<p class="message-deleted">Your message has been successfully deleted and you won't receive anything</p>`
    
        
})


function clearFields() {
    nameField.value = ""
    emailField.value = ""
    messageField.value = ""
}

function deleteSendBtn() {
    sentMsg.innerHTML = "your message has been sent"
}