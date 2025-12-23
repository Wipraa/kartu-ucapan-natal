<script setup lang="ts">
// Tidak perlu logic JS
</script>

<template>
  <div class="christmas-bg pointer-events-none">
    <!-- Snow layers -->
    <div class="snow snow--slow" />
    <div class="snow snow--medium" />
    <div class="snow snow--fast" />

    <!-- Glow vignette -->
    <div class="vignette" />

    <!-- Star glow -->
    <div class="star" />
  </div>
</template>

<style scoped>
/* ===== Background Wrapper ===== */
.christmas-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  background: linear-gradient(to bottom, var(--color-night), var(--color-navy));
  overflow: hidden;
}

/* ===== Snow ===== */
.snow {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(2px 2px at 20% 30%, rgba(255, 255, 255, 0.4), transparent),
    radial-gradient(1.5px 1.5px at 60% 70%, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(1px 1px at 40% 80%, rgba(255, 255, 255, 0.2), transparent),
    radial-gradient(1px 1px at 80% 10%, rgba(255, 255, 255, 0.25), transparent);
  background-size: 200px 200px;
  animation: snowfall linear infinite;
}

.snow--slow {
  opacity: 0.4;
  animation-duration: 30s;
}

.snow--medium {
  opacity: 0.6;
  animation-duration: 20s;
}

.snow--fast {
  opacity: 0.8;
  animation-duration: 12s;
}

@keyframes snowfall {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 400px;
  }
}

/* ===== Vignette ===== */
.vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.5) 70%);
}

/* ===== Star ===== */
.star {
  position: absolute;
  top: 15%;
  left: 50%;
  width: 6px;
  height: 6px;
  background: var(--color-gold);
  border-radius: 9999px;
  transform: translateX(-50%);
  box-shadow:
    0 0 10px var(--color-gold),
    0 0 20px var(--color-gold),
    0 0 40px rgba(212, 175, 55, 0.6);
  animation: starPulse 3s ease-in-out infinite;
}

@keyframes starPulse {
  0%,
  100% {
    opacity: 0.6;
    transform: translateX(-50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateX(-50%) scale(1.3);
  }
}
</style>
