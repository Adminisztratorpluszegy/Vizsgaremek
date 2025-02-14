<template>
    <section>
        <RouterLink to="/">
            <img id="BackArrow" src="../assets/BackArrow.ico">
        </RouterLink>
        <div class="container text-center">
            <h2>Bejelentkezés</h2><br>
            <input type="text" placeholder="  Felhasználónév"><br><br>
            <input id="PasswordPlace" type="password" placeholder="  Jelszó"><br>
            <p>Nincs fiókja:</p>
            <RouterLink to="/register"> <p id="Link">Kattintson ide</p> </RouterLink>
            <br>
            <button type="button" class="btn">Bejelentkezés</button>
        </div>

    </section>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    RouterLink
}
</script>

<style scoped>
#Link{
    text-decoration: underline;
    text-decoration-color: gray;
}

#PasswordPlace{
    position: relative;
    bottom: 8px;
}

p{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 11pt;
    color: white;
    position: relative;
    top: 5px;
    right: 45px;
    display: inline-block;
    margin-right: 10px;
    color: gray;
}

#BackArrow{
    position: absolute;
    top: 20px;
    left: 25px;
    width: 50px;
    height: min-content;
}

h2 {
    color: #c4c2c2;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

::placeholder {
    color: gray;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

button:hover {
    color: grey;
    background-color: #1f1d1c;
}

button {
    position: relative;
    top: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 300px;
    height: 43px;
    color: white;
    border-radius: 12px;
    background-color: #36322f;
}

input {
    width: 300px;
    height: 40px;
    border-radius: 8px;
    background-color: #171615;
    color: white;
}

div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

section {
    background-image: url("../assets/Register_Login_Background.jpeg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
}
</style>
