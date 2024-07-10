function multiply(){
    const result=Math.random()*100
    console.log(Math.floor(result))
}
multiply()


const students=["Ahmed","Mohamed","Mahmoud"]
console.log(students.indexOf("Mohamed"))
console.log(students.splice(0,1),students)


const paragragh=document.getElementsByTagName("P")
console.log(paragragh)

const header=document.querySelector("headertext")
headertext.innerText="Welcome to My Page"

const content=document.getElementById("content")
content.innerHTML="Hello, World!"

const body=document.getElementsByTagName("body")
const video=document.createElement("video")
video.src="WhatsApp Video.mp4"
video.style="width:500;height:500;controls"
document.body.append(video)