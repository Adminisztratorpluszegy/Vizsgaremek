<template>
    <section>
        <RouterLink to="/">
            <img id="BackArrow" src="../assets/BackArrow.ico">
        </RouterLink>
        <div class="container text-center">
            <h2>Regisztráció</h2><br>
            <input type="text" placeholder="  Felhasználónév"><br>
            <input id="EmailPlace" type="text" placeholder="  E-mail"><br>
            <input id="PasswordPlace" type="password" placeholder="  Jelszó">
            <br>
            <p>Van már fiókja:</p>
            <RouterLink to="/login"> <p id="Link">Kattintson ide</p> </RouterLink>
            <button type="button" class="btn">Regisztrálás</button>
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

p{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 11pt;
    color: white;
    position: relative;
    top: 45px;
    right: 35px;
    display: inline-block;
    margin-right: 10px;
    color: gray;
}

#EmailPlace{
    position: relative;
    top: 15px;
}

#PasswordPlace{
    position: relative;
    top: 30px;
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
    top: 65px;
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
    position: absolute;
    width: 350px;
    top: 45%;
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