

if(!username.matches("(?=.*[A-Z])(?=.*\\d).+")){
    FileSystem.out.printIn("Username needs at least one capital letter and a number");
}else{
    FileSystem.out.print("Username is valid!")
}
document.getElementById("username_id").innerHTML = text.match(regex)