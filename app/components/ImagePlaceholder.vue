<template>
  <div class="relative">
    <div
      class="rounded-xl p-4 border border-dashed border-gray-200 dark:border-gray-700"
    >
      <div class="aspect-w-16 aspect-h-9 rounded-lg relative overflow-hidden">
        <iframe
          class="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src="https://www.youtube.com/embed/Ie32iUqS5I8?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=Ie32iUqS5I8"
          title="YouTube Video"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-gradient:after {
  --angle: 0deg;
  --border-color: rgb(var(--color-gray-300));
  --highlight-color: rgb(var(--color-primary-500));

  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: -1px;
  opacity: 0.5;
  border-radius: 0.8rem;
  z-index: -1;
  background: var(--border-color);

  @supports (background: paint(houdini)) {
    background: linear-gradient(
      var(--angle),
      var(--border-color),
      var(--border-color),
      var(--border-color),
      var(--border-color),
      var(--highlight-color)
    );
    animation: 10s rotate linear infinite;
  }
}

.dark .border-gradient:after {
  --border-color: rgb(var(--color-gray-700));
  --highlight-color: rgb(var(--color-gray-400));
}

@keyframes rotate {
  to {
    --angle: 360deg;
  }
}

@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
</style>
