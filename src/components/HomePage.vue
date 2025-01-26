<script setup lang="ts">
import { ref, onMounted } from "vue";
import { tsParticles, loadFull } from "@tsparticles/engine"; // Korrekte Importierung

const roles = ["IT-Administrator!", "Hobby-Programmierer!", "IT-Spezialist!"];
const currentRole = ref("");
let roleIndex = 0;

onMounted(async () => {
  console.log("onMounted called");

  // Lade die vollständige tsParticles-Engine
  await loadFull(tsParticles);

  console.log("tsParticles loaded successfully");

  // Lade Partikel-Einstellungen
  tsParticles.load("tsparticles", {
    background: {
      color: { value: "#2c3e50" },
    },
    particles: {
      number: {
        value: 50,
      },
      size: {
        value: { min: 1, max: 5 },
      },
      move: {
        enable: true,
        speed: 2,
      },
    },
  });

  // Wechsle die Rolle alle 2 Sekunden
  setInterval(() => {
    currentRole.value = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
  }, 2000);
});
</script>

<template>
  <div id="tsparticles"></div>

  <div class="app-container">
    <div class="social-bar">
      <p class="follow-text">FOLLOW ME</p>
      <div class="line"></div>
      <ul class="social-icons">
        <li><a href="#" target="_blank" aria-label="Twitch"><i class="pi pi-twitch"></i></a></li>
        <li><a href="#" target="_blank" aria-label="Instagram"><i class="pi pi-instagram"></i></a></li>
        <li><a href="#" target="_blank" aria-label="LinkedIn"><i class="pi pi-linkedin"></i></a></li>
        <li><a href="#" target="_blank" aria-label="Discord"><i class="pi pi-discord"></i></a></li>
        <li><a href="#" target="_blank" aria-label="GitHub"><i class="pi pi-github"></i></a></li>
      </ul>
    </div>

    <div class="text-container">
      <img src="https://via.placeholder.com/150" width="150" alt="Profile Image" />
      <h1>Cihan Karakas</h1>
      <h2>Ich bin ein <span class="animated-text">{{ currentRole }}</span></h2>
    </div>
  </div>
</template>

<style>
#tsparticles {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  overflow: hidden;
}

.app-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
  margin: 0;
  padding: 0;
  position: relative;
}

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
  font-family: "Arial", sans-serif;
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

@keyframes fade {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
