<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import useAuth from "../composables/useAuth";

import { useAPI } from "../composables/useAPI";
const { phrase, getQuote } = useAPI();



const schema = yup.object({
    username: yup.string().required().email().label("Email"),
    password: yup.string().required().min(8),
});

useForm({
    validationSchema: schema,
});

const { value: username, errorMessage: emailError } = useField('username');
const { value: password, errorMessage: passwordError } = useField('password');

const { isAuthenticated, login, signup, googleLogin } = useAuth();


const router = useRouter();

const loggingIn = async () => {
    await login(username.value, password.value);
    goToHome();
};

const signingUp = async () => {
    await signup(username.value, password.value);
    goToHome();
};

const google = async () => {
    await googleLogin();
    goToHome();
};

const goToHome = () => {
    if (isAuthenticated.value) {
        router.push("/");
    }
};
</script>
<template>
    <div class="flex flex-col items-center justify-center mt-20">
        <div class="flex rounded-lg justify-center items-center">
        <img class="h-72" src="../assets/loginC.jpeg" alt="coffee clipart">
        <form @submit.prevent="loggingIn" class="flex flex-col space-y-4 p-2 bg-slate-600 h-72">
            <input name="username" type="text" v-model="username" class="border-2 rounded-xl p-3" placeholder="Email"/>
             <span class="text-xs text-center text-red-500">{{ emailError }}</span>
            <input name="password" type="password" v-model="password" class="border-2 rounded-xl p-3" placeholder="Password"/>
             <span class="text-xs text-center text-red-500">{{ passwordError }}</span>
            <div class="flex space-x-2">
            <button type="submit" @submit.prevent="loggingIn" class="bg-blue-900 text-white py-3 w-1/2 ">Login</button>
            <button @click="signingUp" class="bg-blue-900 text-white py-3 w-1/2 ">Sign Up</button>
            </div>
        <button @click="google" class="bg-white rounded-xl p-1 flex justify-center hover:bg-blue-900">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google logo">
        </button>
        </form>
        </div>
        <button class="bg-slate-500 rounded-3xl font-bold p-4 mt-10 w-1/3 hover:text-yellow-300" @Click="getQuote">Get Fun Fact</button>
        <span class="text-white rounded-3xl p-4 mt-10 w-1/3 font-light italic" >{{phrase}}</span>
    </div>
</template>