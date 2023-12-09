<template>
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.25032 11H1.00032V16.625C0.995736 16.8725 1.04111 17.1184 1.13371 17.3479C1.22632 17.5775 1.36426 17.786 1.53929 17.961C1.71432 18.1361 1.92285 18.274 2.1524 18.3666C2.38196 18.4592 2.62783 18.5046 2.87532 18.5"
      :stroke="theme"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="square"
    />
    <path
      d="M4.75037 1V16.625C4.75495 16.8725 4.70958 17.1184 4.61697 17.3479C4.52436 17.5775 4.38642 17.786 4.21139 17.961C4.03636 18.1361 3.82784 18.274 3.59828 18.3666C3.36873 18.4592 3.12285 18.5046 2.87537 18.5H17.2504C17.4979 18.5046 17.7437 18.4592 17.9733 18.3666C18.2028 18.274 18.4114 18.1361 18.5864 17.961C18.7614 17.786 18.8994 17.5775 18.992 17.3479C19.0846 17.1184 19.1299 16.8725 19.1254 16.625V1H4.75037Z"
      :stroke="theme"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="square"
    />
    <path
      d="M16.0004 4.125H7.87537V8.5H16.0004V4.125Z"
      :stroke="theme"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="square"
    />
    <path
      d="M16.0004 14.75H7.87537"
      :stroke="theme"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="square"
    />
    <path
      d="M16.0004 11.625H7.87537"
      :stroke="theme"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="square"
    />
  </svg>
</template>


<script>
export default {
  name: 'DiscoverIcon',
  props: {
    theme: String,
  }
}
</script>

