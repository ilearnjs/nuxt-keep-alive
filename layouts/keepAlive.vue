<template>
  <div>
    <div class="text-center">
      <n-link to="/">
        Go home
      </n-link>
    </div>
    <div class="text-center">
      <n-link to="/user1">
        User 1
      </n-link>
      <n-link to="/user2">
        User 2
      </n-link>
      <n-link to="/user3">
        User 3
      </n-link>
    </div>
    <nuxt keep-alive />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
