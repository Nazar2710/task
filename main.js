class user { 
    getname() { return this; }
    getpassword() { return this.password; }
    getemail() { return this.email; }
    Constructor(n, p, e) { this.name = n; this.password = p; this.email = e; this.tasks = new array(); }
}
var users = ["Nazar", "Taras", "Anton"];
let passwords = ["123", "321", "4"];
let tasks = ["enter subject", "press button", "go walk", "Enter the room"];//хотів зробити щоб все було в одному класі (name, password, email, масив завдань),але виникли проблеми з масивом який 
function click1() {
    let login = document.getElementById("login");
    let password = document.getElementById("password");
    let l = document.getElementById("l");
    for (var i = 0; i < users.length; i++) {
        if (users[i] == login.value) {
            if (passwords[users.indexOf(users[i])] == password.value) { l.textContent = "logged"; }
        }
    }
}
function fillTask() {
    let sel = document.getElementById("select");
    let tex = document.getElementById("task");
    tex.value = tasks[sel.options.selectedIndex];
}
function changeTask() {
    let sel = document.getElementById("select");
    let tex = document.getElementById("task");
    tasks[sel.options.selectedIndex] = tex.value;}
//хотів зробити щоб все було в одному класі (name, password, email, масив завдань),але виникли проблеми з масивом,
//який мав був містити елементи класів user