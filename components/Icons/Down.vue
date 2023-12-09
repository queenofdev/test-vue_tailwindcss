<template>
  <svg
    width="9"
    height="7"
    viewBox="0 0 9 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.88532 6.1237C4.73665 6.3433 4.48876 6.4748 4.2236 6.4748C3.95845 6.4748 3.71056 6.3433 3.56188 6.1237L0.36519 1.81536C0.199541 1.5705 0.182762 1.25422 0.32129 0.993067C0.459916 0.732009 0.731218 0.568701 1.02681 0.568604H7.4203C7.71599 0.568701 7.98729 0.732009 8.12592 0.993067C8.26444 1.25422 8.24766 1.5705 8.08211 1.81536L4.88532 6.1237Z"
      :fill="theme"
    />
  </svg>
</template>

<script>
export default {
  name: 'DownIcon',
  props: {
    theme: String,
  }
}
</script>