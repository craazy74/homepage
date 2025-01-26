<script setup lang="ts">
import { ref, onMounted } from 'vue';

const roles = ['IT-Administrator!', 'Hobby-Programmierer!', 'IT-Spezialist!'];
const currentRole = ref('');
let roleIndex = 0;

onMounted(() => {
  setInterval(() => {
    currentRole.value = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
  }, 2000); // Wechsel alle 2 Sekunden
});
</script>

<template>
  <div class="app-container">
    <!-- Vertikale Navigationsleiste -->
    <div class="social-bar">
      <p class="follow-text">FOLLOW ME</p>
      <div class="line"></div>
      <ul class="social-icons">
        <li><a href="#" target="_blank"><i class="pi pi-twitch"></i></a></li>
        <li><a href="#" target="_blank"><i class="pi pi-instagram"></i></a></li>
        <li><a href="#" target="_blank"><i class="pi pi-linkedin"></i></a></li>
        <li><a href="#" target="_blank"><i class="pi pi-discord"></i></a></li>
        <li><a href="#" target="_blank"><i class="pi pi-github"></i></a></li>
      </ul>
    </div>

    <!-- Zentrierter Hauptinhalt -->
    <div class="text-container">
      <Image src="1701422943734.png" width="150"></Image>
      <h1>Cihan Karakas</h1>
      <h2>Ich bin ein <span class="animated-text">{{ currentRole }}</span></h2>
    </div>
  </div>
</template>


<style>
/* Entferne schwarze Balken durch Reset-Styling */
{
margin: 0;
padding: 0;
box-sizing: border-box;
}

html, body {
  height: 100%;
  overflow: hidden; /* Verhindert Scrollbars */
}

/* Vollbild-Container */
.app-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
  background-image: url('/sunset-trees-silhouette-landscape-scenery-4k-wallpaper-uhdpaper.com-549@2@a.jpg');
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
  position: relative;
}

/* Vertikale Social Media Bar */
.social-bar {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.follow-text {
  writing-mode: vertical-rl;
  text-orientation: upright;
  color: #fff;
  font-size: 12px;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.line {
  width: 1px;
  height: 50px;
  background-color: #3498db;
  margin-bottom: 10px;
}

.social-icons {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.social-icons li {
  font-size: 16px;
}

.social-icons li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-icons li a:hover {
  color: #3498db;
}

.text-container {
  text-align: center;
  color: #eaeaea;
  font-family: 'Arial', sans-serif;
}

.text-container h1 {
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
  color: #f0f0f0;
}

.text-container h2 {
  font-size: 2rem;
  font-weight: normal;
  margin-top: 0.5rem;
  color: #b0b0b0; 
}

.animated-text {
  color: #3498db; 
  font-weight: bold;
  animation: fade 2s infinite;
}

/* Keyframes für Animation */
@keyframes fade {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>