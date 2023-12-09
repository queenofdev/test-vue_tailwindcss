<template>
  <svg
    width="21"
    height="17"
    viewBox="0 0 21 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.87375 10.7394C1.77062 10.2569 1 9.15563 1 7.875V4.125C1 2.39938 2.39938 1 4.125 1H12.25C13.9756 1 15.375 2.39938 15.375 4.125V7.875C15.375 9.60062 13.9756 11 12.25 11H7.875"
      :stroke="theme"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="square"
    />
    <path
      d="M17.8763 6.26062C18.9794 6.74312 19.75 7.84437 19.75 9.125V12.875C19.75 14.6006 18.3506 16 16.625 16H8.5C6.77438 16 5.375 14.6006 5.375 12.875V9.125C5.375 7.39938 6.77438 6 8.5 6H12.875"
      :stroke="theme"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="square"
    />
  </svg>
</template>

<script>
export default {
  name: 'ResourcesIcon',
  props: {
    theme: String,
  }
}
</script>